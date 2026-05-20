import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Bridge: React.FC = () => {

  const subMenuItems = [
    { name: 'Աշխատանք Evoca-ում', path: '/practic' },
    { name: 'Ուսումնական պրակտիկա', path: '/usum' },
    { name: 'EvocaBRIDGE', path: '' }, // Ընթացիկ էջը
  ];

  return (
    <div className="w-full bg-[#f8f9fa] font-sans antialiased text-[#1a1a1a]">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-6 md:pt-14 px-6 bg-white">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-800 font-medium text-[15px] md:text-[16px]">
          <Link to="/kariera" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold tracking-wide">Evoca լայֆ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold tracking-wide">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[44px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2.5 transition-colors font-semibold text-[15px] shadow-sm">
            EvocaONLINE
          </span>
        </Link>
      </div>

      {/* --- SUBMENU NAV --- */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-6 shadow-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 min-w-[600px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-6 md:px-8 transition-colors text-[14px] md:text-[15px] font-medium whitespace-nowrap
                ${isActive || item.name === 'EvocaBRIDGE' ? 'bg-[#530498] font-bold' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* --- HERO BANNER --- */}
      <div className="w-full relative bg-[#ffb6c1] overflow-hidden min-h-[220px] md:min-h-[380px] flex items-end">
        {/* Banner Background Image */}
        <img 
          src="https://i.postimg.cc/85M6XvN2/evocabridge-banner.png" 
          alt="EvocaBRIDGE Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Title Box */}
        <div className="relative z-10 bg-white p-6 md:p-10 max-w-[450px] mb-0 ml-4 md:ml-20 shadow-lg rounded-t-md">
          <h1 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-2">BRIDGE</h1>
          <p className="text-gray-600 text-xs md:text-sm font-medium tracking-wider uppercase">Bridging Ideas, Shaping The Future</p>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-16 bg-white shadow-sm mt-6 rounded-b-lg">
        
        {/* Intro Highlight */}
        <h2 className="text-lg md:text-2xl font-bold text-[#6c2db5] mb-8 leading-snug">
          Չունե՞ս աշխատանքային փորձ, բայց փնտրու՞մ ես աշխատանք, ուրեմն <span className="underline decoration-2">EvocaBRIDGE</span> ծրագիրը քեզ համար է։
        </h2>

        {/* --- BENEFITS LIST --- */}
        <div className="space-y-5 mb-12">
          <div className="flex items-start gap-4">
            <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
            <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">Երկամսյա խորացված ուսումնական ծրագիր,</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
            <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">Ծանոթացում նորարար բանկային միջավայրին ներսից,</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
            <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">Գործնական կապերի հաստատում,</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
            <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">
              Ամսական <strong className="text-black font-bold">180.000 ՀՀ դրամ</strong> վարձատրություն՝ ներառյալ հարկերը և այլ պարտադիր վճարումները,
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
            <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">Անմիջապես ծրագրի ավարտից հետո աշխատանքի անցնելու հնարավորություն։</p>
          </div>
        </div>

        {/* --- ELIGIBILITY SECTION --- */}
        <div className="border-t border-gray-100 pt-8 mb-12">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-[#6c2db5] rounded-sm"></span>
            <span className="text-[#6c2db5]">EvocaBRIDGE</span>-ին կարող ես մասնակցել, եթե...
          </h3>
          
          <div className="space-y-5 pl-2">
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-700">Սովորում ես համալսարանի 4-րդ կուրսում, մագիստրատուրայում կամ մինչև 1 տարի է՝ ինչ ավարտել ես համալսարանը,</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-700">Ունես բարձր առաջադիմություն,</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-700">Հետաքրքրասեր ես, ակտիվ ու նպատակասլաց,</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-700">Սիրում ես բացահայտել նորը, սովորել և զարգանալ։</p>
            </div>
          </div>
        </div>

        {/* --- HOW TO APPLY SECTION --- */}
        <div className="bg-[#f3ecf9] p-6 md:p-8 rounded-2xl border border-[#e2d4f0] mb-12">
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-5 bg-[#6c2db5] rounded-sm"></span>
            <span className="text-[#6c2db5]">EvocaBRIDGE</span>-ին մասնակցելու համար <a href="mailto:evocabridge@evoca.am" className="text-[#6c2db5] underline font-bold hover:text-[#530498]">evocabridge@evoca.am</a> էլեկտրոնային հասցեին ուղարկի՛ր.
          </h3>

          <div className="space-y-4 pl-2">
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">Ինքնակենսագրական,</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-800 font-medium">ՄՈԳ-ի ցուցանիշը հաստատող տեղեկանք,</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#6c2db5] font-bold text-xl mt-0.5">✓</span>
              <p className="text-[15px] md:text-[16px] text-gray-800">
                <strong className="text-black font-bold">«Նամակ ապագայից»</strong>՝ այն մասին, թե ինչպես ես ամենաշատը 2 նպատակներիցդ դարձրել հաջողված նախագծեր։
              </p>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 mt-6 italic bg-white/60 p-3 rounded-lg border border-dashed border-purple-200">
            Նախնական ընտրությունն անցած թեկնածուների հետ կիրականացվեն անհատական հարցազրույցներ, որոնց արդյունքում կընտրվեն ծրագրի մասնակիցները։
          </p>
        </div>

        {/* --- PROGRAM DETAILS (PHASES) --- */}
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-lg md:text-xl font-extrabold text-[#6c2db5] mb-6 uppercase tracking-wider">
            Ծրագրի մանրամասներ.
          </h3>
          
          <p className="text-[15px] md:text-[16px] text-gray-800 mb-6">
            <span className="font-bold text-[#6c2db5]">EvocaBRIDGE</span>-ն իրականացվում է <span className="font-bold">3 փուլով</span>.
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
              <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                <strong className="text-[#6c2db5] font-bold">Փուլ 1.</strong> Տեսական ուսուցման ընթացքում մասնակիցներն ունենում են հանդիպումներ Բանկի մի շարք ստորաբաժանումների ղեկավարների հետ, ստանում խորացված գիտելիքներ բանկային պրոդուկտների, ծառայությունների և մի շարք գործընթացների վերաբերյալ։
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
              <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                <strong className="text-[#6c2db5] font-bold">Փուլ 2.</strong> Գործնական փուլի շրջանակում մասնակիցները հնարավորություն են ունենում տեսական և գործնական գիտելիքները կիրառել պրակտիկ միջավայրում։ Այս փուլի ընթացքում մասնակիցները նաև ներգրավվում են նախագծերի մշակման և ներկայացման հետաքրքիր գործընթացում։
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
              <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                <strong className="text-[#6c2db5] font-bold">Փուլ 3.</strong> Տեսական և գործնական փուլերի ավարտից հետո իրականացվում է թեստավորում և ավարտական նախագծերի հանձնում։ Լավագույն արդյունք ցուցաբերած մասնակիցները ստանում են աշխատանքի առաջարկ Evocabank-ից և սկսում իրենց մասնագիտական ուղին։
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* --- FOOTER LINKS SECTION --- */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 text-xs md:text-sm py-12 mt-12 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-[14px]">Բանկի մասին</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white transition-colors">Մեր մասին</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-[14px]">Օգտակար հղումներ</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white transition-colors">Հաճախորդի իրավունքներ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-[14px]">Այլ հղումներ</h4>
            <ul className="space-y-2">
              <li><Link to="/evocaonline" className="hover:text-white transition-colors">EvocaONLINE</Link></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Bridge;