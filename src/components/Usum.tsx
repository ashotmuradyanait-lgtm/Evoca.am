import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Usum: React.FC = () => {
  // Ակորդեոնի բաց/փակ վիճակը կառավարելու համար
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (stepIndex: number) => {
    setOpenStep(openStep === stepIndex ? null : stepIndex);
  };

  const subMenuItems = [
    { name: 'Աշխատանք Evoca-ում', path: '/practic' },
    { name: 'Ուսումնական պրակտիկա', path: '' },
    { name: 'EvocaBRIDGE', path: '' },
  ];

  // Քո տրամադրած 4 գործընկեր համալսարանների նկարները
  const universities = [
    {
      img: 'https://www.evoca.am/images-cache/partner_universities/1/16192503158745/120x120.jpg',
      name: 'Հայաստանի ամերիկյան համալսարան',
    },
    {
      img: 'https://www.evoca.am/images-cache/partner_universities/1/16192501535211/120x120.jpg',
      name: 'Երևանի պետական համալսարան',
    },
    {
      img: 'https://www.evoca.am/images-cache/partner_universities/1/16192504505443/120x120.jpg',
      name: 'Հայաստանի պետական տնտեսագիտական համալսարան',
    },
    {
      img: 'https://www.evoca.am/images-cache/partner_universities/1/16192505629164/120x120.jpg',
      name: 'Հայ-Ռուսական համալսարան',
    },
  ];

  // Ուսումնական պրակտիկայի 5 փուլերը (ըստ տեսանյութի ակորդեոնի)
  const steps = [
    {
      title: 'Առաջին փուլ՝ Համագործակցություն',
      content: 'Բարձրագույն ուսումնական հաստատության և Evocabank-ի միջև կնքվում է ուսումնական պրակտիկայի վերաբերյալ պայմանագիր՝ համաձայն ուսումնական պլանի։',
    },
    {
      title: 'Երկրորդ փուլ՝ Դիմում-Հայտ',
      content: 'Ուսանողը, ով ցանկանում է անցնել պրակտիկա, պետք է լրացնի դիմում-հայտը՝ կցելով ինքնակենսագրականը։',
    },
    {
      title: 'Երրորդ փուլ՝ Թեստավորում',
      content: 'Դիմորդներն անցնում են թեստավորում, որն իրականացվում է երկու փուլով։ Առաջին փուլը գրավոր թեստն է ընդհանուր զարգացվածության վերաբերյալ՝ ստուգում է hard skills: Բավարար արդյունքներ ունենալու դեպքում թեկնածուն տեղափոխվում է երկրորդ փուլ, որը թիմային առաջադրանք է, ստուգում է soft skills:',
    },
    {
      title: 'Չորրորդ փուլ՝ Ուսումնական պրակտիկա',
      content: 'Նախորդ փուլում լավագույն արդյունք ցուցաբերած դիմորդները սկսում են պրակտիկան։ Ուսանողները, ներածական դասընթաց անցնելուց և կազմակերպությանը ծանոթանալուց հետո, անմիջապես ներգրավվում են ամենօրյա աշխատանքներում՝ կիրառելով համապատասխան գիտելիքները և հմտությունները։ Պրակտիկայի ավարտին ուսանողներն ստանում են մեծ փորձ, պրակտիկ գիտելիքներ և մոտիվացիա: Եվ իհարկե, պրակտիկայի մասնակցության հավաստագիր։',
    },
    {
      title: 'Հինգերորդ փուլ՝ Աշխատանքի առաջարկ',
      content: 'Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ։ Ձեր կողմից այն ընդունվելուց հետո կիրականացվեն փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասնություններ։ Բարի գալուստ Evocabank!',
    },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      {/* Լոգո և Գլխավոր Նավիգացիա */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/kariera" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
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

      {/* Լավանդայի/Մանուշակագույն Գրքերով Գլխավոր Բաններ (Hero) */}
      <div className="w-full bg-[#f3effa] py-12 md:py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
              Ուսումնական պրակտիկա
            </h1>
            <p className="text-[15px] md:text-base text-gray-600 leading-relaxed font-medium">
              Առանձնահատուկ ուշադրություն դարձնելով երիտասարդների զարգացմանը և նրանց համար հնարավորություններ ստեղծելուն, Բանկը պարբերաբար կազմակերպում է ուսումնական պրակտիկաներ՝ համագործակցելով Հայաստանի առաջատար բուհերի հետ:
            </p>
          </div>
          <div className="flex justify-center items-center relative h-[250px] md:h-[350px]">
            {/* 3D Գրքերի իմիտացիայի վիզուալ էֆեկտ */}
            <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-purple-400 to-[#6c2db5] rounded-3xl shadow-2xl flex flex-col justify-center px-6 text-white relative transform -rotate-6">
              <div className="h-4 bg-white/20 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-white/20 rounded mb-3 w-1/2"></div>
              <div className="h-24 bg-white/10 rounded flex items-center justify-center text-4xl">📚</div>
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce">✨</div>
            </div>
          </div>
        </div>
      </div>

      {/* Գործընկեր Համալսարանների Բաժին */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-gray-800 max-w-3xl mx-auto leading-snug">
          Ուսումնական պրակտիկայի շրջանակներում մենք համագործակցում ենք առաջատար բուհերի հետ՝
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {universities.map((uni, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center mb-4 select-none">
                <img src={uni.img} alt={uni.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <p className="text-[13px] md:text-[14px] font-bold text-gray-700 leading-normal max-w-[220px]">
                {uni.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ուսումնական պրակտիկայի փուլեր (Accordion) */}
      <div className="w-full bg-gray-50/50 py-16 border-t border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Ուսումնական պրակտիկայի փուլեր
          </h2>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCurrentOpen = openStep === index;
              return (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all">
                  <button
                    type="button"
                    onClick={() => toggleStep(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6c2db5] text-white font-black text-base flex items-center justify-center shadow-sm">
                        {index + 1}
                      </span>
                      <span className="font-bold text-[15px] md:text-[17px] text-gray-800">
                        {step.title}
                      </span>
                    </div>
                    <span className={`text-xl font-medium text-gray-400 transform transition-transform duration-200 ${isCurrentOpen ? 'rotate-180 text-[#6c2db5]' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {isCurrentOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/30">
                      <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-medium">
                        {step.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ուսումնական պրակտիկայի դիմում-հայտ (Form) */}
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#6c2db5]">Ուսումնական պրակտիկայի դիմում-հայտ</h2>
        <p className="text-center text-gray-500 mb-10 text-[14px] font-medium">
          Եթե ցանկանում եք անցնել ուսումնական պրակտիկա <span className="text-[#6c2db5] font-bold">Evoca</span>-ում, կարող եք ուղարկել դիմում՝ կցելով ինքնակենսագրականը:
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Անուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ազգանուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Հեռախոսահամար <span className="text-red-500">*</span></label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm font-medium">+374</span>
                <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-r-xl focus:outline-none focus:border-[#6c2db5] transition-colors" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Էլ. հասցե <span className="text-red-500">*</span></label>
              <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" required />
            </div>
          </div>

          {/* ԲՈՒՀ-երի ընտրության Radio Խումբը (ըստ վերջին տեսանյութի դիզայնի) */}
          <div className="p-6 bg-gray-50/50 border border-gray-100 rounded-2xl">
            <span className="block text-sm font-bold text-gray-800 mb-4">ԲՈՒՀ <span className="text-red-500">*</span></span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
              <label className="flex items-start gap-3 cursor-pointer select-none font-medium text-gray-700">
                <input type="radio" name="university_select" className="mt-1 accent-[#6c2db5] h-4 w-4" required />
                <span>Երևանի պետական համալսարան</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer select-none font-medium text-gray-700">
                <input type="radio" name="university_select" className="mt-1 accent-[#6c2db5] h-4 w-4" />
                <span>Հայաստանի ամերիկյան համալսարան</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer select-none font-medium text-gray-700">
                <input type="radio" name="university_select" className="mt-1 accent-[#6c2db5] h-4 w-4" />
                <span>Հայաստանի պետական տնտեսագիտական համալսարան</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer select-none font-medium text-gray-700">
                <input type="radio" name="university_select" className="mt-1 accent-[#6c2db5] h-4 w-4" />
                <span>Հայ-ռուսական /Սլավոնական/ պետական համալսարան</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook սոց. կայքում անձնական էջի հղում</label>
              <input type="url" placeholder="https://facebook.com/..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn սոց. կայքում անձնական էջի հղում</label>
              <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ուղեկցող նամակ</label>
            <textarea rows={4} placeholder="Մի քանի խոսքով պատմիր քո մասին..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50 flex items-center justify-center gap-3">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը / Ֆայլերը</span>
            </div>
          </div>

          {/* Պաշտպանական Ծածկագիր (Captcha) */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Ստուգման ծածկագիր <span className="text-red-500">*</span></label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-gray-200 shadow-sm select-none">
                <span className="font-mono text-xl tracking-widest line-through decoration-[#6c2db5] font-bold text-gray-700 italic">
                  AR71SX
                </span>
                <button type="button" className="text-gray-400 hover:text-[#6c2db5] ml-2 text-lg">
                  🔄
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Մուտքագրեք ծածկագիրը"
                className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5] transition-colors" 
                required 
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#6c2db5] hover:bg-[#530498] text-white font-bold px-10 py-4 rounded-full transition-colors shadow-md w-full sm:w-auto text-[15px]">
              Ես ուզում եմ աշխատել Evoca-ում ։)
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Usum;