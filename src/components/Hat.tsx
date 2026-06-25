import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Hat: React.FC = () => {
  
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Evoca Leasing', path: '/lizing' },
    { name: 'Հատուկ առաջարկ', path: '' },
  ];

  const sections = [
    {
      id: 1,
      title: 'ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ',
      content: (
        <div className="py-6 space-y-4 text-[16px] text-[#333] leading-relaxed">
          <p>«Տնտեսության Արդիականացման Նպատակային ծրագրի ներքո լիզինգի սուբսիդավորում» (լիզինգի սուբսիդավորման խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)</p>
          <p className="font-medium">Գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով</p>
        </div>
      )
    },
    {
      id: 2,
      title: 'Դրույքաչափեր և սակագներ',
      content: (
        <div className="py-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8f9fa] text-[14px] text-gray-500 uppercase">
                <th className="py-4 px-6 border-b font-semibold text-[#6c2db5]">USD</th>
                <th className="py-4 px-6 border-b font-semibold text-[#6c2db5]">EUR</th>
                <th className="py-4 px-6 border-b font-medium">Ժամկետ ամիս</th>
              </tr>
            </thead>
            <tbody className="text-[16px] text-gray-700">
              {[
                { usd: '0.0%', eur: '0.0%', months: 12 },
                { usd: '5.0%', eur: '4.0%', months: 24 },
                { usd: '6.0%', eur: '5.0%', months: 36 },
                { usd: '7.0%', eur: '6.0%', months: 48 },
                { usd: '7.50%', eur: '7.0%', months: 60 },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-b last:border-0">
                  <td className="py-4 px-6">{row.usd}</td>
                  <td className="py-4 px-6">{row.eur}</td>
                  <td className="py-4 px-6">{row.months}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 3,
      title: 'Այլ պայմաններ',
      content: (
        <div className="py-6 space-y-4 text-[16px] text-[#333]">
          <ul className="list-disc pl-5 space-y-3 text-[#1a1a1a] marker:text-[#6c2db5]">
            <li>Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից</li>
            <li>Լիզինգի սուբսիդավորումն իրականացվում է ՀՀ կառավարության ծրագրերի շրջանակում</li>
            <li>Անհատական մոտեցում յուրաքանչյուր հաճախորդին</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen">
         <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 pt-6 lg:pt-14 px-4 lg:px-6">
                <Link to="/" className="shrink-0">
                  <img 
                    className="h-[80px] w-[180px] lg:h-[140px] lg:w-[300px] object-contain" 
                    src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
                    alt="Evocabank Logo" 
                  />
                </Link> 
                
                <nav className="flex gap-2 text-gray-800 font-medium text-[15px]">
                  <Link to="/biznes" className="hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
                  <Link to="/lizing" className="hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
                  <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
                  <Link to="/dasakan" className="hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
                  <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold hidden sm:block">Արժեթղթերի շուկա</Link>
                  <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold hidden md:block">Առևտրի ֆինանսավորում</Link>
                  <Link to ="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
                  <Link to ="/Aylq" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
                </nav>
        
                <div className="mt-4 lg:mt-0 lg:px-10">
                  <Link to="/evocaonline" className="inline-block text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl pt-1.5 text-sm font-bold transition-all">
                    EvocaONLINE
                  </Link>
                </div>
              </div>
        
             
              <div className="w-full bg-[#6c2db5] text-white mt-6">
                <div className="max-w-[1400px] mx-auto flex items-center h-[50px] lg:h-[60px] px-4 lg:px-6 overflow-x-auto no-scrollbar">
                  {subMenuItems.map((item) => (
                    <NavLink 
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => 
                        `h-full flex items-center px-4 lg:px-8 transition-colors text-[12px] lg:text-[14px] font-medium whitespace-nowrap
                        ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
        
              
              <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[11px] lg:text-[13px]">
                <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
                <span>›</span>
                <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
                <span>›</span>
                <span className="cursor-pointer hover:text-gray-600">Լիզինգ</span>
                <span>›</span>
                <span className="text-gray-800">Evoca Leasing</span>
              </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        <h1 className="text-[48px] font-bold text-[#1a1a1a] mb-12">Հատուկ առաջարկ</h1>

        <div className="w-full border-t border-gray-200">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.id);
            return (
              <div key={section.id} className="border-b border-gray-200">
                <button 
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className={`text-[18px] md:text-[20px] font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-[#6c2db5]' : 'text-[#1a1a1a] group-hover:text-[#6c2db5]'}`}>
                    {section.title}
                  </span>
                  <svg 
                    className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#6c2db5]' : 'text-gray-400 group-hover:text-[#6c2db5]'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hat;