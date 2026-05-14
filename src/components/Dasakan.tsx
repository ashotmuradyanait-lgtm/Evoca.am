import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Dasakan: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Դասական ավանդ', path: '/dasakan' },
  ];

  const accordionData = [
    {
      id: 1,
      title: "Ընդհանուր տեղեկատվություն",
      content: (
        <div className="space-y-4 text-[#4a4a4a] text-[15px] leading-relaxed">
          <p>Դասական ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից (այդ թվում՝ անհատ ձեռնարկատերերից):</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Արժույթը՝ ՀՀ դրամ, ԱՄՆ դոլար, Եվրո և ՌԴ ռուբլի:</li>
            <li>Տևողությունը՝ 91-ից մինչև 1095 օր:</li>
            <li>Նվազագույն գումարը՝ 25,000 ՀՀ դրամ կամ համարժեք արտարժույթ:</li>
          </ul>
        </div>
      )
    },
    { id: 2, title: "Տոկոսագումարների հաշվարկման և վճարման կարգը", content: "..." },
    { id: 3, title: "Տարեկան տոկոսային եկամտաբերություն", content: "..." },
    { id: 4, title: "Այլ պայմաններ", content: "..." }
  ];

  return (
    <div className="w-full bg-[#f9f9f9] font-sans min-h-screen pb-20">
      <div className="flex items-center gap-6 pt-14   ">
            
            <Link to="/">
            <img 
              className="h-[140px] w-[300px] object-contain" 
              src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
              alt="Evocabank Logo" 
            />
            </Link>
           
            
            <nav className="flex gap-4 text-gray-800 font-medium text-[15px]">
              <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
              <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
              <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
              <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
              <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</p>
              <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
              <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
              <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
            </nav>
            <Link to="/evocaonline" className="px-20">
            <Link to="/evocaonline" className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-1">EvocaONLINE</Link>
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
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="hover:text-gray-600 transition-colors">🏠</Link>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer">Բիզնես</span>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer">Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800">Դասական ավանդ</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center shadow-sm border border-gray-100">
          <div className="flex-1 p-12 lg:p-20">
            <h1 className="text-[40px] lg:text-[56px] font-bold text-[#2d2d2d] mb-6 leading-tight">
              Դասական <br /> ավանդ
            </h1>
            <p className="text-[#4a4a4a] text-[18px] mb-8 max-w-[500px] leading-relaxed">
              Ապահովեք Ձեր դրամական միջոցների կայուն աճն ու պահպանումը բարձր եկամտաբերությամբ՝ ներդնելով Դասական ավանդ։
            </p>
            <div className="flex flex-col gap-4 text-[#6c2db5] font-medium">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full"></span>
                Ավանդների ընդունում ֆիզիկական և իրավաբանական անձանցից
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full"></span>
                Անվճար միջազգային քարտ՝ ավանդի ներդրման դեպքում
              </div>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[400px] md:h-full min-h-[500px]">
            
            <img 
              src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
              alt="Classic Deposit" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[28px] font-bold text-[#6c2db5] mb-8">Անհրաժեշտ տեղեկատվություն</h2>
        <div className="flex flex-col gap-4">
          {accordionData.map((section) => (
            <div key={section.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-[18px] font-semibold text-[#2d2d2d]">{section.title}</span>
                <span className={`text-2xl text-[#6c2db5] transform transition-transform duration-300 ${openSections.includes(section.id) ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {openSections.includes(section.id) && (
                <div className="p-6 pt-0 border-t border-gray-50">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

     
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-2xl bg-white py-6 px-3 shadow-lg z-50">
        <div className="flex flex-col gap-4">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Dasakan;