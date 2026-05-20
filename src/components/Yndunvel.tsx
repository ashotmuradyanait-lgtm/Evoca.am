import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Yndunvel: React.FC = () => {
  const subMenuItems = [
    { name: 'Մշակույթ', path: '/kariera' },
    { name: 'Առավելություններ', path: '/aravel' },
    { name: 'Հաճախ տրվող հարցեր', path: '/hacax' },
    { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/yndunvel' },
  ];

  // Տեսանյութում երևացող ընդունելության 5 փուլերի տվյալները
  const stepsItems = [
    {
      id: 1,
      title: 'Առաջին փուլ՝ Դիմում',
      content: 'Evocabank-ում աշխատանքի դիմելու թեկնածուի ճանապարհը սկսվում է հայտի ներկայացումից, որն իրականացվում է կամ ներքոնշյալ հայտը լրացնելով կամ cv@evocabank.am էլ. հասցեին Ձեր ինքնակենսագրականն ուղարկելով:'
    },
    {
      id: 2,
      title: 'Երկրորդ փուլ՝ Հարցազրույցներ',
      content: 'Եթե ինքնակենսագրականը Ձեր փորձով համապատասխանում է պահանջներին, ապա Evocabank-ի հարցազրուցավարը կապ կհաստատի Ձեզ հետ: Սովորաբար, Evoca-ում հարցազրույցների գործընթացն անցնում է երեք փուլով: Առաջին փուլը հեռախոսային հարցազրույցն է, երկրորդ փուլը՝ առկա հարցազրույցը, իսկ երրորդ փուլը՝ հարցազրույց թիմի անդամների և ղեկավարների հետ:'
    },
    {
      id: 3,
      title: 'Երրորդ փուլ՝ Թեստավորում և ամփոփում',
      content: 'Թեստավորումից և հարցազրույցների ավարտից հետո այն մարդիկ, ում հետ զրուցել եք, իրենց կարծիքն են հայտնում Ձեր հետ ունեցած հարցազրույցի արդյունքների վերաբերյալ, և մենք գնահատում ենք, թե արդյոք հաջողակ կլինեք տվյալ դերում:'
    },
    {
      id: 4,
      title: 'Չորրորդ փուլ՝ Ստուգումներ',
      content: 'Աշխատանքի պայմանական առաջարկ կատարելուց հետո, Evoca-ն իրականացնում է դիմորդի վերաբերյալ պարտադիր ստուգումներ: Կատարվում են 4 հիմնական տեսակների ստուգումներ՝ քրեական պատմության, կրթության, աշխատանքային պատմության և referral ստուգումներ:'
    },
    {
      id: 5,
      title: 'Հինգերորդ փուլ՝ Աշխատանքի առաջարկ',
      content: 'Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվեն փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!'
    }
  ];

  // Ակորդեոնի վիճակի կառավարում (ըստ լռության առաջինը բաց է)
  const [openStepId, setOpenStepId] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    setOpenStepId(openStepId === id ? null : id);
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      {/* Լոգո և Նավիգացիա */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
          <Link to="/practic" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      {/* Ենթամենյու */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-6">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 min-w-[800px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-6 md:px-8 transition-colors text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Hero Բաժին (Ըստ տեսանյութի վարդագույն դիզայնի) */}
      <div className="relative w-full min-h-[420px] bg-gradient-to-br from-[#ff9ebb] via-[#fca5c5] to-[#fbcfe8] overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#6c2db5] mb-6 leading-tight">
              Ինչպե՞ս ընդունվել աշխատանքի Evocabank-ում
            </h1>
            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
              Մենք ստեղծել ենք թափանցիկ և պարզ գործընթաց, որպեսզի քո մուտքը մեր թիմ լինի հարմարավետ ու հիշվող։
            </p>
          </div>
          
          {/* Ադապտիվ 3D երկրաչափական պատկերներով աջ մասը */}
          <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl relative animate-bounce duration-1000">
              <span className="text-white text-6xl md:text-7xl">📐</span>
              
              {/* Թռչող եռանկյունիներ և դետալներ */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#6c2db5] rounded-xl flex items-center justify-center shadow-lg transform -rotate-12 text-white font-bold text-2xl">
                ▲
              </div>
              <div className="absolute bottom-2 -right-6 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg transform rotate-45 text-white text-xl">
                🔷
              </div>
              <div className="absolute top-1/4 -right-10 w-8 h-8 bg-pink-500 rounded-lg shadow-md transform rotate-12"></div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Աշխատանքի ընդունվելու փուլեր (Accordion Բաժին) */}
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 border-b-2 border-[#6c2db5] pb-3 inline-block">
          Աշխատանքի ընդունվելու փուլեր
        </h2>
        
        <div className="space-y-4">
          {stepsItems.map((step) => (
            <div 
              key={step.id} 
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-gray-800 hover:text-[#6c2db5] transition-colors gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 bg-[#6c2db5] text-white rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">
                    {step.id}
                  </span>
                  <span className="text-base md:text-lg">{step.title}</span>
                </div>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-[#6c2db5] text-sm ${openStepId === step.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openStepId === step.id ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
                }`}
              >
                <div className="p-5 md:p-6 text-gray-600 text-sm md:text-base leading-relaxed bg-gray-50/50">
                  {step.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Դիմումի Հայտ (Form) */}
      <div className="max-w-[800px] mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Դառնալ թիմի անդամ</h2>
        <p className="text-center text-gray-600 mb-10 text-sm">
          Եթե ցանկանում ես միանալ <span className="text-[#6c2db5] font-bold">EvocaTEAM</span>-ին, կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Անուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ազգանուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Հեռախոսահամար <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+374</span>
              <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-r-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Էլ. հասցե <span className="text-red-500">*</span></label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook ուս. կայքում անձնական էջի հղում</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn սոց. կայքում անձնական էջի հղում</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ուղեկցող նամակ</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Պարտադիր ներկայացրեք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50 flex items-center justify-center gap-3">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը / Ֆայլերը</span>
            </div>
          </div>

          {/* Պաշտպանական Ծածկագիր (Captcha ბաժին՝ ըստ վերջին կադրի) */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Պաշտպանական ծածկագիր <span className="text-red-500">*</span></label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm select-none">
                <span className="font-mono text-xl tracking-widest line-through decoration-purple-600 font-bold text-gray-700 italic">
                  ZM2L4W
                </span>
                <button type="button" className="text-gray-400 hover:text-[#6c2db5] ml-2 text-lg">
                  🔄
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Մուտքագրեք ծածկագիրը"
                className="w-full sm:w-auto flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" 
                required 
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#6c2db5] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#530498] transition-colors shadow-md w-full sm:w-auto">
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Yndunvel;