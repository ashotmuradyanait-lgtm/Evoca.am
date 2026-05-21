import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Dasakan: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Դասական ավանդ', path: '/dasakan' },
  ];

  const accordionData = [
    {
      id: 1,
      title: "Ընդհանուր տեղեկատվություն",
      content: (
        <div className="space-y-4 text-[#4a4a4a] text-[15px] leading-relaxed">
          <p>Դասական ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից (այդ թվում՝ անհատ ձեռնարկատերերից):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Արժույթը՝ ՀՀ դրամ, ԱՄՆ դոլար, Եվրո և ՌԴ ռուբլի:</li>
            <li>Տևողությունը՝ 91-ից մինչև 1095 օր:</li>
            <li>Նվազագույն գումարը՝ 25,000 ՀՀ դրամ կամ համարժեք արտարժույթ:</li>
          </ul>
        </div>
      )
    },
    { id: 2, title: "Տոկոսագումարների հաշվարկման և վճարման կարգը", content: "..." },
    { id: 3, title: "Տարեկան տոկոսային եկամտաբերություն", content: "..." },
    { id: 4, title: "Այլ պայմաններ", content: "..." }
  ];

  return (
    <div className="w-full bg-[#f9f9f9] font-sans min-h-screen pb-20 overflow-x-hidden">
    
      <div className="flex flex-col lg:flex-row items-center justify-between gap-2 pt-4 lg:pt-14 px-4 lg:px-6 max-w-[1400px] mx-auto">
        <Link to="/" className="shrink-0">
          <img 
            className="h-[80px] w-[180px] lg:h-[140px] lg:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 lg:gap-3 text-gray-800 font-medium text-[13px] lg:text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold text-[#6c2db5]">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold hidden md:block">Արժեթղթերի շուկա</Link>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold hidden lg:block">Առևտրի ֆինանսավորում</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>

        <div className="lg:px-10">
          <Link to="/evocaonline" className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] flex items-center justify-center rounded-3xl text-[14px] font-bold transition-all">
            EvocaONLINE
          </Link>
        </div>
      </div>      
      
    
      <div className="w-full bg-[#6c2db5] text-white mt-6 lg:mt-10">
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

    
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-4 lg:py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[11px] lg:text-[13px]">
        <Link to="/" className="hover:text-gray-600 transition-colors">🏠</Link>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer">Բիզնես</span>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer">Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800">Դասական ավանդ</span>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-8 lg:mb-12">
        <div className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center shadow-sm border border-gray-100">
          <div className="flex-1 p-8 lg:p-20 order-2 md:order-1">
            <h1 className="text-[32px] lg:text-[56px] font-bold text-[#2d2d2d] mb-4 lg:mb-6 leading-tight">
              Դասական <br className="hidden lg:block" /> ավանդ
            </h1>
            <p className="text-[#4a4a4a] text-[15px] lg:text-[18px] mb-6 lg:mb-8 max-w-[500px] leading-relaxed">
              Ապահովեք Ձեր դրամական միջոցների կայուն աճն ու պահպանումը բարձր եկամտաբերությամբ՝ ներդնելով Դասական ավանդ։
            </p>
            <div className="flex flex-col gap-3 lg:gap-4 text-[#6c2db5] font-medium text-[14px] lg:text-[16px]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full shrink-0"></span>
                Ավանդների ընդունում ֆիզիկական և իրավաբանական անձանցից
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full shrink-0"></span>
                Անվճար միջազգային քարտ՝ ավանդի ներդրման դեպքում
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-full min-h-[350px] lg:min-h-[500px] order-1 md:order-2">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
              alt="Classic Deposit" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

  
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <h2 className="text-[22px] lg:text-[28px] font-bold text-[#6c2db5] mb-6 lg:mb-8">Անհրաժեշտ տեղեկատվություն</h2>
        <div className="flex flex-col gap-3 lg:gap-4">
          {accordionData.map((section) => (
            <div key={section.id} className="bg-white rounded-xl lg:rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-[16px] lg:text-[18px] font-semibold text-[#2d2d2d] pr-4">{section.title}</span>
                <span className={`text-xl lg:text-2xl text-[#6c2db5] transform transition-transform duration-300 ${openSections.includes(section.id) ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {openSections.includes(section.id) && (
                <div className="p-5 lg:p-6 pt-0 border-t border-gray-50">
                  <div className="text-[14px] lg:text-[15px]">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-2xl bg-white py-6 px-3 shadow-lg z-50">
        <div className="flex flex-col gap-4">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>
       <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 overflow-hidden font-sans bg-gray-50">
      <div className="relative w-full bg-[#6600cc] min-h-[600px] lg:min-h-[650px] rounded-tl-[60px] sm:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[120px] flex items-center p-6 sm:p-10 md:p-16 shadow-[0_20px_50px_rgba(102,0,204,0.3)] overflow-hidden">
        
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hidden md:block absolute top-10 left-[5%] w-12 h-12 bg-pink-400/20 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[60%] left-[5%] w-8 h-8 bg-pink-500/30 rounded rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-[5%] w-12 h-12 md:w-16 md:h-16 bg-pink-300/20 rounded-2xl animate-spin" style={{ animationDuration: '8s' }}></div>
          
          <div className="hidden lg:block absolute top-[15%] right-[25%] w-10 h-10 bg-amber-400/20 rounded-lg animate-bounce" style={{ animationDuration: '5.5s' }}></div>
          <div className="absolute bottom-[5%] left-[10%] w-10 h-10 bg-amber-300/20 rounded-xl rotate-12 animate-pulse" style={{ animationDuration: '3.5s' }}></div>

          <div className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-amber-400/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full relative z-10">
          
        
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
              <div className="bg-black p-[1.5%] rounded-t-xl border-x-[3px] md:border-x-[6px] border-t-[3px] md:border-t-[6px] border-[#222] shadow-2xl">
                <div className="aspect-video bg-black overflow-hidden relative">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="video.mp4" 
                    title="EvocaTouch"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="h-2 md:h-3 bg-[#333] rounded-b-lg w-[106%] -ml-[3%] shadow-2xl"></div>
              <div className="h-1 bg-[#111] w-[20%] mx-auto rounded-b-md"></div>
            </div>
          </div>

        
          <div className="hidden sm:flex lg:col-span-3 justify-center lg:pt-20 order-3 lg:order-2">
            <div className="relative w-32 h-[260px] md:w-44 md:h-[350px] bg-black rounded-[25px] md:rounded-[30px] border-[5px] md:border-[7px] border-[#1a1a1a] overflow-hidden shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                className="w-full h-full object-cover"
                alt="phone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white font-black text-lg md:text-xl italic uppercase tracking-tighter">
                evoca
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-4 space-y-6 md:space-y-8 text-white text-center lg:text-left order-1 lg:order-3">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                Օնլայն և <br className="hidden lg:block" />
                <span className="text-purple-300">մոբայլ բանկ</span>
              </h1>
              <p className="text-sm md:text-base opacity-80 leading-relaxed font-light max-w-xs md:max-w-sm mx-auto lg:mx-0">
                Evocabank-ը արագ, պարզ և նորարարական ծառայություններ մատուցող բանկ է՝ Ձեր հարմարավետության համար:
              </p>
            </div>
            
            <button className="bg-white text-[#6600cc] px-8 md:px-12 py-3 md:py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-transform">
              Դառնալ հաճախորդ
            </button>

            <div className="pt-4 md:pt-8 flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-1.5 md:p-2 shadow-xl">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    className="w-full h-full"
                    alt="qr"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold leading-snug opacity-90 uppercase tracking-widest text-left">
                  Ներբեռնեք <br /> <span className="text-purple-300">հավելվածը</span>
                </span>
              </div>
              
              <div className="flex gap-2 md:gap-3">
                <a href="https://apps.apple.com/am/app/evocatouch/id970309076" className="active:scale-90 transition-transform">
                   <img 
                      src="https://cdn.prod.website-files.com/5c67cca1c8252c4258aad60b/6508be8577cc9ad9700103a4_Download_on_the_App_Store_Badge.svg.png" 
                      alt="App Store" 
                      className="h-8 md:h-10 w-auto"
                   />
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" className="active:scale-90 transition-transform">
                   <img 
                      src="https://bciconline.com/wp-content/uploads/2025/09/1664287128google-play-store-logo-png.png" 
                      alt="Google Play" 
                      className="h-8 md:h-10 w-auto"
                   />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .grid {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
          h1 { font-size: 2.2rem !important; }
          .lg\\:col-span-5 { width: 100%; order: 2; }
          .lg\\:col-span-4 { width: 100%; order: 1; }
          .lg\\:col-span-3 { display: none; }
        }
        @media (max-width: 640px) {
          .relative.w-full { min-h-fit !important; padding: 2rem 1rem !important; }
          h1 { font-size: 1.8rem !important; }
          button { width: 100%; padding: 1rem !important; }
          .flex-col.items-center { gap: 1.5rem !important; }
        }
      `}} />
    </div>
    </div>
  );
};

export default Dasakan;