import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Brepo: React.FC = () => {
  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/shuka' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '/depozit' },
    { name: 'Ռեպո/Հակադարձ ռեպո գործարքներ', path: '' },
    { name: 'EvocaINVEST', path: '/inv' },
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
        <nav className="flex gap-1 text-gray-800 font-medium text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        <div className="px-30">
          <Link to="/evocaonline" className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl p-1 inline-block pt-1.5">
            EvocaONLINE
          </Link>
        </div>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
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
        <span className="text-gray-800">Ռեպո/Հակադարձ ռեպո գործարքներ</span>
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
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          
         
          <div className="flex-1 max-w-[800px]">
            <h1 className="text-2xl md:text-[36px] font-black text-[#1a1a1a] mb-8 tracking-tight">
              Ռեպո/Հակադարձ ռեպո գործարքներ
            </h1>

            <div className="flex flex-col gap-6 text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed font-normal">
              <p>
                Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
              </p>

              <p>
                Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
              </p>

              <p>
                Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Brepo;