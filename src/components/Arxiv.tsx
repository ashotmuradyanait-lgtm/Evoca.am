import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Arxiv: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openSection, setOpenSection] = useState<string | null>('varker');

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '/sakagin' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '/irav' },
    { name: 'Միջնորդավճարների սակագները', path: '/mijnord' },
    { name: 'Ավանդների սակագներ', path: '/avandik' },
    { name: 'Արխիվ', path: '' }
  ];

 
  const archiveData = {
    varker: {
      title: 'Վարկավորման պայմաններ և սակագներ',
      links: [
        { label: '25 - Վարկավորման պայմաններ և սակագներ', date: '2025' },
        { label: '24 - Վարկավորման պայմաններ և սակագներ (01.12.2024)', date: '2024' },
        { label: '24 - Վարկավորման պայմաններ և սակագներ (15.06.2024)', date: '2024' },
        { label: '23 - Վարկավորման պայմաններ և սակագներ', date: '2023' },
        { label: '22 - Վարկավորման պայմաններ և սակագներ', date: '2022' },
        { label: '21 - Վարկավորման պայմաններ և սակագներ', date: '2021' },
        { label: '20 - Վարկավորման պայմաններ և սակագներ', date: '2020' },
      ]
    },
    avandner: {
      title: 'Ավանդների ներգրավման պայմաններ և սակագներ',
      links: [
        { label: '19 - Ավանդների ներգրավման պայմաններ և սակագներ', date: '2023' },
        { label: '18 - Ավանդների ներգրավման պայմաններ և սակագներ', date: '2022' },
        { label: '17 - Ավանդների ներգրավման պայմաններ և սակագներ', date: '2021' },
      ]
    },
    karter: {
      title: 'Վճարային քարտերի տրամադրման և օգտագործման պայմաններ',
      links: [
        { label: '12 - Վճարային քարտերի տրամադրման պայմաններ', date: '2024' },
        { label: '11 - Վճարային քարտերի տրամադրման պայմաններ', date: '2023' },
      ]
    }
  };

  const years = ['all', '2025', '2024', '2023', '2022', '2021', '2020'];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
     
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 pt-4 sm:pt-6 md:pt-14 px-4 sm:px-6">
        <Link to="/">
          <img 
            className="h-[60px] sm:h-[80px] md:h-[140px] w-[160px] sm:w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-gray-800 font-medium text-[13px] sm:text-[14px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Սակագներ</Link>
          <Link to="/hashvetu" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full sm:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-full sm:w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto hide-scrollbar mt-4 lg:mt-0">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 sm:px-6 min-w-[850px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 sm:px-6 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-[11px] sm:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600 whitespace-nowrap">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800 whitespace-nowrap">Սակագներ</span>
        <span>›</span>
        <span className="text-gray-800 whitespace-nowrap">Արխիվ</span>
      </div>

    
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-24 mt-2 md:mt-4">
        
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-6 md:mb-10 leading-snug">
          Արխիվ
        </h1>

      
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-4">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveFilter(year)}
              className={`px-4 py-1.5 rounded-full text-[13px] md:text-[14px] font-medium transition-all
                ${activeFilter === year 
                  ? 'bg-[#6c2db5] text-white' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
            >
              {year === 'all' ? 'Բոլորը' : year}
            </button>
          ))}
        </div>

       
        <div className="space-y-4 max-w-[1100px]">
          {Object.entries(archiveData).map(([key, section]) => {
           
            const filteredLinks = section.links.filter(
              link => activeFilter === 'all' || link.date === activeFilter
            );

            if (filteredLinks.length === 0) return null;

            return (
              <div key={key} className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white font-bold text-[15px] sm:text-[17px] md:text-[18px] text-[#1a1a1a] hover:bg-gray-50/50 transition-colors"
                >
                  <span>{section.title}</span>
                  
                  <svg 
                    className={`w-5 h-5 text-[#6c2db5] transition-transform duration-200 ${openSection === key ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === key && (
                  <div className="p-5 md:p-6 bg-gray-50/50 border-t border-gray-100 divide-y divide-gray-100">
                    {filteredLinks.map((link, idx) => (
                      <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-center justify-between group">
                        <Link 
                          to="#" 
                          className="text-[#6c2db5] hover:text-[#530498] text-[13px] sm:text-[14px] md:text-[15px] font-medium transition-colors underline break-words pr-4"
                        >
                          {link.label}
                        </Link>
                        <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded border border-gray-100 hidden sm:inline-block">
                          {link.date}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

       
        <div className="mt-12 p-5 sm:p-6 bg-purple-50/40 rounded-2xl border border-purple-100/60 max-w-[1100px]">
          <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
            * Սույն էջում ներկայացված են նախկինում գործած, սակայն այժմ արխիվացված սակագները և դրույթները։ Գործող պայմաններին ծանոթանալու համար խնդրում ենք անցնել համապատասխան էջերով։
          </p>
        </div>

      </div>
    </div>
  );
};

export default Arxiv;