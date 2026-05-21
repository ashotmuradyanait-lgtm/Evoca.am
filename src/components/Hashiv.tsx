import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Hashiv: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/ararka' },
  ];

  const accordionData = [
    {
      id: 1,
      title: "Անվանատիրոջ հատուկ հաշիվներ",
      content: "Անվանատիրոջ հատուկ հաշիվը կարող է օգտագործվել միայն ներդրումային ծառայություններ մատուցող անձի և ներդրումային ֆոնդի կառավարչի կողմից՝ ներդրումային ծառայությունների մատուցման կամ ներդրումային ֆոնդերի կառավարման հետ կապված գործառնությունների իրականացման համար։"
    },
    { 
      id: 2, 
      title: "Անհրաժեշտ փաստաթղթեր", 
      isList: true,
      listTitle: "Իրավաբանական անձանց դեպքում անհրաժեշտ է ներկայացնել.",
      listItems: [
        "Դիմում բանկային հաշվի բացման համար",
        "Կազմակերպության կանոնադրություն (բնօրինակը կամ նոտարական վավերացմամբ պատճենը)",
        "Պետական ռեգիստրի վկայական (իր ներդիրներով)",
        "Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ)",
        "Տնօրենի և լիազորված անձանց անձնագրերի պատճենները",
        "Ստորագրությունների նմուշների և կլոր կնիքի դրոշմի քարտ"
      ]
    },
    { 
      id: 3, 
      title: "Հիմնական սակագներ (Աղյուսակ)", 
      isTable: true,
      tableData: [
        { label: "Հաշվի բացում", value: "Անվճար" },
        { label: "Հաշվի սպասարկում (ամսական)", value: "0 - 5,000 ՀՀ դրամ" },
        { label: "Կանխիկացում Բանկի դրամարկղերից", value: "0.2% - 0.5%" },
        { label: "Միջբանկային փոխանցումներ", value: "0.1% (նվազ. 200 դրամ)" },
        { label: "Հաշվի փակում", value: "Անվճար" }
      ]
    },
    { 
      id: 4, 
      title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ", 
      isList: true,
      listItems: [
        "Հաշիվների բացման և փակման դիմաց միջնորդավճարներ չեն գանձվում",
        "Հաշիվների նվազագույն մնացորդ չի սահմանվում",
        "Հաշվի տնօրինումը կարող է սահմանափակվել դատական ակտերի հիման վրա",
        "Գործառնությունները կատարվում են հաճախորդի հանձնարարականների հիման վրա"
      ]
    },
    { 
      id: 5, 
      title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ", 
      content: "Դուք ցանկացած ժամանակ կարող եք պահանջել լուծել բանկային հաշվի սպասարկման պայմանագիրը և Ձեր հայեցողությամբ տնօրինել հաշվին առկա դրամական մնացորդը։" 
    },
    { 
      id: 6, 
      title: "Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում", 
      content: "ԵՎՈԿԱԲԱՆԿ ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև Օտարերկրյա հաշիվների հարկային համապատասխանության ակտի կիրարկմանն օժանդակելու նպատակով կարող է պահանջել լրացուցիչ տեղեկատվություն։" 
    }
  ];

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen pb-20">
     
      <div className="flex items-center gap-6 pt-14">
        <Link to="/">
          <img 
            className="h-[140px] w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        <nav className="flex gap-3 text-gray-800 font-medium text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        <Link to="/evocaonline" className="px-20">
          <div className="text-white bg-[#6c2db5] h-[40px] w-[150px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-bold">EvocaONLINE</div>
        </Link>
      </div>

   
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
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
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հաշիվներ</span>
        <span>›</span>
        <span className="text-gray-800">Հաշիվների բացում և սպասարկում</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-12 mt-4">
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="flex-1 p-12 lg:p-20 order-2 md:order-1">
            <h1 className="text-[36px] lg:text-[52px] font-bold text-[#2d2d2d] mb-6 leading-[1.15]">
              Հաշիվների բացում <br className="hidden lg:block" />
              և սպասարկում
            </h1>
            <p className="text-[#4a4a4a] text-[16px] lg:text-[18px] max-w-[500px] leading-relaxed">
              Ընթացիկ հաշիվներ Ձեր ֆինանսների հարմար և անվտանգ կառավարման համար:
            </p>
          </div>
          <div className="flex-1 relative w-full h-[300px] md:h-full min-h-[400px] lg:min-h-[500px] order-1 md:order-2">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16116367969264/780x585.jpg" 
              alt="Account Opening" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="bg-white p-8 lg:p-12 rounded-[32px] border border-gray-100 shadow-sm">
          <p className="text-[#2d2d2d] text-[16px] lg:text-[18px] font-medium mb-6 leading-relaxed">
            Բանկային հաշիվը Ձեր դրամական միջոցները պահելու և դրանցով ամենօրյա գործարքներ կատարելու լավագույն միջոցն է:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Հաշիվների բացում ֆիզիկական և իրավաբանական անձանց համար",
              "Հաշիվների բացում ՀՀ դրամով և արտարժույթով",
              "Անվճար քաղվածքների տրամադրում",
              "Հաշիվների հեռահար կառավարում EvocaTOUCH համակարգով",
              "Կանխիկ և անկանխիկ գործառնությունների իրականացում",
              "Փոխանցումներ ՀՀ տարածքում և արտերկիր"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-[#6c2db5] rounded-full flex-shrink-0" />
                <span className="text-[#4a4a4a] text-[15px] lg:text-[16px] leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <h2 className="text-[24px] lg:text-[28px] font-bold text-[#6c2db5] mb-8 uppercase tracking-wide">
          Անհրաժեշտ տեղեկատվություն
        </h2>
        <div className="flex flex-col">
          {accordionData.map((section) => (
            <div key={section.id} className="border-b border-gray-200/80">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-6 text-left group transition-all"
              >
                <span className={`text-[17px] lg:text-[19px] font-bold transition-colors duration-300 pr-4 ${openSections.includes(section.id) ? 'text-[#6c2db5]' : 'text-[#2d2d2d] group-hover:text-[#6c2db5]'}`}>
                  {section.title}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openSections.includes(section.id) ? 'rotate-180 text-[#6c2db5]' : 'text-[#6c2db5]'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              {openSections.includes(section.id) && (
                <div className="pb-8 pt-2">
                  <div className="text-[15px] lg:text-[16px] text-[#4a4a4a] leading-[1.8] max-w-[1000px]">
                   
                    {section.isTable ? (
                      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                              <th className="py-4 px-6 font-bold text-[#2d2d2d] w-2/3">Ծառայության անվանում</th>
                              <th className="py-4 px-6 font-bold text-[#2d2d2d]">Սակագին</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.tableData?.map((row, idx) => (
                              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 px-6 text-[#4a4a4a]">{row.label}</td>
                                <td className="py-4 px-6 font-medium text-[#2d2d2d]">{row.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : section.isList ? (
                      <div className="w-full">
                        {section.listTitle && <p className="mb-4 font-semibold text-[#2d2d2d]">{section.listTitle}</p>}
                        <table className="w-full text-left border-collapse border border-[#6c2db5]">
                          <tbody>
                            {section.listItems?.map((item, idx) => (
                              <tr key={idx} className="border border-[#6c2db5] hover:bg-[#6c2db5]/5 transition-colors">
                                <td className="py-3 px-4 border border-[#6c2db5] w-20 align-middle text-center">
                                  <img 
                                    src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
                                    alt="Media" 
                                    className="w-12 h-6 object-contain mx-auto"
                                  />
                                </td>
                                <td className="py-3 px-4 border border-[#6c2db5] text-[#4a4a4a] align-middle">
                                  {item}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      section.content
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
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

export default Hashiv;