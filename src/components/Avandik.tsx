import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Avandik: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '/sakagin' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '/irav' },
    { name: 'Միջնորդավճարների սակագները', path: '' },
    { name: 'Ավանդների սակագներ', path: '' },
    { name: 'Արխիվ', path: '' }
  ];


  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
    
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 sm:pt-6 md:pt-14 px-4 sm:px-6">
        <Link to="/">
          <img 
            className="h-[60px] sm:h-[80px] md:h-[140px] w-[160px] sm:w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-800 font-medium text-[13px] sm:text-[14px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full sm:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-full sm:w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

    
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto hide-scrollbar mt-4 lg:mt-0">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 sm:px-6 min-w-[850px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 sm:px-6 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-[11px] sm:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600 whitespace-nowrap">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800 whitespace-nowrap">Սակագներ</span>
        <span>›</span>
        <span className="text-gray-800 whitespace-nowrap">Միջնորդավճարների սակագները</span>
      </div>

  
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-24 mt-2 md:mt-4">
        
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-6 md:mb-10 leading-snug">
          Միջնորդավճարների սակագները և դրույքները
        </h1>

        </div>
        </div>
  )
}
export default Avandik