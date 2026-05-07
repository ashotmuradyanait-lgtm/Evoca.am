import Menu from '../pages/Menu';
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';

const Hashivner: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '/varker' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/sqor' },
    { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/nyut' }
  ];


  return (
    <div className="w-full bg-white">
      <Menu />
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
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800">Վարկեր</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[48px] font-bold text-[#1a1a1a]">Վարկեր</h1>
      </div>

    </div>
  )
}
export default Hashivner;