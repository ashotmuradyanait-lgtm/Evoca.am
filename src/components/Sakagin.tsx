import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sakagin: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '/irav' },
    { name: 'Միջնորդավճարների սակագները', path: '/Mijnord' },
    { name: 'Ավանդների սակագներ', path: '/avandik' },
    { name: 'Արխիվ', path: '' }
  ];

  const evocaHomeData = [
    { id: 1, title: 'Տրամադրման նպատակը', value: 'Շինարարական նյութերի, կենցաղային տեխնիկայի և կահույքի վաճառքով զբաղվող համագործակցության շրջանակներում գործընկեր հանդիսացող կազմակերպությունների կողմից առաջարկվող ապրանքների ձեռք բերման՝ այդ թվում աշխատանքների, ծառայությունների նպատակով:' },
    { id: 2, title: 'Ովքեր կարող են դիմել', value: '21-65 տարեկան ՀՀ ռեզիդենտ ֆիզիկական անձինք' },
    { id: 3, title: 'Սահմանաչափ', value: '500,000 - 10,000,000 ՀՀ դրամ' },
    { id: 4, title: 'Սահմանաչափի տեսակ', value: 'Վերականգնվող' },
    { id: 5, title: 'Սահմանաչափի տրամադրման եղանակ', value: 'Վարկային սահմանաչափը տրամադրվում է Բանկի կողմից թողարկված հատուկ ArCa քարտերի միջոցով:' },
    { id: 6, title: 'Արժույթը', value: 'ՀՀ դրամ' },
    { id: 7, title: 'Անվանական տոկոսադրույք', value: '16%' },
    { id: 8, title: 'Փաստացի տոկոսադրույք', value: '17.42%' },
    { id: 9, title: 'Արտոնյալ ժամանակահատված', value: 'Չի տրամադրվում' },
    { id: 10, title: 'Մարման ժամկետ', value: '60 ամիս' },
    { id: 11, title: 'Մարման եղանակ', value: 'Անուիտետային' },
    { id: 12, title: 'Քաղվածքի օր', value: 'Մինչև յուրաքանչյուր ամսվա 10-ը' },
    { id: 13, title: 'Վճարման վերջնաժամկետ', value: 'Յուրաքանչյուր ամսվա 16-ը (եթե տվյալ ամսվա 16-ը հանդիսանում է ոչ աշխատանքային օր, վճարման վերջնաժամկետ է համարվում հաջորդ աշխատանքային օրը):' }
  ];

  const nonResidentData = [
    { id: 1, title: 'Տրամադրման նպատակը', value: 'Բնակարանի, առանձնատան, բնակելի տան ձեռքբերում առաջնային և երկրորդային շուկայից:' },
    { id: 2, title: 'Ովքեր կարող են դիմել', value: 'Ոչ ռեզիդենտ ֆիզիկական անձինք' },
    { id: 3, title: 'Գումար (Համարժեք արտարժույթ)', value: 'Կախված գրավադրվող անշարժ գույքի գնահատված արժեքից' },
    { id: 4, title: 'Արժույթը', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
    { id: 5, title: 'Տոկոսադրույք', value: 'Ֆիքսված տոկոսադրույքով սկսած 8.2%-ից, լողացող տոկոսադրույքով սկսած 7.7%-ից' },
    { id: 6, title: 'Մարման ժամկետ', value: 'Մինչև 180 ամիս' },
    { id: 7, title: 'Ապահովվածություն', value: 'Ձեռք բերվող կամ այլ անշարժ գույքի գրավ' }
  ];

  const leasingData = [
    { id: 1, title: 'Տրամադրման նպատակը', value: 'Տրանսպորտային միջոցների ձեռքբերում ֆիզիկական անձանց կողմից:' },
    { id: 2, title: 'Սահմանաչափ', value: 'Մինչև 50,000,000 ՀՀ դրամ' },
    { id: 3, title: 'Արժույթը', value: 'ՀՀ դրամ, ԱՄՆ դոլար, Եվրո' },
    { id: 4, title: 'Տոկոսադրույք', value: 'Սկսած 14%-ից' },
    { id: 5, title: 'Մարման ժամկետ', value: 'Մինչև 60 ամիս' },
    { id: 6, title: 'Մարման եղանակ', value: 'Անուիտետային (հավասարաչափ) կամ Զսպանակաձև (մայր գումարի հավասարաչափ մարումներով)' },
    { id: 7, title: 'Ապահովվածություն', value: 'Լիզինգի առարկա հանդիսացող տրանսպորտային միջոց' }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
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

      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
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
        <span className="cursor-pointer text-gray-800">Սակագներ</span>
        <span>›</span>
        <span className="text-gray-800">Վարկեր ֆիզիկական անձանց</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        
        <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-10 leading-snug">
          Ֆիզիկական անձանց տրամադրվող անհատական վարկեր ըստ պրոդուկտների / Պայմաններ և սակագներ /
        </h1>

        <div className="flex flex-col gap-2 border-t border-gray-200">
          
          
          <div className="flex flex-col border-b border-gray-200">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 0 ? -1 : 0)}
              className="flex items-center gap-4 py-5 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="text-[#6c2db5] flex-shrink-0 w-8 flex justify-center">
                {openAccordion === 0 ? (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                ) : (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                )}
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">EvocaHOME</h2>
            </button>
            
            {openAccordion === 0 && (
              <div className="pl-4 md:pl-16 pr-0 md:pr-4 pb-8 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <tbody>
                    {evocaHomeData.map((row) => (
                      <tr key={row.id} className="border-t border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4 text-[#1a1a1a] w-[50px] align-top">{row.id}.</td>
                        <td className="py-4 px-4 text-[#1a1a1a] w-[250px] align-top pr-6">{row.title}</td>
                        <td className="py-4 px-4 text-[#333] align-top leading-relaxed">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

         
          <div className="flex flex-col border-b border-gray-200">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 1 ? -1 : 1)}
              className="flex items-center gap-4 py-5 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="text-[#6c2db5] flex-shrink-0 w-8 flex justify-center">
                {openAccordion === 1 ? (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                ) : (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                )}
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Ոչ ռեզիդենտ Ֆիզիկական անձանց համար բնակարանային հիփոթեքային վարկեր</h2>
            </button>
            
            {openAccordion === 1 && (
              <div className="pl-4 md:pl-16 pr-0 md:pr-4 pb-8 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <tbody>
                    {nonResidentData.map((row) => (
                      <tr key={row.id} className="border-t border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4 text-[#1a1a1a] w-[50px] align-top">{row.id}.</td>
                        <td className="py-4 px-4 text-[#1a1a1a] w-[250px] align-top pr-6">{row.title}</td>
                        <td className="py-4 px-4 text-[#333] align-top leading-relaxed">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Երրորդ բլոկ - Լիզինգ */}
          <div className="flex flex-col border-b border-gray-200">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 2 ? -1 : 2)}
              className="flex items-center gap-4 py-5 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="text-[#6c2db5] flex-shrink-0 w-8 flex justify-center">
                {openAccordion === 2 ? (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" /></svg>
                ) : (
                  <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                )}
              </div>
              <h2 className="text-[20px] md:text-[24px] font-bold text-[#1a1a1a]">Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ</h2>
            </button>

            {openAccordion === 2 && (
              <div className="pl-4 md:pl-16 pr-0 md:pr-4 pb-8 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <tbody>
                    {leasingData.map((row) => (
                      <tr key={row.id} className="border-t border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4 text-[#1a1a1a] w-[50px] align-top">{row.id}.</td>
                        <td className="py-4 px-4 text-[#1a1a1a] w-[250px] align-top pr-6">{row.title}</td>
                        <td className="py-4 px-4 text-[#333] align-top leading-relaxed">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}
export default Sakagin;