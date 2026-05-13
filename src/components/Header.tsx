import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  const [isOnlineAppsOpen, setIsOnlineAppsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Անհատ', path: '/' },
    { name: 'Բիզնես', path: '/biznes' },
    { name: 'Ակնթարթային վճարումներ', path: '/providers' },
    { name: 'Մեր մասին', path: '/about' },
    { name: 'Նորություններ', path: '/norutyun' },
    { name: 'Բլոգ', path: '/blog' },
    { name: 'Կարիերա', path: '/careers' }
  ];


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOnlineAppsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

  return (
    <header className="w-full bg-white border-b border-gray-100 pt-4 lg:pt-8 pb-4 px-4 lg:px-6 fixed top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
       
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className="relative cursor-pointer group"
            >
              {({ isActive }) => (
                <>
                  <div className={`absolute top-[-32px] left-0 w-full h-[4px] bg-[#6c2db5] transition-all duration-300
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                  />
                  <p className={`font-medium text-[13px] transition-colors text-nowrap
                    ${isActive ? 'text-[#6c2db5]' : 'text-gray-800 hover:text-gray-500'}`}>
                    {item.name}
                  </p>
                </>
              )}
            </NavLink>
          ))}
        </nav>

      
        <div className="flex items-center gap-3 lg:gap-6">
          
        
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsOnlineAppsOpen(!isOnlineAppsOpen)}
              className="hidden sm:flex items-center gap-1 cursor-pointer text-[#6c2db5] font-bold text-[12px] lg:text-[14px] outline-none"
            >
              <span className="whitespace-nowrap font-bold">Առցանց հայտեր</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isOnlineAppsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

           
            {isOnlineAppsOpen && (
              <div className="absolute right-0 mt-4 w-[260px] bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 z-[60] animate-in fade-in slide-in-from-top-2">
                <Link to="/biznes" onClick={() => setIsOnlineAppsOpen(false)} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#6c2db5] transition-colors font-medium text-[14px]">
                  ՓՄՁ վարկավորում
                </Link>
                <Link to="/infinite" onClick={() => setIsOnlineAppsOpen(false)} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#6c2db5] transition-colors font-medium text-[14px]">
                  Visa Infinite
                </Link>
                <Link to="/gold" onClick={() => setIsOnlineAppsOpen(false)} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#6c2db5] transition-colors font-medium text-[14px]">
                  MasterCard Gold
                </Link>
                <Link to="/visa-gold" onClick={() => setIsOnlineAppsOpen(false)} className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#6c2db5] transition-colors font-medium text-[14px] border-b border-gray-50">
                  Visa Gold
                </Link>
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-[#6c2db5] font-bold text-[12px] lg:text-[14px]">
            <p className="whitespace-nowrap font-bold">Հետադարձ կապ</p>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

         
          <div className="flex items-center gap-2 lg:gap-4 text-black">
          <a href="https://www.evoca.am/hy/branches-and-atms/">
            <button className="hover:text-gray-600 transition-colors outline-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
            </button>
          </a>

            <button className="hover:text-gray-600 transition-colors outline-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
              </svg>
            </button>
          
            <button className="hover:text-gray-600 transition-colors outline-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </button>

            <Link to="/search">
              <button className="mt-1 lg:mt-2 hover:text-gray-600 transition-colors outline-none">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </Link>

            <Link to="/ereqgic">
              <button className="hover:text-[#6c2db5] transition-colors flex flex-col items-end gap-1 group outline-none ml-1">
                <div className="w-6 h-[2px] bg-current"></div>
                <div className="w-4 h-[2px] bg-current transition-all group-hover:w-6"></div>
                <div className="w-6 h-[2px] bg-current"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;