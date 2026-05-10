import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Vchar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Դրամական փոխանցումներ', path: '/poxancum' },
    { name: 'Վճարային համակարգեր', path: '' },
  ];


  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive || index === 0 ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
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
        <span className="cursor-pointer hover:text-gray-600">Փոխանցումներ</span>
        <span>›</span>
        <span className="text-gray-800">Դրամական փոխանցումներ</span>
      </div>
      

      </div>
  )
}
export default Vchar