import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Irav: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '/sakagin' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '' },
    { name: 'Միջնորդավճարների սակագները', path: '' },
    { name: 'Ավանդների սակագներ', path: '' },
    { name: 'Արխիվ', path: '' }
  ];

  // Վիդեոյից դուրս բերված իրավաբանական անձանց բոլոր վարկատեսակները
  const businessLoansData = [
    {
      title: 'Բիզնես վարկ',
      details: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար կամ Եվրո' },
        { label: 'Նպատակ', value: 'Բիզնեսի զարգացում, կապիտալ ներդրումներ, շրջանառու միջոցների համալրում' },
        { label: 'Սահմանաչափեր ըստ ոլորտների', value: 'Արդյունաբերություն, Շինարարություն, Առևտուր, Հանրային սնունդ և այլն՝ մինչև 500,000,000 ՀՀ դրամ: Տրանսպորտ և կապ՝ մինչև 1,000,000,000 ՀՀ դրամ: Գյուղատնտեսություն՝ մինչև 350,000,000 ՀՀ դրամ:' },
        { label: 'Մարման ժամկետ', value: 'Մինչև 10 տարի' }
      ]
    },
    {
      title: 'Վարկային գիծ (Իրավաբանական անձանց)',
      details: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
        { label: 'Նպատակ', value: 'Շրջանառու կապիտալի համալրում' },
        { label: 'Սահմանաչափ', value: 'Մինչև 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ' },
        { label: 'Մարման ժամկետ', value: 'Մինչև 5 տարի' },
        { label: 'Տարեկան տոկոսադրույք', value: 'ՀՀ դրամ՝ սկսած 12.5%-ից, ԱՄՆ դոլար՝ սկսած 8%-ից' }
      ]
    },
    {
      title: 'KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում',
      details: [
        { label: 'Վարկատեսակ', value: 'Առևտրային վարկ, լիզինգ' },
        { label: 'Նպատակ', value: 'Վերականգնվող էներգիայի հիման վրա էլեկտրակայանների (ՎԷԷԿ) կառուցում/վերակառուցում, էներգաարդյունավետության (ԷԱ) ներդրումներ' },
        { label: 'Արժույթ', value: 'ՀՀ դրամ' },
        { label: 'Մարման ժամկետ', value: 'Մինչև 120 ամիս (ՎԷԷԿ դեպքում), մինչև 60 ամիս (ԷԱ դեպքում)' },
        { label: 'Անվանական տոկոսադրույք', value: 'ՎԷԷԿ՝ 9.5%, ԷԱ՝ 10.25%' },
        { label: 'Փաստացի տոկոսադրույք', value: 'ՎԷԷԿ՝ մինչև 10%, ԷԱ՝ մինչև 10.75%' }
      ]
    },
    {
      title: 'Աշխատավարձային նախագծի պայմաններ',
      details: [
        { label: 'Քարտի տեսակներ', value: 'Ղեկավարներին՝ Visa Gold / MasterCard Gold, Աշխատակիցներին՝ ARCA կամ Visa Classic / MasterCard Standard' },
        { label: 'Տրամադրման վճար', value: 'Անվճար' },
        { label: 'Կանխիկացման միջնորդավճար', value: 'Evocabank-ի կետերից՝ 0%, ARCA համակարգի այլ բանկերից՝ 0.8%' },
        { label: 'Հեռակառավարում', value: 'EvocaTouch և EvocaOnline համակարգերի տրամադրումն անվճար է' }
      ]
    },
    {
      title: 'Փոքր և միջին բիզնեսի վարկավորում «Լիկվիդ +»',
      details: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
        { label: 'Նպատակ', value: 'Բիզնեսի զարգացում, կապիտալ ներդրումներ, շրջանառու միջոցների համալրում' },
        { label: 'Սահմանաչափ', value: 'Մինչև 150,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ' },
        { label: 'Մարման ժամկետ', value: 'Մինչև 60 ամիս' }
      ]
    },
    {
      title: 'Evoca GO',
      details: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ' },
        { label: 'Վարկառու', value: 'ՀՀ ռեզիդենտ իրավաբանական անձ կամ ԱՁ (ՓՄՁ-ներ՝ մինչև 250 աշխատակից)' },
        { label: 'Մարման ժամկետ', value: '24 - 90 ամիս' },
        { label: 'Անվանական տոկոսադրույք', value: '10.5%' }
      ]
    },
    {
      title: 'Արագ բիզնես վարկ',
      details: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
        { label: 'Սահմանաչափ', value: '5,100,000 - 30,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ' },
        { label: 'Մարման ժամկետ', value: 'Մինչև 60 ամիս' },
        { label: 'Անվանական տոկոսադրույք', value: 'ՀՀ դրամ՝ 13.5% - 14.5%, ԱՄՆ դոլար՝ 9.5% - 10.5%, Եվրո՝ 8.5% - 9.5%' },
        { label: 'Փաստացի տոկոսադրույք', value: '8.72% - 17.89%' },
        { label: 'Ապահովվածություն', value: 'Երաշխավորություն' }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      {/* Header section with full responsiveness */}
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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full sm:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-full sm:w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      {/* Submenu Scrollable layout for mobile views */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-4 lg:mt-0 hide-scrollbar">
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

      {/* Breadcrumbs Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-[11px] sm:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600 whitespace-nowrap">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800 whitespace-nowrap">Սակագներ</span>
        <span>›</span>
        <span className="text-gray-800 whitespace-nowrap">Վարկեր իրավաբանական անձանց</span>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-24 mt-2 md:mt-4">
        
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-6 md:mb-10 leading-snug">
          Վարկեր իրավաբանական անձանց
        </h1>

        {/* Accordions Container */}
        <div className="flex flex-col border-t border-gray-200">
          {businessLoansData.map((loan, index) => (
            <div key={index} className="flex flex-col border-b border-gray-200">
              <button 
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="flex items-center gap-3 sm:gap-4 py-4 md:py-5 w-full text-left hover:bg-gray-50 transition-colors group"
              >
                <div className="text-[#6c2db5] flex-shrink-0 w-6 sm:w-8 flex justify-center transition-transform">
                  {openAccordion === index ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </div>
                <h2 className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-bold text-[#1a1a1a] group-hover:text-[#6c2db5] transition-colors">
                  {loan.title}
                </h2>
              </button>
              
              {openAccordion === index && (
                <div className="pl-4 sm:pl-8 md:pl-12 pr-2 pb-6 overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[550px] sm:min-w-[650px]">
                    <tbody>
                      {loan.details.map((detail, i) => (
                        <tr key={i} className="border-t border-gray-100 first:border-t-0 hover:bg-gray-50/40 transition-colors">
                          <td className="py-3 px-2 sm:px-4 text-[#1a1a1a] w-[40px] align-top font-medium text-[13px] sm:text-[14px]">
                            {i + 1}.
                          </td>
                          <td className="py-3 px-2 sm:px-4 text-gray-500 w-[180px] sm:w-[240px] align-top font-medium text-[13px] sm:text-[14px]">
                            {detail.label}
                          </td>
                          <td className="py-3 px-2 sm:px-4 text-[#1a1a1a] align-top leading-relaxed text-[13px] sm:text-[14px]">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* CSS Styles block for clean scroll experience */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default Irav;