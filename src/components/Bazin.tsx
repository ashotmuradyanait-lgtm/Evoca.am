import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Bazin: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');


  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    capital: false,
    dividends: false,
  });

  
  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const subMenuItems = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '' },
    { name: 'CSR', path: '' },
  ];

  // Կապիտալի փոփոխության տվյալներ
  const capitalChanges = [
    { year: '2016թ.', text: 'Մեր մասնակիցների 08.07.2016թ. արտահերթ ընդհանուր ժողովի որոշմամբ` Բանկը սահմանափակ պատասխանատվության ընկերությունից վերակազմավորվել է փակ բաժնետիրական ընկերության և մեր փաստացի համալրված կանոնադրական կապիտալը (14 մլրդ. 400 մլն. դրամ) բաժանվել է 144,000 հատ հասարակ բաժնետոմսերի, յուրաքանչյուրը՝ 100,000 դրամ անվանական արժեքով:' },
    { year: '2016թ.', text: '2016թ. Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. 550 մլն. դրամով և կազմել 17 մլրդ. 950 մլն. դրամ: Մենք տեղաբաշխել ենք 100,000 դրամ անվանական արժեքով 35,500 հատ արտոնյալ բաժնետոմս:' },
    { year: '2020թ.', text: '2020թ. Բանկի կանոնադրական կապիտալը համալրվել է 2 մլրդ. 50 մլն. դրամով և կազմել 20 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք նաև 29.05.2020թ. թողարկման 100,000 դրամ անվանական արժեքով 14,500 հատ արտոնյալ բաժնետոմս:' },
    { year: '2020թ.', text: '2020թ. ՀՀ քաղաքացի Մարետա Գևորգյանը դարձել է Բանկի ուղղակի նշանակալից բաժնետերը:' },
    { year: '2022թ.', text: '2022թ. ՀՀ քաղաքացի Մարետա Գևորգյանի կողմից Բանկի կանոնադրական կապիտալը համալրվել է 3 մլրդ. դրամով և կազմել 23 մլրդ. դրամ: Այդ թվում՝ մենք տեղաբաշխել ենք 12.03.2022թ. թողարկման 100,000 ՀՀ դրամ անվանական արժեքով 7,500 հատ արտոնյալ բաժնետոմս:' },
  ];

  // Շահութաբաժինների բաշխման տվյալներ
  const dividendDistributions = [
    { year: '2003-2006 թթ.', text: '2003-2006 թթ. մեր մասնակիցների միջև շահութաբաժիններ չեն բաշխվել: Ընդհանուր ժողովի որոշմամբ` փաստացի ստացված զուտ շահույթն ուղղվել է մեր կանոնադրական հիմնադրամի համալրմանը կամ որպես չբաշխված շահույթ թողնվել մեր տրամադրության տակ:' },
    { year: '2006թ.', text: '2006թ. 9 ամսվա գործունեության արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 80 մլն. դրամ շահութաբաժին:' },
    { year: '2007թ.', text: '2007թ. 9 ամսվա գործունեության արդյունքներով մեր մասնակիցներին միջանկյալ վճարվել է 55 մլն. դրամ շահութաբաժին:' },
    { year: '2008թ.', text: '2008թ. փաստացի ստացված զուտ շահույթն Ընդհանուր ժողովի որոշմամբ թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2009թ.', text: '2009թ. Ընդհանուր ժողովի որոշմամբ՝ փաստացի ստացված զուտ շահույթից 70 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2010-2012 թթ.', text: '2010-2012 թթ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2013թ.', text: '2013թ. փաստացի ստացված զուտ շահույթից 895 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2014թ.', text: '2014թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2015թ.', text: '2015թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2016թ.', text: '2016թ. փաստացի ստացված զուտ շահույթը, Ընդհանուր ժողովի որոշմամբ, թողնվել է մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2017թ.', text: '2017թ. փաստացի ստացված զուտ շահույթից 78 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2018թ.', text: '2018թ. փաստացի ստացված զուտ շահույթից 426 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2019թ.', text: '2019թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2020թ.', text: '2020թ. փաստացի ստացված զուտ շահույթից 426 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2021թ.', text: '2021թ. փաստացի ստացված զուտ շահույթից 482 մլն. ՀՀ դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
    { year: '2022թ.', text: '2022թ. փաստացի ստացված զուտ շահույթից 571 մլն. դրամ վճարվել է մեր մասնակիցներին, իսկ մնացած մասը՝ թողնվել մեր տրամադրության տակ՝ որպես չբաշխված շահույթ:' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto">
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
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Բաժնետերեր</span>
      </div>

     
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-[1400px] mx-auto px-6 mb-6">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Բաժնետերեր</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20 font-sans relative">
        
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-gray-100 pb-10 relative z-10">
          <div className="w-full md:w-[280px] shrink-0">
            <img 
              src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" 
              alt="Մարետա Գևորգյան" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-[15px] leading-relaxed text-[#333333]">
            <h2 className="text-[#6c2db5] text-[22px] font-bold mb-4">Մարետա Գևորգյան</h2>
            <p className="mb-4">
              Մարետա Գևորգյանը միանձնյա տիրապետում է Evocabank-ի բաժնետոմսերի <strong>100%-ին</strong>:
            </p>
            <p className="mb-4">
              Նա ծնվել է Դիլիջանում, ավարտել է Դիլիջանի միջնակարգ դպրոցը, այնուհետև՝ Երևանի պետական մանկավարժական ակադեմիան:
            </p>
            <p className="mb-4">
              2008 թվականից բնակվելով Շվեյցարիայում՝ նա ակտիվորեն ներգրավված է բանկային, տարածքային զարգացման և սոցիալական նախաձեռնություններում՝ նպաստելով Հայաստանի կայուն զարգացմանը:
            </p>
            <p className="mt-6 text-[14px] text-gray-600 italic">
              <strong>Նշում.</strong> Բանկն անուղղակի նշանակալից մասնակից չունի:
            </p>
          </div>
        </div>

        {/* Legal Notice Section */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10 border border-gray-100 relative z-10">
          <h3 className="text-[18px] font-bold text-[#6c2db5] mb-6">ԱՐԺԵՔԱՎՈՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h3>
          
          <div className="space-y-6 text-[14px] text-[#444444] leading-relaxed">
            <div>
              <p className="font-bold text-[#1a1a1a] mb-2 underline decoration-[#6c2db5] decoration-2 underline-offset-4">Զգուշացում.</p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի յուրաքանչյուր բաժնետեր, համաձայն «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ մասի, իրավունք ունի ստանալու մեր վերջին տարեկան հաշվետվության և արտաքին աուդիտի եզրակացության պատճենները:
                </li>
                <li>
                  «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի տեղաբաշխված քվեարկող բաժնետոմսերի 2%-ին և ավելիին տիրապետող յուրաքանչյուր բաժնետեր իրավունք ունի ստանալու «Բանկերի և բանկային գործունեության մասին» Հայաստանի Հանրապետության օրենքի 43-րդ հոդվածի 4-րդ և 5-րդ մասերով սահմանված տեղեկությունները:
                </li>
                <li>
                  Վերոնշյալ տեղեկությունները տրամադրվում են <strong>ԱՆՎՃԱՐ</strong>՝ բաժնետիրոջ գրավոր դիմումը ստանալուց հետո 3 (երեք) աշխատանքային օրվա ընթացքում: Գրավոր դիմումը կարող է ներկայացվել առձեռն՝ մեր Գլխամասային գրասենյակում, ցանկացած մասնաճյուղում կամ ներկայացուցչությունում, էլեկտրոնային հասցեով՝ <a href="mailto:hello@evoca.am" className="text-[#6c2db5] hover:underline">hello@evoca.am</a> կամ փոստով՝ ՀՀ, 0010, ք. Երևան, Հանրապետության 44/2 հասցեով:
                </li>
                <li>
                  Շահութաբաժինների բաշխումը կատարվում է ՀՀ օրենսդրական ակտերի համաձայն և Բանկի Կանոնադրությամբ սահմանված կարգով:
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate Documents Accordions */}
        <div className="space-y-4 mb-10 relative z-10">
          {/* Capital Change Accordion */}
          <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
            <button 
              onClick={() => toggleAccordion('capital')}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-[15px] text-left">Տեղեկատվություն մեր Կանոնադրական կապիտալի փոփոխության վերաբերյալ</span>
              <span className={`text-[#6c2db5] transform transition-transform duration-300 ${openAccordions['capital'] ? 'rotate-90' : ''}`}>›</span>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openAccordions['capital'] ? 'max-h-[1000px] border-t border-gray-200' : 'max-h-0'}`}>
              <div className="p-6 space-y-4 text-[14px] text-[#444444] leading-relaxed">
                {capitalChanges.map((change, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="font-bold text-[#6c2db5] shrink-0 mt-1">•</span>
                    <p><strong>{change.year}</strong> {change.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dividends Accordion */}
          <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
            <button 
              onClick={() => toggleAccordion('dividends')}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-[15px] text-left">Տեղեկատվություն շահութաբաժինների բաշխման վերաբերյալ</span>
              <span className={`text-[#6c2db5] transform transition-transform duration-300 ${openAccordions['dividends'] ? 'rotate-90' : ''}`}>›</span>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${openAccordions['dividends'] ? 'max-h-[2000px] border-t border-gray-200' : 'max-h-0'}`}>
              <div className="p-6 space-y-4 text-[14px] text-[#444444] leading-relaxed">
                {dividendDistributions.map((dist, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="font-bold text-[#6c2db5] shrink-0 mt-1">•</span>
                    <p><strong>{dist.year}</strong> {dist.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

     <div className="mt-12 flex flex-col gap-3">
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

             <a 
                href="https://www.evoca.am/files/menu/1/17551599638181.pdf" 
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
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">Կանոնադրություն</span>
            </a>

            <a 
                href="https://www.evoca.am/files/menu/1/17555223060884.pdf" 
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
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">Բանկային գործունեության լիցենզիա</span>
            </a>

            <a 
                href="https://www.evoca.am/files/menu/1/17555223060892.pdf" 
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
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">Բանկի Գրանցման վկայականը</span>
            </a>
        </div>

      </div>
    </div>
  );
};

export default Bazin;