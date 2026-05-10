import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Poxancum: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Դրամական փոխանցումներ', path: '' },
    { name: 'Վճարային համակարգեր', path: '' },
  ];

  const accordionData = [
    {
      id: 'dramakan',
      title: 'Փոխանցումներ դրամով',
      content: [
        'Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:',
        'Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:',
      ],
    },
    {
      id: 'mijazgayin',
      title: 'Միջազգային փոխանցումներ',
      content: [
        'Մեր SWIFT համակարգով անում ենք և ձեր արտարժութային միջազգային փոխանցումներն իրականացնում ենք այս համակարգով: Այն ապահովում է արագ և անվտանգ փոխանցումներ՝ միջազգային բանկային ստանդարտներին համապատասխան:',
        'Փոխանցումը կատարվում է միայն փոխանցվող գումարի և միջնորդավճարի գումարի փաստացի առկայության դեպքում:',
      ],
    },
    {
      id: 'vcharayin',
      title: 'Վճարային համակարգեր',
      content: [
        'Դրամական փոխանցումների վճարային համակարգերը հնարավորություն են տալիս շատ արագ, առանց բանկային հաշվի բացման, պարզեցված ընթացակարգով, ոչ առևտրային բնույթի փոխանցումներ կատարել ֆիզիկական անձանց միջև՝ դեպի աշխարհի տարբեր երկրներ:',
      ],
    },
    {
      id: 'paymanner',
      title: 'Փոխանցման պայմանների փոփոխում կամ չեղյալացում',
      content: [
        'Փոխանցումների վավերապայմանների փոփոխումը կամ փոխանցման չեղյալացումը կատարում ենք փոխանցումը նախաձեռնող անձի գրավոր դիմումի հիման վրա՝ նրանից գանձելով միջնորդավճարներ (սակագներին կարող եք ծանոթանալ Բանկային փոխանցումներ բաժնում):',
      ],
    },
  ];

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive || index === 0 ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
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
        <span className="cursor-pointer hover:text-gray-600">Փոխանցումներ</span>
        <span>›</span>
        <span className="text-gray-800">Դրամական փոխանցումներ</span>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 pb-20">
        
        <section className="flex flex-col lg:flex-row items-center gap-12 mt-4">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-[40px] font-bold text-[#1d1d1f] leading-tight">
              Դրամական <br /> փոխանցումներ
            </h1>
            <p className="text-[16px] text-gray-700 leading-relaxed">
              Բանկային դրամական փոխանցումներ Հայաստանում և դեպի արտերկիր՝ դրամով և արտարժույթով։ 
              Փոխանցումներն իրականացվում են միջազգային ստանդարտներին համապատասխանող համակարգերով։
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
              alt="Evocabank Office" 
              className="w-full h-auto object-cover rounded-sm shadow-md"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-[28px] font-bold text-[#1d1d1f] mb-8">Ընդհանուր դրույթներ</h2>
          <div className="space-y-6 text-[15px] text-gray-700">
            <p className="flex items-start">
              <span className="text-[#6c2db5] text-xl mr-3 leading-none">•</span>
              <span>Բանկային փոխանցումներն իրականացնում ենք՝ ղեկավարվելով «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, թղթակից բանկերի հետ կնքված պայմանագրերով և սպասարկման սահմանված պայմաններով:</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#6c2db5] text-xl mr-3 leading-none">•</span>
              <span>Փոխանցումները կատարում ենք վճարման հանձնարարագրերի հիման վրա (կախված գումարի չափից, գործարքի բնույթից և նպատակից՝ կարող են պահանջվել նաև այլ փաստաթղթեր):</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#6c2db5] text-xl mr-3 leading-none">•</span>
              <span>Հաճախորդի աշխատանքային օրվա ընթացքում՝ մինչև ժամը 15:30 ներկայացված վճարման հանձնարարագրերը կատարում ենք նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացված վճարման հանձնարարագրերը՝ հաջորդ բանկային օրը: Մինչև ժամը 16:30 ներկայացված դրամով փոխանցումները (պետական և տեղական բյուջեի վճարներ, կոմունալ կամ սոցիալական այլ վճարներ) կատարվում են նույն բանկային օրը:</span>
            </p>
            <p className="flex items-start">
              <span className="text-[#6c2db5] text-xl mr-3 leading-none">•</span>
              <span>ՀՀ դրամով և արտարժույթով բանկային փոխանցումներ իրականացնելիս ձեզանից գանձում ենք միջնորդավճարներ՝ ըստ մեր դրույքաչափերի և սակագների: Կոմունալ վճարների սպասարկման դիմաց միջնորդավճար չենք գանձում: Միջնորդավճարները գանձվում են ՀՀ դրամով:</span>
            </p>
          </div>
        </section>

        <section className="relative w-full h-[300px] md:h-[450px] mt-16 overflow-hidden">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg" 
            alt="Transfer Banner" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-4">
            <h3 className="text-3xl md:text-[42px] font-bold text-white text-center leading-tight max-w-4xl drop-shadow-lg">
              Կարող եք գումարներ փոխանցել ինչպես <br className="hidden md:block"/> 
              ձեր հաշվից, այնպես էլ առանց հաշվի <br className="hidden md:block"/> 
              բացման:
            </h3>
          </div>
        </section>

        {/* Ավելի տեղեկատվություն բաժինը սլաքով */}
        <section className="mt-16">
          <h2 className="text-[20px] font-bold text-[#555] mb-6 uppercase tracking-wider">Ավելի տեղեկատվություն</h2>
          <div className="space-y-1">
            {accordionData.map((item) => (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => toggleSection(item.id)}
                  className={`w-full py-4 px-6 flex justify-between items-center text-left transition-all duration-200 
                    ${openSection === item.id ? 'bg-[#6c2db5] text-white' : 'bg-[#f4f4f4] text-[#333] hover:bg-[#ececec]'}`}
                >
                  <span className="text-[16px] font-medium">{item.title}</span>
                  {/* Սլաքի պատկերակը */}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${openSection === item.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === item.id ? 'max-h-[500px] border-x border-b border-gray-100 shadow-sm' : 'max-h-0'}`}>
                  <div className="p-6 space-y-4 text-[15px] text-gray-700 bg-white">
                    {item.content.map((p, i) => (
                      <p key={i} className="flex items-start">
                        <span className="text-[#6c2db5] font-bold mr-3">•</span>
                        <span>{p}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" />
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" />
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" />
          </Link>
          <Link to="#" className="hover:opacity-70 transition-opacity">
            <img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" />
          </Link>
        </div>
      </div>

            <h2 className="text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

             <a 
                href="https://www.evoca.am/files/global_files/1/16684900550769.pdf" 
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
                <span className="text-[16px] font-bold text-[#222] tracking-tight">Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ</span>
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
                <span className="text-[16px] font-bold text-[#222] tracking-tight">Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025</span>
            </a>

    </div>
  );
};

export default Poxancum;