import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Varker: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/varkayin-patmutyun' },
    { name: 'Կարևոր տեղեկատվություն', path: '/karevvor-texekatvutyun' }
  ];

  const filters = [
    { name: 'Բոլորը', path: '/varker' },
    { name: 'Գրավով ապահովված սպառողական վարկեր', path: '/grav' },
    { name: 'Անգրավ սպառողական վարկեր', path: '/angrav' },
    { name: 'Հիփոթեքային վարկեր', path: '/hipotek' },
    { name: 'Ավտովարկ', path: '/avto' },
    { name: 'Լիզինգ', path: '/varker/leasing' },
    { name: 'Օնլայն վարկեր', path: '/varker/online' }
  ];

  return (
    <div className="w-full bg-white">
      {/* 1. Submenu - Մանուշակագույն շերտը */}
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
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

      {/* 2. Breadcrumbs (Հասցեի շղթա) */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800">Վարկեր</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[48px] font-bold text-[#1a1a1a]">Վարկեր</h1>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap gap-3 mb-10">
        {filters.map((filter) => (
          <NavLink
            key={filter.path}
            to={filter.path}
            onClick={() => setActiveFilter(filter.name)}
            className={({ isActive }) => 
              `px-6 py-2.5 rounded-full text-[14px] font-medium transition-all
              ${isActive 
                ? 'bg-[#6c2db5] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }
          >
            {filter.name}
          </NavLink>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Հեծանիվի ձեռքբերման վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ:
            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">300,000 ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">36 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույքից</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 max-w-[180px]">
                <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                <span className="text-gray-400 text-[12px] mt-1 italic">
                  Պետության կողմից սուբսիդավորվող տոկոսադրույք
                </span>
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
            src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
              Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ <br />
                ճկուն պայմաններով և մատչելի գնով:  
          </p>

            {/* Թվային տվյալներ */}
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50Մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">14%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույքից</span>
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
            src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Բնակարանային հիփոթեքային վարկեր Բանկի <br />
               ռեսուրսով
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով <br />
                 վարկատեսա՞կ ես փնտրում։ Արի՛ Evocabank։            </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">80մլն․ ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետը</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">13.2%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
              Գույքի գրավով ապահովված անհատական վարկ <br />
               (վարկունակության գնահատմամբ)
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով <br />
                վարկատեսա՞կ ես փնտրում։ Արի՛ Evocabank։  
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">100Մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">անշարժ գույքի գրավադրման <br />
                 դեպքում</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">24-120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետը</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">շարժական գույքի <br />
                 գրավադրման դեպքում</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">15%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>
            </div>
          </div>

          {/* Կոճակ */}
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
            src="https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
     <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
              Action
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից <br />
                և ցանկացած ժամի։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
              </div>
            </div>
          </div>

          {/* Կոճակ */}
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
            src="https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             EvocaHOME
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից <br />
               առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար <br />
                պայմաններով։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>
            </div>
          </div>

          {/* Կոճակ */}
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
            src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված <br />
              ընտանիքներին
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային <br />
              Ղարաբաղից բռնի տեղահանված ընտանիքներին:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">55 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">13%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Անհատական վարկ «Ներդրումային»
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական <br />
              գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">350 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">15%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ավտոկայանատեղիի ձեռքբերման վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և <br />
              մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">8 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հողամասի ձեռքբերման վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ <br />
              նպատակների համար։ Դու արդեն գտել ես այն։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">80 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">14%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Միկրովերանորոգման վարկ Բանկի ռեսուրսներով
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր <br />
              պետական սուբսիդավորման հնարավորությունից։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">5 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">17%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրւյք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png   " 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             EvocaPower
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է <br />
              առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">5 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[12px] font-bold">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">0%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրւյքից</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142479093829/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Գույքի գրավով  ապահովված անհատական վարկ <br />
              (առանց եկամուտների)
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Գույքի գրավով ապահովված վարկեր՝ առանց եկամուտները հավաստող փաստաթղթերի պահանջի:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">24-120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">16%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրւյք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50%</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկ / գրավ <br />
                 հարաբերակցություն</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Օնլայն օվերդրաֆտ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: <br />
              24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">36 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան անվանական <br />
                 տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Երաշխավորությամբ ապահովված անհատական <br />
              վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Նոր գաղափարները կյանքի կոչելու համար գումա՞ր է անհրաժեշտ, Evocabank-ի հետ Ձեր ոչ մի գաղափար <br />
              ու միտք անկատար չի մնա։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">19%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային <br />
              հիփոթեքային վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">80 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար (Համարժեք <br />
                 արտարժույթ)</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">180 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Ֆիքսված տոկոսադրույքով <br />
                 սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">8.2%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">Լողացող տոկոսադրույքով <br />
                 սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">7.7%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ոսկու գրավով (լոմբարդային) վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և <br />
             ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold"> 3-60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">15.5%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">150%</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկ / գրավ <br />
                 հարաբերակցություն</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Առևտրային հիփոթեքային վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">7.2%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող <br />
             բնակարանային հիփոթեքային վարկեր։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">45 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">12%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             ԱՀԸ-ի ծրագրով կառուցապատման վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր <br />
             հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">45 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">առավելագույնը</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">12.5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             ԱՀԸ-ի ծրագրով վերանորոգման վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">15 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">84 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-[#6c2db5] text-[12px] font-bold">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">12.5%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ <br />
              մատչելի բնակարան»
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, <br />
             գործընթացն էլ՝ պարզեցված:
          </p>

            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">27 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">180 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետը</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">2-4%</span>
                <span className="text-gray-400 text-[12px] mt-1">Սուբսիդավորվող տոկոս</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">6.9-7.9%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ավանդի գրավով ապահովված վարկ / վարկային <br />
              սահմանաչափ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Մի՛ օգտագործեք կուտակված խնայողությունները․ Ձեր ֆինանսական խնդիրները կարգավորելու համար <br />
             մենք ավելի շահավետ տարբերակ ունենք։
          </p>

            
            <div className="flex gap-12">
               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-gray-400 text-[12px] mt-1">ավանդի գումարի մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">95%</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-gray-400 text-[12px] mt-1">պարտատոմսի գումարի մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">80%</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142453688631/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Օվերդրաֆտ վճարային քարտով
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Վարկային սահմանաչափերից օգտվելն այսօր դարձել է չնախատեսված ծախսերը հոգալու ամենահարմար <br />
             և արագ տարբերակը։ Ամսական նվազագույն մարման պահանջով վարկային սահմանաչափ՝ Evocabank-ից։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">36 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mt-1">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">16%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Visa Infinite վճարային քարտերով տրամադրվող <br />
              վարկային սահմանաչափ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa <br />
             Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">12-36 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">15%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">Մինչև 45 <br />
                օր</span>
                <span className="text-gray-400 text-[12px] mt-1">Արտոնյալ <br />
                 ժամանակահատված</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հիփոթեքային վարկ Արցախի շրջաններից <br />
              տեղահանված ընտանիքներին
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր <br />
             Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով <br />
              տեղահանված ընտանիքներին:
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">45 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Վերանորոգման հիփոթեքային վարկ Արցախից <br />
              տեղահանված ընտանիքներին
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">13%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ուսանողական վարկեր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման <br />
             խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">4 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">9%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">2-3%</span>
                <span className="text-gray-400 text-[12px] mt-1">Սուբսիդավորվող տոկոս</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին <br />
              բնակավայրերում ընտանիքների բնակարանային <br />
               մատչելիության ապահովման պետական աջակցության <br />
             ծրագիր
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ <br />
             սահմանամերձ համայնքների բնակիչներին:
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">21 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">13%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Evolution
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման <br />
             խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">1 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">18 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
               <span className="text-gray-400 text-[12px] mb-1">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">18%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Հիփոթեքային վարկեր Զինծառայողներին
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է <br />
             պետական նպատակային ծրագրի շրջանակում։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">25,65 մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">120-240 <br />
                 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">11-12.75%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան անվանական <br />
                 տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Սուբսիդավորվող <br />
                 տոկոսադրույք</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Online և Տեղում Ապառիկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Ցանկանու՞մ ես ձեռք բերել քո ցանկալի ապրանքը կամ օգտվել որևէ ծառայությունից, բայց չունես <br />
             բավարար ֆինանսական միջոցներ, օգտվիր Evoca-ի նորացված վարկավորումից։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">3 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">36 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">21.5%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-gray-400 text-[12px] mb-1">առավելագույնը</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">5 րոպե</span>
                <span className="text-gray-400 text-[12px] mt-1">Վարկի հաստատման <br />
                 ժամկետ</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Ավտոմեքենայի ձեռքբերման նպատակով վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը <br />
             կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

            
             <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50 մլն. ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">84 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

               <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">13%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 ">
                <span className="text-gray-400 text-[12px] mb-1">առավելագույնը</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">10%-ից</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխավճար</span>
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
            src="https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
             Evoca աշխատավարձային փաթեթի շրջականակում <br />
              տրամադրվող վարկ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
            Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. <br />
             Evocabank-ը կրամադրի շահավետ վարկային սահմանաչափ:
          </p>
          </div>

          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>
      </div>
    
  );
};

export default Varker;