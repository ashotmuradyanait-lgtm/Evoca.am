
import {Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

    const Premium: React.FC = () => {
         const subMenuItems = [
        { name: 'Քարտեր', path: '' },
        { name: 'Քարտերի տրամադրում և սպասարկում', path: '' },
        { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '' },
        { name: 'Evoca Benefits', path: '' }
      ];    
    return(
     <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
        <Menu />
      <div className="w-full bg-white">
      <div className="w-full bg-[#6c2db5] text-white ">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
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

        <div className="flex flex-wrap items-center gap-3 mb-12">
            <Link to="/qarter">
                  <button className="bg-[#f0f0f5] text-gray-800 hover:bg-[#7122e2] hover:text-white px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors inline-block text-center">
                    Բոլորը
                  </button>
         </Link>
                    {[
                    { name: 'Պրեմիում', path: '/premium' },
                    { name: 'Նվեր քարտեր', path: '/cards/gift-cards' },
                    { name: 'Թվային քարտեր', path: '/cards/digital-cards' }
                    ].map((tag) => (
                    <Link 
                        key={tag.name}  
                            to={tag.path} 
                        className="bg-[#f0f0f5] text-gray-800 hover:bg-[#7122e2] hover:text-white px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors inline-block text-center"
                    >
                        {tag.name}
                    </Link>
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
    </div>
</div>
    );
};
export default Premium;