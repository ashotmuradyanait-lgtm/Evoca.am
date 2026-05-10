import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Avandner: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Ավանդներ', path: '' },
    { name: 'Կարևոր տեղեկատվություն', path: '/karevor' },
  ];

  return (
    <div className="w-full bg-white">
      <Menu />
      
      {/* Sub Header */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-4 md:px-6 min-w-max">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[12px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Ավանդներ</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-6 md:mb-10">
        <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Ավանդներ</h1>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col gap-6 md:gap-8 mb-10">
        
       
        <div className="flex flex-col md:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 md:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          <div className="w-full md:w-[350px] lg:w-[415px] h-[200px] md:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg" 
              alt="Դասական ավանդ" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#1a1a1a] mb-3">Դասական ավանդ</h2>
              <p className="text-gray-600 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-[800px] mb-6">
                Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:
              </p>
              <div className="grid grid-cols-2 lg:flex lg:gap-10 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">100,000 ֏</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Գումար</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8 mt-5"> 
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">31-1,825 օր</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Ժամկետ</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold">10.5%</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Տոկոսադրույք</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1 italic">սկսած</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">100,000 ֏</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1 italic">Համալրում</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-full md:w-fit justify-center font-bold hover:bg-[#e8dff5] transition-colors mt-8 text-[14px]">
              Մանրամասն <span className="text-[18px]">›</span>
            </button>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 md:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          <div className="w-full md:w-[350px] lg:w-[415px] h-[200px] md:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg" 
              alt="Մանկական ավանդ" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#1a1a1a] mb-3">Մանկական ավանդ</h2>
              <p className="text-gray-600 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-[800px] mb-6">
                Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ՝ մինչև երեխայի 18 տարին լրանալը:
              </p>
              <div className="grid grid-cols-2 lg:flex lg:gap-10 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">100,000 ֏</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Գումար</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8"> 
                  <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold">18 լրանալը</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Ժամկետ</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8 mt-5">
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold">9.5%</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Տոկոսադրույք</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1 italic">սկսած</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">40,000 ֏</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1 italic">Համալրում</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-full md:w-fit justify-center font-bold hover:bg-[#e8dff5] transition-colors mt-8 text-[14px]">
              Մանրամասն <span className="text-[18px]">›</span>
            </button>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 md:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          <div className="w-full md:w-[350px] lg:w-[415px] h-[200px] md:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg" 
              alt="Ավանդ Evoca Online" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#1a1a1a] mb-3">Ավանդ Evoca Online</h2>
              <p className="text-gray-600 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-[800px] mb-6">
                Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու՝ Ձեր հեռախոսից կամ համակարգչից:
              </p>
              <div className="grid grid-cols-2 lg:flex lg:gap-10 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">100,000 ֏</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Գումար</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8 mt-5"> 
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold text-nowrap">31-1,825 օր</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Ժամկետ</span>
                </div>
                <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-8">
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[16px] md:text-[20px] lg:text-[24px] font-bold">10.75%</span>
                  <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-full md:w-fit justify-center font-bold hover:bg-[#e8dff5] transition-colors mt-8 text-[14px]">
              Մանրամասն <span className="text-[18px]">›</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Avandner;