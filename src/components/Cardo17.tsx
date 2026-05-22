import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Cardo17: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about'); 

   const subMenuItems = [
    { name: 'Քարտեր', path: '' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '/spasarkum' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '/social' },
    { name: 'Evoca Benefits', path: '/benefits' }
  ]; 

  return (
    <div className="w-full bg-white min-h-screen">
      <Menu />
      
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-4 sm:px-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 sm:px-8 transition-colors text-[14px] font-medium shrink-0
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-400 text-[13px] overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600">Վարկեր</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Քարտեր</span>
        </div>

        
        <Link to="/qarter" className="flex items-center gap-2 text-gray-600 hover:text-[#6c2db5] transition-colors font-medium text-[14px] bg-gray-100 px-4 py-2 rounded-full w-fit">
           <span className="text-lg">←</span> Վերադառնալ
        </Link>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="flex-1">
            <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-extrabold text-[#1a1a1a] leading-tight mb-6">
              Visa Business
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-[600px]">
              Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։
            </p>
          </div>
          <div className="flex-1 w-full max-w-[560px]">
            <img 
              src="https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png" 
              alt="Bicycle Loan Hero" 
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 border-b border-gray-100 mb-10">
        <div className="flex gap-8">
          <button 
            onClick={() => setActiveTab('about')}
            className={`pb-4 text-[16px] font-bold transition-all relative ${activeTab === 'about' ? 'text-[#6c2db5]' : 'text-gray-400'}`}
          >
            Վարկի մասին
            {activeTab === 'about' && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#6c2db5] rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`pb-4 text-[16px] font-bold transition-all relative ${activeTab === 'terms' ? 'text-[#6c2db5]' : 'text-gray-400'}`}
          >
            Պայմաններ
            {activeTab === 'terms' && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#6c2db5] rounded-t-full"></div>}
          </button>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          
          <div className="lg:w-7/12">
            <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
              <p>
                Evocabank-ն առաջարկում է հեծանիվի ձեռքբերման վարկ՝ պետական սուբսիդավորմամբ: Տարեկան մինչև 16% տոկոսադրույքը ֆինանսավորվում է ՀՀ ԿԳՄՍ նախարարության կողմից:
              </p>
              <p>
                Վարկը նախատեսված է Հայաստանի Հանրապետությունում գործող արհեստագործական, միջին մասնագիտական կամ բարձրագույն կրթական ծրագրեր իրականացնող ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար:
              </p>
              
              <div className="bg-[#fcfaff] p-6 rounded-2xl border-l-4 border-[#6c2db5] mt-8">
                 <h4 className="font-bold text-[#1a1a1a] mb-4">Հեծանիվի ձեռքբերման վարկի տրամադրման պայմաններն են՝</h4>
                 <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                       <span className="text-[#6c2db5] font-bold">•</span>
                       <span>Առանց սպասարկման վճարի</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#6c2db5] font-bold">•</span>
                       <span>Առանց միջնորդավճարի</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="text-[#6c2db5] font-bold">•</span>
                       <span>Առանց տույժ ու տուգանքների վաղաժամկետ մարման դեպքում</span>
                    </li>
                 </ul>
              </div>
            </div>
          </div>

         
          <div className="lg:w-5/12">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow mt-5">
                   <p className="text-[#6c2db5] text-[28px] font-black">0%</p>
                   <p className="text-gray-800 font-bold mt-2">Cashback արտասահմանում <br />
                    իրականացրած վճարումների <br />
                     համար</p>
                </div>

                <div className="bg-white border border-gray-100 p-6 rounded-[24px] shadow-sm hover:shadow-md transition-shadow mt-5">
                   <p className="text-[#6c2db5] text-[28px] font-black">0.8%</p>
                   <p className="text-gray-800 font-bold mt-2">Քարտի ժամկետ</p>
                </div>


                <div className="bg-[#6c2db5] p-6 rounded-[24px] text-white ">
                <p className="text-gray-800 font-bold mt-2">min 1,500 ֏</p> 
                   <p className="text-white text-[28px] font-black">1%</p>
                   <p className="text-white font-bold mt-2 leading-tight">Քարտի տարեկան <br />
                    սպասարկում</p>
                </div>

                <div className="bg-[#6c2db5] p-6 rounded-[24px] text-white mt-5"> 
                   <p className="text-white text-[28px] font-black">15․000 ֏</p>
                   <p className="text-white font-bold mt-2 leading-tight">Կիրառություն</p>
                </div>

             </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Cardo17;