import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sqor: React.FC = () => {
  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];

  return (
    <div className="w-full bg-white font-sans relative">
      
     
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-6">
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">f</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">t</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold font-serif italic">in</Link>
          <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">p</Link>
        </div>
      </div>

     
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

    
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Վարկային պատմություն և սքոր</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        <div className="max-w-[1000px] ml-0 md:ml-12 lg:ml-20">
          
          <h1 className="text-[40px] md:text-[48px] font-bold text-[#1a1a1a] mb-10">
            Վարկային պատմություն և սքոր
          </h1>

          <div className="space-y-16">
            
            
            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-6">
                Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
              </h2>
              <p className="text-[16px] text-gray-700 mb-10 leading-relaxed">
                Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր 
                <span className="font-bold"> ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ </span> վրա:
              </p>

              <div className="space-y-10">
                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Ինչ է վարկային պատմությունը</h3>
                  </div>
                  <div className="text-[15.5px] text-gray-600 leading-[1.8] space-y-4">
                    <p>
                      «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
                    </p>
                    <p>
                      Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
                    </p>
                  </div>
                </div>

               
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Որոնք են վարկային պատմության ձևավորման աղբյուրները</h3>
                  </div>
                  <p className="text-[15.5px] text-gray-600 leading-[1.8]">
                    Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ(տվյալներ)։
                  </p>
                </div>

                
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Ինչ է վարկային բյուրոն</h3>
                  </div>
                  <div className="text-[15.5px] text-gray-600 leading-[1.8] space-y-4">
                    <p>
                      Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:
                    </p>
                    <p>
                      Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար, ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին:
                    </p>
                  </div>
                </div>

               
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Ինչ է վարկային զեկույցը</h3>
                  </div>
                  <div className="text-[15.5px] text-gray-600 leading-[1.8] space-y-4">
                    <p>
                      Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն: Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
                    </p>
                    <div className="flex items-center gap-3 mb-4 mt-6">
                      <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                      <h3 className="text-[18px] font-bold text-[#1a1a1a]">Որքան ժամանակ է պահպանվում վարկային պատմությունը</h3>
                    </div>
                    <p>
                      Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
                    </p>
                  </div>
                </div>

               
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Ինչպես բարելավել վարկային պատմությունը</h3>
                  </div>
                  <p className="text-[15.5px] text-gray-600 leading-[1.8] mb-6">
                    Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#6c2db5] rounded-full"></span>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">Ուր դիմել եթե վարկային պատմությունը սխալ է</h3>
                  </div>
                  <p className="text-[15.5px] text-gray-600 leading-[1.8]">
                    Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առցանց ռեժիմում ԻՄ ԱՔՌԱ անձնական գրասենյակից:
                  </p>
                </div>
              </div>
            </section>

            
            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-6">
                Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#1a1a1a] mb-4">Դրական որոշման կայացման չափանիշները`</h4>
                  <ul className="space-y-3">
                    {['Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,', 'Մշտական բնակության վայրը,', 'Կայուն եկամտի աղբյուրը,', 'Դրական կամ չեզոք վարկային պատմությունը,', 'Արժանահավատ և լիարժեք փաստաթղթերը:'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15.5px] text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full"></span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] mb-4">Բացասական որոշման կայացման չափանիշները`</h4>
                  <ul className="space-y-3">
                    {['Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,', 'Բացասական վարկային պատմությունը,', 'Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),', 'Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15.5px] text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#6c2db5] rounded-full"></span> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            
            <section>
              <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-6">Վարկային սքոր</h2>
              <div className="text-[16px] text-gray-700 leading-[1.8] space-y-6 text-justify">
                <p>
                  Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ: Վարկային սքորը հաճախորդի վարկային պատմության և որակական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով: Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ:
                </p>
                <p>
                  Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր - դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում - բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ - բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն - բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում - բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն - բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն - դրական ազդեցություն):
                </p>
                <p>
                  Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում: Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվստահելի անձանց համար:
                </p>
              </div>
              
              <div className="mt-8 text-[15px] text-gray-600">
                Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով <a href="https://www.abcfinance.am" className="text-[#6c2db5] underline">https://www.abcfinance.am</a>, <a href="https://acra.am" className="text-[#6c2db5] underline">Հաճախ տրվող հարցեր - ԱՔՌԱ (acra.am)</a> և <a href="https://www.acra.am" className="text-[#6c2db5] underline">www.acra.am</a> կայքեր:
              </div>

              <div className="mt-16">
                <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-8">Փաստաթղթեր</h2>
                <div className="w-full bg-[#f8f5fd] rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#f1ebfa] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c2db5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><polyline points="9 15 12 18 15 15"></polyline></svg>
                    </div>
                    <span className="text-[15px] font-semibold text-gray-800">
                      Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 07.04.2026
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sqor;