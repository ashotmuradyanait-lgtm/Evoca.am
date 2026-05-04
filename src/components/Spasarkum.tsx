import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Spasarkum: React.FC = () => {
  const subMenuItems = [
    { name: 'Քարտեր', path: '/qarter' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '' },
    { name: 'Evoca Benefits', path: '' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="w-full bg-white">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
                 <div className="flex flex-col gap-1">
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/fb-icon.png" alt="Facebook" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/twitter-icon.png" alt="Twitter" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold font-serif italic">
                    <img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" alt="LinkedIn" />
                  </Link>
                  <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                    <img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" alt="Pinterest" />
                  </Link>
                </div>
              </div>
        <div className="w-full bg-[#6c2db5] text-white ">
          <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
            {subMenuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#6c2db5]' : 'hover:bg-[#530498]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
          <span>›</span>
          <span className="text-gray-800">Քարտերի տրամադրում և սպասարկում</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Քարտերի տրամադրում և սպասարկում</h1>



       <div className="max-w-[1400px] mx-auto px-6 mt-12 flex flex-col gap-3">
  <h2 className="text-[28px] font-extrabold text-[#222] mb-3">Փաստաթղթեր</h2>

  
  <a 
    href="https://www.evoca.am/files/global_files/1/pention-cards.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Կենսաթոշակային քարտեր</span>
  </a>

  
  <a 
    href="https://www.evoca.am/files/global_files/1/evoca-gift-tariffs.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Evoca Gift քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

 
  <a 
    href="https://www.evoca.am/files/global_files/1/bank-account-19-02-26.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 19.02.26</span>
  </a>

  
  <a 
    href="https://www.evoca.am/files/global_files/1/visa-digital-03-25.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  
  <a 
    href="https://www.evoca.am/files/global_files/1/digital-cards-terms-and-conditions.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ վճարային քարտերի կիրառմամբ EvocaTouch բջջային հավելվածով թվայնաց...</span>
  </a>

  
  <a 
    href="https://www.evoca.am/files/global_files/1/visa-infinite2024.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Visa Infinite քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/union-pay-17-03-26.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">UnionPay Business Platinum քարտեր (Տեղեկատվական ամփոփոգիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/union-pay-gold-17-03-26.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">UnionPay UPI Gold քարտեր (Տեղեկատվական ամփոփոգիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/vision-03-2026.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Visa Vision քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/mastercard-world.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Mastercard World Digital (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/dalma-gift-cards.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Dalma Gift քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

   <a 
    href="https://www.evoca.am/files/global_files/1/garage-master-mall-gifts.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Garage Masters' Mall Gift քարտեր</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/digital-gift-cards.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Digital Gift քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/rio-gift-cards.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Rio Gift քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/mbg-gift-cards.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">MBG Gift քարտեր (Տեղեկատվական ամփոփագիր)</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/card-operation-procedure-2026.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Վճարային քարտերի տրամադրման և սպասարկման պայմաններ 01.02.2026թ</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/credit-and-debit-cards-17-03-26.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Դեբետային և վարկային քարտեր (Տեղեկատվական ամփոփագիր) 17.03.2026</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/evoca-travel-17-03-26.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">Evoca Travel (Տեղեկատվական ամփոփագիր) 17.03.2026</span>
  </a>

  <a 
    href="https://www.evoca.am/files/global_files/1/16169977265869.pdf" 
    className="flex items-center w-full bg-[#f8f5fd] hover:bg-[#f2ecf9] transition-colors rounded-[12px] p-5 group cursor-pointer"
  >
    <div className="mr-4 text-[#6c2db5]">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="16" cy="18" r="3" />
        <path d="m14 17 2 2 2-2" />
      </svg>
    </div>
    <span className="text-[16px] font-bold text-[#222] tracking-tight">USSD և 3D Secure ծառայություն</span>
  </a>
</div>
</div>
    </div>
  )
}
export default Spasarkum