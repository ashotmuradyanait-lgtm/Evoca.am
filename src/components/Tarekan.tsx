import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Tarekan: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');


  const subMenuItems = [
    { name: 'Աուդիտորական եզրակացություն', path: '/hashvetu' },
    { name: 'Ֆինանսական հաշվետվություններ', path: '/finans' },
    { name: 'Ներդրողների համար', path: '/nerdrox' },
    { name: 'Կիսամյակային հաշվետվություն', path: '/kisamyak' },
    { name: 'Տարեկան հաշվետվություն', path: '' }
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
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="/sakagin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="/hayt" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հաշվետվություններ</span>
        <span>›</span>
        <span className="text-gray-800">Տարեկան հաշվետվություն</span>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
              <div className="flex flex-col gap-3">
                <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
                <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
                <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
                <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
              </div>
            </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-12 leading-snug">
          Տարեկան հաշվետվություն
        </h1>

         <div className="mt-12 flex flex-col gap-3">
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

             <a 
                href="https://www.evoca.am/files/global_files/1/16316811943203.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2021 Տարեկան հաշվետվություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/16463095572524.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2020 Տարեկան հաշվետվություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/16826828593213.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2022 Տարեկան հաշվետվություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/2023-Annual-Report.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2023 Տարեկան հաշվետվություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/2024-annual-report.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2024 Տարեկան հաշվետվություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/annual-report-2024.pdf" 
                className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-4 md:p-5 group cursor-pointer"
            >
                <div className="mr-4 text-[#6c2db5] flex-shrink-0">
                <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="16" cy="18" r="3" />
                    <path d="m14 17 2 2 2-2" />
                </svg>
                </div>
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">2024 Տարեկան հաշվետվություն</span>
            </a>
        </div>

        </div>
        </div>
  )
}
export default Tarekan