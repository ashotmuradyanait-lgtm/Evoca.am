import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface SubMenuItem {
  name: string;
  path: string;
}

const Corp: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  
  const subMenuItems: SubMenuItem[] = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '/karciq' },
    { name: 'CSR', path: '' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a] select-none">
      
    
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
          <Link to="/sakagin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
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
        <span className="text-gray-800">CSR</span>
      </div>

      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>
  
      
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch mb-20">
      
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-[32px] md:text-[44px] font-bold text-[#1a1a1a] mb-6 leading-tight">
              Կորպորատիվ սոցիալական<br className="hidden md:block"/> պատասխանատվություն
            </h1>
            
            <p className="text-[15px] md:text-[17px] text-[#333] leading-relaxed mb-4">
              <strong>Evocabank</strong>-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է մեր գրեթե բոլոր նախաձեռնություններում: Բանկը շարունակաբար աջակցություն է ցուցաբերում հասարակության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
            </p>
            
            <ul className="text-[15px] md:text-[17px] text-[#333] leading-relaxed mb-6 space-y-3 pl-4 md:pl-0">
              <li className="flex items-start gap-2">
                <span className="text-[#6c2db5] text-[20px] leading-none mt-1">•</span>
                նորագույն տեխնոլոգիաների զարգացում,
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c2db5] text-[20px] leading-none mt-1">•</span>
                երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c2db5] text-[20px] leading-none mt-1">•</span>
                հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c2db5] text-[20px] leading-none mt-1">•</span>
                հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:
              </li>
            </ul>

            <p className="text-[15px] md:text-[17px] text-[#333] leading-relaxed">
              Բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվությանն ուղղված յուրաքանչյուր փոքրիկ քայլ խոսում է աշխարհն ավելի լուսավոր ու գեղեցիկ դարձնելու կարևորության մասին:
            </p>
          </div>

        
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full min-h-[300px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png" 
                alt="CSR Main Graphic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a]">Նորություններ</h2>
          <Link to="/norutyun" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#f4effa] text-[#6c2db5] text-[15px] font-bold rounded-full hover:bg-[#e9dff3] transition-colors">
            Բոլոր նորությունները
          </Link>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
         
          <Link to="/csr" className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-full h-[240px] overflow-hidden">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17666423680322/439x320.png" 
                alt="News 1" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3.5 bg-[#97FF00] rounded-full"></div>
                <span className="text-[#333] text-[12px] font-bold tracking-wider uppercase">CSR</span>
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6 line-clamp-2 group-hover:text-[#6c2db5] transition-colors leading-snug">
                Evocabank-ը շախմատային մրցաշարի գլխավոր հովանավոր...
              </h3>
              <div className="mt-auto text-gray-400 text-[14px]">
                09.11.2025
              </div>
            </div>
          </Link>

        
          <Link to="/csr" className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-full h-[240px] overflow-hidden">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17690803274151/439x320.png" 
                alt="News 2" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3.5 bg-[#97FF00] rounded-full"></div>
                <span className="text-[#333] text-[12px] font-bold tracking-wider uppercase">CSR</span>
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6 line-clamp-2 group-hover:text-[#6c2db5] transition-colors leading-snug">
                50 մլն դրամ Ապարանյանի ջրանցքի վերակառուցման համար
              </h3>
              <div className="mt-auto text-gray-400 text-[14px]">
                24.12.2025
              </div>
            </div>
          </Link>

         
          <Link to="/csr" className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-full h-[240px] overflow-hidden">
              <img 
                src="https://www.evoca.am/images-cache/news/1/17340920050867/439x320.png" 
                alt="News 3" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-3.5 bg-[#97FF00] rounded-full"></div>
                <span className="text-[#333] text-[12px] font-bold tracking-wider uppercase">CSR</span>
              </div>
              <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-6 line-clamp-2 group-hover:text-[#6c2db5] transition-colors leading-snug">
                5 մլն դրամ «Երաժշտություն հանուն ապագայի» հիմնադրամին
              </h3>
              <div className="mt-auto text-gray-400 text-[14px]">
                13.12.2024
              </div>
            </div>
          </Link>

        </div>

        
        <div className="mt-8 text-center md:hidden">
          <Link to="#" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#f4effa] text-[#6c2db5] text-[15px] font-bold rounded-full hover:bg-[#e9dff3] transition-colors w-full">
            Բոլոր նորությունները
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Corp;