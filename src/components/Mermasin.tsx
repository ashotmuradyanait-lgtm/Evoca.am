import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mermasin: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  const [selectedYear, setSelectedYear] = useState('2025');

  const subMenuItems = [
    { name: 'Ընդհանուր', path: '' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '' },
    { name: 'Գործընկերներ', path: '' },
    { name: 'Մրցանակներ', path: '' },
    { name: 'Կարծիքներ', path: '' },
    { name: 'CSR', path: '' },
  ];

  const historyData: { [key: string]: string } = {
    '2025': 'Բանկը փոխեց իր կազմակերպաիրավական ձևը ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր: Ներկայացվեց Evoca Travel Card-ը: Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագծերը:',
    '2024': 'Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հիմնավորելով մի շարք նախագծեր, ներկայացնելով իր նոր EvocaHOME վերելքը, ինչպես նաև արժանացել միջազգային մրցանակների:',
    '2023': 'Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները: Գործընկերներին է ներկայացվել Evoca Digital քարտը, Action օնլայն վարկը, Էլեկտրոնային ստորագրության e-Sign համակարգը:',
    '2022': 'Բանկը շարունակեց իր թվային տրանսֆորմացիան՝ ընդլայնելով օնլայն ծառայությունների տեսականին և բարելավելով հավելվածի ֆունկցիոնալությունը:',
    '2021': 'Միջազգային հեղինակավոր ամսագրերի կողմից Evocabank-ը ճանաչվեց Հայաստանի լավագույն թվային բանկ:',
    '2020': 'Բանկը արագ արձագանքեց շուկայի փոփոխություններին՝ ներդնելով անհպում և հեռավար բանկինգի լավագույն գործիքները:',
    '2019': 'Evocabank-ի Վարչության նախագահի տեղակալ Կարեն Եղիազարյանը նշանակվել է Բանկի Վարչության նախագահ: Ներկայացվել է Visa Infinite քարտը: Բանկը դարձել է Եվրատեսիլ 2019-ի հեռարձակման գլխավոր հովանավոր։',
    '2018': 'Evocabank-ը երկրորդ տարին անընդմեջ Global Finance հեղինակավոր ամսագրի կողմից ճանաչվել է Լավագույն սպառողական թվային բանկը Հայաստանում: Ներկայացվել են ArCa-MIR և Shopping Card քարտերը:',
    '2017': 'Բանկը վերանվանվել է Evocabank-ի՝ փոխելով իր ռազմավարությունը և բիզնես մոդելը՝ անցնելով mobile-first ֆորմատի: Անդամակցել է VISA վճարային համակարգին: Ներկայացրել է SingleTOUCH օնլայն վարկատեսակը:',
    '2016': 'Բանկի նորմատիվային ընդհանուր կապիտալը գերազանցել է ԿԲ սահմանած 30 մլրդ. ՀՀ դրամ նվազագույն պահանջը: Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ վերակազմավորվելով ՍՊԸ-ից ՓԲԸ-ի:',
    '2015': 'Ներդրվել է Prometey Mobile բջջային հավելվածը և իրականացվել է հավելվածի՝ Իվետա Մուկուչյանի մասնակցությամբ գովազդային արշավը, որի շրջանակներում թողարկվել է հատուկ բրենդավորված քարտ: Գործարկվել է Prometey Token անվտանգության բջջային հավելվածն App Store-ում և Play Store-ում:',
    '2012': 'Միացել է "UNIStream" դրամական փոխանցումների համակարգին: "Global Finance" ամսագիրը, երկրորդ տարին անդընդմեջ, Բանկին ճանաչել է որպես աշխարհի լավագույն ենթապահառու բանկերից մեկը և 2012թ. «Լավագույն ենթապահառու բանկը» Հայաստանում:',
    '2008': 'Առաջին անգամ Հայաստանում` Բանկը թողարկել և Շվեյցարական առաջատար բանկերից մեկին է վաճառել սեփական ոչ փաստաթղթային առանց ապահովվածության պարտատոմսեր:',
    '2006': 'Ստացել է «MasterCard Europe» վճարային համակարգի աֆիլիատ անդամի կարգավիճակ: Սկսել է թողարկել «Maestro», «MasterCard Standard», «MasterCard Gold», «MasterCard Business» տիպի պլաստիկ քարտեր:',
    '2005': 'Դարձել է «Արմենիան Քարդ» ՓԲԸ բաժնետեր և «ԱրՔա» վճարային համակարգի լիիրավ անդամ:',
    '2000': 'Անդամակցել է S.W.I.F.T. միջազգային փոխանցումների համակարգին:',
    '1993': 'Լիցենզավորվել է ՀՀ Կենտրոնական բանկի կողմից` թիվ 27 ընդհանուր արտոնագրով:',
    '1990': 'Բանկը հիմնադրվել է 1990թ. և մինչև 2017թ. գործել է Պրոմեթևս և Պրոմեթեյ Բանկ անուններով:',
  };

  const timelineYears = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2012', '2008', '2006', '2005', '2000', '1993', '1990',];

  const selectedIndex = timelineYears.indexOf(selectedYear);
  const currentChunkIndex = Math.floor(selectedIndex / 6);
  const totalChunks = Math.ceil(timelineYears.length / 6);

  const handlePrevYear = () => {
    if (selectedIndex > 0) {
      setSelectedYear(timelineYears[selectedIndex - 1]);
    }
  };

  const handleNextYear = () => {
    if (selectedIndex < timelineYears.length - 1) {
      setSelectedYear(timelineYears[selectedIndex + 1]);
    }
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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto">
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Ընդհանուր</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Ընդհանուր տեղեկատվություն</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
          <p>
            <strong className="text-[#1a1a1a]">պարզ և նորարար</strong> բանկային ծառայություններ մատուցող բանկ է, որն իր գործունեությունը ծավալում է թվային տեխնոլոգիաների նորագույն և ակտիվ կիրառմամբ:
          </p>
          <p>
            Առանձնահատուկ ուշադրություն ենք դարձնում մոբայլ տեխնոլոգիաների զարգացմանը և արագացմանը:
          </p>
          <p>
            Գործելով <strong className="text-[#1a1a1a]">mobile-first ֆորմատով</strong>՝ նոր ծառայություններ նախագծելիս առաջին հերթին հաշվի ենք առնում դրանք հավելվածով օգտագործելու հարմարավետությունը:
          </p>
          <p>Մենք ձգտում ենք լինել լավագույնը, և մենք պատրաստ ենք:</p>
        </div>

        <div className="lg:col-span-7 bg-[#6c2db5] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold mb-4">Մեր տեսլականը</h2>
            <div className="w-12 h-[2px] bg-white mb-6"></div>
            <p className="text-[16px] md:text-[18px] font-light leading-relaxed max-w-[85%]">
              Լինել ամենանորարար և առաջադեմ բանկային ծառայություններ մատուցող ֆինանսական հաստատությունը Հայաստանում, որի բոլոր ծառայություններից հնարավոր կլինի օգտվել առանց բանկ այցելելու:
            </p>
          </div>
          
          <div className="absolute right-[-20px] bottom-[-40px] text-[120px] md:text-[160px] font-black opacity-10 select-none pointer-events-none">
            evoca
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <div className="bg-gray-50 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-sm border border-gray-100">
          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Evoca Mission office image" 
              className="w-full h-full min-h-[250px] md:min-h-[350px] object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#1a1a1a]">Մեր առաքելությունը</h2>
            <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
              <p className="bg-white p-4 rounded-xl border-l-4 border-[#6c2db5] shadow-sm">
                Նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ մատուցել ֆինանսական ծառայությունները պարզ, արագ և հարմարավետ եղանակով՝ գործելով <span className="text-[#6c2db5] font-semibold">mobile-first</span> ձևաչափով:
              </p>
              <p>
                Մենք մշտապես կատարելագործում ենք մեր ծառայությունները՝ դարձնելով մարդկանց կյանքը ավելի հարմարավետ:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 mb-20 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-14 text-[#1a1a1a]">Բանկի պատմությունը</h2>
          
          <div className="relative w-full flex items-center mb-14 px-4 md:px-8">
            <button 
              onClick={handlePrevYear}
              disabled={selectedIndex === 0}
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white shadow-sm transition-all text-xl font-bold z-10
                ${selectedIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:border-[#6c2db5] hover:text-[#6c2db5]'}`}
            >
              ‹
            </button>

            <div className="relative flex-1 overflow-hidden mx-4 pb-4">
              <div className="absolute left-0 right-0 top-[15px] h-[2px] bg-gray-200 z-0"></div>
              
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentChunkIndex * 100}%)` }}
              >
                {Array.from({ length: totalChunks }).map((_, chunkIdx) => (
                  <div key={chunkIdx} className="flex min-w-full justify-between items-center">
                    {timelineYears.slice(chunkIdx * 6, chunkIdx * 6 + 6).map((year) => {
                      const isActive = selectedYear === year;
                      return (
                        <div key={year} className="flex flex-col items-center relative z-10 min-w-[70px] md:min-w-[100px] mx-auto">
                          <button
                            onClick={() => setSelectedYear(year)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300
                              ${isActive 
                                ? 'border-[#6c2db5] bg-white ring-4 ring-[#6c2db5]/20 scale-110' 
                                : 'border-gray-300 hover:border-gray-500'}`}
                          >
                            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-[#6c2db5]' : 'bg-transparent'}`}></div>
                          </button>
                          
                          <span 
                            onClick={() => setSelectedYear(year)}
                            className={`mt-3 text-[15px] md:text-[17px] font-bold cursor-pointer transition-all duration-300 select-none
                              ${isActive ? 'text-[#6c2db5] scale-105' : 'text-gray-400 hover:text-gray-600'}`}
                          >
                            {year}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNextYear}
              disabled={selectedIndex === timelineYears.length - 1}
              className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white shadow-sm transition-all text-xl font-bold z-10
                ${selectedIndex === timelineYears.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:border-[#6c2db5] hover:text-[#6c2db5]'}`}
            >
              ›
            </button>
          </div>

          <div key={selectedYear} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-500 animate-fadeIn">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[32px] font-black text-[#6c2db5] block transition-transform duration-300 transform translate-x-0">{selectedYear}</span>
              <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed min-h-[80px]">
                {historyData[selectedYear]}
              </p>
            </div>
            <div className="lg:col-span-5 overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" 
                alt={`${selectedYear} illustration`}
                className="w-full h-[200px] md:h-[250px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-10 text-center text-[#1a1a1a]">Մեր Արժեքները</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Թափանցիկություն', desc: 'Մենք բաց ենք և թափանցիկ հանրության առջև՝ ֆինանսական կայունության բանկային և սակագնային քաղաքականության սահմանման հարցում։' },
            { title: 'Հաճախորդների վստահություն', desc: 'Հաճախորդները մեր գործունեության կենտրոնում են։ Մենք գնահատում և ամուր ենք պահում հաճախորդների վստահությունը։' },
            { title: 'Հարմարավետություն', desc: 'Մենք ձգտում ենք բարելավել հաճախորդների կենսակերպը՝ դարձնելով այն առավել հարմարավետ։' },
            { title: 'Գործարար հեղինակություն', desc: 'Բարձր համբավը մեր ամենաթանկ և անփոխարինելի ակտիվն է։' },
            { title: 'Թիմային ոգի', desc: 'Մենք համախմբում ենք լավագույն թիմը՝ մեր հաճախորդներին լավագույն սպասարկում ապահովելու համար։' }
          ].map((val, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[18px] font-bold text-[#6c2db5] mb-3">{val.title}</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <div className="bg-[#6c2db5] text-white p-8 md:p-12 rounded-2xl">
          <h2 className="text-[24px] md:text-[32px] font-bold mb-4">Կորպորատիվ սոցիալական պատասխանատվություն</h2>
          <p className="text-[15px] md:text-[16px] font-light max-w-3xl mb-8 opacity-90">
            Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#530498] p-4 rounded-xl text-[14px]">🔹 Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, ստարտափեր։</div>
            <div className="bg-[#530498] p-4 rounded-xl text-[14px]">🔹 Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ։</div>
            <div className="bg-[#530498] p-4 rounded-xl text-[14px]">🔹 Հասարակական կարևոր նշանակություն ունեցող ձեռնարկներ։</div>
            <div className="bg-[#530498] p-4 rounded-xl text-[14px]">🔹 Հասարակության առավել խոցելի խմբեր, մասնավորապես ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ։</div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="border border-gray-100 p-6 md:p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-[22px] md:text-[26px] font-bold mb-4 text-[#1a1a1a]">Բանկի լոգոտիպը</h2>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              Բանկի լոգոն կազմված է <span className="font-semibold">evolution</span> էվոլյուցիա բառի արմատից և նմանեցված է <span className="font-semibold">evoke</span>՝ զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն, պատկերված է կորպորատիվ անկյունների հավասարակշռող եռանկյան տեսքով և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl flex justify-center items-center">
            <span className="text-[36px] font-black tracking-wider text-[#1a1a1a]">evoca<span className="text-[#6c2db5]">BANK</span></span>
          </div>
        </div>

        <div className="border border-gray-100 p-6 md:p-8 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-[22px] md:text-[26px] font-bold mb-4 text-[#1a1a1a]">Բանկի բրենդբուքը</h2>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">
              Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, տառատեսակները և բրենդային այլ կարևոր տարրերը։ Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար։
            </p>
          </div>
          <button className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-xl font-bold hover:bg-gray-800 transition-colors flex justify-center items-center gap-2">
            <span>BRANDBOOK</span>
            <span className="text-[12px] bg-gray-700 px-2 py-0.5 rounded">Click Here</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-20">
        <h2 className="text-[24px] md:text-[32px] font-bold mb-6 text-[#1a1a1a]">Բանկի Կորպորատիվ գույները</h2>
        <p className="text-gray-600 text-[15px] mb-8">Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full border border-gray-300 bg-white shrink-0"></div>
              <p className="text-[14px] text-gray-700"><span className="font-bold">Սպիտակը</span> խորհրդանշում է նորը:</p>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-gray-400 shrink-0"></div>
              <p className="text-[14px] text-gray-700"><span className="font-bold">Մոխրագույնը</span> խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:</p>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#6c2db5] shrink-0"></div>
              <p className="text-[14px] text-gray-700"><span className="font-bold">Մանուշակագույնը</span> երիտասարդության, ստեղծարարության և նորարարության գույնն է:</p>
            </div>
          </div>

          <div className="lg:col-span-7 w-full overflow-hidden rounded-2xl shadow-md border border-gray-100">
            <video 
              className="w-full h-auto object-cover" 
              controls 
              preload="metadata"
            >
              <source src="Evoca.mp4" type="video/mp4" />
              Ձեր բրաուզերը չի աջակցում տվյալ վիդեո ֆորմատը։
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mermasin;