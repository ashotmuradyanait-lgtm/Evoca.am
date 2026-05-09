import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase'; 
import { collection, onSnapshot, query, where, type DocumentData } from 'firebase/firestore';


interface SidebarProps {
  onSelectUser: (user: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectUser }) => {
  
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "users"), 
      where("uid", "!=", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersData = snapshot.docs.map(doc => doc.data());
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-1/3 border-r h-screen bg-white overflow-y-auto">
      <div className="p-4 bg-[#6400dc] text-white font-bold">Կոնտակտներ</div>
      {users.map((user) => (
        <div 
          key={user.uid} 
          onClick={() => onSelectUser(user)}
          className="p-4 border-b hover:bg-gray-100 cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">
            {user.displayName?.[0].toUpperCase()}
          </div>
          <span className="font-medium">{user.displayName}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;