import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Partatoms: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/arzetxter' },
    { name: 'Պարտատոմսեր', path: '' },
    { name: 'ՀԿԴ ծառայություններ', path: '/hkd' },
    { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/repo' },
    { name: 'EvocaINVEST', path: '/invest' },
  ];

  const accordions = [
    {
      title: 'ՏԱՍՆԵՐԵՔԵՐՈՐԴ ԵՎ ՏԱՍՆՉՈՐՍԵՐՈՐԴ ԹՈՂԱՐԿՈՒՄ',
      content: (
        <div className="flex flex-col gap-3">
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Ծրագրային ազդագիր</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Ծրագրային ազդագրի լրացում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Պարտատոմսերի թողարկման վերջնական պայմաններ (AMD)</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Պարտատոմսերի թողարկման վերջնական պայմաններ (USD)</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Էական փաստեր և տեղեկություններ</a>
        </div>
      )
    },
    {
      title: 'ՆԱԽՈՐԴ ԹՈՂԱՐԿՈՒՄՆԵՐ',
      content: (
        <div className="flex flex-col gap-3">
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Տասնմեկերորդ և տասներկուերորդ թողարկում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Իններորդ և տասներորդ թողարկում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Յոթերորդ և ութերորդ թողարկում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Հինգերորդ և վեցերորդ թողարկում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Երրորդ և չորրորդ թողարկում</a>
          <a href="#" className="text-[#6c2db5] hover:underline text-[15px] font-medium">Առաջին և երկրորդ թողարկում</a>
        </div>
      )
    },
    {
      title: 'ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ ՊԱՐՏԱՏՈՄՍԵՐԻ ՄԱՍԻՆ',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-bold text-[#333] mb-2 text-[15px]">Ինչու՞ պետք է գնել պարտատոմսեր՝ ավանդ ներդնելու փոխարեն:</p>
            <p className="text-gray-700 text-[14px] leading-relaxed">
              Պարտատոմսերն ունեն մի շարք առավելություններ, այդ թվում՝ եկամտահարկից ազատում և ավելի բարձր եկամտաբերության հնարավորություն: Բացի այդ, պարտատոմսերը կարող եք վաճառել ցանկացած պահի՝ չկորցնելով կուտակված տոկոսները:
            </p>
          </div>
          <div>
            <p className="font-bold text-[#333] mb-2 text-[15px]">Ինչպե՞ս կարող եմ ձեռք բերել պարտատոմսեր:</p>
            <p className="text-gray-700 text-[14px] leading-relaxed">
              Դուք կարող եք ձեռք բերել պարտատոմսեր ինչպես բանկի մասնաճյուղերում, այնպես էել EvocaTOUCH հավելվածի միջոցով՝ արագ և հարմարավետ:
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      <Menu />
      
      <div className="w-full bg-[#6c2db5] text-white sticky top-0 z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium flex-shrink-0
                ${isActive || (index === 1 && (window.location.pathname.includes('/bonds') || true)) ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px] overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Արժեթղթեր</span>
        <span>›</span>
        <span className="text-gray-800">Պարտատոմսեր</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-20">
        
       
        <div className="flex flex-col md:flex-row items-center bg-[#f4ecfc] rounded-xl overflow-hidden mb-8 md:mb-12">
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-14 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f0b40] mb-4 md:mb-6 leading-tight">
              Պարտատոմսեր
            </h1>
            <p className="text-[14px] md:text-[16px] text-gray-800 leading-relaxed">
              Պարտատոմսեր գնելը հնարավորություն է տալիս ձեռք բերել ապահով գործիք և ստանալ բարձր եկամուտներ: Մենք առաջարկում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը:
            </p>
          </div>
          <div className="w-full md:w-[55%] flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
              alt="Պարտատոմսեր" 
              className="w-full h-auto object-cover max-h-[300px] md:max-h-[450px]" 
            />
          </div>
        </div>

      
        <div className="text-[14px] md:text-[16px] text-[#333333] leading-relaxed mb-8 md:mb-12">
          <p className="mb-6">
            Առաջին անգամ հայաստանյան ֆինանսական համակարգում <strong>Evocabank</strong>-ը, որպես նորարար և ժամանակակից բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ <strong>EvocaTOUCH</strong> հավելվածի միջոցով:
          </p>
          <p className="mb-6">
            <strong>Պարտատոմսերը</strong> պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ:
          </p>
        </div>

      
        <div className="mb-8 md:mb-12">
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#1f0b40] uppercase mb-6">Ընթացիկ թողարկում</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#f8f9fa]">
                  <th className="p-3 md:p-4 border-b font-bold text-[#6c2db5] text-[13px] md:text-[15px]">Դաս</th>
                  <th className="p-3 md:p-4 border-b font-bold text-[#6c2db5] text-[13px] md:text-[15px]">Անվանական արժեկտրոնային</th>
                  <th className="p-3 md:p-4 border-b font-bold text-[#6c2db5] text-[13px] md:text-[15px]">Անվանական արժեկտրոնային</th>
                </tr>
              </thead>
              <tbody className="text-[13px] md:text-[15px]">
                <tr>
                  <td className="p-3 md:p-4 border-b text-gray-700">Անվանական արժեք</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">10,000 ՀՀ դրամ</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">100 ԱՄՆ դոլար</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4 border-b text-gray-700">Արժեկտրոնային տարեկան տոկոսադրույք</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">10%</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">5.25%</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4 border-b text-gray-700">Շրջանառության ժամկետ</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">24 ամիս</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">24 ամիս</td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4 border-b text-gray-700">Արժեկտրոնների վճարման պարբերականություն</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">Եռամսյակային</td>
                  <td className="p-3 md:p-4 border-b text-gray-700">Եռամսյակային</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold text-[#1f0b40] uppercase mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
          <div className="border-t border-gray-200">
            {accordions.map((acc, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(acc.title)}
                  className="w-full py-4 md:py-5 flex justify-between items-center text-left group"
                >
                  <span className={`text-[14px] md:text-[17px] font-bold uppercase pr-4 ${openSection === acc.title ? 'text-[#6c2db5]' : 'text-[#333333] group-hover:text-[#6c2db5]'}`}>
                    {acc.title}
                  </span>
                  <span className={`flex-shrink-0 transition-transform duration-300 text-[#6c2db5] ${openSection === acc.title ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                {openSection === acc.title && (
                  <div className="pb-6 pt-2 text-gray-700 animate-fadeIn">
                    {acc.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <div className="mt-12 flex flex-col gap-3">
            <h2 className="text-[24px] md:text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

             <a 
                href="https://www.evoca.am/files/global_files/1/bonds-prices-usd-30-09-2024.pdf" 
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
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">Դոլարային պարտատոմսերիի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար</span>
            </a>

            <a 
                href="https://www.evoca.am/files/global_files/1/bonds-prices-amd-30-09-2024.pdf" 
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
                <span className="text-[14px] md:text-[16px] font-bold text-[#222] tracking-tight">Դրամային պարտատոմսերիի գները 30.09.2024-29.11.2024 ժամանակահատվածի համար</span>
            </a>
        </div>

      </div>
    </div>
  );
}

export default Partatoms;