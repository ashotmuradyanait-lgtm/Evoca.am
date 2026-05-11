import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Arzetxter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '' },
    { name: 'Պարտատոմսեր', path: '' },
    { name: 'ՀԿԴ ծառայություններ', path: '' },
    { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '' },
    { name: 'EvocaINVEST', path: '' },
  ];

  const accordions = [
    {
      title: 'Ներդրումային ծառայությունների մատուցման կանոններ',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-[#6c2db5] font-bold text-[16px] mb-2 hover:underline cursor-pointer">
              Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ
            </h4>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկատվություն: Կանոնները մշակված են Հայաստանի Հանրապետության քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ իրավական ակտերին համապատասխան:
            </p>
          </div>
          <div>
            <h4 className="text-[#6c2db5] font-bold text-[16px] mb-2 hover:underline cursor-pointer">
              Արժեթղթերի Պահառության գործունեության կանոններ
            </h4>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Այս կանոնները սահմանում են մեր հաճախորդների հաշիվների հետ կապված գործառնությունների, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի Հանրապետության քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ իրավական ակտերին համապատասխան:
            </p>
          </div>
        </div>
      )
    },
    {
      title: 'Ծառայությունների մատուցման սակագներ',
      content: (
        <div className="flex flex-col gap-4">
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ
          </a>
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            Միջազգային շուկաներում ծառայությունների մատուցման սակագներ
          </a>
        </div>
      )
    },
    {
      title: 'Լրացուցիչ տեղեկատվություն',
      content: (
        <div className="flex flex-col gap-4">
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման ընթացակարգ
          </a>
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            «Շահերի բախման սահմանափակման» ընթացակարգ
          </a>
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            Ֆոնդային բորսաներ
          </a>
          <a href="#" className="text-[#6c2db5] font-bold text-[16px] hover:underline">
            Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ
          </a>
        </div>
      )
    }
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Արժեթղթեր</span>
        <span>›</span>
        <span className="text-gray-800">Ներդրումային ծառայություններ</span>
      </div>

      {/* Նոր ավելացված բովանդակությունը */}
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center bg-[#f4ecfc] rounded-xl overflow-hidden mb-12">
          <div className="md:w-[45%] p-8 lg:p-14">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1f0b40] mb-6 leading-tight">
              Ներդրումային <br /> ծառայություններ
            </h1>
            <p className="text-[16px] text-gray-800 leading-relaxed">
              Բանկն առաջարկում է ներդրումային ծառայություններ՝ ընձեռելով ձեզ հնարավորություն ստանալու եկամտի նոր աղբյուրների ձեր պահանջներին և ցանկություններին համապատասխան:
            </p>
          </div>
          <div className="md:w-[55%] w-full flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Ներդրումային ծառայություններ" 
              className="w-full h-auto object-cover max-h-[450px]" 
            />
          </div>
        </div>

        {/* Տեքստային ինֆորմացիա */}
        <div className="text-[16px] text-[#333333] leading-relaxed mb-12">
          <p className="mb-8">
            Մեր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
          </p>

          <h3 className="font-bold text-[18px] mb-4">Ինչպես դառնալ հաճախորդ.</h3>
          <p className="mb-4">
            Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ: Հաշվի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <a href="#" className="text-[#6c2db5] underline font-medium">այստեղ</a>:
          </p>
          <p className="mb-8">
            Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
          </p>

          <div className="mb-8 text-[15px]">
            <p className="mb-4">ք. Երևան, Հանրապետության 44/2</p>
            <p className="font-bold mb-1">Հետադարձ կապ՝</p>
            <p className="font-bold mb-1">+374 10 777 453</p>
            <p className="font-bold mb-4">+374 10 603055</p>
            <p>
              Էլ. փոստ՝ <a href="mailto:investsecurities@evoca.am" className="text-[#6c2db5] underline font-medium">investsecurities@evoca.am</a>
            </p>
          </div>

          <div className="mb-12">
            <p className="text-[15px]">
              <span className="font-bold text-[#6c2db5] mr-1 uppercase">Ուշադրություն.</span>
              Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
            </p>
          </div>
        </div>

        {/* Ակորդեոնի հատված (Անհրաժեշտ տեղեկատվություն) */}
        <div>
          <h2 className="text-[20px] font-bold text-[#1f0b40] uppercase mb-6">
            ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
          </h2>
          
          <div className="border-t border-gray-200">
            {accordions.map((acc, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(acc.title)}
                  className="w-full py-5 flex justify-between items-center text-left transition-colors group"
                >
                  <span className={`text-[17px] font-bold ${openSection === acc.title ? 'text-[#6c2db5]' : 'text-[#333333] group-hover:text-[#6c2db5]'}`}>
                    {acc.title}
                  </span>
                  {/* Այստեղ փոխարինվել է միայն նշանը պտտվող սլաքով (SVG) */}
                  <span className={`flex items-center justify-center transition-transform duration-300 text-[#6c2db5] ${openSection === acc.title ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {openSection === acc.title && (
                  <div className="pb-6 pt-2 pr-4 text-gray-700 animate-fadeIn">
                    {acc.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Arzetxter;