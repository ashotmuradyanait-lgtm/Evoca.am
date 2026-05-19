import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mijnord: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '/sakagin' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '/irav' },
    { name: 'Միջնորդավճարների սակագները', path: '' },
    { name: 'Ավանդների սակագներ', path: '/avandik' },
    { name: 'Արխիվ', path: '/arxiv' }
  ];

 
  const commissionsData = [
    {
      title: 'Բանկային հաշիվների բացում և սպասարկում',
      details: [
        { label: 'ՀՀ դրամով և արտարժույթով հաշիվների բացում', value: 'Անվճար' },
        { label: 'Հաշիվների սպասարկում (տարեկան)', value: 'Ֆիզ. անձանց համար՝ անվճար, Իրավ. անձանց համար՝ 12,000 ՀՀ դրամ' },
        { label: 'Փակված հաշվի վերաբացում', value: '1,000 ՀՀ դրամ' },
        { label: 'Հաշվի ընթացիկ վիճակի մասին տեղեկանքների տրամադրում', value: 'Հայերեն կամ անգլերեն լեզվով՝ 3,000 ՀՀ դրամ' }
      ]
    },
    {
      title: 'Դրամական փոխանցումներ',
      details: [
        { label: 'ՀՀ տարածքում (ՀՀ դրամով)', value: 'Մինչև ժամը 15:00-ն՝ անվճար, 15:00-ից հետո՝ 0.1% (նվազագույնը 200 ՀՀ դրամ)' },
        { label: 'Միջազգային փոխանցումներ (SWIFT)՝ ԱՄՆ դոլարով', value: '0.15% (նվազագույնը 7,000 ՀՀ դրամ, առավելագույնը 50,000 ՀՀ դրամ)' },
        { label: 'Միջազգային փոխանցումներ (SWIFT)՝ Եվրոյով', value: '0.15% (նվազագույնը 9,000 ՀՀ դրամ, առավելագույնը 60,000 ՀՀ դրամ)' },
        { label: 'Փոխանցման տվյալների փոփոխում կամ չեղարկում', value: '25,000 ՀՀ դրամ' }
      ]
    },
    {
      title: 'Կանխիկով գործառնություններ (Մուտք և Ելք)',
      details: [
        { label: 'Կանխիկ միջոցների մուտքագրում հաշվին (ՀՀ դրամ)', value: 'Անվճար' },
        { label: 'Կանխիկ միջոցների մուտքագրում հաշվին (ԱՄՆ դոլար/Եվրո)', value: 'Համաձայն տվյալ օրվա սակագների (մինչև 1%)' },
        { label: 'Կանխիկացում Evocabank-ի բանկոմատներից (ARCA, Visa, MasterCard)', value: '0.2% - 0.5%՝ կախված քարտի տեսակից' },
        { label: 'Կանխիկացում այլ բանկերի բանկոմատներից (ՀՀ տարածքում)', value: '1% (նվազագույնը 500 ՀՀ դրամ)' }
      ]
    },
    {
      title: 'Հեռակառավարման համակարգեր (EvocaTouch / EvocaOnline)',
      details: [
        { label: 'EvocaTouch հավելվածի ակտիվացում և սպասարկում', value: 'Անվճար' },
        { label: 'EvocaOnline համակարգի տրամադրում (Իրավ. անձանց)', value: 'Միանվագ 5,000 ՀՀ դրամ, սպասարկումը՝ անվճար' },
        { label: 'Տոկենի կամ գաղտնաբառի գեներատորի տրամադրում/փոխարինում', value: '10,000 ՀՀ դրամ' }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
    
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

    
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto hide-scrollbar mt-4 lg:mt-0">
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

     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-gray-400 text-[11px] sm:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600 whitespace-nowrap">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800 whitespace-nowrap">Սակագներ</span>
        <span>›</span>
        <span className="text-gray-800 whitespace-nowrap">Միջնորդավճարների սակագները</span>
      </div>

  
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-24 mt-2 md:mt-4">
        
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-6 md:mb-10 leading-snug">
          Միջնորդավճարների սակագները և դրույքները
        </h1>

      
        <div className="flex flex-col border-t border-gray-200">
          {commissionsData.map((commission, index) => (
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
                  {commission.title}
                </h2>
              </button>
              
              {openAccordion === index && (
                <div className="pl-4 sm:pl-8 md:pl-12 pr-2 pb-6 overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse min-w-[550px] sm:min-w-[650px]">
                    <tbody>
                      {commission.details.map((detail, i) => (
                        <tr key={i} className="border-t border-gray-100 first:border-t-0 hover:bg-gray-50/40 transition-colors">
                          <td className="py-3 px-2 sm:px-4 text-[#1a1a1a] w-[40px] align-top font-medium text-[13px] sm:text-[14px]">
                            {i + 1}.
                          </td>
                          <td className="py-3 px-2 sm:px-4 text-gray-500 w-[200px] sm:w-[280px] align-top font-medium text-[13px] sm:text-[14px]">
                            {detail.label}
                          </td>
                          <td className="py-3 px-2 sm:px-4 text-[#1a1a1a] align-top leading-relaxed text-[13px] sm:text-[14px] font-medium">
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

export default Mijnord;