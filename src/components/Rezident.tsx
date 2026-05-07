import Menu from '../pages/Menu';
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';


interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  // Վիդեոյում բաց վիճակում են
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 border border-gray-200 rounded-[20px] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-8 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-[20px] font-bold text-gray-800 lowercase">{title}</span>
        {isOpen ? (
          <ChevronUp size={24} className="text-[#6c2db5]" />
        ) : (
          <ChevronDown size={24} className="text-[#6c2db5]" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-10 pt-4 text-[#4a4a4a] text-[15px] leading-relaxed border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

const Rezident: React.FC = () => {
  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '/hashivner' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/metaxakan' },
    { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/remote' }
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
                ${item.name === 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում' ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
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
        <span className="cursor-pointer hover:text-gray-600">Հաշիվներ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
          <div className="flex flex-col gap-3">
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start mb-20 pt-4">
          <div className="flex-1">
            <h1 className="text-[44px] font-bold text-gray-800 leading-[1.1] mb-8 lowercase">Ոչ ռեզիդենտ <br /> հաճախորդների հեռավար <br /> սպասարկում </h1>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք <br /> բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել <br /> հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից <br /> և ցանկացած պահի։
            </p>
          </div>
          <div className="flex-1">
            <img src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" alt="Remote" className="w-full h-auto" />
          </div>
        </div>

        {/* ԼՐԱՑՈՒՑԻՉ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ Section */}
        <div className="mb-20">
          <h2 className="text-[26px] font-bold text-[#6c2db5] mb-12 uppercase tracking-wide text-center md:text-left">ԼՐԱՑՈՒՑԻՉ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight">Prime կարգավիճակ Բանկում</h3>
              <p className="text-gray-500 text-[15px]">ստացեք լրացուցիչ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight">Անձնական մենեջեր/Անձնական օգնական</h3>
              <p className="text-gray-500 text-[15px]">աջակցություն ֆինանսական ցանկացած հարցում անմիջապես անձնական օգնականի կողմից</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight">Հեռավար սպասարկում</h3>
              <p className="text-gray-500 text-[15px]">ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight">Քարտերի անվճար առաքում</h3>
              <p className="text-gray-500 text-[15px]">անվճար առաքում Ձեր գտնվելու վայր, Ձեզ հարմար պահին՝ արագ և անվճար</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Accordion title="անձանց հաշվի բացման պայմաններ">
            <ul className="list-disc pl-5 space-y-3 marker:text-[#6c2db5]">
              <li>Հեռավար եղանակով հաշիվների բացումն իրականացվում է միայն ՀՀ քաղաքացիություն չունեցող ֆիզիկական անձանց համար, ովքեր գտնվում են արտերկրում:</li>
              <li>Հեռավար եղանակով բացվում են միայն խնայողական հաշիվներ:</li>
            </ul>
          </Accordion>

          <Accordion title="անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր">
            <ul className="list-disc pl-5 space-y-3 marker:text-[#6c2db5]">
              <li>Անձնագիր</li>
              <li>Մշտական բնակության հասցեն հավաստող փաստաթուղթ (եթե բացակայում է անձնագրում)</li>
            </ul>
          </Accordion>

          <Accordion title="իրավաբանական անձանց փաստաթղթերի ցանկ">
            <ul className="list-disc pl-5 space-y-3 marker:text-[#6c2db5]">
              <li>Ընկերության գրանցման վկայական (Certificate of Incorporation)</li>
              <li>Կանոնադրություն (Articles of Association)</li>
              <li>Տնօրենների և բաժնետերերի անձը հաստատող փաստաթղթեր</li>
            </ul>
          </Accordion>

          <Accordion title="բացման փուլեր">
            <ol className="list-decimal pl-5 space-y-3 marker:text-[#6c2db5] marker:font-bold">
              <li>Հայտի ներկայացում</li>
              <li>Փաստաթղթերի փաթեթի ուսումնասիրություն</li>
              <li>Տեսազանգի միջոցով նույնականացում</li>
              <li>Հաշվի բացում</li>
            </ol>
          </Accordion>
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-[20px] border border-gray-100">
          <p className="text-gray-600 italic">
            Ցանկացած հարցի դեպքում կարող եք գրել օնլայն <span className="text-[#6c2db5] font-bold">primeonline@evoca.am</span> հասցեին կամ զանգահարել <span className="text-[#6c2db5] font-bold">+374 33 625555</span> հեռախոսահամարին:
          </p>
        </div>

        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="font-bold text-gray-800 text-[22px] mb-8 lowercase">փաստաթղթեր</h3>
          <div className="space-y-4">
            <Link to="#" className="flex items-center gap-4 group w-fit">
              <div className="w-10 h-10 flex items-center justify-center text-red-500 font-bold border border-red-100 rounded">PDF</div>
              <span className="text-gray-700 font-medium group-hover:text-[#6c2db5] transition-colors">Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rezident;   