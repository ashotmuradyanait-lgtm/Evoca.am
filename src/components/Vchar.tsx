import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Vchar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Դրամական փոխանցումներ', path: '/poxancum' },
    { name: 'Վճարային համակարգեր', path: '' },
  ];

  const paymentSystems = [
    {
      id: 'moneytun',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png', 
      description: 'Հիմնադրվել է 2007 թվականին: Նպատակն է սպասարկել Հայաստանի և ԱՄՆ միջև դրամական փոխանցումները: MoneyTun-ի կողմից իրականացվող փոխանցումներն ապահովում են զգալի հարմարավետություն:',
      contact: {
        title: 'MoneyTun հաճախորդների սպասարկման հեռախոսահամար՝',
        phone: '+1 702 77 22 85',
        scheduleTitle: 'Աշխատանքային գրաֆիկ՝',
        schedule: 'Երկուշաբթի-ուրբաթ 10:00-17:30\nՇաբաթ 10:00-14:00\nԿիրակի 10:00-13:00'
      }
    },
    {
      id: 'ria',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png', 
      description: 'Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է ըստ RIA համակարգի սահմանած սակագների:',
      contact: {
        title: 'Ria Հաճախորդների սպասարկման հեռախոսահամար Հայաստանի համար՝',
        phone: '+374 94 23 59 00',
        scheduleTitle: 'Աշխատանքային գրաֆիկ՝',
        schedule: 'Երկուշաբթի-ուրբաթ, 09:00-18:00 (Երևանի ժամանակով)',
        langTitle: 'Հաճախորդների աջակցության լեզուներ՝',
        lang: 'ռուսերեն, անգլերեն'
      }
    },
    {
      id: 'ubpay',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png', 
      description: 'UBPay -ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային բնույթի փոխանցումների իրականացման համար: Համակարգի օգնությամբ կարելի է իրականացնել փոխանցումներ Հայաստանից դեպի ՌԴ և հակառակ ուղղությամբ:',
      contact: {
        title: 'UBPay Հաճախորդների սպասարկման հեռախոսահամար՝',
        phone: '+374 43 00 40 00'
      }
    },
    {
      id: 'intelexpress',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png',
      description: 'Գործում է ավելի քան 57,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով: Միջնորդավճարը գանձվում է ըստ համակարգի սահմանած սակագների:',
      contact: null
    },
    {
      id: 'stak',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png', 
      description: '«ՍՏԱԿ» դրամական փոխանցումների հայաստանյան միասնական համակարգի գործունեության նպատակը ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար պատշաճ որակի դրամական փոխանցումների իրականացման կազմակերպումն է: Համակարգը հնարավորություն է տալիս կատարել և ստանալ փոխանցումներ դրամով, ԱՄՆ դոլարով, եվրոյով:',
      contact: null
    },
    {
      id: 'moneygram',
      logoImage: 'https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png', 
      description: 'Գործում է 170 երկրի ավելի քան 125,000 կետերում: Հայաստան փոխանցում են դոլար, եվրո, իսկ Հայաստանից փոխանցում են միայն դոլար: Միջնորդավճարը գանձվում է ըստ MoneyGram համակարգի սահմանած սակագների:',
      contact: {
        title: 'MoneyGram Հաճախորդների սպասարկման հեռախոսահամար՝',
        phone: '1-800-926-9400'
      }
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Փոխանցումներ</span>
        <span>›</span>
        <span className="text-gray-800">Վճարային համակարգեր</span>
      </div>
      
    
      <main className="max-w-[1400px] mx-auto px-6 pb-20">
        <h1 className="text-[36px] font-bold text-[#1d1d1f] mt-4 mb-10">Վճարային համակարգեր</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {paymentSystems.map((sys) => (
            <div 
              key={sys.id} 
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center transition-shadow hover:shadow-md"
            >
              {/* Նկարի դաշտը */}
              <div className="h-[80px] flex items-center justify-center mb-6 w-full">
                <img 
                  src={sys.logoImage} 
                  alt={`${sys.id} logo`} 
                  className="max-h-full max-w-[200px] object-contain"
                />
              </div>

              <p className="text-[15px] text-gray-700 leading-relaxed flex-grow">
                {sys.description}
              </p>

              {sys.contact && (
                <div className="w-full pt-8 mt-4 text-[14px]">
                  {sys.contact.title && (
                    <p className="text-[#6c2db5] font-bold mb-1">{sys.contact.title}</p>
                  )}
                  {sys.contact.phone && (
                    <p className="text-[#6c2db5] font-bold text-[16px] mb-4">{sys.contact.phone}</p>
                  )}
                  {sys.contact.scheduleTitle && (
                    <p className="font-bold text-gray-800 mb-1">{sys.contact.scheduleTitle}</p>
                  )}
                  {sys.contact.schedule && (
                    <p className="text-gray-600 mb-4 whitespace-pre-line">{sys.contact.schedule}</p>
                  )}
                  {sys.contact.langTitle && (
                    <p className="font-bold text-gray-800 mb-1">{sys.contact.langTitle}</p>
                  )}
                  {sys.contact.lang && (
                    <p className="text-gray-600">{sys.contact.lang}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default Vchar;