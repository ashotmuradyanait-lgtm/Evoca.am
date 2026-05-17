import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface SubMenuItem {
  name: string;
  path: string;
}

const Corp: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  
  const subMenuItems: SubMenuItem[] = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '/karciq' },
    { name: 'CSR', path: '' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a] select-none">
      
    
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto">
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

     
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Կարծիքներ</span>
      </div>

      
      </div>
  )
}
export default Corp