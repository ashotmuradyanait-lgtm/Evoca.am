import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Pos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'V-POS Տերմինալ', path: '/digital' },
    { name: 'POS Տերմինալ', path: '' },
    { name: 'Սակագներ', path: '/sak' },
    { name: 'Տերմինալի տեղադրման հայտ', path: '/terminal' },
    { name: 'Evoca Mobile POS՝ mPOS', path: '/mpos' },
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
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        
        <Link to="/evocaonline" className="mt-4 md:mt-0 flex justify-center items-center">
          <span className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-medium transition-colors text-center">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium
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
        <span className="cursor-pointer hover:text-gray-600">Դիջիթալ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">POS Տերմինալ</span>
      </div>

     
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 pb-20 text-[15px] leading-relaxed text-gray-700">
        
        
        <div className="flex flex-col md:flex-row items-center gap-8 my-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#6c2db5] mb-4">POS Տերմինալ</h1>
            <p className="text-base font-medium text-gray-950 mb-3">
              POS տերմինալը սարքավորում կամ վճարային համակարգ է, որն ապահովում է առևտրի և սպասարկման կետերում անկանխիկ վճարումներ ընդունելու, ինչպես նաև այդ գործարքներին առնչվող այլ գործառույթներ կատարելու այսօր կարևոր նախապայման է Ձեր գնորդների համար:
            </p>
            <p className="mb-4">
              Ձեր հաճախորդները կկարողանան գնումներ կատարել <strong className="text-[#6c2db5]">իրենց միջազգային VISA, MasterCard և տեղական ArCa վճարային քարտերով</strong>:
            </p>
            <p className="mb-4">
              Ծառայությունը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում:
            </p>
            <p className="font-semibold mb-4">
              Ինչու՞ տեղադրել Evocabank-ի POS տերմինալը՝
            </p>
            <p className="mb-4">
              Evocabank-ի POS-ով կատարված վաճառքներից կգանձվեն <strong className="text-[#6c2db5]">նվազագույն միջնորդավճարներ</strong>՝ հատուկ Ձեր բիզնեսի համար։ Վիրտուալ սպասարկման կետի գրանցման համար անհրաժեշտ POS, ՀԴՄ-POS, mPOS, VENDISTA տերմինալների տեղադրման <strong className="text-[#6c2db5]">ստանդարտ սակագներն ու պայմաններն են</strong>՝
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16158085302978/780x585.jpg" 
              alt="POS Terminal Illustration" 
              className="w-full max-w-[450px] rounded-2xl shadow-sm object-cover"
            />
          </div>
        </div>

        
        <div className="bg-purple-50 border-l-4 border-[#6c2db5] p-5 my-6 rounded-r-2xl text-sm">
          <p className="font-medium text-gray-900">
            * Եթե վաճառակետի գործունեության տեսակը չի համընկնում ԿԲ կողմից ներկայացված ստորև տեսակի կոդին կամ գերազանցում է տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝
          </p>
        </div>

       
        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm mb-12">
          <table className="w-full text-left border-collapse text-[14px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-gray-700">Գործարքի տեսակ</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Արքա համակարգի անդամ հանդիսացող բանկերի թողարկված MasterCard, Visa, Upay քարտերի դեպքում</th>
                <th className="p-4 font-semibold text-gray-700 text-center">Ոչ Արքա համակարգի անդամ հանդիսացող բանկերի թողարկված MasterCard, Visa, Upay քարտերի դեպքում</th>
                <th className="p-4 font-semibold text-gray-700 text-center">QR կոդով վճարման դեպքում</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-center">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-left font-medium bg-gray-50">Գանձվող գումարի չափ</td>
                <td className="p-4 font-bold text-gray-900">1.5 %</td>
                <td className="p-4 font-bold text-gray-900">1.7 %</td>
                <td className="p-4 font-bold text-gray-900">3.0 %</td>
                <td className="p-4 font-bold text-gray-900">1 %</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-left font-medium bg-gray-50">Ամսական անկանխիկ շրջանառության նվազագույն չափ (ՀՀ դրամ)</td>
                <td colSpan={2} className="p-4 text-left text-xs text-gray-600 font-medium">
                  Բանկի կողմից տրամադրված POS տերմինալով՝ <span className="font-bold text-gray-900">10,000</span><br />
                  Բանկի կողմից տրամադրված ՀԴՄ-POS տերմինալով՝ <span className="font-bold text-gray-900">7,000</span><br />
                  Տնտեսվարողի սեփական ՀԴՄ-POS տերմինալով՝ <span className="font-bold text-gray-900">3,000</span>
                </td>
                <td colSpan={2} className="p-4 text-center text-xs text-gray-500 font-medium">
                  mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում
                </td>
              </tr>
            </tbody>
          </table>
        </div>

       
        <div className="bg-purple-50 rounded-2xl p-6 md:p-8 border border-purple-100 my-8">
          <h2 className="text-xl font-bold text-[#6c2db5] mb-3">Վարկ POS տերմինալի շրջանառության հիման վրա</h2>
          <p className="mb-4 text-sm text-gray-800">
            Եթե Դուք փոքր և միջին բիզնես եք իրականացնում և ունեք անկանխիկ գործարքներ, ապա այս բիզնես վարկը հենց Ձեզ համար է։ Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց հրատապ ֆինանսական խնդիրները լուծելու համար։
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="#" className="inline-flex justify-center items-center text-white bg-[#6c2db5] hover:bg-[#530498] px-6 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm">
              Լրացրեք հայտը հենց հիմա
            </Link>
            <Link to="#" className="inline-flex justify-center items-center text-[#6c2db5] border border-[#6c2db5] hover:bg-purple-100 px-6 py-2.5 rounded-full font-medium text-sm transition-colors">
              Իմանալ ավելին
            </Link>
          </div>
        </div>

       
        <div className="border border-gray-100 shadow-sm p-6 rounded-2xl my-8">
          <h3 className="font-bold text-gray-900 text-base mb-3">Ի՞նչ է սպասվում հայտը լրացնելուց հետո․</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Մեր մասնագետը <strong className="text-gray-900">1 աշխատանքային օրվա ընթացքում</strong> կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը։</li>
            <li>Պայմանագրի ստորագրումից հետո POS կամ V-POS տերմինալը <strong className="text-[#6c2db5]">կտեղադրվի Ձեր բիզնեսի կայքում կամ վաճառակետում</strong>։</li>
          </ul>
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

export default Pos;