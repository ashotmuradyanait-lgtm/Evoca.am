import React, { useState } from 'react'; 
import { X, MessageCircle } from 'lucide-react';

interface SubMenuItem {
  title: string;
  items: string[];
}

interface SubMenuData {
  [key: string]: SubMenuItem[]; 
}

const Ereqgic: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Անհատ');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const mainMenuItems = [
    'Անհատ',
    'Բիզնես',
    'Ակնթարթային վճարումներ',
    'Մեր մասին',
    'Նորություններ',
    'Բլոգ',
    'Կարիերա'
  ];

  const subMenuData: SubMenuData = {
    'Անհատ': [
      { title: 'Վարկեր', items: ['Վարկեր', 'Վարկային պատմություն և սքոր', 'Կարևոր տեղեկատվություն'] },
      { title: 'Քարտեր', items: ['Քարտեր', 'Քարտերի տրամադրում և սպասարկում', 'Սոցիալական ապահովության վճարային քարտեր', 'Evoca Benefits'] },
      { title: 'Ավանդներ', items: ['Ավանդներ', 'Կարևոր տեղեկատվություն'] },
      { title: 'Հաշիվներ', items: ['Հաշիվների բացում և սպասարկում', 'Առարկայազուրկ մետաղական հաշիվներ', 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում'] },
      { title: 'Փոխանցումներ', items: ['Դրամական փոխանցումներ', 'Վճարային համակարգեր'] },
      { title: 'Արժեթղթեր', items: ['Ներդրումային ծառայություններ', 'Պարտատոմսեր', 'ՀԿԴ ծառայություններ'] }
    ],
    'Բիզնես': [
      { title: 'Վարկեր', items: ['Բիզնես վարկեր'] },
      { title: 'Լիզինգ', items: ['Evoca Leasing', 'Հատուկ առաջարկ'] },
      { title: 'Հաշիվներ', items: ['Հաշիվների բացում և սպասարկում', 'Առարկայազուրկ մետաղական հաշիվներ'] },
      { title: 'Ավանդներ', items: ['Դասական ավանդ'] },
      { title: 'Արժեթղթերի շուկա', items: ['Ներդրումային ծառայություններ', 'Պարտատոմսեր', 'ՀԿԴ ծառայություններ', 'Ռեպո/Հակադարձ ռեպո գործարքներ', 'EvocaINVEST'] },
      { title: 'Առևտրի ֆինանսավորում', items: ['Երաշխիք', 'Ֆակտորինգային ֆինանսավորում', 'Ակրեդիտիվ', 'Ինկասո'] },
      { title: 'Դիջիթալ', items: ['V-POS Տերմինալ'] },
      { title: 'Այլ', items: ['Պահատուփեր'] }
    ],
    'Մեր մասին': [
      { title: 'Evoca-ի մասին', items: ['Ընդհանուր', 'Կառուցվածք', 'Բաժնետերեր', 'Ղեկավարություն', 'Գործընկերներ', 'Մրցանակներ', 'Կարծիքներ', 'CSR'] },
      { title: 'Հաշվետվություններ', items: ['Աուդիտորական եզրակացություն', 'Ֆինանսական հաշվետվություններ', 'Ներդրողների համար', 'Հրապարակվող հաշվետվություններ'] },
      { title: 'Սակագներ', items: ['Վարկեր ֆիզիկական անձանց', 'Վարկեր իրավաբանական անձանց', 'Միջնորդավճարների սակագները', 'Ավանդների սակագներ', 'Արխիվ'] },
      { title: 'Հայտարարություններ', items: ['Հայտարարություններ'] }
    ],
    'Կարիերա': [
      { 
        title: 'Evoca Լայֆ', 
        items: ['Մշակույթ', 'Առավելություններ', 'Հաճախ տրվող հարցեր', 'Ինչպե՞ս ընդունվել աշխատանքի Evocabank-ում'] 
      },
      { 
        title: 'Աշխատանք և պրակտիկա', 
        items: ['Աշխատանք Evoca-ում', 'Ուսումնական պրակտիկա', 'EvocaBRIDGE'] 
      }
    ]
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex font-sans h-screen overflow-hidden select-none">
      
      {/* Ձախ Հատված */}
      <div className="w-[35%] bg-[#111111] relative flex flex-col items-end pt-32 pr-12">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-left-top pointer-events-none"
          style={{ backgroundImage: `url('https://www.evoca.am/img/menu-bg.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none"></div>

        <ul className="relative z-10 flex flex-col items-end gap-6 w-full mt-10">
          {mainMenuItems.map((item) => (
            <li key={item} className="w-full text-right relative flex items-center justify-end group">
              {item === 'Ակնթարթային վճարումներ' ? (
                <a
                  href="http://localhost:5173/#/providers"
                  className="text-[22px] font-bold transition-all duration-300 pr-2 text-white hover:text-gray-300 group-hover:-translate-x-1"
                >
                  {item}
                </a>
              ) : item === 'Նորություններ' ? (
                <a
                  href="https://www.evoca.am/hy/news"
                  className="text-[22px] font-bold transition-all duration-300 pr-2 text-white hover:text-gray-300 group-hover:-translate-x-1"
                >
                  {item}
                </a>
              ) : item === 'Բլոգ' ? (
                <a
                  href="https://www.evoca.am/hy/blog"
                  className="text-[22px] font-bold transition-all duration-300 pr-2 text-white hover:text-gray-300 group-hover:-translate-x-1"
                >
                  {item}
                </a>
              ) : (
                <button
                  onClick={() => setActiveMenu(item)}
                  className={`text-[22px] font-bold transition-all duration-300 pr-2 ${
                    activeMenu === item 
                      ? 'text-[#6200ea]' 
                      : 'text-white hover:text-gray-300 group-hover:-translate-x-1'
                  }`}
                >
                  {item}
                </button>
              )}
              
              {activeMenu === item && 
               item !== 'Ակնթարթային վճարումներ' && 
               item !== 'Նորություններ' && 
               item !== 'Բլոգ' && (
                <div className="absolute -right-[48px] w-0 h-0 
                  border-y-[12px] border-y-transparent 
                  border-r-[16px] border-r-[#6200ea] z-20 transition-all">
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Աջ Հատված */}
      <div className="w-[65%] bg-[#6200ea] relative px-20 pt-32 pb-20 overflow-y-auto">
        
        {/* Այստեղ setIsOpen-ի փոխարեն դրեցի window.history.back() */}
        <button 
          onClick={() => window.history.back()}
          className="absolute top-10 right-10 text-white hover:opacity-70 transition-opacity"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-2 gap-x-20 gap-y-12 relative z-10">
          {subMenuData[activeMenu]?.map((section: SubMenuItem, idx: number) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-white text-xl font-bold mb-1 tracking-wide">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.items.map((link: string, linkIdx: number) => (
                  <li key={linkIdx}>
                    <a 
                      href="#" 
                      className="text-white/80 text-[15px] font-medium transition-all hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Ereqgic;