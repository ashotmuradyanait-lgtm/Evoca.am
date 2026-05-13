import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Avand: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Բիզնես վարկեր', path: '/biznes' },
  ];


  return (
    <div className="w-full bg-white">
      <div className="flex items-center gap-6 pt-14   ">
      
      <Link to="/">
      <img 
        className="h-[140px] w-[300px] object-contain" 
        src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
        alt="Evocabank Logo" 
      />
      </Link>
     
      
      <nav className="flex gap-4 text-gray-800 font-medium text-[15px]">
        <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
        <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
      </nav>
      <Link to="/evocaonline" className="px-20">
      <p className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-1">EvocaONLINE</p>
      </Link>
    </div>
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800">Դասական ավանդ</span>
      </div>

      </div>
  )
}
export default Avand