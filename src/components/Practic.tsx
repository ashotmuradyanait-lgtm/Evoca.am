import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Practic: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subMenuItems = [
    { name: 'Աշխատանք Evoca-ում', path: '' },
    { name: 'Ուսումնական պրակտիկա', path: '' },
    { name: 'EvocaBRIDGE', path: '' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
     
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/kariera" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-6">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 min-w-[800px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-6 md:px-8 transition-colors text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      </div>
  )
}
export default Practic