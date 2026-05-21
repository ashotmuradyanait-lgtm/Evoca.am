import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Shuka: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '' },
    { name: 'Պարտատոմսեր', path: '/part' },
    { name: 'ՀԿԴ ծառայություններ', path: '/depozit' },
    { name: 'Ռեպո/Հակադարձ ռեպո գործարքներ', path: '/brepo' },
    { name: 'EvocaINVEST', path: '/inv' },
  ];

  const accordionData = [
    {
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <a href="#" className="text-[#6c2db5] font-bold underline mb-2 inline-block text-[15px]">Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման կանոններ</a>
            <p className="text-[#555] text-[15px] leading-relaxed">
              Կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման հանձնարարականների ընդունման/հաղորդման, հաճախորդների հետ կապի հաստատման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրվող գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են համաձայն ՀՀ քաղաքացիական օրենսգրքի, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքի, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերի:
            </p>
          </div>
          <div>
            <a href="#" className="text-[#6c2db5] font-bold underline mb-2 inline-block text-[15px]">Արժեթղթերի պահառության գործունեության կանոններ</a>
            <p className="text-[#555] text-[15px] leading-relaxed">
              Կանոնները սահմանում են արժեթղթերի հաշիվների հետ կապված գործառնությունների իրականացման, հաճախորդների և արժեթղթերով գործարքների հաշվառման պայմաններն ու կարգը:
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Ներդրումային ծառայությունների մատուցման սակագներ",
      content: <p className="text-[#555] text-[15px]">Սակագների և պայմանների մանրամասն տեղեկատվությունը կարող եք ստանալ Բանկի մասնաճյուղերում:</p>
    },
    {
      title: "Տեղական և ռուսական շուկաներում ծառայությունների մատուցման սակագներ",
      content: <p className="text-[#555] text-[15px]">Տեղեկատվություն տեղական և ռուսական շուկաների սակագների վերաբերյալ:</p>
    },
    {
      title: "Միջազգային շուկաներում ծառայությունների մատուցման սակագներ",
      content: <p className="text-[#555] text-[15px]">Տեղեկատվություն միջազգային շուկաների սակագների վերաբերյալ:</p>
    },
    {
      title: "Լրացուցիչ տեղեկատվություն",
      content: <p className="text-[#555] text-[15px]">Այլ պայմաններ, կանոնակարգեր և հավելյալ ռիսկերի բացահայտում:</p>
    }
  ];

  return (
    <div className="w-full bg-white pb-20">
      
      <div className="flex items-center gap-6 pt-14">
        <Link to="/">
          <img 
            className="h-[140px] w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        <nav className="flex gap-3 text-gray-800 font-medium text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</p>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="/aylq" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        <Link to="/evocaonline" className="px-30">
          <Link to="/evocaonline" className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl p-1">EvocaONLINE</Link>
        </Link>
      </div>

      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
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
        <span className="cursor-pointer text-gray-800">Արժեթղթերի շուկա</span>
        <span>›</span>
        <span className="text-gray-800">Ներդրումային ծառայություններ</span>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-4">
        
        <h1 className="text-3xl md:text-[40px] font-bold text-[#333333] mb-6">
          Ներդրումային ծառայություններ
        </h1>
        
        <p className="text-[#555] text-[15px] md:text-[16px] leading-relaxed max-w-[1200px] mb-8">
          Բանկը հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ արտասահմանյան շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են թե՛ իրավաբանական և թե՛ ֆիզիկական անձ հանդիսացող հաճախորդներին:
        </p>

        <h3 className="text-xl font-bold text-[#333333] mb-4">Հաճախորդ դառնալու համար՝</h3>
        
        <p className="text-[#555] text-[15px] md:text-[16px] leading-relaxed max-w-[1200px] mb-6">
          Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <a href="https://www.evoca.am/hy/business-account-opening-and-services/" className="text-[#6c2db5] underline font-bold">այստեղ</a>:
          <br /><br />
          Բանկային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
        </p>

        <div className="text-[#555] text-[15px] md:text-[16px] leading-relaxed mb-8">
          <p><span className="font-bold">Հասցե՝</span> Հանրապետության 44/2</p>
          <p className="mt-4"><span className="font-bold">Հետադարձ կապ՝</span></p>
          <p>Հեռ.՝ 205555</p>
          <p>Էլ. հասցե՝ <a href="mailto:invest@evoca.am" className="text-[#6c2db5] underline font-bold">invest@evoca.am</a></p>
        </div>

        <p className="text-[#333] text-[15px] md:text-[16px] leading-relaxed max-w-[1200px] mb-12">
          <span className="font-bold uppercase">Ուշադրություն․</span> ՖԻՆԱՆՍԱԿԱՆ ՇՈՒԿԱՆԵՐՈՒՄ ԳՈՐԾԱՐՔՆԵՐԻ ԻՐԱԿԱՆԱՑՄԱՆ ՀԵՏ ԿԱՊՎԱԾ ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
        </p>

        <div className="w-full max-w-[1200px]">
          <h2 className="text-2xl font-bold text-[#333333] mb-6 uppercase">Այլ տեղեկատվություն</h2>
          
          <div className="flex flex-col border border-gray-200 rounded-lg">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center bg-white p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#333333] text-[15px] md:text-[16px]">{item.title}</span>
                  <svg 
                    className={`w-5 h-5 text-[#6c2db5] transform transition-transform duration-300 ${openSectionIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openSectionIndex === index ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 border-t border-gray-100 bg-white">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
export default Shuka;