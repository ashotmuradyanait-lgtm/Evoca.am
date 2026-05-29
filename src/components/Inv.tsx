import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Inv: React.FC = () => {
  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/shuka' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '/depozit' },
    { name: 'Ռեպո/Հակադարձ ռեպո գործարքներ', path: '/brepo' },    
    { name: 'EvocaINVEST', path: '' },
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
        <nav className="flex gap-4 text-gray-800 font-medium text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</Link>
          <Link to="/aylq" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
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
        <span className="text-gray-800">EvocaINVEST</span>
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
          
         
          <div className="flex-1 max-w-[850px]">
            <h1 className="text-2xl md:text-[36px] font-black text-[#1a1a1a] mb-8 tracking-tight leading-tight">
              Կատարիր Ներդրումներ և ստացիր եկամուտ EvocaINVEST հավելվածով
            </h1>

            <div className="flex flex-col gap-6 text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed font-normal">
              <p className="font-semibold text-gray-700">
                Հեռանկարային ներդրումների ժամանակն է...
              </p>

              <p>
                Բանկն առաջարկում է բոլորովին նոր թվային պրոդուկտ՝ <strong className="text-black font-bold">EvocaINVEST</strong> ներդրումային հավելվածը, որի միջոցով հաճախորդները հնարավորություն ունեն գնել և վաճառել արժեթղթեր, բաժնետոմսեր, ֆոնդի փայեր, պարտատոմսեր ավելի քան 20 երկրների ֆինանսական շուկաներում (ԱՄՆ, Եվրոպա, Ասիա)՝ առանց Բանկ այցելելու: <strong className="text-black font-bold">EvocaINVEST</strong>-ն արդեն հասանելի է Վեբ կայքի և Մոբայլ հավելվածի տարբերակներով:
              </p>

              <p className="font-semibold text-gray-700">
                Արդեն ժամանակն է քայլ անել դեպի մեծ եկամուտներ.
              </p>
            </div>

          
            <div className="mt-8 flex flex-col gap-3.5">
              {[
                'Դարձիր Բանկի հաճախորդ',
                'Բացիր Բրոկերային հաշիվ',
                'Ներբեռնիր հավելվածը',
                'Համալրիր հաշիվը',
                'Կատարիր Ներդրումներ',
                'Տնօրինիր և վայելիր եկամուտները',
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f3e8ff] text-[#730D8D] font-bold text-[13px]">
                    ✓
                  </div>
                  <span className="text-gray-800 font-medium text-[15px] md:text-[16px]">{step}</span>
                </div>
              ))}
            </div>

          
            <div className="mt-12 p-5 border-l-4 border-red-500 bg-red-50/50 rounded-r-xl max-w-[800px]">
              <p className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed">
                <strong className="text-red-600 font-extrabold tracking-wide uppercase block mb-1">ՈՒՇԱԴՐՈՒԹՅՈՒՆ.</strong> 
                Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված <strong className="text-black font-bold">ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ:</strong> Բանկը չի <strong className="text-black font-bold">ՓՈԽՀԱՏՈՒՑԵԼՈՒ</strong> հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անօրինական վարքագծի արդյունքում:
              </p>
            </div>
          </div>

         
          <div className="w-full lg:w-[420px] flex justify-center items-center lg:mt-10">
            <div className="relative bg-[#f5ecfc] rounded-3xl p-8 w-full max-w-[360px] aspect-[9/16] flex flex-col justify-between shadow-md border border-purple-100 overflow-hidden">
              
            
              <div className="w-full flex justify-between items-center mb-4">
                <div className="h-2 w-12 bg-purple-300 rounded-full"></div>
                <div className="h-4 w-4 bg-purple-400 rounded-full"></div>
              </div>

            
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="w-full h-32 bg-white rounded-xl p-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="text-[11px] font-bold text-[#730D8D]">EvocaINVEST Portfolio</div>
                  <div className="w-full h-14 flex items-end gap-1.5 pt-2">
                    <div className="w-full h-[40%] bg-purple-200 rounded-sm"></div>
                    <div className="w-full h-[60%] bg-purple-300 rounded-sm"></div>
                    <div className="w-full h-[55%] bg-purple-400 rounded-sm"></div>
                    <div className="w-full h-[85%] bg-[#730D8D] rounded-sm animate-pulse"></div>
                    <div className="w-full h-[70%] bg-purple-400 rounded-sm"></div>
                  </div>
                </div>

                <div className="w-full bg-[#730D8D] text-white text-center py-3 rounded-xl mt-4 font-bold text-[13px] shadow-sm tracking-wide">
                  INVEST NOW
                </div>
              </div>

              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Inv;