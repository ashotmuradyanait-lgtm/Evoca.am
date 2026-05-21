import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Inkaso: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Երաշխիք', path: '/arevtur' },
    { name: 'Ֆակտորինգային ֆինանսավորում', path: '/fakt' },
    { name: 'Ակրեդիտիվ', path: '/akre' },
    { name: 'Ինկասո', path: '' },
  ];

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

  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-[#6c2db5] selection:text-white">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 md:pt-14 px-4 max-w-[1400px] mx-auto">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-800 font-medium text-[13px] md:text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        
        <Link to="/evocaonline" className="mt-4 md:mt-0 flex justify-center items-center">
          <span className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-medium transition-colors">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white mt-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center h-auto md:h-[60px] px-4 md:px-6 py-2 md:py-0">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 py-2 md:py-0 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex items-center gap-2 text-gray-400 text-[12px] md:text-[13px] overflow-x-auto whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Առևտրի ֆինանսավորում</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Ինկասո</span>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

     
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 pb-20 text-[15px] leading-relaxed text-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6c2db5] mb-6">Ինկասո</h1>
        
        <p className="mb-4 text-lg font-medium text-gray-900">
          Ինկասոն միջազգային առևտրում հաշվարկների ստացման և պարտքերի մարման արագ, պարզ ու արդյունավետ գործիք է:
        </p>
        
        <p className="mb-6">
          Այն հարմար է, եթե Դուք վստահելի հարաբերություններ ունեք և մեջտեղում մատակարարվող ապրանքների փաստաթղթերը, վճարի դիմաց, փոխանցվում են բանկի միջոցով գնորդին: Ընդ որում, մենք վճարման որևէ պարտավորություն չենք ստանձնում, այլ կատարում ենք միայն դրամական միջոցների հանձնարարականների (միջնորդի) դեր:
        </p>

        <h2 className="text-xl font-bold text-[#6c2db5] mt-8 mb-4">Ինկասոյով հաշվարկների հիմնական ձևերն են՝</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#6c2db5] text-[16px] mb-2">Փաստաթղթեր վճարման դիմաց</h3>
            <p className="text-sm text-gray-600 font-medium mb-1">(Documents Against Payment կամ D/P)</p>
            <p>Փաստաթղթերը տրամադրում ենք գնորդին միայն նրա կողմից ապրանքների դիմաց վճարելուց հետո:</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-[#6c2db5] text-[16px] mb-2">Փաստաթղթեր ակցեպտի դիմաց</h3>
            <p className="text-sm text-gray-600 font-medium mb-1">(Documents Against Acceptance կամ D/A)</p>
            <p>Փաստաթղթերը տրամադրում ենք գնորդին ապրանքների դիմաց հետագայում վճարելու պայմանով (վճարումների հետաձգման մուրհակի (վեկսելի) ակցեպտի դեպքում): Ինկասոյի այս ձևը կիրառվում է, երբ գնորդն ու վաճառողը պայմանավորվածություն ունեն վճարման հետաձգման վերաբերյալ:</p>
          </div>
        </div>

        <blockquote className="bg-purple-50 border-l-4 border-[#6c2db5] p-4 text-[14px] mb-12 rounded-r-lg">
          Ինկասո գործառնությունների վերաբերյալ լրացուցիչ տեղեկությունների և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ <strong className="text-[#6c2db5]">«Միջազգային և արտարժութային գործառնությունների»</strong> բաժին:
        </blockquote>
    </div>

       <section className="bg-[#F8F9FB] py-16 font-sans relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#784BDD]/5 rounded-full blur-[100px] -z-0" />
            
            <div className="max-w-[1440px] mx-auto px-10 relative z-10">
              
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">
                  Վերջին նորությունները
                </h2>
              <Link to="/norutyun">
                <button className="flex items-center gap-2 bg-[#F3EEFF] text-[#6600CC] px-7 py-3 rounded-full hover:bg-[#6600CC] hover:text-white transition-all duration-300 font-bold shadow-sm">
                  Բոլոր նորությունները
                  <span className="text-xl font-bold">›</span>
                </button>
              </Link>
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
};

export default Inkaso;