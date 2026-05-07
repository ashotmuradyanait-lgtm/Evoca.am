import Menu from '../pages/Menu';
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-[22px] font-bold text-gray-800 lowercase">{title}</span>
        {isOpen ? (
          <ChevronUp size={24} className="text-[#6c2db5]" />
        ) : (
          <ChevronDown size={24} className="text-[#6c2db5]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-10 pt-4 text-[#4a4a4a] text-[15px] leading-relaxed border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

const Metaxakan: React.FC = () => {
  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '/hashivner' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '' },
    { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/rezident' }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${item.name === 'Առարկայազուրկ մետաղական հաշիվներ' ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
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
        <span className="text-gray-800 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
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

        <div className="flex flex-col md:flex-row gap-10 items-start mb-10 pt-4">
          <div className="flex-1">
            <h1 className="text-[40px] font-bold text-gray-900  mb-20">Առարկայազուրկ մետաղական <br />
             հաշիվներ</h1>
            <p className="text-[19px] font-semibold text-gray-900 leading-relaxed">
              Առաջարկում ենք բացել առարկայազուրկ մետաղական <br />
             հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու <br />
             հաշվառման համար: Այս ցպահանջ հաշիվները <br />
              հնարավորություն են ընձեռում խնայողություններ կատարել <br />
             անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ <br />
             միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
            </p>
          </div>
          <div className="flex-1">
            <img src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png" alt="Gold Bars" className="w-full h-auto" />
          </div>
        </div>

        <Accordion title="Հիմնական պայմաններ">
          <div className="space-y-6">
            <p>
              Հաշիվները բացվում են ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն <span className="text-[#6c2db5] font-bold">999.9 հարգի</span> ոսկով: Հաշվում չկա նվազագույն մնացորդի պահանջ: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած <span className="text-[#6c2db5] font-bold">31.1 գրամից</span> (հաշվարկը կատարվում է դրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական արժեքները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:
            </p>

            <p>
              Հաշվում առկա անկանխիկ ոսկին հաշվառվում է գրամով՝ ՀՀ Կենտրոնական բանկի հայտարարած փոխարժեքին համապատասխան և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիայով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամ):
            </p>

            <p>
              Հաշիվը/ները բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ իրավական ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:
            </p>

            <p className="font-bold text-gray-800">Դուք կարող եք իրականացնել հետևյալ գործառնությունները՝</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-[#6c2db5]">
              <li><span className="font-bold">Գնում՝</span> բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև Ձեր այլ հաշվից կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով:</li>
              <li><span className="font-bold">Վաճառք՝</span> հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև Ձեր այլ հաշվին կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</li>
            </ul>

            <p>Մետաղական հաշիվները կարող են գրավադրվել:</p>
            
            <p className="font-bold text-[#6c2db5] lowercase">հաշվի բացման համար անհրաժեշտ փաստաթղթերը՝</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#6c2db5]">
              <li>Դիմում՝ բանկի ձևանմուշի համաձայն:</li>
              <li>Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:</li>
              <li>Բանկի պահանջով այլ փաստաթղթեր:</li>
            </ul>

            <p>
              Լրացուցիչ տեղեկությունների համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ, ծանոթանալ մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին՝ այցելելով <Link to="https://www.evoca.am/hy/tariffs-for-commissions/cards-tariffs/tariffs-payment-cards" className="text-[#6c2db5] underline font-bold">այստեղ</Link>։
            </p>

            <p>
              Դուք կարող եք ձեռք բերել <Link to="#" className="text-[#6c2db5] underline font-bold">ոսկու գրավով վարկեր</Link>՝ ամենահարմար պայմաններով: Ոսկյա իրերի գրավադրմամբ անձնական, ընտանեկան, տնային կամ այլ օգտագործման համար նախատեսված, ձեռնարկատիրական գործունեության հետ չկապված, ապրանքների (աշխատանքների, ծառայությունների) պատվիրման կամ ձեռքբերման նպատակով:
            </p>
          </div>
        </Accordion>

         <a 
            href="https://www.evoca.am/files/global_files/1/16593544993951.pdf" 
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
            <span className="text-[16px] font-bold text-[#222] tracking-tight">տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 01.08.2022</span>
          </a>
          <br />
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
            <span className="text-[16px] font-bold text-[#222] tracking-tight">Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025</span>
          </a>
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

export default Metaxakan;