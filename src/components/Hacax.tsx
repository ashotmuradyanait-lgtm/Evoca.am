import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Hacax: React.FC = () => {
  const subMenuItems = [
    { name: 'Մշակույթ', path: '/kariera' },
    { name: 'Առավելություններ', path: '/aravel' },
    { name: 'Հաճախ տրվող հարցեր', path: '' },
    { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/yndunvel' },
  ];

 
  const faqItems = [
    {
      id: 1,
      question: 'Կարո՞ղ եմ միաժամանակ դիմել տարբեր աշխատատեղերի համար:',
      answer: 'Մեկ օգտատիրոջ կողմից ներկայացվող դիմումների քանակն անսահմանափակ է, սակայն խնդրում ենք դիմել միայն այն աշխատանքների համար, որում նշված պահանջներին և հմտություններին համապատասխանում եք:'
    },
    {
      id: 2,
      question: 'Դիմումը ներկայացնելուց որքան ժամանակ հետո ինձ կհրավիրեն հարցազրույցի:',
      answer: 'Եթե Դուք դիմել եք հայտարարված ազատ աշխատատեղի համար և հայտնվել եք նախնական ընտրված թեկնածուների շարքում, ապա մեր թիմը կապ կհաստատի Ձեզ հետ հայտարարության ժամկետի ավարտից հետո՝ մեկ ամսվա ընթացքում:'
    },
    {
      id: 3,
      question: 'Հարցազրույցի ընթացքում լինելու՞ է թեստավորում:',
      answer: 'Աշխատանքի ընդունման մեր գործընթացը մի քանի փուլից է կազմված: Առաջին փուլում թեստավորում չի իրականացվում: Հետագա փուլերի մասին ինֆորմացիա կարող եք գտնել «Ինչպես ընդունվել աշխատանքի Evocabank-ում» բաժնում:'
    }
  ];

 
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
          <Link to="/practic" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
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

    
      <div className="relative w-full min-h-[420px] bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-300 overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#6c2db5] mb-6">Հաճախ տրվող հարցեր</h1>
            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed">
              Այստեղ հավաքված են այն բոլոր հարցերի պատասխանները, որոնք հաճախ հետաքրքրում են մեր թիմին միանալ ցանկացող թեկնածուներին:
            </p>
          </div>
          
          
          <div className="flex justify-center items-center relative h-[300px] md:h-[400px]">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-[#6c2db5] rounded-full flex items-center justify-center shadow-2xl relative animate-pulse">
              <span className="text-white text-6xl md:text-7xl">🎙️</span>
              
             
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 text-2xl">
                💬
              </div>
              <div className="absolute bottom-4 -right-8 w-20 h-14 bg-blue-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 text-xl text-white font-bold">
                ✉️
              </div>
              <div className="absolute top-1/2 -right-12 w-6 h-6 bg-yellow-400 rounded-full shadow-inner"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

    
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#6c2db5] pb-3 inline-block">
          Հարցերի ցանկ
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-gray-800 hover:text-[#6c2db5] transition-colors gap-4"
              >
                <span className="text-base md:text-lg">{item.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 text-[#6c2db5] text-xl ${openId === item.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
                }`}
              >
                <div className="p-5 md:p-6 text-gray-600 text-sm md:text-base leading-relaxed bg-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
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

export default Hacax;