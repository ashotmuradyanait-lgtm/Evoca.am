import React from 'react';
import {Link, NavLink } from 'react-router-dom';

const Qarter: React.FC = () => {
     const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <div className="w-full bg-white">
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
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
        <span>›</span>
        <span className="text-gray-800">Քարտեր</span>
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
                <div>
                  <div className="text-gray-500 text-sm mb-1">Մինչև</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">1.5%</div>
                  <div className="text-gray-600 text-sm leading-tight">Cashback արտասահմանում</div>
                </div>
              
                <div>
                  <div className="text-gray-500 text-sm mb-1">Անվճար</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">6 մուտք</div>
                  <div className="text-gray-600 text-sm leading-tight">Lounge Key սրահներ քեզ և <br/> քո ուղեկցին</div>
                </div>
                
                <div>
                  <div className="text-gray-500 text-sm mb-1">Անվճար</div>
                  <div className="text-[#7122e2] text-4xl font-bold mb-2">6 անգամ</div>
                  <div className="text-gray-600 text-sm leading-tight">Fast track-ից օգտվելու <br/> հնարավորություն</div>
                </div>
              </div>
            </div>

          
            <div className="flex justify-end mt-10 md:mt-4">
               <span className="text-4xl font-extrabold text-[#7122e2]">16.000 ֏</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Qarter;