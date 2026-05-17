import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Depozit: React.FC = () => {
  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/shuka' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '' },
    { name: 'Ռեպո/Հակադարձ ռեպո գործարքներ', path: '/brepo' },
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
        <nav className="flex gap-2 text-gray-800 font-medium text-[15px]">
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
        <span className="text-gray-800">ՀԿԴ ծառայություններ</span>
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
        
        <h1 className="text-2xl md:text-[34px] font-black text-[#1a1a1a] mb-8 tracking-tight max-w-[900px] leading-tight">
          Հայաստանի Կենտրոնական Դեպոզիտարիայի (ՀԿԴ) ծառայություններ
        </h1>

        <div className="flex flex-col gap-6 text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed max-w-[1100px] font-normal mb-10">
          <p>
            ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումն իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
          </p>

          <p>
            Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքված պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
          </p>

          <p>
            Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում:
          </p>
        </div>

       
        <div className="flex flex-col gap-4 mt-8">
          <a 
            href="https://www.evoca.am/file_manager/Bonds%202026/%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6%D5%AB%20%D4%BF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6%20%D4%B4%D5%A5%D5%BA%D5%B8%D5%A6%D5%AB%D5%BF%D5%A1%D6%80%D5%AB%D5%A1%D5%B5%D5%AB%20%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80%D5%AB%20%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%80%D5%A4%D5%A1%D5%BE%D5%B8%D6%80%D5%B4%D5%A1%D5%B6%20%D5%BD%D5%A1%D5%AF%D5%A1%D5%A3%D5%B6%D5%A5%D6%80%20%D6%87%20%D5%A4%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%B6%D5%A5%D6%80.pdf" 
            className="text-[#730D8D] hover:text-[#530498] font-bold underline text-[15px] md:text-[16px] transition-colors max-w-max"
          >
            Հայաստանի Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ
          </a>
          
          <a 
            href="https://www.evoca.am/file_manager/PDF-FILES/Investment%20Services/%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6%D5%AB%20%D5%AF%D5%A5%D5%B6%D5%BF%D6%80%D5%B8%D5%B6%D5%A1%D5%AF%D5%A1%D5%B6%20%D5%A4%D5%A5%D5%BA%D5%B8%D5%A6%D5%AB%D5%BF%D5%A1%D6%80%D5%AB%D5%A1%D5%B5%D5%AB%20%D5%AF%D5%B8%D5%B2%D5%B4%D5%AB%D6%81%20%D5%B4%D5%A1%D5%BF%D5%B8%D6%82%D6%81%D5%BE%D5%B8%D5%B2%20%D5%AE%D5%A1%D5%BC%D5%A1%D5%B5%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80%D5%AB%20%D5%B4%D5%AB%D5%BB%D5%B6%D5%B8%D6%80%D5%A4%D5%A1%D5%BE%D5%B8%D6%80%D5%B4%D5%A1%D5%B6%20%D5%A3%D5%B8%D6%80%D5%AE%D5%B8%D6%82%D5%B6%D5%A5%D5%B8%D6%82%D5%A9%D5%B5%D5%A1%D5%B6%20%D5%AF%D5%A1%D5%B6%D5%B8%D5%B6%D5%B6%D5%A5%D6%80.pdf" 
            className="text-[#730D8D] hover:text-[#530498] font-bold underline text-[15px] md:text-[16px] transition-colors max-w-max"
          >
            Հայաստանի Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ
          </a>
        </div>

      </div>
    </div>
  );
};

export default Depozit;