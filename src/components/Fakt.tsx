import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Fakt: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Երաշխիք', path: '/arevtur' },
    { name: 'Ֆակտորինգային ֆինանսավորում', path: '' },
    { name: 'Ակրեդիտիվ', path: '' },
    { name: 'Ինկասո', path: '' },
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-[#6c2db5] selection:text-white">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 md:pt-14 px-4 max-w-[1400px] mx-auto">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-3 md:gap-4 text-gray-800 font-medium text-[13px] md:text-[15px]">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        
        <Link to="/evocaonline" className="mt-4 md:mt-0 flex justify-center items-center">
          <span className="text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-medium transition-colors">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white mt-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center h-auto md:h-[60px] px-4 md:px-6 py-2 md:py-0">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 py-2 md:py-0 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 flex items-center gap-2 text-gray-400 text-[12px] md:text-[13px] overflow-x-auto whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Առևտրի ֆինանսավորում</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Ֆակտորինգային ֆինանսավորում</span>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      {/* NEW CONTENT FROM VIDEO */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 pb-20 text-[15px] leading-relaxed text-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6c2db5] mb-6">Ֆակտորինգային ֆինանսավորում</h1>
        
        <p className="mb-4">
          Ձգտելով Ձեր բիզնեսը դարձնել շուկայում ավելի մրցունակ, <strong className="text-[#6c2db5]">Evocabank</strong>-ը կօգնի Ձեզ՝ առաջարկելով ֆակտորինգային ֆինանսավորում:
        </p>
        <p className="mb-6">
          Բանկն իրականացնում է ֆակտորինգային ֆինանսավորում նաև «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում:
        </p>
        <p className="mb-8">
          Պայմանագրերը կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (բացառությամբ «Էրեբունի»-ի):
        </p>

        <h2 className="text-xl font-bold text-[#6c2db5] mb-4">Պայմաններ և սակագներ</h2>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-12">
          <table className="w-full text-left border-collapse text-[14px]">
            <tbody className="divide-y divide-gray-200">
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium w-[280px]">Ֆակտորինգի սահմանաչափ</td>
                <td className="p-4">
                  <ul className="list-disc pl-4 space-y-2">
                    <li>5,000,000 - 250,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ</li>
                    <li>«Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում՝ մինչև <span className="font-semibold text-[#6c2db5]">480,000,000 ՀՀ դրամ</span> կամ համարժեք արտարժույթ</li>
                  </ul>
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Սպառողները</td>
                <td className="p-4">
                  ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատերեր, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս:
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆակտորինգի սահմանաչափի գործողության ժամկետ</td>
                <td className="p-4">Մինչև 24 ամիս ժամկետով</td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆինանսավորման ժամկետ</td>
                <td className="p-4">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Մինչև 120 օր,</li>
                    <li>«Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում՝ մինչև 250 օր:</li>
                  </ul>
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆինանսավորման չափ</td>
                <td className="p-4">Ներկայացված հաշիվ ապրանքագրի մինչև 90%</td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆինանսավորման գումարի տարեկան տոկոսադրույք և արժույթ</td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div><span className="font-medium">ՀՀ դրամ՝</span> սկսած 12%-ից</div>
                    <div><span className="font-medium">ԱՄՆ դոլար՝</span> սկսած 8%-ից</div>
                    <div><span className="font-medium">Եվրո՝</span> սկսած 6%-ից</div>
                    <div><span className="font-medium">ՌԴ ռուբլի՝</span> սկսած 12%-ից</div>
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆինանսավորման գումարի և ապառքների մարման սահմանված ուշացման դեպքում կիրառվող տույժեր</td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div>Ժամկետանց գումարի համար՝ օրական <span className="font-semibold text-red-500">0.015%</span></div>
                    <div>Ժամկետանց տոկոսագումարի համար՝ օրական <span className="font-semibold text-red-500">0.1%</span></div>
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Վաղաժամկետ մարում</td>
                <td className="p-4">Վաղաժամկետ մարման տույժեր չեն կիրառվում</td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Հայտի ուսումնասիրման վճար</td>
                <td className="p-4">Սահմանաչափի 0.2% նվազագույնը 10,000 ՀՀ դրամ առավելագույնը 200,000 ՀՀ դրամ</td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ֆակտորինգային սպասարկման վճար</td>
                <td className="p-4">10,000 ՀՀ դրամ</td>
              </tr>
              <tr className="align-top">
                <td className="p-4 bg-gray-50 font-medium">Ապահովվածություն</td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div>Համաֆինանսավորող/պարտապանների անձնական երաշխավորություններ՝ ըստ պահանջի,</div>
                    <div>Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև լրացուցիչ գրավ:</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PROMO CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50 p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full uppercase">Glovo</span>
              <h4 className="font-bold mt-2 text-[16px]">Glovo-ն արդեն Evoca-ում</h4>
              <p className="text-xs text-gray-500 mt-1">Պատվիրեք ձեր նախընտրած բրենդներից հատուկ պայմաններով։</p>
            </div>
            <img src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-yellow-background_1150-34879.jpg" className="w-full h-32 object-cover rounded-xl mt-4" alt="Glovo Promo" />
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50 p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-white bg-[#6c2db5] px-2 py-1 rounded-full uppercase">Globbing</span>
              <h4 className="font-bold mt-2 text-[16px]">GLOBBING-ՈՒՄ ՎՃԱՐԻՐ</h4>
              <p className="text-xs text-gray-500 mt-1">Evoca Visa բիզնես քարտով և ստացիր քեշբեքներ կամ արտոնություններ։</p>
            </div>
            <div className="bg-[#f3f4f6] rounded-xl p-2 flex items-center justify-center mt-4 h-32">
              <span className="text-3xl">🦒</span>
              <span className="font-bold ml-2 text-purple-900">GLOBBING</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Fakt;