import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../firebase';
import { 
  createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  onAuthStateChanged, updateProfile, signOut 
} from 'firebase/auth';
import { 
  collection, addDoc, query, where, orderBy, onSnapshot, 
  serverTimestamp, doc, setDoc 
} from 'firebase/firestore';

const Messenger = () => {
  // === ԱՎՏՈՐԻԶԱՑԻԱՅԻ STATE-ԵՐ ===
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // === ՉԱՏԻ STATE-ԵՐ ===
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef(new Audio('/notification.mp3'));

  // 1. Ստուգում ենք մարդը մուտք արել է թե չէ
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  // 2. Բերում ենք բոլոր գրանցված մարդկանց ձախակողմյան ցուցակի համար
  useEffect(() => {
    if (!currentUser) return;
    const q = query(collection(db, "users"), where("uid", "!=", currentUser.uid));
    const unsub = onSnapshot(q, (snapshot) => {
      setUsers(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, [currentUser]);

  // 3. Բերում ենք նամակները և միացնում ձայնը
  useEffect(() => {
    if (!currentUser || !selectedUser) return;

    // Սարքում ենք ունիկալ չատի ID երկու հոգու համար
    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    
    const q = query(
      collection(db, "messages"), 
      where("chatId", "==", chatId), 
      orderBy("createdAt", "asc")
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Ստուգում ենք՝ արդյոք ՆՈՐ նամակ է եկել ու մենք չենք գրել, որ ձայն հանի
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newMsg = change.doc.data();
          if (newMsg.senderId !== currentUser.uid) {
            audioRef.current.play().catch(() => console.log("Audio block"));
          }
        }
      });

      setMessages(msgs);
      setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    });

    return () => unsub();
  }, [currentUser, selectedUser]);

  // 4. Ռեգիստրացիայի ու Մուտքի ֆունկցիա
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (authMode === 'register') {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(res.user, { displayName: name });
        // Պահում ենք բազայում, որ մյուսները տեսնեն
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: name,
          email: email
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error: any) {
      alert("Սխալ: " + error.message);
    }
  };

  // 5. Նամակ ուղարկելու ֆունկցիա
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentUser || !selectedUser) return;

    const chatId = [currentUser.uid, selectedUser.uid].sort().join('_');
    await addDoc(collection(db, "messages"), {
      chatId,
      senderId: currentUser.uid,
      text: newMessage,
      createdAt: serverTimestamp()
    });
    setNewMessage("");
  };

  // --- ԵԹԵ ՄԱՐԴԸ ՄՈՒՏՔ ՉԻ ԳՈՐԾԵԼ (ՑՈՒՅՑ ՏԱԼ ՖՈՐՄԱՆ) ---
  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleAuth} className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center text-[#6400dc]">
            {authMode === 'login' ? 'Մուտք' : 'Գրանցում'}
          </h2>
          {authMode === 'register' && (
            <input type="text" placeholder="Անուն" required
              className="border p-3 rounded outline-none focus:border-[#6400dc]"
              onChange={e => setName(e.target.value)} />
          )}
          <input type="email" placeholder="Էլ. հասցե" required
            className="border p-3 rounded outline-none focus:border-[#6400dc]"
            onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Գաղտնաբառ" required
            className="border p-3 rounded outline-none focus:border-[#6400dc]"
            onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="bg-[#6400dc] text-white p-3 rounded font-bold hover:bg-[#5200b3]">
            {authMode === 'login' ? 'Մտնել' : 'Գրանցվել'}
          </button>
          <p className="text-center text-sm text-gray-500 cursor-pointer hover:underline" 
             onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>
            {authMode === 'login' ? 'Չունե՞ք էջ: Գրանցվեք' : 'Արդեն ունե՞ք էջ: Մուտք գործեք'}
          </p>
        </form>
      </div>
    );
  }

  // --- ԵԹԵ ՄՈՒՏՔ Է ԳՈՐԾԵԼ (ՑՈՒՅՑ ՏԱԼ ԼԻԱՐԺԵՔ ՉԱՏԸ) ---
  return (
    <div className="flex h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border">
        
        {/* ՁԱԽ ՄԱՍ - Կոնտակտներ */}
        <div className="w-1/3 border-r flex flex-col bg-gray-50">
          <div className="p-4 bg-[#6400dc] text-white flex justify-between items-center">
            <span className="font-bold truncate">Իմ էջը: {currentUser.displayName}</span>
            <button onClick={() => signOut(auth)} className="text-xs bg-red-500 px-2 py-1 rounded">Ելք</button>
          </div>
          <div className="p-3 font-bold text-gray-600 border-b">Ընկերներ ({users.length})</div>
          <div className="flex-1 overflow-y-auto">
            {users.map(u => (
              <div key={u.uid} onClick={() => setSelectedUser(u)}
                className={`p-4 flex items-center gap-3 cursor-pointer border-b transition-colors
                  ${selectedUser?.uid === u.uid ? 'bg-purple-100' : 'hover:bg-gray-200'}`}>
                <div className="w-10 h-10 bg-[#6400dc] text-white rounded-full flex items-center justify-center font-bold">
                  {u.displayName?.[0]?.toUpperCase()}
                </div>
                <span className="font-medium text-gray-800">{u.displayName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ԱՋ ՄԱՍ - Բուն Չատը */}
        <div className="w-2/3 flex flex-col bg-[#efeae2]">
          {selectedUser ? (
            <>
              {/* Չատի գլխագիր */}
              <div className="p-4 bg-white border-b flex items-center gap-3 shadow-sm z-10">
                <div className="w-10 h-10 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center font-bold">
                  {selectedUser.displayName?.[0]?.toUpperCase()}
                </div>
                <span className="font-bold text-lg">{selectedUser.displayName}</span>
              </div>

              {/* Նամակների դաշտ */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map(msg => {
                  const isMe = msg.senderId === currentUser.uid;
                  return (
                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[70%] p-3 rounded-2xl shadow-md flex flex-col gap-1
                        ${isMe ? 'bg-[#dcf8c6] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                        <span className="text-[15px] text-gray-900 leading-snug">{msg.text}</span>
                        {/* ԺԱՄԸ (Viber-ի ոճով) */}
                        <span className="text-[10px] text-gray-500 self-end">
                          {msg.createdAt?.toDate ? msg.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "..."}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div ref={scrollRef} />
              </div>

              {/* Գրելու դաշտ */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white flex gap-2 border-t">
                <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)}
                  placeholder="Գրեք նամակ..." className="flex-1 bg-gray-100 rounded-full px-4 outline-none focus:ring-1 focus:ring-purple-400" />
                <button type="submit" className="bg-[#6400dc] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#5200b3]">
                  ➤
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 font-medium bg-gray-50">
              Ընտրեք ընկերոջը ձախ կողմից՝ զրույցը սկսելու համար
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Messenger;