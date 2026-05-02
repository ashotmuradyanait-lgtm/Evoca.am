import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Premium: React.FC = () => {
  const subMenuItems = [
    { name: 'Քարտեր', path: '' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '' },
    { name: 'Evoca Benefits', path: '' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="w-full bg-white">
        <div className="w-full bg-[#6c2db5] text-white ">
          <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
            {subMenuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#6c2db5]' : 'hover:bg-[#530498]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
          <span>›</span>
          <span className="text-gray-800">Քարտեր</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Պրեմիում</h1>

        {/* Ֆիլտրների հատվածը՝ թարմացված isActive տրամաբանությամբ */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            { name: 'Բոլորը', path: '/qarter' },
            { name: 'Պրեմիում', path: '/premium' },
            { name: 'Նվեր քարտեր', path: '/cards/gift-cards' },
            { name: 'Թվային քարտեր', path: '/cards/digital-cards' }
          ].map((tag) => (
            <NavLink
              key={tag.name}
              to={tag.path}
              // end={true} միայն "Բոլորը" կոճակի համար, որպեսզի այն չլինի ակտիվ մյուս էջերում
              end={tag.path === '/qarter'}
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors inline-block text-center ${
                  isActive
                    ? 'bg-[#7122e2] text-white' // Ակտիվ վիճակ
                    : 'bg-[#f0f0f5] text-gray-800 hover:bg-[#7122e2] hover:text-white' // Ոչ ակտիվ
                }`
              }
            >
              {tag.name}
            </NavLink>
          ))}

          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-blue-700 transition-colors flex items-center gap-1">
            <img src="https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-extrabold text-blue-900 italic transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold transition-colors flex items-center gap-[-4px]">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="" />
          </button>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-red-600 transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="" />
          </button>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 mb-8">
          <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
            <div className="w-[415px] h-[261px] shrink-0">
              <img
                src="https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg"
                alt="Bicycle Loan"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col justify-between flex-grow py-2">
              <div>
                <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
                  Evoca Travel Card
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                  Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard <br />
                  Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։
                </p>

                <div className="flex gap-12">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                    <span className="text-[#6c2db5] text-[24px] font-bold">1.5%</span>
                    <span className="text-gray-400 text-[12px] mt-1">Cashback արտասահմանում <br />
                      իրականացրած վճարումների <br />
                      համար</span>
                  </div>

                  <div className="flex flex-col border-l border-gray-100 pl-8">
                    <span className="text-gray-400 text-[12px] mb-1">Անվճար</span>
                    <span className="text-[#6c2db5] text-[24px] font-bold">6 մուտք</span>
                    <span className="text-gray-400 text-[12px] mt-1">Lounge Key սրահներ քեզ և <br />
                      հյուրերիդ համար</span>
                  </div>

                  <div className="flex flex-col border-l border-gray-100 pl-8">
                    <span className="text-gray-400 text-[12px] mb-1">Անվճար</span>
                    <span className="text-[#6c2db5] text-[24px] font-bold">6 անգամ</span>
                    <span className="text-gray-400 text-[12px] mt-1">Fast track-ից օգտվելու <br />
                      հնարավորություն քեզ և <br />
                      հյուրերիդ համար</span>
                  </div>

                  <div className="flex flex-col border-l border-gray-100 pl-8 max-w-[180px] mt-5">
                    <span className="text-[#6c2db5] text-[24px] font-bold">16․000֏</span>
                    <span className="text-gray-400 text-[12px] mt-1">Քարտի տարեկան <br />
                      սպասարկում</span>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
                Մանրամասն
                <span className="text-[18px]">›</span>
              </button>
            </div>
          </div>
        </div>


         <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Visa Infinite
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։
            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">1%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում բանկի <br />
                  կանխիկացման կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">1.2%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                  բանկերի կանխիկացման <br />
                   կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">min 2,500 ֏</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">1.5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                  չհանդիսացող բանկերի <br />
                   կանխիկացման կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 max-w-[180px] mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">100,000֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան սպասարկում</span>
              </div>
            </div>
          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


    <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            UnionPay Business Platinum
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության <br />
               ճանապարհին:
            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">0.5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">5 տարի</span>
                <span className="text-gray-400 text-[12px] mt-1">Քարտի ժամկետ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">15000 ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան սպասարկման <br />
                  վճար </span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">Ամենուր</span>
                <span className="text-gray-400 text-[12px] mt-1">Կիրառություն</span>
              </div>
            </div>
          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>



          <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            UnionPay Gold
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:
            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">0.5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">5 տարի</span>
                <span className="text-gray-400 text-[12px] mt-1">Քարտի ժամկետ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">15000 ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան սպասարկման <br />
                  վճար </span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">Ամենուր</span>
                <span className="text-gray-400 text-[12px] mt-1">Կիրառություն</span>
              </div>
            </div>
          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


    <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            Mastercard Gold
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։
            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">0%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում բանկի <br />
                  կանխիկացման կետերում <br />
                   մինչև 1 մլն ֏</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">0.8%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                  բանկերի կանխիկացման <br />
                   կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-gray-400 text-[12px] mt-1">min 1,500 ֏</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">1%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                  չհանդիսացող բանկերի <br />
                   կանխիկացման կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">15․000֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան սպասարկում </span>
              </div>
            </div>
          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Premium;