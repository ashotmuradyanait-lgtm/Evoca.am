import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase'; // Ստուգիր հասցեն (../ նշանակում է մի թղթապանակ վերև)
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  serverTimestamp 
} from 'firebase/firestore';

interface ChatProps {
  selectedUser: any;
}

const Chat: React.FC<ChatProps> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // 🔔 Ձայնային ֆայլը (պիտի լինի public/notification.mp3 հասցեով)
  const notificationSound = new Audio('/notification.mp3');

  useEffect(() => {
    if (!selectedUser || !auth.currentUser) return;

    // Ստեղծում ենք chatId, որը միշտ նույնն է երկու user-ի համար
    const chatId = auth.currentUser.uid < selectedUser.uid 
      ? `${auth.currentUser.uid}_${selectedUser.uid}` 
      : `${selectedUser.uid}_${auth.currentUser.uid}`;

    const q = query(
      collection(db, "messages"),
      where("chatId", "==", chatId),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      // Եթե նոր նամակ է ավելացել ու այն ուրիշից է՝ ձայն հանիր
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const data = change.doc.data();
          if (data.senderId !== auth.currentUser?.uid) {
            notificationSound.play().catch(() => {});
          }
        }
      });

      setMessages(msgs);
      // Ավտոմատ scroll դեպի վերջին նամակը
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });

    return () => unsubscribe();
  }, [selectedUser]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !auth.currentUser) return;

    const chatId = auth.currentUser.uid < selectedUser.uid 
      ? `${auth.currentUser.uid}_${selectedUser.uid}` 
      : `${selectedUser.uid}_${auth.currentUser.uid}`;

    await addDoc(collection(db, "messages"), {
      text: newMessage,
      senderId: auth.currentUser.uid,
      chatId: chatId,
      createdAt: serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-[#f0f2f5]">
      {/* Վերևի մասը (Header) */}
      <div className="p-4 bg-white shadow-sm flex items-center border-b">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
          {selectedUser.displayName?.[0].toUpperCase()}
        </div>
        <span className="font-bold text-gray-800">{selectedUser.displayName}</span>
      </div>

      {/* Նամակների հատվածը */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.senderId === auth.currentUser?.uid ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                msg.senderId === auth.currentUser?.uid 
                  ? 'bg-[#6400dc] text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 rounded-tl-none'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              {/* 🕒 Ժամը */}
              <span className={`text-[10px] block mt-1 text-right ${
                msg.senderId === auth.currentUser?.uid ? 'text-purple-200' : 'text-gray-400'
              }`}>
                {msg.createdAt?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Գրելու հատվածը */}
      <form onSubmit={handleSend} className="p-4 bg-white flex items-center gap-2 border-t">
        <input 
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Գրեք նամակ..."
          className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#6400dc]"
        />
        <button 
          type="submit" 
          className="bg-[#6400dc] text-white p-2 rounded-full hover:bg-[#5200b3] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;