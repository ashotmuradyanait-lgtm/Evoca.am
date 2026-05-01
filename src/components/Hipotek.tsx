import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Hipotek: React.FC = () => {
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
    { name: 'Ավտովարկ', path: '/varker/avto' },
    { name: 'Լիզինգ', path: '/varker/leasing' },
    { name: 'Օնլայն վարկեր', path: '/varker/online' }
  ];

  return (
    <div className="w-full bg-white">
      <Menu/>
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
      </div>
  );
}
export default Hipotek;