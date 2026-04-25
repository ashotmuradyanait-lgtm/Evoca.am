import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiExternalLink, FiAlertCircle, FiInfo } from 'react-icons/fi';

const Nyut: React.FC = () => {
  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];

  return (
    <div className="w-full bg-white font-sans relative overflow-x-hidden text-[#333]">
      
      {/* Social Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 z-50">
        <div className="flex flex-col gap-6">
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">f</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold text-sm">t</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold font-serif italic">in</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">p</Link>
        </div>
      </div>

      {/* Purple Submenu */}
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 overflow-x-auto whitespace-nowrap">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-6 md:px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px] overflow-x-auto whitespace-nowrap">
        <span className="hover:text-gray-600">🏠</span>
        <span>›</span>
        <span className="hover:text-gray-600">Անհատներին</span>
        <span>›</span>
        <span className="hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-[#6c2db5] font-medium">Կարևոր տեղեկատվություն</span>
      </div>

      {/* ՀԻՄՆԱԿԱՆ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ */}
      <div className="max-w-[1000px] mx-auto px-6 pb-24 mt-4 md:ml-24">
        
        <h1 className="text-[32px] md:text-[42px] font-bold text-[#1a1a1a] mb-10 border-b pb-4">
          Կարևոր տեղեկատվություն
        </h1>

        <div className="space-y-8 text-[15px] leading-[1.7]">

          {/* ՈՒՇԱԴՐՈՒԹՅՈՒՆ BLOCK */}
          <div className="bg-[#f9f6ff] border-l-[4px] border-[#6c2db5] p-6 rounded-r-xl flex gap-4">
            <FiAlertCircle className="text-[#6c2db5] text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[#6c2db5] font-bold text-[16px] uppercase tracking-wide mb-3">Ուշադրություն</h3>
              <ul className="list-disc pl-5 space-y-3 text-[#444]">
                <li>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:</li>
                <li>Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:</li>
                <li>Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով։</li>
                <li>Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ։</li>
                <li>Վարկի տոկոսագումարները հաշվարկվում են <strong>ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ</strong> հիման վրա, իսկ <strong>ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ</strong> ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (www.cba.am):</li>
                <li>Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:</li>
                <li>Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:</li>
                <li>Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է www.evoca.am կայքում... Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին:</li>
              </ul>
            </div>
          </div>

          {/* ԶԳՈՒՇԱՑՈՒՄ BLOCK */}
          <div className="bg-red-50 border-l-[4px] border-red-600 p-6 rounded-r-xl">
            <h3 className="text-red-600 font-bold text-[16px] uppercase tracking-wide mb-3">ԶԳՈՒՇԱՑՈՒՄ</h3>
            <p className="text-red-900 font-medium">
              ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔԵՐՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ ՁԵՐ ՏՎՅԱԼՆԵՐԸ (ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՉԿԱՏԱՐՄԱՆ, ԹԵՐԻ ԿԱՏԱՐՄԱՆ ՄԱՍԻՆ ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԸ) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:
            </p>
          </div>

          {/* ՏԵՂԵԿԱՑՈՒՄ BLOCK */}
          <div className="bg-blue-50 border-l-[4px] border-blue-500 p-6 rounded-r-xl">
            <h3 className="text-blue-600 font-bold text-[16px] uppercase tracking-wide mb-3 flex items-center gap-2">
              <FiInfo /> ՏԵՂԵԿԱՑՈՒՄ
            </h3>
            <p className="text-[#444] mb-4">
              Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով... բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:
            </p>
            <p className="text-[#444] mb-4">
              Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <strong>ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</strong> վրա...
            </p>
            <p className="font-bold text-[#1a1a1a] mb-2">
              Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:
            </p>
            <p className="font-bold text-red-600 uppercase mb-2">
              ՏՈԿՈՍԱԳՈՒՄԱՐՆԵՐԻ և ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՈՒՄՆԵՐԸ ԺԱՄԱՆԱԿԻՆ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ, ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:
            </p>
            <p className="text-[#444]">
              Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում... կարող է կատարվել վարկային պարտավորությունների մարումներ ձեր այլ գույքերի հաշվին:
            </p>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆ */}
          <section>
            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-6">Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ</h2>
            
            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">ԻՆչ է վարկային պատմությունը</h3>
            <p className="mb-4">
              «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է...
            </p>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h3>
            <p className="mb-4">
              Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները...):
            </p>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">ԻՆչ է վարկային բյուրոն</h3>
            <p className="mb-2">
              Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության հավաքագրում, մշակում, պահպանում...
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն</li>
              <li>ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները...</li>
            </ul>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">Ինչ է վարկային զեկույցը</h3>
            <p className="mb-4">Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է... արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:</p>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h3>
            <p className="mb-4 bg-gray-50 p-4 border border-gray-200 rounded">
              Համաձայն օրենքի... «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
            </p>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">Ինչպես բարելավել վարկային պատմությունը</h3>
            <p className="mb-4">Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները... և բացառել ժամկետանց պարտավորությունների գոյացումը:</p>

            <h3 className="text-[18px] font-bold text-[#6c2db5] mt-6 mb-2">Ուր դիմել եթե վարկային պատմությունը սխալ է</h3>
            <p className="mb-4">
              Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա կարող է տեղեկացնել վարկային բյուրոյին (Իմ ԱՔՌԱ անձնական գրասենյակից)...
            </p>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* ՈՐՈՇՄԱՆ ԿԱՅԱՑՄԱՆ ՉԱՓԱՆԻՇՆԵՐ */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h3 className="text-[18px] font-bold text-green-800 mb-4">Դրական որոշման կայացման չափանիշները`</h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Մշտական բնակության վայրը</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Կայուն եկամտի աղբյուրը</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Դրական կամ չեզոք վարկային պատմությունը</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✔</span> Արժանահավատ և լիարժեք փաստաթղթերը</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="text-[18px] font-bold text-red-800 mb-4">Բացասական որոշման կայացման չափանիշները`</h3>
              <ul className="space-y-2 text-red-900">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Ոչ արժանահավատ փաստաթղթերը ներկայացնելը</li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Բացասական վարկային պատմությունը</li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✖</span> Գրավի կամ երաշխավորության փաստաթղթեր չներկայացնելը</li>
              </ul>
            </div>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* ՊԵՏԱԿԱՆ ՏՈՒՐՔԵՐ */}
          <section>
            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-6">Պետական տուրքեր և այլ ծախսեր</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Գրավադրվող գույքի գնահատում`</strong> 10,000-150,000 դրամ... վճարը մուտքագրվում է գնահատող կազմակերպության հաշվին:</li>
              <li><strong>Նոտարական ձևակերպման ծախսեր՝</strong> 10,000-30,000 դրամ:</li>
              <li><strong>Գրավի գրանցման ծախսեր՝</strong> անշարժ գույքի գրավի գրանցման դեպքում` սկսած 26,400 ՀՀ դրամից... www.cadastre.am:</li>
              <li><strong>Գրավադրվող գույքի ապահովագրում:</strong> վարկի մնացորդի 0.15 % – 2.5 %-ի չափով: Ապահովագրության շահառուն պետք է հանդիսանա Բանկը:</li>
            </ul>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿ (ԲԱՆԱՁԵՎԵՐՈՎ) */}
          <section className="bg-[#fafafa] p-8 rounded-3xl border border-gray-200">
            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-6">Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ</h2>
            <p className="mb-4">Բանկը իր կողմից տրամադրած վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (APR)` հիմք ընդունելով հետևյալ բանաձևը՝</p>
            
            {/* Բանաձև 1 HTML/CSS ֆորմատով (առանց LaTeX փլագինների պահանջի) */}
            <div className="flex justify-center my-6 text-xl font-serif text-[#6c2db5]">
              <div className="flex items-center gap-2">
                 <span>A =</span>
                 <div className="flex flex-col items-center justify-center">
                    <span className="text-xs">N</span>
                    <span className="text-3xl font-light">∑</span >
                    <span className="text-xs">n=1</span>
                 </div>
                 <div className="flex flex-col items-center">
                    <span className="border-b border-[#6c2db5] px-2 pb-1">K<sub>n</sub></span>
                    <span className="pt-1">(1 + i)<sup>D<sub>n</sub> / 365</sup></span>
                 </div>
              </div>
            </div>

            <ul className="text-[14px] space-y-1 mb-6 text-gray-600">
              <li><strong>i</strong> – տարեկան փաստացի տոկոսադրույք</li>
              <li><strong>A</strong> – վարկի սկզբնական գումար</li>
              <li><strong>n</strong> – վարկի մարմանն ուղղված վճարի թիվ</li>
              <li><strong>N</strong> – վարկի մարմանն ուղղված վերջին վճարի թիվ</li>
              <li><strong>K<sub>n</sub></strong> – վարկի մարմանն ուղղված n-րդ վճարի գումար</li>
              <li><strong>D<sub>n</sub></strong> – օրերի թիվ վարկի տրամադրումից մինչև n-րդ վճար</li>
            </ul>

            <h4 className="font-bold text-[#1a1a1a] mb-3">Ենթադրենք վարկի պայմաններն են`</h4>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>Վարկի գումար – 700,000 ՀՀ դրամ</li>
              <li>Անվանական տարեկան տոկոսադրույքը – 18 %</li>
              <li>Վարկի մարման ժամկետը – 12 ամիս</li>
              <li>Վարկի մարման եղանակը – անուիտետային</li>
              <li>Վարկային հայտի ուսումնասիրման վճար – 1,000 ՀՀ դրամ</li>
            </ul>

            <p className="mb-4">Ամսական վճարի (K) որոշման բանաձևը՝</p>
            <div className="flex justify-center my-4 text-lg font-serif text-[#6c2db5]">
              <div className="flex items-center gap-2">
                 <span>K =</span>
                 <div className="flex flex-col items-center">
                    <span className="border-b border-[#6c2db5] px-2 pb-1">A × R</span>
                    <span className="pt-1">1 - (1 + R)<sup>-P</sup></span>
                 </div>
              </div>
            </div>

            <p className="mb-4 text-[14px] text-gray-600">
              Որտեղ՝ R = 18/12 / 100 = 0.015 (ամսական տոկոս), P = 12 ամիս:
            </p>

            <div className="flex justify-center my-4 text-lg font-serif bg-white p-4 rounded-xl border">
              <div className="flex items-center gap-2">
                 <span>K =</span>
                 <div className="flex flex-col items-center">
                    <span className="border-b border-gray-400 px-2 pb-1">700,000 × 0.015</span>
                    <span className="pt-1">1 - (1 + 0.015)<sup>-12</sup></span>
                 </div>
                 <span>= 64,176 ՀՀ դրամ</span>
              </div>
            </div>

            <p className="mb-4 mt-6">Այսպիսով, վարկի տարեկան փաստացի տոկոսադրույքը (APR) կհաշվարկվի՝</p>
            <div className="p-4 bg-white rounded-xl border text-center font-mono text-sm overflow-x-auto">
              700,000 = 1000/(1+i)<sup>0/365</sup> + 64176/(1+i)<sup>30/365</sup> + ... + 64176/(1+i)<sup>365/365</sup><br/><br/>
              <strong>i = 0.1995 × 100 = 19.95%</strong>
            </div>

            <p className="mt-4 font-bold text-[#6c2db5]">
              Վարկի տարեկան փաստացի տոկոսադրույքի հաշվարկի մեջ ՉԵՆ ներառվում՝
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Նոտարական ձևակերպման վճարներ</li>
              <li>Գրավի գրանցման վճարները</li>
              <li>Կանխիկացման վճարները</li>
            </ul>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* ԼՈՂԱՑՈՂ ՏՈԿՈՍԱԴՐՈՒՅՔԻ ՀԱՇՎԱՐԿՄԱՆ ԿԱՐԳ */}
          <section>
            <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-4">Լողացող տոկոսադրույքի հաշվարկման կարգ</h2>
            <p className="mb-4">Բանաձևը՝ <strong className="text-[#6c2db5]">ՏԼ = ՏՀ + ՏՓ</strong>, որտեղ՝</p>
            <ul className="list-none pl-5 mb-6 space-y-1 text-[14px]">
              <li><strong>ՏԼ</strong> - Լողացող տոկոսադրույք</li>
              <li><strong>ՏՀ</strong> - Լողացող տոկոսադրույքի հաստատուն բաղադրիչ</li>
              <li><strong>ՏՓ</strong> - Լողացող տոկոսադրույքի փոփոխուն բաղադրիչ</li>
            </ul>
            <p className="mb-4 text-[14px] text-gray-700">
              Բանկը տարին երկու անգամ փոփոխում է լողացող տոկոսադրույքի փոփոխուն բաղադրիչը (ՏՓ) ոչ ուշ քան յուրաքանչյուր տարվա փետրվարի 1-ը և օգոստոսի 1-ը:
            </p>

            <div className="space-y-4">
              <details className="bg-gray-50 border rounded-xl p-4 cursor-pointer">
                <summary className="font-bold text-[#6c2db5]">ՀՀ դրամով (Հիմնական և Երկրորդային)</summary>
                <div className="mt-4 text-[13px] text-gray-600 space-y-2">
                  <p><strong>Հիմնական:</strong> 6 ամիս ժամկետայնությամբ ՀՀ պետական պարտատոմսերի մինչև մարում եկամտաբերություն (www.cba.am):</p>
                  <p><strong>Երկրորդային:</strong> ՀՀ ԿԲ կողմից հրապարակված ֆիզիկական անձանցից մինչև 1 տարի ժամկետով ներգրավված ավանդների տոկոսադրույքները:</p>
                </div>
              </details>
              <details className="bg-gray-50 border rounded-xl p-4 cursor-pointer">
                <summary className="font-bold text-[#6c2db5]">ԱՄՆ դոլարով (Հիմնական և Երկրորդային)</summary>
                <div className="mt-4 text-[13px] text-gray-600 space-y-2">
                  <p><strong>Հիմնական:</strong> ԱՄՆ դոլարով 6 ամիս ժամկետայնությամբ օվերնայթ ֆոնդային տոկոսադրույքը (CME Term SOFR USD 6 Month - Բլումբերգ TSFR6M):</p>
                  <p><strong>Երկրորդային:</strong> Մինչև 1 տարի ժամկետով ԱՄՆ դոլարով ներգրավված ավանդների տոկոսադրույքները (ՀՀ ԿԲ):</p>
                </div>
              </details>
              <details className="bg-gray-50 border rounded-xl p-4 cursor-pointer">
                <summary className="font-bold text-[#6c2db5]">Եվրոյով (Հիմնական և Երկրորդային)</summary>
                <div className="mt-4 text-[13px] text-gray-600 space-y-2">
                  <p><strong>Հիմնական:</strong> Եվրոյով 6 ամիս ժամկետայնությամբ Եվրոպական Միջբանկային Առաջարկի տոկոսադրույքը (EMMI EURIBOR 6 Month - Բլումբերգ EUR006M):</p>
                  <p><strong>Երկրորդային:</strong> Գերմանիայի եվրոյով պետական պարտատոմսերի եկամտաբերության կորի 6 ամիս ժամկետայնության տոկոսադրույքը (Բլումբերգ YCGT0016):</p>
                </div>
              </details>
            </div>
            <p className="mt-4 text-[13px] italic text-gray-500">
              * Փոփոխուն բաղադրիչի միջին թվաբանականը կլորացվում է 0.5%-ի քայլով: Բացասական արժեքի դեպքում կիրառվում է 0% նվազագույն շեմ:
            </p>
          </section>

          {/* ԱՂՅՈՒՍԱԿ 1: ՓՈՓՈԽԱԿԱՆ ԲԱՂԱԴՐԻՉՆԵՐ */}
          <section className="mt-10">
            <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-4">Անցյալ և ներկա փոփոխական բաղադրիչների արժեքները</h3>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse text-[14px]">
                <thead>
                  <tr className="bg-[#6c2db5] text-white">
                    <th className="py-3 px-4 font-bold border-r border-[#8a4bd2]">Ամսաթիվ</th>
                    <th className="py-3 px-4 font-bold border-r border-[#8a4bd2]">ՀՀ դրամ</th>
                    <th className="py-3 px-4 font-bold border-r border-[#8a4bd2]">ԱՄՆ դոլար</th>
                    <th className="py-3 px-4 font-bold">Եվրո</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ['15/07/2019', '6.0%', '0.5%', '0.0%'], ['15/01/2020', '6.0%', '0.5%', '0.0%'],
                    ['15/07/2020', '6.0%', '0.5%', '0.0%'], ['15/01/2021', '6.0%', '0.5%', '0.0%'],
                    ['15/07/2021', '7.0%', '0.5%', '0.0%'], ['15/12/2021', '8.0%', '0.5%', '0.0%'],
                    ['01/08/2022', '9.0%', '1.0%', '0.0%'], ['01/02/2023', '9.0%', '1.0%', '0.0%'],
                    ['01/08/2023', '9.0%', '1.0%', '0.0%'], ['01/02/2024', '9.0%', '1.0%', '0.0%'],
                    ['01/08/2024', '9.0%', '1.0%', '0.0%'], ['01/02/2025', '8.5%', '1.0%', '0.0%'],
                    ['01/08/2025', '8.0%', '1.0%', '0.0%'], ['01/02/2026', '7.5%', '1.0%', '0.0%']
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-2 px-4 border-r border-gray-200 font-medium">{row[0]}</td>
                      <td className="py-2 px-4 border-r border-gray-200">{row[1]}</td>
                      <td className="py-2 px-4 border-r border-gray-200">{row[2]}</td>
                      <td className="py-2 px-4">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* EVOCA ՎԱՐԿԱՅԻՆ ՍՔՈՐ */}
          <section className="mt-10 bg-[#f9f6ff] p-8 rounded-3xl">
            <h2 className="text-[22px] font-bold text-[#6c2db5] mb-4">«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ կողմից կիրառվող վարկային սքոր</h2>
            <p className="mb-4">
              Սքորինգային համակարգ է, որը վիճակագրական ուսումնասիրության ենթարկելով հաճախորդի վարկային պատմությունը՝ տալիս է վարկառուի վարկային ռիսկի թվային գնահատականը:
            </p>
            <h4 className="font-bold mb-2">Հաշվի է առնում հետևյալ չափանիշները․</h4>
            <div className="flex flex-wrap gap-2">
              {['Վճարումների պատմություն', 'Վարկային բեռի մեծություն', 'Վարկային պատմության երկարություն', 'Օգտագործված փոխառությունների տեսակներ', 'Նոր վարկային դիմում', 'Այլ չափանիշներ'].map(tag => (
                <span key={tag} className="bg-white border border-[#d1b3ff] text-[#6c2db5] px-3 py-1 rounded-full text-[13px] font-medium shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <hr className="my-10 border-gray-200" />

          {/* ԱՂՅՈՒՍԱԿ 2: ԱՊԱՀՈՎԱԳՐԱԿԱՆ ԸՆԿԵՐՈՒԹՅՈՒՆՆԵՐ */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-6">Բանկի հետ համագործակցող ապահովագրական ընկերությունների ցանկ</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 font-bold border-b">Հ/Հ</th>
                    <th className="py-3 px-4 font-bold border-b">Անվանում</th>
                    <th className="py-3 px-4 font-bold border-b">Գտնվելու վայր</th>
                    <th className="py-3 px-4 font-bold border-b">Հեռախոսահամարներ</th>
                    <th className="py-3 px-4 font-bold border-b">Էլ. փոստի հասցե</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['1', '«ԻՆԳՈ ԱՐՄԵՆԻԱ» ապահովագրական ՓԲԸ', 'ք. Երևան, Հանրապետության 51.53, տարածք 47, 48, 50', '+374 10 543134', 'info@ingoarmenia.am'],
                    ['2', '«ԷՖԵՍ» ապահովագրական ՓԲԸ', 'ՀՀ, ք. Երևան, 0009, Զարոբյան 11 (մուտքը Բաղրամյան պող. 20-ից)', '+374 10 700 800', 'info@efes.am'],
                    ['3', '«ՆԱԻՐԻ ԻՆՇՈՒՐԱՆՍ» ապահովագրական ՍՊԸ', 'ք. Երևան, Ավետ Ավետիսյան փող. 116/1, թիվ 116/5', '+374 10 539457\n+374 10 539468', 'nairi@nairi-insurance.am'],
                    ['4', '«ԼԻԳԱ ԻՆՇՈՒՐԱՆՍ» ապահովագրական ՓԲԸ', 'ք. Երևան, Հյուսիսային պողոտա 1', '+374 10 591010', 'info@liga.am'],
                    ['5', '«ՍԻԼ ԻՆՇՈՒՐԱՆՍ» ԱՓԲԸ', 'ք. Երևան, Արամի փող. թիվ 3 եւ 5', '+374 60 580000', 'info@silinsurance.am'],
                    ['6', '«ԱՐՄԵՆԻԱ ԻՆՇՈՒՐԱՆՍ» ապահովագրական ՍՊԸ', 'ք. Երևան, Վարդանանց փող., 16 շենք', '+374 11 560404', 'info@armeniainsurance.am'],
                    ['7', 'ՌԵԳՈ ԻՆՇՈՒՐԱՆՍ ԱՓԲԸ', 'ք. Երևան, Կոմիտասի պող., 62 շենք, №93-93/1', '+374 60 505757', 'info@regoinsurance.am'],
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-500">{row[0]}</td>
                      <td className="py-3 px-4 font-medium text-[#6c2db5]">{row[1]}</td>
                      <td className="py-3 px-4">{row[2]}</td>
                      <td className="py-3 px-4 whitespace-pre-line">{row[3]}</td>
                      <td className="py-3 px-4 text-blue-600 hover:underline"><a href={`mailto:${row[4]}`}>{row[4]}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ԱՂՅՈՒՍԱԿ 3: ԳՆԱՀԱՏՈՂ ԿԱԶՄԱԿԵՐՊՈՒԹՅՈՒՆՆԵՐ */}
          <section className="mt-10">
            <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-6">Բանկի հետ համագործակցող գնահատող կազմակերպությունների ցանկ</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 font-bold border-b">Հ/Հ</th>
                    <th className="py-3 px-4 font-bold border-b">Անվանում</th>
                    <th className="py-3 px-4 font-bold border-b">Գտնվելու վայր</th>
                    <th className="py-3 px-4 font-bold border-b">Հեռախոսահամարներ</th>
                    <th className="py-3 px-4 font-bold border-b">Էլ. փոստի հասցե</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['1', '«ԱՐ ՎԻ ԷՄ ՔՈՆՍԱԼՏ» ՍՊԸ', 'ք.Երևան, Տպագրիչների փող., 9/114 շենք', '+374 10 546490\n+374 98 944449', 'info@rvmconsult.am'],
                    ['2', '«ԲԻԼԴ ԱՓ» ՍՊԸ', 'ք. Երևան, Զաքյան 5-1', '+374 10 547160\n+374 91 177300', 'buildup@rambler.ru'],
                    ['3', '«ԿՈՍՏ ԿՈՆՍԱԼՏ» ՍՊԸ', 'ք. Երևան, Հանրապետության փողոց, 67 շենք, 2-րդ հարկ', '+374 10 544882\n+374 91 471925', 'costconsult@mail.ru'],
                    ['4', '«ՎԻ ԷՄ-ԱՐ ՓԻ » ՍՊԸ', 'ք. Երևան, Վարդանանց 8, թիվ 3', '+374 99 588797\n+374 43 588797\n+374 10 588797', 'vm-rp@mail.ru'],
                    ['5', '«ՖԻՆԼՈՈՒ» ՍՊԸ', 'ք. Երևան, Նալբանդյան 50-3', '+374 10 506000\n+374 91 911155\n+374 77 780510', 'finlaw@inbox.ru'],
                    ['6', '«ՕԼԻՎԵՐ ԳՐՈՒՊ» ՍՊԸ', 'ք. Երևան, Թումանյան փող., 8 շենք', '+374 10 542750\n+374 10 542760', 'info@olivergroup.am'],
                    ['7', '«ԻՆԷՔՍ» ՍՊԸ', 'ք. Վանաձոր, Թամանցիների 14\n(Իրավ.՝ ք. Երևան, Նար-Դոս 28)', '+374 41 042287\n+374 96 042287\n+374 94 042287', 'apresyan.expert@mail.ru'],
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-500">{row[0]}</td>
                      <td className="py-3 px-4 font-medium text-[#6c2db5]">{row[1]}</td>
                      <td className="py-3 px-4 whitespace-pre-line">{row[2]}</td>
                      <td className="py-3 px-4 whitespace-pre-line">{row[3]}</td>
                      <td className="py-3 px-4 text-blue-600 hover:underline"><a href={`mailto:${row[4]}`}>{row[4]}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ԲԱՆԿԻ ՀԵՏ ԿԱՊԻ FOOTER */}
          <div className="mt-16 bg-[#6c2db5] text-white p-8 md:p-12 rounded-[2rem] text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-[24px] font-bold mb-4">Հարգելի Հաճախորդ`</h3>
              <p className="text-[16px] leading-[1.8] opacity-90 max-w-3xl mx-auto">
                Հայտնում ենք Ձեզ, որ նախքան վարկային հայտ ներկայացնելը և վարկային պայմանագիր կնքելը, 
                Դուք կարող եք Բանկի <a href="tel:+37410605555" className="font-bold underline text-[#d1b3ff] hover:text-white transition-colors">+374 10 605555</a> հեռախոսահամարին զանգահարելով 
                կամ Բանկի գործունեության վայր այցելելով ստանալ բանավոր տեղեկություններ Ձեզ հետաքրքրող վարկային պրոդուկտի վերաբերյալ:
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nyut;