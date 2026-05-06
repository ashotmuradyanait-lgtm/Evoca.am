import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';
import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  content?: React.ReactNode;
}

const Karevor: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const subMenuItems = [
    { name: 'Ավանդներ', path: '/avandner' },
    { name: 'Կարևոր տեղեկատվություն', path: '/deposits-important-information' },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

 
  const generalProvisions = [
    "«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից (ռեզիդենտ, ոչ ռեզիդենտ) ժամկետային ավանդ0ների (այսուհետ՝ Ավանդ) ներգրավում:",
    "Ավանդները ներգրավվում են՝ ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:",
    "Ավանդներն ընդունվում են ինչպես կանխիկ այնպես էլ անկանխիկ եղանակով: Ավանդների դիմաց հաշվեգրվող տոկոսագումարների վճարումն իրականացվում է ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:",
    "Ֆիզիկական անձ հաճախորդի կողմից Ավանդի ներդրումը ձևակերպվում է Բանկի կողմից սահմանված ձևի Հայտ-պայմանագիրը ստորագրելով և/կամ էլեկտրոնային հայտ ներկայացնելով: Հայտ-պայմանագրում/էլ. հայտում նշվում է Ավանդի տեսակը, գումարը, արժույթը, ժամկետը, տոկոսադրույքը և ըստ անհրաժեշտության այլ պայմաններ:",
    "Ֆիզիկական անձ հանդիսացող Ավանդատուների ավանդները երաշխավորվում են համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի: Երաշխավորված ավանդների չափերին Հաճախորդները կարող են ծանոթանալ Բանկի ինտերնետային կայքում, Ավանդների տեղեկատվական ամփոփագրում, ինչպես նաև Ավանդ ներդնելու դեպքում վերջինիս տրամադրվող ծանուցման միջոցով:",
    "Ավանդի գումարի վերադարձը կատարվում է Ավանդի պայմանագրի վերջին օրը, իսկ եթե տվյալ օրը ոչ աշխատանքային է, ապա հաջորդ աշխատանքային օրը:",
    "Հաշվեգրված տոկոսների վճարումը իրականացվում է համաձայն Հաճախորդի կողմից Հայտ-պայմանագրում/Պայմանագրում նշված տոկոսների վճարման պարբերականության:",
    "Ավանդների հետ կապված կանխիկ գործառնությունների միջնորդավճարները սահմանվում են Բանկի «Սակագներով և դրույքներով» (TRM14-0002-02/1), բացառությամբ ՌԴ ռուբլով ավանդների: Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է կանխիկ ՌԴ ռուբլով, իսկ անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը վերադարձվում է անկանխիկ ՌԴ ռուբլով՝ առանց միջնորդավճարների գանձման: Անկանխիկ ՌԴ ռուբլով ներդրված Ավանդը կանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում, գանձվում է վերադարձման օրը ՌԴ ռուբլու կանխիկացման համար սահմանված միջնորդավճարը: Կանխիկ ՌԴ ռուբլով ներդրված Ավանդը անկանխիկ ՌԴ ռուբլով վերադարձնելու դեպքում գանձվում է վերադարձման օրը կանխիկ ՌԴ ռուբլու մուտքագրման համար սահմանված միջնորդավճարը:",
    "Արտարժույթով ներդրված ավանդների դիմաց հաշվեգրված տոկոսագումարները ավանդատուի ցանկությամբ կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար Բանկի կողմից սահմանված անկանխիկ առքի փոխարժեքը:",
    "Ավանդատուն կարող է իր ներդրված ավանդի 90% չափով ստանալ վարկ կամ օվերդրաֆտ` իր ժամկետային ավանդի ապահովվածությամբ: Վարկը կամ օվերդրաֆտը տրամադրվում է ներդրված ավանդի արժույթով` ավանդի տոկոսադրույք գումարած 2% տարեկան տոկոսադրույքով: Վարկը կամ օվերդրաֆտը պետք է ամբողջությամբ մարվի մինչև ժամկետային ավանդի պայմանագրի ժամկետի ավարտը: Բանկում ռեսուրսների ներգրավման արդյունավետությունից և Բանկի և հաճախորդի փոխհարաբերություններից ելնելով` Բանկը կարող է ներգրավել սույն պայմաններից և սակագներից շեղումով ժամկետային ավանդները:",
    "Սույն պայմաններից և սակագներից կարող են իրականացվել հետևյալ շեղումները. Ավանդի գումարի մասնակի նվազեցում առանց վաղաժամկետ տույժի կիրառման (առանց պայմանագրի դադարեցման, պահպանելով գործող տոկոսադրույքները), «Էվոկա Online» ավանդատեսակի տոկոսադրույքի կիրառում «Դասական» ավանդ ձևակերպելիս (Բանկի գործունեության վայրում), Ավանդի համալրման հնարավորության տրամադրում առանց համալրման նվազագույն շեմի և քանակի, Ավանդի տոկոսադրույքի շեղում գործող հրապարակային տոկոսադրույքից +1 % (ներառյալ «Էվոկա Online» ավանդատեսակը):",
    "Նշված շեղումով ժամկետային ավանդների ներգրավումը հաստատելու իրավասություն ունեն Բանկում առաջին կարգի ստորագրություն ունեցող անձինք: Շեղումներով ժամկետային ավանդների ներգրավման դեպքում, կողմերի իրավահարաբերությունները կարգավորող փաստաթղթերի (ավանդային պայմանագրեր, համաձայնագրեր հայտ-պայմանագրեր և այլն) ստորագրման իրավասությունը պատկանում է բացառապես Բանկում առաջին կարգի ստորագրություն ունեցող անձանց:"
  ];

  const accordionData: AccordionItem[] = [
    {
      title: 'Ավանդների ներգրավման պայմանները',
      content: (
        <div className="space-y-4">
          <p>1. «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն (այսուհետ՝ Բանկ) իրականացնում է իրավաբանական և ֆիզիկական անձանցից ժամկետային ավանդների ներգրավում:</p>
          <p>2. Ավանդները ներգրավվում են ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով:</p>
          <p>3. Ավանդներն ընդունվում են ինչպես կանխիկ, այնպես էլ անկանխիկ եղանակով:</p>
          <p>4. Ավանդ ներդնելու համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ և հանրային ծառայությունների համարանիշ:</p>
        </div>
      )
    },
    {
      title: 'Ավանդների տոկոսագումարների հաշվարկման և վճարման կարգը',
      content: (
        <div className="space-y-4">
          <p>Ավանդի հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա:</p>
          <div className="p-4 bg-gray-50 rounded-lg italic">
            <p>Ուշադրություն՝ Ձեր հաշվում առկա միջոցների նկատմամբ տոկոսագումարները հաշվարկվում են անվանական տոկոսադրույքի հիման վրա, իսկ տարեկան տոկոսային եկամտաբերությունը ցույց է տալիս, թե որքան եկամուտ կստանաք Դուք:</p>
          </div>
          <p>Տոկոսագումարների հաշվարկը կատարվում է ավանդը Բանկ մուտք լինելու օրվանից մինչև այն ավանդատուին վերադարձնելու նախորդ օրը:</p>
        </div>
      )
    },
    {
      title: 'Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն',
      content: (
        <div className="space-y-3">
          <p>1. Պայմանագրի գործողության ընթացքում առնվազն երեսնօրյա պարբերականությամբ Բանկը հաճախորդին տրամադրում է հաշվի քաղվածք:</p>
          <p>2. Քաղվածքը տրամադրվում է հաճախորդի նախընտրած հաղորդակցման եղանակով:</p>
        </div>
      )
    },
    {
      title: 'Երաշխավորված ավանդների չափերը',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Ավանդի արժութային կառուցվածքը</th>
                <th className="border p-2">Ավանդի երաշխավորման առավելագույն չափը</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Եթե նույն բանկում ունեք միայն դրամային ավանդ</td>
                <td className="border p-2 font-bold text-[#6c2db5]">16 միլիոն ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="border p-2">Եթե նույն բանկում ունեք միայն արտարժութային ավանդ</td>
                <td className="border p-2 font-bold text-[#6c2db5]">7 միլիոն ՀՀ դրամ</td>
              </tr>
              <tr>
                <td className="border p-2">Եթե ունեք և դրամային, և արտարժութային ավանդ (դրամայինը 7մլն-ից ավել)</td>
                <td className="border p-2 font-bold text-[#6c2db5]">16 միլիոն ՀՀ դրամ (միայն դրամայինը)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: 'Ավանդատուներին անվճար տրամադրվող վճարային քարտեր',
      content: (
        <div className="space-y-4 text-sm">
          <p>ՀՀ ռեզիդենտ հանդիսացող ավանդատուների ցանկությամբ Բանկը կարող է տրամադրել վճարային քարտ առանց սպասարկման վճարի:</p>
          <div className="grid grid-cols-2 gap-2 font-medium">
            <div className="bg-gray-50 p-2 border">500,000 - 10,000,000 AMD</div>
            <div className="bg-gray-50 p-2 border">ArCa Classic / Visa Classic</div>
            <div className="bg-gray-50 p-2 border">10,000,000 - 40,000,000 AMD</div>
            <div className="bg-gray-50 p-2 border">Visa Platinum / Mastercard Gold</div>
          </div>
        </div>
      )
    },
    {
      title: 'Տոկոսագումարների հաշվարկման ներկայացուցչական օրինակներ',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="font-bold mb-2">Հաշվարկման բանաձևը՝</p>
          <p className="font-mono">I = (P × R × t / 365) × 0.9 (եկամտային հարկ)</p>
          <hr className="my-3" />
          <p>Օրինակ՝ 1,000,000 դրամ, 365 օր, 12% տարեկան տոկոսադրույք:</p>
          <p className="font-bold text-[#6c2db5]">Վճարման ենթակա տոկոսագումար՝ 107,704 ՀՀ դրամ:</p>
        </div>
      )
    },
    {
      title: 'Ավանդի տարեկան տոկոսային եկամտաբերության չափը',
      content: (
        <div className="space-y-4">
          <p className="font-mono">APY = (1 + r/n)ⁿ - 1</p>
          <p>Այստեղ r-ը պարզ տարեկան տոկոսադրույքն է, իսկ n-ը՝ տարվա ընթացքում տոկոսագումարների կապիտալացման հաճախականությունը:</p>
        </div>
      )
    },
    {
      title: 'Բանկի կողմից առաջարկվող ավանդատեսակների տարեկան տոկոսային եկամտաբերության աղյուսակներ',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center border">
            <thead className="bg-[#6c2db5] text-white">
              <tr>
                <th className="p-2 border">Արժույթ</th>
                <th className="p-2 border">91-180 օր</th>
                <th className="p-2 border">181-365 օր</th>
                <th className="p-2 border">366-545 օր</th>
                <th className="p-2 border">731-1095 օր</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-bold">AMD</td>
                <td className="p-2 border">6.00%</td>
                <td className="border p-2">8.00%</td>
                <td className="border p-2">9.50%</td>
                <td className="border p-2">10.50%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border font-bold">USD</td>
                <td className="p-2 border">2.00%</td>
                <td className="border p-2">3.00%</td>
                <td className="border p-2">4.00%</td>
                <td className="border p-2">5.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: 'Օտարերկրյա Հաշիվների Հարկման Համապատասխանության ակտի (FATCA) ծանուցում',
      content: (
        <div className="space-y-3">
          <p>Հարգելի Հաճախորդ, «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն Հայաստանի Հանրապետության և Ամերիկայի Միացյալ Նահանգների միջև FATCA համաձայնագրի շրջանակներում կարող է պահանջել լրացուցիչ տեղեկատվություն:</p>
          <Link to="#" className="text-[#6c2db5] font-medium hover:underline">Իմանալ ավելին FATCA-ի մասին</Link>
        </div>
      )
    }
  ];

  const documents = [
    { title: 'Տեղեկատվական ամփոփագիր (Քարտեր) 30.08.2022', link: 'https://www.evoca.am/files/global_files/1/cards.pdf' },
    { title: 'Տեղեկատվական ամփոփագիր (Ավանդներ) 15.01.2026', link: 'https://www.evoca.am/files/global_files/1/summary-deposits-15-01-2026.pdf' },
    { title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025', link: 'https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50 gap-3">
        <Link to="#" className="hover:opacity-70 transition-all">
          <img src="https://www.evoca.am/img/social-icons/fb-icon.png" alt="Facebook" className="w-5" />
        </Link>
        <Link to="#" className="hover:opacity-70 transition-all">
          <img src="https://www.evoca.am/img/social-icons/twitter-icon.png" alt="Twitter" className="w-5" />
        </Link>
        <Link to="#" className="hover:opacity-70 transition-all">
          <img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" alt="LinkedIn" className="w-5" />
        </Link>
        <Link to="#" className="hover:opacity-70 transition-all">
          <img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" alt="Pinterest" className="w-5" />
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
                ${isActive || item.name === 'Կարևոր տեղեկատվություն' ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-8 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Ավանդներ</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Կարևոր տեղեկատվություն</span>
        </div>

      
        <div className="mb-12">
          <h1 className="text-[32px] md:text-[44px] font-bold text-[#1a1a1a]">Կարևոր տեղեկատվություն</h1>
        </div>

        
        <div className="mb-14">
          <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-8">Ընդհանուր դրույթներ</h2>
          <div className="space-y-6 max-w-[1100px]">
            {generalProvisions.map((point, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-[#6c2db5] font-bold text-[18px] min-w-[25px]">
                  {index + 1}.
                </span>
                <p className="text-[#4a4a4a] text-[16px] leading-[1.7]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mb-16 max-w-[1200px]">
          <div className="flex flex-col border-t border-[#e5e5e5]">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-[#e5e5e5] group">
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={`text-[18px] font-bold transition-colors duration-200 ${openAccordion === index ? 'text-[#6c2db5]' : 'text-[#1a1a1a] group-hover:text-[#6c2db5]'}`}>
                    {item.title}
                  </span>
                  <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === index ? 'rotate-180 text-[#6c2db5]' : 'text-[#a0a0a0] group-hover:text-[#6c2db5]'}`}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L8 8L14 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? 'max-h-[2000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-[#4a4a4a] text-[15px] leading-relaxed pr-8">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="bg-[#f9f9f9] p-6 md:p-10 rounded-[24px]">
          <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-8">Փաստաթղթեր</h2>
          <div className="flex flex-col gap-3">
            {documents.map((doc, index) => (
              <a 
                key={index} 
                href={doc.link} 
                className="flex items-center gap-4 bg-white rounded-[16px] p-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white border border-[#f0f0f0]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#6c2db5]">
                    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[16px] font-medium text-[#1a1a1a] group-hover:text-[#6c2db5] transition-colors">
                  {doc.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karevor;