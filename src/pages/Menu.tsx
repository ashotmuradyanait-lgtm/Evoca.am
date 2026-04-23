import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Վարկեր", "Քարտեր", "Ավանդներ", "Հաշիվներ", 
    "Փոխանցումներ", "Արժեթղթեր", "EvocaSALARY", "EvocaTOUCH"
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between lg:justify-start lg:gap-6 pt-6 lg:pt-14 px-4 lg:px-0">
        
        {/* Լոգոն - Mobile-ում ավելի փոքր */}
        <img 
          className="h-[60px] md:h-[100px] lg:h-[140px] w-auto object-contain" 
          src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
          alt="Evocabank Logo" 
        />

        {/* Desktop Nav - Միայն մեծ էկրանների համար */}
        <nav className="hidden lg:flex gap-6 text-gray-800 font-medium text-[15px]">
          {menuItems.map((item) => (
            <p key={item} className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">
              {item}
            </p>
          ))}
        </nav>

        {/* Desktop Button - Միայն մեծ էկրանների համար */}
        <div className="hidden lg:block px-10 xl:px-20">
          <p className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-1 cursor-pointer transition-all">
            EvocaONLINE
          </p>
        </div>

        {/* Mobile Hamburger Icon - Երևում է միայն mobile-ում */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#6c2db5] p-2 focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-8 h-1 bg-[#6c2db5] transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-1 bg-[#6c2db5] transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-[#6c2db5] transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay - Բացվող մասը */}
      <div className={`
        lg:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-3xl text-[#6c2db5]">&times;</button>
          </div>
          
          <nav className="flex flex-col gap-6 mt-10 text-center">
            {menuItems.map((item) => (
              <p 
                key={item} 
                className="text-xl font-bold text-gray-800 hover:text-[#6c2db5]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </p>
            ))}
            <div className="mt-6 flex justify-center">
              <p className="text-white bg-[#6c2db5] py-3 px-10 hover:bg-[#530498] rounded-3xl font-bold">
                EvocaONLINE
              </p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;