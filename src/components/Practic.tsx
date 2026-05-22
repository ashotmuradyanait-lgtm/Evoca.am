import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Practic: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subMenuItems = [
    { name: 'Աշխատանք Evoca-ում', path: '' },
    { name: 'Ուսումնական պրակտիկա', path: '/usum' },
    { name: 'EvocaBRIDGE', path: '/bridge' },
  ];

  const features = [
    {
      img: 'https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png',
      title: 'Ժամանակակից տեխնոլոգիաներ և գիտելիքներ',
    },
    {
      img: 'https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png',
      title: 'Հարմարավետ աշխատանքային գրաֆիկ',
    },
    {
      img: 'https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png',
      title: 'Մասնագիտական փորձառու մենթորներ',
    },
    {
      img: 'https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png',
      title: 'Լավագույններին աշխատանքի առաջարկ',
    },
    {
      img: 'https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png',
      title: 'Վառ և ընկերական EvocaTEAM միջավայր',
    },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-4">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center  md:gap-6 mr-120 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/kariera" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
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

      
      <div className="relative w-full min-h-[420px] bg-gradient-to-br from-[#bbf7d0] via-[#86efac] to-[#4ade80] overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#6c2db5] mb-6 leading-tight">
              Աշխատանք Evoca-ում
            </h1>
          </div>
          
        
          <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-[#6c2db5] rounded-[40px] flex items-center justify-center shadow-2xl relative transform rotate-12">
              <span className="text-white text-6xl md:text-7xl transform -rotate-12">🚀</span>
              
             
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center shadow-md text-2xl transform rotate-12">
                ⭐
              </div>
              <div className="absolute bottom-4 -left-10 w-20 h-20 bg-white/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 right-10 w-12 h-12 bg-emerald-300 rounded-xl transform rotate-45"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#1a1a1a]">
         Ինչպիսի թիմակից ենք մենք փնտրում ?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-stretch">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center mb-4 select-none">
                <img 
                  src={feature.img} 
                  alt={feature.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-[14px] md:text-[15px] font-bold text-gray-800 leading-snug mt-2 max-w-[180px]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="w-full bg-gray-50 py-16 border-t border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Ինչպե՞ս դիմել պրակտիկայի համար
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm relative z-10">
              <span className="text-3xl font-black text-[#6c2db5] bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">1</span>
              <h3 className="font-bold text-lg mb-2">Լրացրու հայտը</h3>
              <p className="text-sm text-gray-600">Մանրամասն լրացրու ներքևում տեղադրված օնլայն դիմումի ձևը:</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm relative z-10">
              <span className="text-3xl font-black text-[#6c2db5] bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">2</span>
              <h3 className="font-bold text-lg mb-2">Անցիր հարցազրույց</h3>
              <p className="text-sm text-gray-600">Համապատասխանության դեպքում հրավիրվիր կարճ ծանոթացման հարցազրույցի:</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm relative z-10">
              <span className="text-3xl font-black text-[#6c2db5] bg-purple-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">3</span>
              <h3 className="font-bold text-lg mb-2">Սկսիր պրակտիկան</h3>
              <p className="text-sm text-gray-600">Միացիր թիմին, սովորիր լավագույններից և ստացիր հնարավորություն դառնալու հիմնական աշխատակից:</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Ուղարկել պրակտիկայի հայտ</h2>
        <p className="text-center text-gray-600 mb-10 text-sm">
          Լրացրու տվյալներդ, կցիր ռեզյումեդ կամ համալսարանի ուղեգիրը, և մենք անպայման կապ կհաստատենք քեզ հետ:
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Բարձրագույն ուսումնական հաստատություն (ԲՈՒՀ) <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Օր.՝ ԵՊՀ, ՀՊՏՀ..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Կուրս / Ֆակուլտետ <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ինչու՞ ես ցանկանում անցնել պրակտիկա հենց Evocabank-ում</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Կցե՛ք Ձեր ռեզյումեն կամ ուղեգիրը <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50 flex items-center justify-center gap-3">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը (PDF, DOCX)</span>
            </div>
          </div>

         
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Պաշտպանական ծածկագիր <span className="text-red-500">*</span></label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm select-none">
                <span className="font-mono text-xl tracking-widest line-through decoration-purple-600 font-bold text-gray-700 italic">
                  PR89XW
                </span>
                <button type="button" className="text-gray-400 hover:text-[#6c2db5] ml-2 text-lg">
                  🔄
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Մուտքագրեք կոդը"
                className="w-full sm:w-auto flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" 
                required 
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#6c2db5] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#530498] transition-colors shadow-md w-full sm:w-auto">
              Դիմել Պրակտիկայի
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Practic;