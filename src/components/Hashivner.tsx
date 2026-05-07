import Menu from '../pages/Menu';
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-[16px] font-bold text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-[#6c2db5]" />
        ) : (
          <ChevronDown size={20} className="text-[#6c2db5]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-8 pt-2 text-[#4a4a4a] text-[15px] leading-relaxed border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

const Hashivner: React.FC = () => {
  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/metaxakan' },
    { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/rezident' }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
     
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

     
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Հաշիվներ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Հաշիվների բացում և սպասարկում</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
          <div className="flex flex-col gap-3">
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 mb-16">
          <div className="space-y-8">
            <h1 className="text-[40px] font-bold text-gray-900 leading-[1.1] tracking-tight mt-10">
              Հաշիվների բացում և <br /> սպասարկում
            </h1>
            <div className="text-gray-800 text-[18px] leading-[1.8] space-y-6 pt-5 text-justify">
              <p>Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:</p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
              className="w-full h-auto rounded-[32px] object-cover"
              alt="Evoca Interior"
            />
          </div>
        </div>

       
        <div className='text-gray-800 text-[18px] py-10 text-justify max-w-[1100px]'>
          <p className="">
            Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong className="uppercase">Համալիր Բանկային <br />
             Ծառայությունների Մատուցման Պայմաններով</strong>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից <br />
              համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք <br />
             ներկայացնում պատշաճ լրացված և վավերացված՝ բանկային ծառայություններից օգտվելու հայտ/դիմում:
          </p>
          <p>
            Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <a href="https://www.evoca.am/file_manager/Global%20Files/%D5%80%D5%A1%D5%B4%D5%A1%D5%AC%D5%AB%D6%80%20%D5%A2%D5%A1%D5%B6%D5%AF%D5%A1%D5%B5%D5%AB%D5%B6%20%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6%20%D5%B4%D5%A1%D5%BF%D5%B8%D6%82%D6%81%D5%B4%D5%A1%D5%B6%20%20%D5%BA%D5%A1%D5%B5%D5%B4%D5%A1%D5%B6%D5%A1%D5%A3%D5%AB%D6%80.pdf" className="text-[#6c2db5] underline font-bold">այստեղ</a>:
          </p>
        </div>

      
        <div className="relative w-full h-[350px] overflow-hidden flex items-center justify-center mb-16 shadow-lg group">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 "
            alt="Banner"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-10 text-center max-w-[1000px]">
            <p className="text-white text-[28px] md:text-[32px] font-bold leading-[1.3]">
              Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի):
            </p>
          </div>
        </div>

        
        <div className="mt-16">
          <h2 className="text-[24px] font-bold text-gray-900 mb-8 uppercase tracking-widest">Անհրաժեշտ տեղեկատվություն</h2>
          
          <Accordion title="Անհրաժեշտ փաստաթղթեր">
            <ul className="list-disc list-outside ml-6 space-y-3 text-justify">
              <li>հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:</li>
              <li>անձնագիր կամ նույնականացման քարտ:</li>
              <li>սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</li>
              <li>ոչ ռեզիդենտ ֆիզիկական անձանց համար՝ օտարերկրյա անձնագիր, ինչպես նաև ՀՀ-ում բնակվելու իրավունքը հավաստող փաստաթուղթ (կացության քարտ):</li>
              <li>Բանկի կողմից պահանջվող այլ փաստաթղթեր:</li>
            </ul>
          </Accordion>

          <Accordion title="Հաշիվ բացելու ընթացակարգ">
            <p className="text-justify leading-relaxed">
              Ընթացիկ հաշիվ կարող եք բացել դրամով, դոլարով, եվրոյով, ռուբլիով, կանադական դոլարով, շվեյցարական ֆրանկով, բրիտանական ֆունտ ստերլինգով (այլ արտարժույթներով ընթացիկ հաշիվներ կարող են բացվել Բանկի հետ համաձայնեցված կարգով):
            </p>
          </Accordion>

          <Accordion title="Բանկային հաշիվների սպասարկում">
            <p className="text-justify leading-relaxed">
              Բանկային հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, Ձեր և Ձեր միջև կնքված բանկային հաշվի բացման և վարման պայմանագրով: Բանկային հաշիվների սպասարկումն իրականացնում ենք Բանկի գլխամասային գրասենյակում և մասնաճյուղերում:
            </p>
          </Accordion>

          <Accordion title="Հաշիվների սպասարկմանն առնչվող այլ դրույթներ">
            <p className="text-justify leading-relaxed">
              Հաշվի սպասարկման սակագներին կարող եք ծանոթանալ ստորև ներկայացված հղումներով: Բանկն իրավունք ունի միակողմանի փոփոխելու սակագները՝ այդ մասին նախապես տեղեկացնելով հաճախորդին:
            </p>
          </Accordion>

          <Accordion title="Բանկային հաշվի պայմանագրի լուծման պայմաններ">
            <p className="text-justify leading-relaxed">
              Հաճախորդն իրավունք ունի ցանկացած ժամանակ լուծել բանկային հաշվի սպասարկման պայմանագիրը: Պայմանագիրը լուծելու դեպքում հաշվում առկա դրամական միջոցները հաճախորդին են վերադարձվում կամ փոխանցվում այլ հաշվի՝ հաճախորդի համապատասխան դիմումը ստանալուց ոչ ուշ, քան 7 (յոթ) օրվա ընթացքում:
            </p>
          </Accordion>
        </div>

            <div className="mt-14 max-w-[1000px] flex flex-col gap-3">
                <h2 className="text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

            <a 
            href="https://www.evoca.am/files/global_files/1/bank-account-19-02-26.pdf" 
            className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
          >
            <div className="mr-4 text-[#6c2db5]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="16" cy="18" r="3" />
                <path d="m14 17 2 2 2-2" />
              </svg>
            </div>
            <span className="text-[16px] font-bold text-[#222] tracking-tight">Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 19.02.26</span>
          </a>

          <a 
            href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
            className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
          >
            <div className="mr-4 text-[#6c2db5]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="16" cy="18" r="3" />
                <path d="m14 17 2 2 2-2" />
              </svg>
            </div>
            <span className="text-[16px] font-bold text-[#222] tracking-tight">Համալրիր բանկային  ծառայությունների մատուցման պայմանների 16.05.2025</span>
          </a>


          <a 
            href="https://www.evoca.am/files/global_files/1/accounts-information-01-02-26.pdf" 
            className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
          >
            <div className="mr-4 text-[#6c2db5]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <circle cx="16" cy="18" r="3" />
                <path d="m14 17 2 2 2-2" />
              </svg>
            </div>
            <span className="text-[16px] font-bold text-[#222] tracking-tight">Բանկային հաշիվների բացման սակագներ և դրույթներ 01.02.2026թ</span>
          </a>
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
    </div>  
    </div>
  );
};

export default Hashivner;