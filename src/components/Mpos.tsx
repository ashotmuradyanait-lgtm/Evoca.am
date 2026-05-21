import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mpos: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'V-POS Տերմինալ', path: '/digital' },
    { name: 'POS Տերմինալ', path: '/pos' },
    { name: 'Սակագներ', path: '/sak' },
    { name: 'Տերմինալի տեղադրման հայտ', path: '/terminal' },
    { name: 'Evoca Mobile POS՝ mPOS', path: '' },
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-[#6c2db5] selection:text-white">
      
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 md:pt-14 px-4 max-w-[1400px] mx-auto">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-800 font-medium text-[13px] md:text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        
        <Link to="/evocaonline" className="mt-4 md:mt-0 flex justify-center items-center">
          <span className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-medium transition-colors text-center">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              `{item.name}`
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex items-center gap-2 text-gray-400 text-[12px] md:text-[13px] overflow-x-auto whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Դիջիթալ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Evoca Mobile POS՝ mPOS</span>
      </div>

      {/* ԱՎԵԼԱՑՎԱԾ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ (mPOS ԲԱԺԻՆ) */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-6">
          
          {/* Ձախ կողմի տեքստային բլոկ */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Evoca Mobile POS` <span className="text-[#6c2db5]">mPOS</span>
            </h1>
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed font-medium">
              Evoca Mobile POS’ mPOS գործիքի շնորհիվ Ձեր հեռախոսը կդառնա անկանխիկ վճարումներ ընդունող սարք:
            </p>
            <div className="text-sm md:text-base text-gray-500 space-y-4 leading-relaxed">
              <p>
                Սա ստանդարտ POS տերմինալի մոբայլ տարբերակն է, որը ցանկացած Android սմարթֆոն վերածում է վճարային տերմինալի:
              </p>
              <p>
                Այն հատկապես հարմար է շարժական բիզնեսով զբաղվողների համար՝ բացօթյա սրճարաններ, առաքման ծառայություններ, միջոցառումների ընթացքում սննդի վաճառքի կետեր, օնլայն խանութներ և այլն։
              </p>
              <p className="font-semibold text-gray-700">
                Ակտիվացնելու համար անհրաժեշտ է միայն NFC ընթերցող Android սմարթֆոն և Evoca-ի mPOS հավելվածը։
              </p>
            </div>
            
         
            <div className="pt-4">
              <Link to="/terminal" className="inline-flex items-center justify-center text-white bg-[#6c2db5] h-[46px] px-8 hover:bg-[#530498] rounded-3xl font-bold transition-all shadow-md hover:shadow-lg text-sm">
                Դիմել հիմա
              </Link>
            </div>
          </div>

         
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[540px] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-3xl">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16697156723793/780x585.png" 
                alt="Evoca Mobile mPOS" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

    </div>
  );
};

export default Mpos;