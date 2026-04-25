import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

const Nyut: React.FC = () => {
  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/sqor' },
    { name: 'Կարևոր տեղեկատվություն', path: '/nyut' }
  ];

  return (
    <div className="w-full bg-white font-sans relative overflow-x-hidden">
      
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

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Կարևոր տեղեկատվություն</span>
      </div>

      {/* ----------------- ԱՅՍՏԵՂԻՑ ՍԿՍՎՈՒՄ Է ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆԸ ----------------- */}
      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4 md:ml-16">
        <h1 className="text-[36px] md:text-[46px] font-bold text-[#1a1a1a] mb-12">
          Կարևոր տեղեկատվություն
        </h1>

        <div className="max-w-[950px] text-[#444] text-[16px] leading-[1.8] space-y-10">
          
          <p>
            Վարկ ստանալու համար դիմելիս վարկատուն Ձեզ, երաշխավորին (առկայության դեպքում) կտրամադրի սպառողական վարկի էական պայմանների անհատական թերթիկ, որում կներկայացվեն Ձեզ տրամադրվելիք վարկի անհատական պայմանները:
          </p>

          {/* Fininfo Banner */}
          <div className="bg-[#f9f6ff] border-l-[4px] border-[#6c2db5] p-8 md:p-10 rounded-r-2xl">
            <p className="text-[#6c2db5] font-bold text-[12px] uppercase tracking-[0.15em] mb-4">Ուշադրություն</p>
            <p className="italic text-[#1a1a1a] text-[18px] leading-[1.7] mb-6">
              «Ձեր ֆինանսական տեղեկատուն» ֆիզիկական անձանց առաջարկվող ծառայությունների որոնման, համեմատման և Ձեզ համար ամենաարդյունավետ տարբերակի ընտրությունը հեշտացնող էլեկտրոնային համակարգ է:
            </p>
            <a href="https://www.fininfo.am" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#6c2db5] font-bold hover:underline">
              www.fininfo.am <FiExternalLink size={16} />
            </a>
          </div>

          {/* Section 1 */}
          <div>
            <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-5">Ինչ է անհատական թերթիկը</h2>
            <p className="mb-4">
              Անհատական թերթիկը սահմանում է տվյալ վարկի գծով Բանկի կողմից առաջարկվող վարկի էական պայմանները, սակագները, վարկառուի իրավունքներն ու պարտականությունները և պարտավորությունները ժամանակին չկատարելու դեպքում բացասական հետևանքները:
            </p>
            <p>
              Անհատական թերթիկը վավեր է 10 աշխատանքային օր: Անհատական թերթիկում ներկայացված պայմանները, որոնցով Բանկը պատրաստ է տրամադրել վարկը, անփոփոխ են այդ ժամկետի ընթացքում: Եթե Դուք ցանկանում եք դիմել վարկ ստանալու համար 10-օրյա ժամկետի ընթացքում, ապա Բանկը պարտավոր է տրամադրել վարկն այն պայմաններով, որոնք նշված են Անհատական թերթիկում:
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-5">Ինչ պետք է իմանալ երաշխավորության վերաբերյալ</h2>
            <p className="font-bold text-[#1a1a1a] mb-4">
              Երաշխավորը վարկառուի հետ համապարտ պատասխանատվություն է կրում վարկի մարման համար:
            </p>
            <p className="mb-8">
              Սա նշանակում է, որ եթե վարկառուն չկատարի իր պարտավորությունները, ապա Բանկը իրավունք ունի պահանջը ներկայացնել երաշխավորին և բռնագանձում տարածել վերջինիս գույքի կամ դրամական միջոցների վրա:
            </p>
            
            {/* Ռիսկերի բլոկ */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h4 className="font-bold text-[#1a1a1a] mb-4">Երաշխավորն իրավունք ունի՝</h4>
              <ul className="list-disc pl-6 space-y-2 text-[15px] mb-6">
                <li>Ցանկացած ժամանակ Բանկից պահանջել տեղեկատվություն վարկի մնացորդի չափի վերաբերյալ:</li>
                <li>Վարկառուի փոխարեն վարկը մարելու դեպքում վարկառուից պահանջել հատուցում:</li>
              </ul>
              <h4 className="font-bold text-red-600 mb-4">Հնարավոր ռիսկերը՝</h4>
              <ul className="list-disc pl-6 space-y-2 text-[15px]">
                <li>Վարկառուի կողմից վարկը չմարելու դեպքում Դուք եք վճարելու նրա փոխարեն, վատանալու է Ձեր վարկային պատմությունը:</li>
                <li>Հնարավոր է զրկվեք սեփական գույքից:</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Table */}
          <div className="pt-4">
            <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-6">Ձեր իրավունքները</h2>
            <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-[15px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-5 px-6 font-bold text-[#1a1a1a] w-[35%]">Իրավունքի տեսակ</th>
                    <th className="py-5 px-6 font-bold text-[#1a1a1a]">Նկարագրություն</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#6c2db5] align-top">Մտածելու ժամանակ <br/>(Hand-back)</td>
                    <td className="py-5 px-6 align-top">Սպառողն իրավունք ունի առանց որևէ պատճառաբանության միակողմանիորեն լուծելու կրեդիտավորման պայմանագիրը դրա կնքմանը հաջորդող 7 աշխատանքային օրվա ընթացքում:</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#6c2db5] align-top">Վաղաժամկետ մարում</td>
                    <td className="py-5 px-6 align-top">Դուք իրավունք ունեք ցանկացած ժամանակ մարել վարկը վաղաժամկետ: Տույժեր չեն կիրառվում, և տոկոսները հաշվարկվում են փաստացի օրերի համար:</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#1a1a1a] align-top">Հաղորդակցում</td>
                    <td className="py-5 px-6 align-top">Դուք իրավունք ունեք հաղորդակցվել Ձեր նախընտրած եղանակով (փոստ, էլ. փոստ):</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
            <div>
              <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-4">Տոկոսադրույքների հաշվարկ</h3>
              <p className="text-[15px]">Վարկի տոկոսագումարները հաշվարկվում են անվանական տոկոսադրույքի հիման վրա: Տարեկան փաստացի տոկոսադրույքը ցույց է տալիս, թե որքան կնստի վարկը Ձեզ վրա բոլոր ծախսերը ներառյալ:</p>
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-4">Բողոքների ներկայացում</h3>
              <p className="text-[15px]">Բանկի ծառայություններից դժգոհություն ունենալու դեպքում կարող եք ներկայացնել գրավոր բողոք: Բանկը պարտավոր է 10 աշխատանքային օրվա ընթացքում տալ վերջնական պատասխան:</p>
            </div>
          </div>

          {/* Big Purple Banner */}
          <div className="bg-[#6c2db5] text-white p-10 md:p-14 rounded-[2.5rem] text-center my-14 shadow-lg">
            <h3 className="text-[22px] md:text-[28px] font-bold mb-5 uppercase leading-snug tracking-wide">
              ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ:
            </h3>
            <p className="text-[#d1b3ff] text-[16px] italic">
              Բանկը ծառայություններ մատուցելիս առաջնորդվում է «Սպառողական կրեդիտավորման մասին» ՀՀ օրենքով:
            </p>
          </div>

          {/* Two Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.evoca.am/hy/loan-assistant/" target="_blank" rel="noreferrer" 
               className="flex items-center justify-between p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-[#6c2db5] hover:shadow-xl transition-all group">
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Գործիք</p>
                <span className="font-bold text-[20px] text-[#1a1a1a] group-hover:text-[#6c2db5] transition-colors">Ֆինանսական օգնական</span>
              </div>
              <div className="w-12 h-12 rounded-[1rem] bg-gray-50 flex items-center justify-center group-hover:bg-[#6c2db5] transition-colors">
                <FiExternalLink className="text-gray-400 group-hover:text-white" size={22} />
              </div>
            </a>
            
            <a href="https://www.evoca.am/hy/loan-calculator/" target="_blank" rel="noreferrer"
               className="flex items-center justify-between p-8 bg-white border border-gray-200 rounded-[2rem] hover:border-[#6c2db5] hover:shadow-xl transition-all group">
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">Գործիք</p>
                <span className="font-bold text-[20px] text-[#1a1a1a] group-hover:text-[#6c2db5] transition-colors">Վարկային հաշվիչ</span>
              </div>
              <div className="w-12 h-12 rounded-[1rem] bg-gray-50 flex items-center justify-center group-hover:bg-[#6c2db5] transition-colors">
                <FiExternalLink className="text-gray-400 group-hover:text-white" size={22} />
              </div>
            </a>
          </div>

          {/* Documents PDF List */}
          <div className="pt-10">
            <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-8">Փաստաթղթեր</h2>
            <div className="space-y-4">
              {[
                "«Ինչ պետք է իմանալ երաշխավորության վերաբերյալ» տեղեկատվական թերթիկ",
                "«Ինչ պետք է անել, եթե վարկի գծով ունեք պարտավորություններ» տեղեկատվական թերթիկ",
                "Սպառողական վարկի էական պայմանների անհատական թերթիկի օրինակելի ձև",
                "Ընդհանուր պայմաններ և սակագներ ֆիզիկական անձանց համար"
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-[#f9f6ff] rounded-[1.5rem] hover:bg-[#6c2db5] group cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#6c2db5] font-bold text-[13px] group-hover:bg-[#5a2599] group-hover:text-white transition-colors shadow-sm">
                      PDF
                    </div>
                    <span className="font-bold text-[17px] text-[#1a1a1a] group-hover:text-white transition-colors">{doc}</span>
                  </div>
                  <FiDownload className="text-[#6c2db5] group-hover:text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity pr-2" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nyut;