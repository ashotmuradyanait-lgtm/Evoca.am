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

  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false); 
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const playSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => {});
  };

 
  useEffect(() => {
    if (!currentUser) return;

   
    const updateUserStatus = async (status: 'online' | 'offline') => {
      const userDoc = doc(db, "users", currentUser.uid);
      await updateDoc(userDoc, {
        status: status,
        lastSeen: serverTimestamp()
      });
    };

    
    updateUserStatus('online');

    
    const handleTabClose = () => updateUserStatus('offline');
    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      updateUserStatus('offline');
      window.removeEventListener('beforeunload', handleTabClose);
    };
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
    if (!currentUser || !selectedUser) {
      setMessages([]);
      return;
    }

    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    const q = query(
      collection(db, "messages"), 
      where("chatId", "==", chatId), 
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);

      if (!snapshot.metadata.hasPendingWrites) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const data = change.doc.data();
            if (data.senderId !== currentUser.uid) {
              playSound();
            }
          }
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
        await updateProfile(res.user, { displayName: name });
        await setDoc(doc(db, "users", res.user.uid), { 
          uid: res.user.uid, 
          displayName: name, 
          email: email,
          status: 'online', // Սկզբից online
          lastSeen: serverTimestamp() 
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) { alert(error.message); }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() && !imageFile) return;

    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    const textToSend = newMessage;
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

      await addDoc(collection(db, "messages"), {
        chatId,
        senderId: currentUser.uid,
        text: textToSend,
        image: imageUrl, 
        createdAt: serverTimestamp()
      });
    } catch (err) { 
      console.error("Error sending:", err);
      setUploading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100" onClick={playSound}>
        <form onSubmit={handleAuth} className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-[#6400dc]">{authMode === 'login' ? 'Մուտք' : 'Գրանցում'}</h2>
          {authMode === 'register' && <input type="text" placeholder="Անուն" required className="border p-3 rounded outline-none focus:border-purple-500" onChange={e => setName(e.target.value)} />}
          <input type="email" placeholder="Էլ. հասցե" required className="border p-3 rounded outline-none focus:border-purple-500" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Գաղտնաբառ" required className="border p-3 rounded outline-none focus:border-purple-500" onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="bg-[#6400dc] text-white p-3 rounded font-bold hover:bg-[#5200b3] transition">
            {authMode === 'login' ? 'Մտնել' : 'Գրանցվել'}
          </button>
          <p className="text-center text-sm cursor-pointer text-gray-500" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
            {authMode === 'login' ? 'Չունե՞ք էջ: Գրանցվեք' : 'Արդեն ունե՞ք էջ: Մտեք'}
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="max-h-screen flex flex-col h-screen">
      <Menu/>
      <div className="flex flex-1 overflow-hidden bg-gray-100 p-2 sm:p-4 gap-4">
        
        <div className="w-1/3 min-w-[250px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
           <div className="p-4 bg-[#6400dc] text-white flex justify-between items-center">
             <span className="font-bold truncate">{currentUser.displayName}</span>
             <button onClick={() => signOut(auth)} className="text-[10px] bg-red-500 px-2 py-1 rounded hover:bg-red-600">ԵԼՔ</button>
           </div>
           <div className="flex-1 overflow-y-auto">
             {users.map(u => (
                <div key={u.uid} onClick={() => setSelectedUser(u)} 
                     className={`p-4 border-b cursor-pointer transition flex items-center gap-3 ${selectedUser?.uid === u.uid ? 'bg-purple-100' : 'hover:bg-gray-50'}`}>
                  <div className="relative">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {u.displayName?.[0].toUpperCase()}
                    </div>
                   
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${u.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-700">{u.displayName}</span>
                    <span className={`text-[10px] ${u.status === 'online' ? 'text-green-600 font-bold' : 'text-gray-400'}`}>
                      {u.status === 'online' ? 'օնլայն' : 'օֆլայն'}
                    </span>
                  </div>
                </div>
             ))}
           </div>
        </div>

      
        <div className="flex-1 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
          {selectedUser ? (
            <>
              <div className="p-4 bg-white border-b flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">👤</div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 leading-none">{selectedUser.displayName}</span>
                  <span className={`text-[11px] mt-1 ${selectedUser.status === 'online' ? 'text-green-500 font-bold' : 'text-gray-400'}`}>
                    {selectedUser.status === 'online' ? 'օնլայն' : 'օֆլայն'}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f2f5]">
                {messages.map((msg: any) => {
                  const isMe = msg.senderId === currentUser.uid;
                  return (
                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${isMe ? 'bg-[#dcf8c6] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                        {msg.image && <img src={msg.image} alt="media" className="max-w-full rounded-lg mb-2 cursor-pointer hover:opacity-90" onClick={() => window.open(msg.image)} />}
                        {msg.text && <p className="text-[15px] text-gray-800 break-words">{msg.text}</p>}
                        <span className="text-[9px] text-gray-500 block text-right mt-1 uppercase">
                          {msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "..."}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div ref={scrollRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-3 bg-white flex gap-2 items-center border-t">
                <label className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
                  🖼️
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
                </label>
                <div className="flex-1 relative">
                  <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)}
                    placeholder={uploading ? "Նկարը բեռնվում է..." : imageFile ? `📎 ${imageFile.name}` : "Գրեք նամակ..."} 
                    disabled={uploading}
                    className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none focus:bg-white focus:ring-1 focus:ring-purple-500 transition" />
                </div>
                <button type="submit" disabled={uploading} className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition ${uploading ? 'bg-gray-400' : 'bg-[#6400dc] hover:bg-[#5200b3]'}`}>
                  {uploading ? '...' : '➤'}
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-2">
              <span className="text-5xl">💬</span>
              <p>Ընտրեք մեկին զրույցը սկսելու համար</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messenger;