import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Repo: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/arzetxter' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '/hkd' },
    { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '' },
    { name: 'EvocaINVEST', path: '/invest' },
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen">
      <Menu />
      
      {/* Sub-Navigation Bar */}
      <div className="w-full bg-[#6c2db5] text-white sticky top-0 z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium flex-shrink-0
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
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
        <span className="text-gray-800 font-medium">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
      </div>

      
      <div className="w-full bg-[#f4f0ff] overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 px-6 md:px-12 py-10 md:py-20 bg-white md:bg-transparent z-10">
            <h1 className="text-[#333] text-2xl md:text-[42px] font-bold leading-tight mb-8">
              Ռեպո/Հակադարձ Ռեպո <br className="hidden md:block" /> գործարքներ
            </h1>
            <p className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed max-w-[550px]">
              Դրամական միջոցներ ներգրավելու և սպասարկելու նպատակով Evocabank-ն իրականացնում է Ռեպո գործարքներ։ Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ Բանկը կատարում է իրացվելիության կառավարում։
            </p>
          </div>
          
         
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783548886405/780x585.jpg" 
              alt="Repo Transactions" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-[900px] space-y-8 text-[#4a4a4a] text-[16px] md:text-[18px] leading-8">
          <p>
            Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (բանկեր, ներդրումային ընկերություններ, ներդրումային ֆոնդեր, վարկային կազմակերպություններ, ապահովագրական ընկերություններ)։
          </p>

          <p>
            Արժեթղթերը կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի ֆոնդային բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով։
          </p>

          <p className="font-medium">
            Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում։
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repo;