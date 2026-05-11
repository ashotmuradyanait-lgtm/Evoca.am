import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Hkd: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  const newsItems = [
  {
    image: 'https://www.evoca.am/images-cache/news/1/17782305453949/439x320.png',
    category: 'Մրցանակներ',
    categoryColor: '#e7d321', 
    title: 'Evocabank-ը՝ լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին…',
    date: '08.05.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/17780463751358/439x320.png',
    category: 'Բանկային',
    categoryColor: '#784BDD', 
    title: 'Evocabank-ը  և Proparco-AFD-ն ստորագրել են 20միլիոն եվրոյի...',
    date: '06.05.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png',
    category: 'Կենսակերպ',
    categoryColor: '#BEE553', 
    title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
    date: '17.04.2026',
  },
];

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/arzetxter' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '' },
    { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/repo' },
    { name: 'EvocaINVEST', path: '/invest' },
  ];

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
      {/* Sub-Navigation */}
      <div className="w-full bg-[#6c2db5] text-white sticky top-0 z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium flex-shrink-0
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Social Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px] overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Արժեթղթեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">ՀԿԴ ծառայություններ</span>
      </div>

      {/* Hero Banner Section */}
      <div className="w-full relative overflow-hidden flex flex-col md:flex-row bg-white">
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex items-center justify-end z-10">
          <div className="w-full max-w-[700px] px-6 md:px-12 py-10 md:py-20 text-left">
            <h1 className="text-[#333] text-2xl md:text-[40px] font-bold leading-tight mb-8">
              Հայաստանի <br /> Կենտրոնական <br /> Դեպոզիտարիայի (ՀԿԴ)
            </h1>
            <p className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed max-w-[500px]">
              Բանկը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ 
              միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման 
              և արժեթղթերի պահառության հետ կապված ծառայությունները։
            </p>
          </div>
        </div>

        {/* Right Image Area with Purple Background */}
        <div className="w-full md:w-1/2 relative bg-[#f4f0ff] flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/16783474498811/780x585.jpg" 
            alt="HKD Banner" 
            className="relative z-10 w-full h-full object-cover"
          />
          {/* Decorative elements from screenshot */}
          <div className="absolute top-10 left-10 w-12 h-12 bg-[#6c2db5] opacity-20 rotate-45 hidden md:block"></div>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-[900px] space-y-8 text-[#4a4a4a] text-[16px] md:text-[18px] leading-8">
          <p>
            ՀՀ Կենտրոնական Դեպոզիտարիայի հաճախորդների սպասարկումն իրականացվում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
          </p>
          
          <p>
            Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
          </p>

          <p>
            Բանկը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ մասնաճյուղերում:
          </p>

          <div className="pt-10 flex flex-col space-y-5">
            <a 
              href="https://www.evoca.am/file_manager/PDF-FILES/CDA/%D5%80%D4%BF%D4%B4-%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80%D5%AB-%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%80%D5%A4%D5%A1%D5%BE%D5%B8%D6%80%D5%B4%D5%A1%D5%B6-%D5%A3%D5%B8%D6%80%D5%AE%D5%B8%D6%82%D5%B6%D5%A5%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6-%D5%BD%D5%A1%D5%AF%D5%A1%D5%A3%D5%B6%D5%A5%D6%80.pdf"
              className="text-[#6c2db5] hover:text-[#530498] text-[15px] md:text-[16px] font-semibold underline decoration-1 underline-offset-4 transition-all"
            >
              ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդական գործունեության սակագներ
            </a>
            
            <a 
              href="https://www.evoca.am/file_manager/PDF-FILES/Investment%20Services/%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6%D5%AB%20%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6%20%D5%A4%D5%A5%D5%BA%D5%B8%D5%A6%D5%AB%D5%BF%D5%A1%D6%80%D5%AB%D5%A1%D5%B5%D5%AB%20%D5%AF%D5%B8%D5%B2%D5%B4%D5%AB%D6%81%20%D5%B4%D5%A1%D5%BF%D5%B8%D6%82%D6%81%D5%BE%D5%B8%D5%B2%20%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80%D5%AB%20%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%80%D5%A4%D5%A1%D5%BE%D5%B8%D6%80%D5%B4%D5%A1%D5%B6%20%D5%A3%D5%B8%D6%80%D5%AE%D5%B8%D6%82%D5%B6%D5%A5%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6%20%D5%AF%D5%A1%D5%B6%D5%B8%D5%B6%D5%B6%D5%A5%D6%80.pdf" 
              className="text-[#6c2db5] hover:text-[#530498] text-[15px] md:text-[16px] font-semibold underline decoration-1 underline-offset-4 transition-all"
            >
              ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդական գործունեության կանոններ
            </a>
          </div>
        </div>
      </div>
      <section className="bg-[#F8F9FB] py-16 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#784BDD]/5 rounded-full blur-[100px] -z-0" />
      
      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">
            Վերջին նորությունները
          </h2>
          <button className="flex items-center gap-2 bg-[#F3EEFF] text-[#6600CC] px-7 py-3 rounded-full hover:bg-[#6600CC] hover:text-white transition-all duration-300 font-bold shadow-sm">
            Բոլոր նորությունները
            <span className="text-xl font-bold">›</span>
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col group cursor-pointer border border-gray-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              
              
              <div className="relative aspect-[439/320] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
             
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <div className="bg-white/90 p-4 rounded-full shadow-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6600CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div style={{ backgroundColor: item.categoryColor }} className="w-1.5 h-6 rounded-full" />
                    <span className="text-gray-500 text-[13px] font-semibold tracking-wide uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-bold text-[#1A1A1A] leading-tight mb-8 line-clamp-3 group-hover:text-[#6600CC] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-[#C2C2C2] text-sm font-medium">
                    {item.date}
                  </div>
                 
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-[#6600CC] font-bold">Կարդալ ավելին ›</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hkd;