import React from 'react';
import { NavLink } from 'react-router-dom';

const Qarter: React.FC = () => {
     const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <div className="w-full bg-white">
      {/* 1. Submenu - Մանուշակագույն շերտը */}
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
      </div>
      <nav className="bg-[#7122e2] w-full flex text-white text-[15px] font-medium font-sans">
        <div className="bg-[#5612b4] px-8 py-5 cursor-pointer">
          Քարտեր
        </div>
        <div className="px-8 py-5 hover:bg-[#853af0] cursor-pointer transition-colors">
          Քարտերի տրամադրում և սպասարկում
        </div>
        <div className="px-8 py-5 hover:bg-[#853af0] cursor-pointer transition-colors">
          Սոցիալական ապահովության վճարային քարտեր
        </div>
        <div className="px-8 py-5 hover:bg-[#853af0] cursor-pointer transition-colors">
          Evoca Benefits
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <svg className="w-4 h-4 cursor-pointer hover:text-[#7122e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>›</span>
          <span className="cursor-pointer hover:text-[#7122e2]">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-[#7122e2]">Քարտեր</span>
          <span>›</span>
          <span className="text-gray-900">Քարտեր</span>
        </div>

       
        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Քարտեր</h1>

       
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button className="bg-[#7122e2] text-white px-6 py-2.5 rounded-full font-semibold text-[15px]">
            Բոլորը
          </button>
          {['Պրեմիում', 'Նվեր քարտեր', 'Թվային քարտեր'].map((tag) => (
            <button key={tag} className="bg-[#f0f0f5] text-gray-800 hover:bg-[#7122e2] hover:text-white px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors">
              {tag}
            </button>
          ))}
          
          
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-blue-700 transition-colors flex items-center gap-1">
            <img src="https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-extrabold text-blue-900 italic transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold transition-colors flex items-center gap-[-4px]">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-red-600 transition-colors">
           <img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="" />
          </button>
        </div>

      
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
   
          <div className="w-full lg:w-[420px] shrink-0 h-[260px] bg-gradient-to-br from-[#7122e2] to-[#4a148c] rounded-[24px] p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
            {/* Background design elements to mimic the boarding pass */}
            <div className="absolute top-4 left-6 text-xs font-bold tracking-widest opacity-80">FROM: <br/><span className="text-lg">HOME</span><br/><span className="text-[10px] font-normal">SWEET HOME</span></div>
            <div className="absolute top-4 right-6 text-xs font-bold tracking-widest text-right opacity-80">TO: <br/><span className="text-lg">NEXT</span><br/><span className="text-[10px] font-normal">DESTINATION</span></div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-50">✈️</div>
            
            <div className="mt-auto">
               <h3 className="text-2xl font-black italic tracking-wider mb-2">evoca</h3>
               <p className="text-xs uppercase tracking-widest opacity-80 border-b border-white/20 pb-2 mb-2">Boarding Pass <br/> Business Class</p>
               <div className="flex justify-between text-[10px] uppercase opacity-90">
                 <div><span>Passenger</span><br/><b>ME</b></div>
                 <div><span>Flight</span><br/><b>EV442</b></div>
               </div>
            </div>
          </div>

        \
          <div className="flex-1 w-full flex flex-col h-full justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#222] mb-4">Evoca Travel Card</h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mb-10">
                Սիրո՞ւմ ես ճամփորդել. ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը:
              </p>

           
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div>
                  <div className="text-gray-500 text-sm mb-1">Մինչև</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">1.5%</div>
                  <div className="text-gray-600 text-sm leading-tight">Cashback արտասահմանում</div>
                </div>
                {/* Stat 2 */}
                <div>
                  <div className="text-gray-500 text-sm mb-1">Անվճար</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">6 մուտք</div>
                  <div className="text-gray-600 text-sm leading-tight">Lounge Key սրահներ քեզ և <br/> քո ուղեկցին</div>
                </div>
                {/* Stat 3 */}
                <div>
                  <div className="text-gray-500 text-sm mb-1">Անվճար</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">6 անգամ</div>
                  <div className="text-gray-600 text-sm leading-tight">Fast track-ից օգտվելու <br/> հնարավորություն</div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-end mt-10 md:mt-4">
               <span className="text-4xl font-extrabold text-[#7122e2]">16.000 ֏</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
        <button className="w-14 h-14 bg-[#d8b4fe] hover:bg-[#c084fc] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <svg className="w-6 h-6 text-[#7122e2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.9 0 7.1 3.1 7 7z" />
          </svg>
        </button>
        <div className="bg-[#7122e2] text-white px-6 py-3 rounded-l-full rounded-tr-full shadow-2xl font-medium cursor-pointer animate-pulse hover:bg-[#5612b4] transition-colors">
          Գրեք մեզ, մենք օնլայն ենք !
        </div>
      </div>

    </div>
  );
};

export default Qarter;