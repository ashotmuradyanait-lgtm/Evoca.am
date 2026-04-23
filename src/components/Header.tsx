import { useState } from 'react';

function Header() {
  const [activeTab, setActiveTab] = useState('Անհատ');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Անհատ', 'Բիզնես', 'Ակնթարթային վճարումներ', 
    'Մեր մասին', 'Նորություններ', 'Բլոգ', 'Կարիերա'
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 pt-4 md:pt-8 pb-4 px-4 md:px-6 fixed top-0 left-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* Desktop Navigation - Թաքնված է մինչև lg էկրանը */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <div 
              key={item} 
              className="relative cursor-pointer group"
              onClick={() => setActiveTab(item)}
            >
              <div className={`absolute top-[-32px] left-0 w-full h-[4px] bg-[#6c2db5] transition-all duration-300
                    ${activeTab === item ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
              />
              <p className={`font-medium text-[13px] transition-colors text-nowrap
                ${activeTab === item ? 'text-[#6c2db5]' : 'text-gray-800 hover:text-gray-500'}`}>
                {item}
              </p>
            </div>
          ))}
        </nav>

        {/* Right Side Icons & Buttons */}
        <div className="flex items-center gap-3 md:gap-6 ml-auto lg:ml-0">
          
          {/* Առցանց հայտեր & Հետադարձ կապ - Թաքնված են փոքր էկրանների վրա */}
          <div className="hidden sm:flex items-center gap-4 md:gap-6 border-r border-gray-200 pr-4 md:pr-6">
             <div className="flex items-center gap-1 cursor-pointer text-[#6c2db5] font-bold text-[12px] md:text-[14px] whitespace-nowrap">
                <p>Առցանց հայտեր</p>
                <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-[#6c2db5] font-bold text-[12px] md:text-[14px] whitespace-nowrap">
                <p>Հետադարձ կապ</p>
                <svg className="w-3 h-3 md:w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
          </div>

          {/* Icons Group */}
          <div className="flex items-center gap-2 md:gap-4 text-black">
            {/* Search & Lang - Միշտ երևում են */}
            <button className="p-1 hover:text-[#6c2db5] transition-colors outline-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Burger Menu Button - Երևում է միայն Mobile/Tablet տարբերակում */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-[#6c2db5] transition-colors flex flex-col items-end gap-1 group outline-none ml-1"
            >
              <div className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-6'}`}></div>
              <div className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'w-4 group-hover:w-6'}`}></div>
              <div className={`h-[2px] bg-current transition-all ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white 
        ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-4 px-4">
          {navItems.map((item) => (
            <p 
              key={item}
              onClick={() => { setActiveTab(item); setIsMenuOpen(false); }}
              className={`text-lg font-medium ${activeTab === item ? 'text-[#6c2db5]' : 'text-gray-600'}`}
            >
              {item}
            </p>
          ))}
          <hr className="border-gray-100" />
          <p className="text-[#6c2db5] font-bold">Առցանց հայտեր</p>
          <p className="text-[#6c2db5] font-bold">Հետադարձ կապ</p>
        </div>
      </div>
    </header>
  );
}

export default Header;