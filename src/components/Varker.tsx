import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Varker: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];

  const filters = [
    { name: 'Բոլորը', path: '/varker' },
    { name: 'Գրավով ապահովված սպառողական վարկեր', path: '/grav' },
    { name: 'Անգրավ սպառողական վարկեր', path: '/angrav' },
    { name: 'Հիփոթեքային վարկեր', path: '/hipotek' },
    { name: 'Ավտովարկ', path: '/avto' },
    { name: 'Լիզինգ', path: '/leasing' },
    { name: 'Օնլայն վարկեր', path: '/online' }
  ];

  return (
    <div className="w-full bg-white">
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px] overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800">Վարկեր</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-6 md:mb-10">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#1a1a1a]">Վարկեր</h1>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-wrap gap-2 sm:gap-3 mb-10">
        {filters.map((filter) => (
          <NavLink
            key={filter.path}
            to={filter.path}
            onClick={() => setActiveFilter(filter.name)}
            className={({ isActive }) => 
              `px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap
              ${isActive 
                ? 'bg-[#6c2db5] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }
          >
            {filter.name}
          </NavLink>
        ))}
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Հեծանիվի ձեռքբերման վարկ
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ:
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">300,000 ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">36 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույքից</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 max-w-[180px]">
                  <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                  <span className="text-gray-400 text-[12px] mt-1 italic">
                    Պետության կողմից սուբսիդավորվող տոկոսադրույք
                  </span>
                </div>
              </div>
            </div>

          <Link to="/mek">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                  Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ <br />
                  ճկուն պայմաններով և մատչելի գնով:  
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">50Մլն ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">14%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույքից</span>
                </div>
              </div>
            </div>
          
          <Link to="/myus">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Բնակարանային հիփոթեքային վարկեր Բանկի <br />
                 ռեսուրսով
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                  Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով <br />
                   վարկատեսա՞կ ես փնտրում։ Արի՛ Evocabank։            </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">80մլն․ ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետը</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">13.2%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/ereq">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

  
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Գույքի գրավով ապահովված անհատական վարկ <br />
                 (վարկունակության գնահատմամբ)
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                 Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով <br />
                  վարկատեսա՞կ ես փնտրում։ Արի՛ Evocabank։  
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">100Մլն. ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">անշարժ գույքի գրավադրման <br />
                   դեպքում</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">24-120 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետը</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">շարժական գույքի <br />
                   գրավադրման դեպքում</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Վարկի մարման ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">15%-ից</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/chors">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

   
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
                Action
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                 Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից <br />
                 և ցանկացած ժամի։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">10մլն. ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Սահմանաչափ</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
                </div>
              </div>
            </div>

          <Link to="/hing">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               EvocaHOME
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից <br />
                 առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար <br />
                  պայմաններով։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">10 մլն ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/vec">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված <br />
                ընտանիքներին
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային <br />
                Ղարաբաղից բռնի տեղահանված ընտանիքներին:
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">55 մլն ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">120 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 sm:mt-5">
                  <span className="text-[#6c2db5] text-[24px] font-bold">13%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/yot">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

  
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               Անհատական վարկ «Ներդրումային»
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական <br />
                գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">350 մլն ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 sm:mt-5">
                  <span className="text-[#6c2db5] text-[24px] font-bold">15%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/ut">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               Ավտոկայանատեղիի ձեռքբերման վարկ
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և <br />
                մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">8 մլն ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Մարման ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 sm:mt-5">
                  <span className="text-[#6c2db5] text-[24px] font-bold">16%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/Iny">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               Հողամասի ձեռքբերման վարկ
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ <br />
                նպատակների համար։ Դու արդեն գտել ես այն։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">80 մլն. ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-gray-400 text-[12px] mb-1">մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">240 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետը</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">14%-ից</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույք</span>
                </div>
              </div>
            </div>

          <Link to="/tas">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               Միկրովերանորոգման վարկ Բանկի ռեսուրսներով
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր <br />
                պետական սուբսիդավորման հնարավորությունից։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">5 մլն. ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 sm:mt-5">
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8 sm:mt-5">
                  <span className="text-[#6c2db5] text-[24px] font-bold">17%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրւյք</span>
                </div>
              </div>
            </div>

          <Link to="/tmek">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 sm:p-6 gap-6 lg:gap-8 hover:shadow-md transition-shadow">
          
          <div className="w-full lg:w-[415px] h-[200px] sm:h-[261px] shrink-0">
            <img 
              src="https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png" 
              alt="Bicycle Loan" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between flex-grow py-2">
            <div>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#1a1a1a] mb-4">
               EvocaPower
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
               Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է <br />
                առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։
              </p>

              <div className="flex flex-wrap gap-6 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">5 մլն. ֏</span>
                  <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
                </div>

                <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-[#6c2db5] text-[12px] font-bold">Մինչև</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                  <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
                </div>

                 <div className="flex flex-col border-l-0 sm:border-l border-gray-100 pl-0 sm:pl-8">
                  <span className="text-[#6c2db5] text-[12px] font-bold">Սկսած</span>
                  <span className="text-[#6c2db5] text-[24px] font-bold">0%</span>
                  <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրւյքից</span>
                </div>
              </div>
            </div>

          <Link to="/terku">
            <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
              Մանրամասն
              <span className="text-[18px]">›</span>
            </button>
          </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Varker;