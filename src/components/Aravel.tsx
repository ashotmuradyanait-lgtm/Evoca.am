import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Aravel: React.FC = () => {
  const subMenuItems = [
    { name: 'Մշակույթ', path: '/kariera' },
    { name: 'Առավելություններ', path: '' },
    { name: 'Հաճախ տրվող հարցեր', path: '/hacax' },
    { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '' },
  ];

  const benefits = [
    { id: 1, title: 'Բժշկական ապահովագրություն', icon: 'https://www.evoca.am/images-cache/benefits/1/17431437867453/120x120.png' },
    { id: 2, title: 'Ճամփորդական ապահովագրություն', icon: 'https://www.evoca.am/images-cache/benefits/1/1743143856123/120x120.png' },
    { id: 3, title: 'Evocabank-ի ծառայությունների արտոնյալ պայմաններ', icon: 'https://www.evoca.am/images-cache/benefits/1/17431582596354/120x120.png' },
    { id: 4, title: 'Տոնական և տարեվերջյան բոնուսներ', icon: 'https://www.evoca.am/images-cache/benefits/1/17431582659146/120x120.png' },
    { id: 5, title: 'Պարգևատրումներ ծննդյան, ամուսնության և երեխայի ծննդյան առթիվ', icon: 'https://www.evoca.am/images-cache/benefits/1/17431581917652/120x120.png' },
    { id: 6, title: 'Շարունակական կրթություն և մասնագիտական վերապատրաստումներ', icon: 'https://www.evoca.am/images-cache/benefits/1/174314403471/120x120.png' },
    { id: 7, title: 'Սպորտային փաթեթ', icon: 'https://www.evoca.am/images-cache/benefits/1/17431442426277/120x120.png' },
    { id: 8, title: 'Անվճար բարձրակարգ սուրճ, թեյ և մրգեր ողջ օրվա ընթացքում', icon: 'https://www.evoca.am/images-cache/benefits/1/17431443089347/120x120.png' },
    { id: 9, title: 'Թիմային միջոցառումներ (Team building-ներ, party-ներ)', icon: 'https://www.evoca.am/images-cache/benefits/1/17431453776119/120x120.png' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
    
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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
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

    
      <div className="relative w-full min-h-[450px] bg-gradient-to-r from-purple-100 via-pink-100 to-white overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#6c2db5] mb-6">Առավելություններ</h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              Evoca-ն գնահատում է յուրաքանչյուր աշխատակցի ներդրումը:
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Մենք ստեղծում ենք լավագույն պայմանները, որպեսզի մեր թիմում յուրաքանչյուրն իրեն զգա գնահատված, ներգրավված և երջանիկ:
            </p>
          </div>
          
          
          <div className="flex justify-center items-center relative">
            <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-[#6c2db5] to-[#a25ddc] rounded-[40px] transform rotate-6 flex items-center justify-center shadow-2xl relative">
              <span className="text-white text-8xl md:text-[150px] font-black transform -rotate-6 select-none">Evoca</span>
              
             
              <div className="absolute -top-12 -right-6 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-3xl md:text-4xl">✈️</span>
              </div>
              <div className="absolute -left-10 bottom-6 w-28 h-20 bg-purple-300 rounded-xl shadow-md flex flex-col justify-around p-2 transform rotate-12">
                <div className="w-full h-2 bg-white/60 rounded"></div>
                <div className="w-full h-2 bg-white/60 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 top-1/4 w-72 h-72 border-[24px] border-purple-200 rounded-full opacity-40"></div>
        <div className="absolute -left-10 bottom-10 w-60 h-60 border-[12px] border-[#6c2db5] rounded-full opacity-10"></div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Մեր առավելությունները
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Մենք հոգ ենք տանում մեր աշխատակիցների առողջության, հանգստի և մասնագիտական աճի մասին՝ առաջարկելով արտոնությունների լայն փաթեթ:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 mb-6 flex items-center justify-center rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors p-3">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800 leading-snug max-w-[260px]">
                {benefit.title}
              </h3>
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook էջ</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn էջ</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ուղեկցող նամակ</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Կցե՛ք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50">
              <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը</span>
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

export default Aravel;