import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Lizing: React.FC = () => {
  
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Evoca Leasing', path: '' },
    { name: 'Հատուկ առաջարկ', path: '/hatuk' },
  ];

  const leasingSections = [
    {
      title: 'ԸՆԴՀԱՆՈՒՐ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ',
      content: (
        <div className="p-4 sm:p-6 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed bg-[#f9f9f9] border border-gray-100 rounded-lg mb-4">
          ՀՀ էկոնոմիկայի նախարարության Տնտեսության Արդիականացման Նպատակային ծրագրի ներքո տնտեսավարողներին աջակցության տրամադրում՝ տնտեսության արդիականացման խթանմանն ուղղված լիզինգ (գործելու է մինչև 31.12.2026թ.)
        </div>
      )
    },
    {
      title: 'Ագրոպարենային սարքավորումների և տեխնիկայի ձեռքբերման նպատակով',
      content: (
        <div className="p-4 sm:p-6 text-[14px] sm:text-[15px] text-gray-700">
          <p className="mb-4">Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից: Լիզինգի առարկա կարող են հանդիսանալ՝</p>
          <ul className="list-disc pl-5 space-y-2 text-[#1a1a1a] marker:text-[#6c2db5]">
            <li>ագրոպարենային սարքավորումներ/հոսքագծեր,</li>
            <li>ջերմատնային սարքավորումներ,</li>
            <li>սառնարանային տեխնիկա,</li>
            <li>սպանդանոցային կայաններ և ջրատաքացուցիչներ,</li>
            <li>ագրոդրոններ:</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Տոկոսադրույք և սակագներ',
      isTable: true,
      rows: [
        { label: 'Արժույթ', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
        { label: 'Լիզինգառու', value: 'ՀՀ ռեզիդենտ և ոչ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր' },
        { label: 'Լիզինգի առարկայի ձեռքբերում', value: 'Լիզինգի առարկան կարող է ձեռք բերվել ինչպես ՀՀ-ից, այնպես էլ արտերկրից՝ առաջնային և երկրորդային շուկաներից' },
        { label: 'Լիզինգի սահմանաչափ', value: '5,000,001-1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ' },
        { label: 'Կանխավճար', value: 'Նվազագույնը՝ 10%' },
        { label: 'Մարման ժամկետ', value: '6-72 ամիս՝ կախված ձեռքբերվող լիզինգի առարկայից' },
        { 
          label: 'Մարման եղանակը', 
          value: (
            <ul className="list-disc pl-5 space-y-1 marker:text-[#6c2db5]">
              <li>Անուիտետային</li>
              <li>Զսպանակաձև</li>
              <li>Պայմանագրային</li>
            </ul>
          )
        },
        { 
          label: 'Տարեկան անվանական տոկոսադրույքը', 
          value: (
            <ul className="list-disc pl-5 space-y-1 marker:text-[#6c2db5]">
              <li>ՀՀ դրամ՝ սկսած 10.5%-ից</li>
              <li>ԱՄՆ դոլար՝ սկսած 8%-ից</li>
              <li>Եվրո՝ սկսած 6%-ից</li>
            </ul>
          )
        }
      ]
    },
    {
      title: 'Գյուղատնտեսական տեխնիկայի ձեռքբերման նպատակով',
      isTable: true,
      rows: [
         { label: 'Արժույթ', value: 'ՀՀ դրամ' },
         { label: 'Լիզինգառու', value: 'Իրավաբանական անձ, Անհատ Ձեռնարկատեր' },
         { label: 'Գործունեության ոլորտ', value: 'Գյուղատնտեսություն' },
         { 
           label: 'Նպատակ', 
           value: (
            <ul className="list-disc pl-5 space-y-1 marker:text-[#6c2db5]">
              <li>Գյուղատնտեսական տեխնիկայի ձեռքբերում՝</li>
              <li>տրակտորներ՝ տարբեր մակնիշների</li>
              <li>կոմբայններ</li>
              <li>հավաքիչ-մամլիչներ</li>
              <li>շարքացաններ</li>
              <li>գութաններ</li>
              <li>խոտհնձիչներ</li>
              <li>այլ գյուղատնտեսական տեխնիկա</li>
            </ul>
         )},
         { label: 'Լիզինգի սահմանաչափ', value: '5,100,000-500,000,000 ՀՀ դրամ\n\nԼիզինգի առարկայի արժեքի 20%' },
         { label: 'Կանխավճար', value: 'Ընդ որում Ծրագրի շրջանակներում նույն լիզինգառուի կողմից ձեռք բերվող լիզինգի առարկաների արժեքների հանրագումարը չպետք է գերազանցի 500 մլն դրամը:' },
         { label: 'Մարման ժամկետ', value: '36-120 ամիս' }
      ]
    }
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
        <span className="cursor-pointer hover:text-gray-600">Լիզինգ</span>
        <span>›</span>
        <span className="text-gray-800">Evoca Leasing</span>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <h1 className="text-[48px] font-bold text-[#1a1a1a] mb-12">Evoca Leasing</h1>

        <div className="flex flex-col border-t border-gray-200">
          {leasingSections.map((section, index) => {
            const isOpen = openSections.includes(index);
            return (
              <div key={index} className="w-full border-b border-gray-200">
                <button 
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <h2 className={`text-[18px] md:text-[20px] font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-[#6c2db5]' : 'text-[#1a1a1a] group-hover:text-[#6c2db5]'}`}>
                    {section.title}
                  </h2>
                  <svg 
                    className={`w-6 h-6 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#6c2db5]' : 'text-gray-400 group-hover:text-[#6c2db5]'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    {section.isTable ? (
                      <div className="border-t border-gray-100">
                        {section.rows?.map((row, rIndex) => (
                          <div key={rIndex} className="flex flex-col md:flex-row border-b border-gray-100 last:border-0">
                            <div className="md:w-[35%] bg-[#f8f9fa] p-4 text-[14px] font-semibold text-[#1a1a1a]">
                              {row.label}
                            </div>
                            <div className="md:w-[65%] p-4 text-[14px] text-gray-700 whitespace-pre-line bg-white">
                              {row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-[#1a1a1a]">
                        {section.content}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lizing;