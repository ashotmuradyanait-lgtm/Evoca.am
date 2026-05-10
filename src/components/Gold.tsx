import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Gold: React.FC = () => {
     const subMenuItems = [
    { name: 'Քարտեր', path: '' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '/spasarkum' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '/social' },
    { name: 'Evoca Benefits', path: '' }
  ];    
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
        <Menu />
      <div className="w-full bg-white">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
              </div>
      <div className="w-full bg-[#6c2db5] text-white ">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#6c2db5]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
        <span>›</span>
        <span className="text-gray-800">Քարտեր</span>
      </div>

      </div>
      </div>
  )
}
export default Gold