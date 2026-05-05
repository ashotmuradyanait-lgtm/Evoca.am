import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';
import React, { useState } from 'react';

const Karevor: React.FC = () => {
  const subMenuItems = [
    { name: 'Ավանդներ', path: '/avandner' },
    { name: 'Կարևոր տեղեկատվություն', path: '' },
  ];
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Ավանդների ներգրավման պայմանները',
      content: (
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-[15px] leading-relaxed">
          <li>Հաճախորդը (ստորև նաև՝ Ավանդատու) կարող է ավանդ ներդնել ինչպես «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ (այսուհետ՝ Բանկ) գործունեության վայրում (գլխամասային գրասենյակ և մասնաճյուղեր), այնպես էլ Բանկի հեռակառավարման համակարգերի (EvocaMobile, EvocaTouch) միջոցով:</li>
          <li>Հեռակառավարման համակարգերի միջոցով ավանդ ներդնելու համար Հաճախորդը պետք է նախապես հանդիսանա Բանկի հաշվետեր հաճախորդ և Բանկից ստացած լինի նշված համակարգեր մուտք գործելու գաղտնաբառերը:</li>
          <li>Ավանդների ներդրումը, դրանց դիմաց հաշվարկված տոկոսագումարների վճարումը Ավանդատուի ցանկությամբ կարող է կատարվել ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</li>
          <li>Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և սոցիալական քարտ (հանրային ծառայությունների համարանիշ) կամ սոցիալական քարտ չունենալու մասին տեղեկանք (պահանջը չի տարածվում օտարերկրյա քաղաքացիների վրա):</li>
        </ol>
      )
    },
    {
      title: 'Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը',
      content: <p className="text-gray-700 text-[15px]">Տոկոսագումարների հաշվարկման և վճարման կարգի վերաբերյալ տեղեկատվությունը տեղադրված է այստեղ...</p>
    },
    {
      title: 'Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն',
      content: <p className="text-gray-700 text-[15px]">Ավանդային հաշվի քաղվածքների և տեղեկանքների տրամադրման պայմաններ...</p>
    },
    {
      title: 'Երաշխավորված ավանդների չափերը',
      content: <p className="text-gray-700 text-[15px]">Ձեր ավանդները երաշխավորված են Ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից...</p>
    },
    {
      title: 'Ավանդատուներին անվճար տրամադրվող վճարային քարտեր',
      content: <p className="text-gray-700 text-[15px]">Ավանդի գործողության ընթացքում տրամադրվող քարտերի պայմանները...</p>
    },
    {
      title: 'Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ',
      content: <p className="text-gray-700 text-[15px]">Օրինակներ՝ տարբեր արժույթներով և ժամկետներով ավանդների համար...</p>
    },
    {
      title: 'Ավանդի տարեկան տոկոսային եկամտաբերության չափը',
      content: <p className="text-gray-700 text-[15px]">Տարեկան տոկոսային եկամտաբերության (APY) հաշվարկման բանաձևը և օրինակներ...</p>
    }
  ];

  const documents = [
    { title: 'Տեղեկատվական ամփոփագիր (Քարտեր) 30.08.2022', link: '#' },
    { title: 'Տեղեկատվական ամփոփագիր (Ավանդներ) 15.01.2026', link: '#' },
    { title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="w-full bg-white">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
                 <div className="flex flex-col gap-1">
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/fb-icon.png" alt="Facebook" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/twitter-icon.png" alt="Twitter" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold font-serif italic">
                    <img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" alt="LinkedIn" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" alt="Pinterest" />
                  </Link>
                </div>
              </div>
        <div className="w-full bg-[#6c2db5] text-white ">
          <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
            {subMenuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#6c2db5]' : 'hover:bg-[#530498]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Ավանդներ</span>
          <span>›</span>
          <span className="text-gray-800">Կարևոր տեղեկատվություն</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Կարևոր տեղեկատվություն</h1>


            <div className="w-full bg-white pb-20">
      <Menu />
      
      {/* Sub Header */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-4 md:px-6 min-w-max">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[14px] font-medium
                ${isActive || item.name === 'Կարևոր տեղեկատվություն' ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800">Կարևոր տեղեկատվություն</span>
      </div>

      {/* Page Title */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#1a1a1a]">Կարևոր տեղեկատվություն</h1>
      </div>

      {/* General Provisions Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1a1a] mb-6">Ընդհանուր դրույթներ</h2>
        <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
          <p>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդների (այսուհետ՝ <a href="#" className="text-[#6c2db5] underline hover:text-[#530498]">Ավանդ</a>) ներգրավում:</p>
          <p>Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:</p>
          <p>Ավանդներն ընդունվում են ինչպես կանխիկ այնպես էլ անկանխիկ եղանակով: Ավանդների դիմաց հաշվարկվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</p>
          <p>Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով կամ էլեկտրոնային հայտ ներկայացնելով: Հայտ-պայմանագրում, հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:</p>
          <p>Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի: Երաշխավորված ավանդների չափերին Հաճախորդները կարող են ծանոթանալ Բանկի ինտերնետային կայքում, Ավանդների տեղեկատվական ամփոփագրում, ինչպես նաև Ավանդ ներդնելու դեպքում վերջինիս տրամադրվող ծանուցման միջոցով:</p>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-16">
        <div className="border-t border-gray-200">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-5 flex justify-between items-center text-left hover:text-[#6c2db5] transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`text-[16px] md:text-[18px] font-bold ${openAccordion === index ? 'text-[#6c2db5]' : 'text-[#1a1a1a]'}`}>
                  {item.title}
                </span>
                <span className={`text-2xl transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180 text-[#6c2db5]' : 'text-gray-400'}`}>
                  ↓
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#1a1a1a] mb-6">Փաստաթղթեր</h2>
        <div className="flex flex-col gap-4">
          {documents.map((doc, index) => (
            <a 
              key={index} 
              href={doc.link} 
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-[16px] p-4 md:p-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2ecf9] flex items-center justify-center shrink-0 group-hover:bg-[#6c2db5] transition-colors">
                {/* Document SVG Icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6c2db5] group-hover:text-white transition-colors">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[15px] font-medium text-[#1a1a1a] group-hover:text-[#6c2db5] transition-colors">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
        </div>
        </div>
  )
}
export default Karevor