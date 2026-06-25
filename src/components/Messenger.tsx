import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../firebase';
import Menu from '../pages/Menu';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  onAuthStateChanged, updateProfile, signOut 
} from 'firebase/auth';
import { 
  collection, addDoc, query, where, orderBy, onSnapshot, 
  serverTimestamp, doc, setDoc, updateDoc 
} from 'firebase/firestore';

const storage = getStorage(); 

const Messenger = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false); 
  
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const playSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => {});
  };

  useEffect(() => {
    if (!currentUser) return;
    const updateUserStatus = async (status: 'online' | 'offline') => {
      const userDoc = doc(db, "users", currentUser.uid);
      await updateDoc(userDoc, { status: status, lastSeen: serverTimestamp() });
    };
    updateUserStatus('online');
    const handleTabClose = () => updateUserStatus('offline');
    window.addEventListener('beforeunload', handleTabClose);
    return () => { updateUserStatus('offline'); window.removeEventListener('beforeunload', handleTabClose); };
  }, [currentUser]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    const q = query(collection(db, "users"), where("uid", "!=", currentUser.uid));
    const unsub = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser || !selectedUser) { setMessages([]); return; }
    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    const q = query(collection(db, "messages"), where("chatId", "==", chatId), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      if (!snapshot.metadata.hasPendingWrites) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added" && change.doc.data().senderId !== currentUser.uid) playSound();
        });
      }
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    });
    return () => unsub();
  }, [currentUser, selectedUser]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (authMode === 'register') {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        let avatarUrl = "";
        if (avatarFile) {
          const avatarRef = ref(storage, `avatars/${res.user.uid}`);
          await uploadBytes(avatarRef, avatarFile);
          avatarUrl = await getDownloadURL(avatarRef);
        }
        await updateProfile(res.user, { displayName: name, photoURL: avatarUrl });
        await setDoc(doc(db, "users", res.user.uid), { 
          uid: res.user.uid, 
          displayName: name, 
          email: email, 
          photoURL: avatarUrl, 
          status: 'online', 
          lastSeen: serverTimestamp() 
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) { 
      console.error("Auth Error:", error.code, error.message);
      alert("Սխալ՝ " + error.message); 
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() && !imageFile) return;

    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    const textToSend = newMessage;
    
    const tempMessage = { id: Date.now().toString(), senderId: currentUser.uid, text: textToSend, createdAt: { toDate: () => new Date() } };
    setMessages((prev) => [...prev, tempMessage]);
    
    setNewMessage("");
    const currentFile = imageFile;
    setImageFile(null);

    try {
      let imageUrl = "";
      if (currentFile) {
        setUploading(true);
        const storageRef = ref(storage, `chats/${chatId}/${Date.now()}_${currentFile.name}`);
        const snapshot = await uploadBytes(storageRef, currentFile);
        imageUrl = await getDownloadURL(snapshot.ref);
        setUploading(false);
      }
      await addDoc(collection(db, "messages"), { chatId, senderId: currentUser.uid, text: textToSend, image: imageUrl, createdAt: serverTimestamp() });
    } catch (err) { 
      setMessages((prev) => prev.filter(m => m.id !== tempMessage.id));
      setUploading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        sendAudioMessage(audioBlob);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) { console.error("Error:", error); }
  };

  const stopRecording = () => { mediaRecorderRef.current?.stop(); setIsRecording(false); };

  const sendAudioMessage = async (blob: Blob) => {
    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    setUploading(true);
    const storageRef = ref(storage, `chats/${chatId}/audio_${Date.now()}.wav`);
    await uploadBytes(storageRef, blob);
    const audioUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "messages"), { chatId, senderId: currentUser.uid, audio: audioUrl, createdAt: serverTimestamp() });
    setUploading(false);
  };

  if (!currentUser) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleAuth} className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-[#6400dc]">{authMode === 'login' ? 'Մուտք' : 'Գրանցում'}</h2>
        {authMode === 'register' && (
          <>
            <input type="text" placeholder="Անուն" required className="border p-3 rounded outline-none" onChange={e => setName(e.target.value)} />
            <input type="file" accept="image/*" onChange={e => setAvatarFile(e.target.files?.[0] || null)} />
          </>
        )}
        <input type="email" placeholder="Էլ. հասցե" required className="border p-3 rounded outline-none" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Գաղտնաբառ" required className="border p-3 rounded outline-none" onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="bg-[#6400dc] text-white p-3 rounded font-bold">{authMode === 'login' ? 'Մտնել' : 'Գրանցվել'}</button>
        <button type="button" className="text-sm text-blue-500 underline" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
          {authMode === 'login' ? 'Դեռ հաշիվ չունե՞ք։ Գրանցվել' : 'Արդեն ունե՞ք հաշիվ։ Մուտք'}
        </button>
      </form>
    </div>
  );

  return (
    <div className="max-h-screen flex flex-col h-screen">
      <Menu/>
      <div className="flex flex-1 overflow-hidden bg-gray-100 p-4 gap-4">
        <div className="w-1/3 min-w-[250px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
           <div className="p-4 bg-[#6400dc] text-white flex justify-between items-center">
             <div className="flex items-center gap-2">
               {currentUser.photoURL && <img src={currentUser.photoURL} alt="avatar" className="w-8 h-8 rounded-full" />}
               <span className="font-bold truncate">{currentUser.displayName}</span>
             </div>
             <button onClick={() => signOut(auth)} className="bg-red-500 px-2 py-1 rounded text-xs">ԵԼՔ</button>
           </div>
           <div className="flex-1 overflow-y-auto">
             {users.map(u => (
                <div key={u.uid} onClick={() => setSelectedUser(u)} className={`p-4 border-b cursor-pointer flex items-center gap-3 ${selectedUser?.uid === u.uid ? 'bg-purple-100' : ''}`}>
                  {u.photoURL ? <img src={u.photoURL} className="w-10 h-10 rounded-full" /> : <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">{u.displayName?.[0]?.toUpperCase()}</div>}
                  <span className="font-medium">{u.displayName}</span>
                </div>
             ))}
           </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
          {selectedUser ? (
            <>
              <div className="p-4 border-b flex items-center gap-3">
                 {selectedUser.photoURL ? <img src={selectedUser.photoURL} className="w-8 h-8 rounded-full" /> : <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">👤</div>}
                 <span className="font-bold">{selectedUser.displayName}</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
                {messages.map((msg: any) => (
                  <div key={msg.id} className={`flex ${msg.senderId === currentUser.uid ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${msg.senderId === currentUser.uid ? 'bg-[#dcf8c6]' : 'bg-white'}`}>
                      {msg.image && <img src={msg.image} className="max-w-full rounded-lg mb-2" />}
                      {msg.audio && <audio controls src={msg.audio} className="max-w-full" />}
                      {msg.text && <p>{msg.text}</p>}
                      <span className="text-[10px] text-gray-500 block text-right mt-1">
                        {msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "..."}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={scrollRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-3 bg-white flex gap-2 items-center border-t">
                <label className="cursor-pointer">🖼️ <input type="file" className="hidden" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} /></label>
                <button type="button" onMouseDown={startRecording} onMouseUp={stopRecording} className={`p-2 rounded-full ${isRecording ? 'bg-red-500' : 'bg-gray-200'}`}>🎤</button>
                <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} className="flex-1 bg-gray-100 rounded-full px-4 py-2" placeholder="Գրեք նամակ..." />
                <button type="submit" className="bg-[#6400dc] text-white px-4 py-2 rounded-full">➤</button>
              </form>
            </>
          ) : <div className="flex-1 flex items-center justify-center">Ընտրեք զրուցակից</div>}
        </div>
      </div>
    </div>
  );
};

export default Messenger;