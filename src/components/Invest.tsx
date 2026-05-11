import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Invest: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const subMenuItems = [
    { name: 'Ներդրումային ծառայություններ', path: '/arzetxter' },
    { name: 'Պարտատոմսեր', path: '/partatoms' },
    { name: 'ՀԿԴ ծառայություններ', path: '/hkd' },
    { name: 'Ռեպո/Հակադարձ Ռեպո գործարքներ', path: '/repo' },
    { name: 'EvocaINVEST', path: '/invest' },
  ];

  return (
    <div className="w-full bg-white font-sans min-h-screen relative">
      <Menu />
      
      {/* Sub-Navigation Bar */}
      <div className="w-full bg-[#6c2db5] text-white sticky top-0 z-40 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] md:h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium flex-shrink-0
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Social Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px] overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Արժեթղթեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">EvocaINVEST</span>
      </div>

      {/* Hero Banner Section */}
      <section className="w-full bg-[#f6f2ff] overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
          {/* Left Content Area (White background style) */}
          <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-20 z-10 bg-white md:bg-transparent">
            <h1 className="text-[#333] text-2xl md:text-4xl font-bold leading-tight mb-8">
              Կատարիր ներդրումներ և <br className="hidden md:block"/> ստացիր եկամուտ <br className="hidden md:block"/> EvocaINVEST հավելվածով
            </h1>
            <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed max-w-[500px]">
              EvocaINVEST հավելվածի միջոցով կարող ես կատարել գործարքներ միջազգային ֆինանսական շուկաներում (ԱՄՆ, Եվրոպա, Ասիա)։
            </p>
          </div>
          
          {/* Right Image Area (Light Purple background style) */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[450px] relative flex items-center justify-center">
             <img 
               src="https://www.evoca.am/images-cache/menu/1/16783549134256/780x585.jpg" 
               alt="EvocaINVEST money tree growth" 
               className="h-[90%] w-auto object-contain z-10"
             />
             {/* Gradient/Pattern overlay from original design */}
             <div className="absolute inset-0 bg-[#f6f2ff] md:bg-transparent -z-10"></div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-[900px] space-y-6 text-[#4a4a4a] text-[16px] md:text-[17px] leading-relaxed">
          
          <p>
            Evocabank-ն առաջարկում է բոլորովին նոր թվային պրոդուկտ՝ <strong className="text-gray-900 font-semibold">EvocaINVEST</strong> ներդրումային հավելվածը, որի միջոցով Բանկի հաճախորդները հնարավորություն ունեն գնել և վաճառել արժեթղթեր, բաժնետոմսեր, ֆոնդերի փայեր (ETFs), պարտատոմսեր ավելի քան 20 երկրների ֆինանսական շուկաներում (ԱՄՆ, Եվրոպա, Ասիա)՝ առանց բանկ այցելելու։ Հասանելի ֆինանսական շուկաներին կարող եք ծանոթանալ՝ անցնելով հետևյալ <a href="https://www.evoca.am/file_manager/PDF-FILES/stock-list.pdf" className="text-purple-600 hover:underline font-semibold">հղումով</a>։
          </p>

          <p>
            <strong className="text-gray-900 font-semibold">EvocaINVEST</strong>-ը հասանելի է <a href="https://invest.evoca.am/trade/auth/#/auth" className="text-purple-600 hover:underline font-semibold">Վեբ</a> և <strong className="text-gray-900 font-semibold">Մոբայլ հավելվածի</strong> (<a href="https://apps.apple.com/us/app/evocainvest/id1663752575" className="text-purple-600 hover:underline font-semibold">App Store</a> և <a href="https://play.google.com/store/apps/details?id=com.evoca.client&pli=1" className="text-purple-600 hover:underline font-semibold">Google Play</a>) տարբերակներով։
          </p>
          
          <p>
            Հավելվածի Վեբ տարբերակին կարող եք ծանոթանալ նաև <strong className="text-gray-900 font-semibold">Guest Mode</strong>-ի միջոցով՝ հետևյալ <a href="https://invest.evoca.am/trade/auth/#/auth" className="text-purple-600 hover:underline font-semibold">հղումով</a>։
          </p>

          <div className="pt-8 space-y-6">
            <h2 className="text-[#333] text-xl md:text-2xl font-bold">
              7 քայլերից դեպի մեծ եկամուտներ.
            </h2>
            <ol className="list-decimal list-inside space-y-3 pl-2 text-purple-700 font-medium">
              <li className="text-[#4a4a4a]"><span className="pl-2">Դարձիր Բանկի հաճախորդ</span></li>
              <li className="text-[#4a4a4a]"><span className="pl-2">Բացիր Բրոքերային հաշիվ</span></li>
              <li className="text-[#4a4a4a]"><span className="pl-2">Ներբեռնիր հավելվածը</span></li>
              <li className="text-[#4a4a4a]"><span className="pl-2">Համալրիր հաշիվդ</span></li>
              <li className="text-[#4a4a4a]"><span className="pl-2">Կատարիր ներդրումներ</span></li>
              <li className="text-[#4a4a4a]"><span className="pl-2">Ստացիր և վայելիր եկամուտներդ</span></li>
            </ol>
          </div>

          <div className="pt-10 border-t border-gray-100 mt-12">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong className="text-purple-700 font-bold">ՈՒՇԱԴՐՈՒԹՅՈՒՆ</strong>. Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված <strong className="text-purple-700 font-bold">ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ</strong>։ Բանկը <strong className="text-purple-700 font-bold">ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ</strong> հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default Invest;