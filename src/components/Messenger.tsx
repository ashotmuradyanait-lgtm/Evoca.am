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
  serverTimestamp, doc, setDoc 
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
  const [uploading, setUploading] = useState(false); // Նկարի բեռնման status
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Ձայնի ֆունկցիան
  const playSound = () => {
    const audio = new Audio('/notification.mp3');
    audio.play().catch(() => {}); // Լռելյայն բռնում ենք սխալը, եթե բրաուզերը թույլ չտա
  };

  // 1. Ավտորիզացիա
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return () => unsub();
  }, []);

  // 2. Օգտատերերի ցուցակը (Real-time)
  useEffect(() => {
    if (!currentUser) return;
    const q = query(collection(db, "users"), where("uid", "!=", currentUser.uid));
    const unsub = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, [currentUser]);

  // 3. Նամակների Real-time լսումը (ՍԱ Է ՈՒՂՂՎԱԾ)
  useEffect(() => {
    if (!currentUser || !selectedUser) {
      setMessages([]); // Մաքրում ենք չատը, եթե մարդ ընտրված չէ
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

      // Ձայնի տրամաբանությունը
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
      // Ավտոմատ scroll
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    return () => unsub();
  }, [currentUser, selectedUser]);

  // 4. Login / Register
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
          lastSeen: serverTimestamp() 
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) { alert(error.message); }
  };

  // 5. Նամակ ուղարկելը
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() && !imageFile) return;

    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    const textToSend = newMessage; // Պահում ենք տեքստը
    setNewMessage(""); // Մաքրում ենք input-ը արագության համար
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
        {/* Ձախ մաս - Ցուցակ */}
        <div className="w-1/3 min-w-[250px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
           <div className="p-4 bg-[#6400dc] text-white flex justify-between items-center">
             <span className="font-bold truncate">{currentUser.displayName}</span>
             <button onClick={() => signOut(auth)} className="text-[10px] bg-red-500 px-2 py-1 rounded hover:bg-red-600">ԵԼՔ</button>
           </div>
           <div className="flex-1 overflow-y-auto">
             {users.map(u => (
                <div key={u.uid} onClick={() => setSelectedUser(u)} 
                     className={`p-4 border-b cursor-pointer transition flex items-center gap-3 ${selectedUser?.uid === u.uid ? 'bg-purple-100' : 'hover:bg-gray-50'}`}>
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {u.displayName?.[0].toUpperCase()}
                  </div>
                  <span className="font-medium text-gray-700">{u.displayName}</span>
                </div>
             ))}
           </div>
        </div>

        {/* Աջ մաս - Չատ */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden border">
          {selectedUser ? (
            <>
              <div className="p-4 bg-white border-b flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">👤</div>
                <span className="font-bold text-gray-800">{selectedUser.displayName}</span>
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

              {/* Գրելու դաշտ */}
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