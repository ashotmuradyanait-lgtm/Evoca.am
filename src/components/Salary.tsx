
import {Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Menu from '../pages/Menu';

const Salary: React.FC = () => { 
   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

   const newsItems = [
  {
    image: 'https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png',
    category: 'Կենսակերպ',
    categoryColor: '#BEE553', // Lime green
    title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
    date: '17.04.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png',
    category: 'Բանկային',
    categoryColor: '#784BDD', // Purple
    title: 'Կարեն Եղիազարյանը` IMF և WBG Spring Meetings 2026-ին',
    date: '13.04.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/17758068998241/439x320.png',
    category: 'Կենսակերպ',
    categoryColor: '#BEE553', 
    title: 'Evoca-ն մասնակցում է Leasing Expo 2026-ին',
    date: '09.04.2026',
  },
];

  const faqs = [
    { 
      q: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:", 
      a: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:" 
    },
    { 
      q: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:", 
      a: "Ո՛չ։ Բավական է ձեր գործատուին ներկայացնել Evoca քարտի տվյալները, և աշխատավարձը կփոխանցվի ձեր բանկային հաշվին:" 
    },
    { 
      q: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:", 
      a: "Իհարկե: Եթե դեռ Evoca-ի հաճախորդ չեք, դուք նույնպես կարող եք միանալ Evoca աշխատավարձային նախագծին:" 
    },
    { 
      q: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:", 
      a: "Արտոնություններից կարող եք օգտվել այն պահից, երբ առաջին աշխատավարձը փոխանցվի Evocabank-ի քարտին:" 
    },
    { 
      q: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:", 
      a: "Այո, կարող ես ունենալ Բանկի կողմից թողարկված մի քանի գործող քարտ, սակայն աշխատավարձային նախագծի շրջանակում կարող ես ընտրել նշված քարտերից մեկը, որի վրա էլ կստանաս աշխատավարձ, իսկ Evoca Travel Card-ը կարող ես ձեռք բերել 50% զեղչով:" 
    }
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
    </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">EvocaSALARY</span>
      </div>

      <div className="font-sans text-[#222] bg-white selection:bg-[#ffcd00]/30">
     
      <section className="flex flex-col lg:flex-row min-h-[450px]">
        <div className="flex-1 bg-[#f2f2f2] p-8 lg:p-24 flex flex-col justify-center">
          <span className="text-[15px] font-bold tracking-[0.2em] mb-4 text-[#333]">EVOCA</span>
          <h1 className="text-[40px] lg:text-[52px] font-black leading-[1.1] mb-8 uppercase italic">
            ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ<br/>ՆԱԽԱԳԻԾ
          </h1>
          <div className="space-y-1 text-[17px] font-medium text-[#444]">
            <p>Քո աշխատավարձը կարող է քեզ տալ շատ ավելին։</p>
            <p>Պարզապես պետք է ընտրել Evocabank-ը։</p>
          </div>
        </div>
        <div className="flex-1 bg-[#4b1088] flex items-center justify-center relative overflow-hidden p-10">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
            alt="Wallet" 
            className="w-full max-w-[500px] h-auto z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 py-16">
        <p className="text-[17px] leading-[1.6] mb-12">
          Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ <span className="text-[#561a8b] font-bold border-b-2 border-[#561a8b] pb-0.5 cursor-pointer hover:bg-[#561a8b] hover:text-white transition-all">նոր հնարավորություններ ու առավելություններ:</span>
        </p>

       
        <div className="mb-14">
          <h3 className="text-[#561a8b] font-bold text-[18px] mb-6">
              Բեր աշխատավարձդ Evoca, Տար անվճար <a href="https://www.evoca.am/hy/cards/master/master-gold-card" className="underline decoration-2 underline-offset-4 decoration-[#561a8b]">Mastercard Gold</a>
          </h3>
          <ul className="space-y-5">
            {["Պրեմիում դասի քարտ", "Հասանելի ամբողջ աշխարհում", "Գումարի անվտանգության բարձր մակարդակ"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-[16px]">
                <div className="w-2.5 h-2.5 bg-[#561a8b] rounded-full shrink-0"></div>
                {item}
              </li>
            ))}
            <li className="flex items-center gap-4 text-[16px]">
              <div className="w-2.5 h-2.5 bg-[#561a8b] rounded-full shrink-0"></div>
              <span>Դրական մնացորդի նկատմամբ <span className="font-bold border-b-4 border-[#ffcd00]">2% տարեկան տոկոսադրույք</span></span>
            </li>
          </ul>
        </div>

        

      
        <div className="mb-14">
          <h3 className="text-[#561a8b] font-bold text-[18px] mb-6">
            Բեր աշխատավարձդ Evoca, Տար 50% զեղչով <span className="underline decoration-2 underline-offset-4 decoration-[#561a8b]">Evoca Travel Card</span>
          </h3>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 text-[16px]">
              <div className="w-2.5 h-2.5 bg-[#561a8b] rounded-full shrink-0"></div>
              <span>Մինչև <span className="font-bold border-b-4 border-[#ffcd00]">1.5% cashback</span> արտասահմանում իրականացված վճարումների համար</span>
            </li>
            <li className="flex items-center gap-4 text-[16px]">
              <div className="w-2.5 h-2.5 bg-[#561a8b] rounded-full shrink-0"></div>
              <span>Անվճար <span className="font-bold border-b-4 border-[#ffcd00]">6 մուտք</span> Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
            </li>
            <li className="flex items-center gap-4 text-[16px]">
              <div className="w-2.5 h-2.5 bg-[#561a8b] rounded-full shrink-0"></div>
              <span>Անվճար <span className="font-bold border-b-4 border-[#ffcd00]">6 անգամ</span> Fast track-ից օգտվելու հնարավորություն</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="font-sans text-[#222] bg-white max-w-[1100px] mx-auto px-6 py-12">
      

      <section className="mb-16">
        <h2 className="text-[#561a8b] font-bold text-[22px] mb-4">
          Բեր աշխատավարձդ Evoca, Տար մի շարք <a href="https://www.evoca.am/hy/evoca_benefits" className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-purple-700">բենեֆիթներ</a>
        </h2>
        <p className="text-[16px] text-gray-700 mb-6 leading-[1.6]">
          Ստանալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <span className="text-[#561a8b] font-bold cursor-pointer">Evoca Benefits</span> նախագծից և մեր 100-ից ավելի գործընկերների մոտ կստանաս՝
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">25% զեղչ</span></span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">25% cashback</span></span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Նվեր քարտեր</span>
          </li>
        </ul>
      </section>

     
      <section className="mb-10">
        <h2 className="text-[#561a8b] font-bold text-[22px]">
          Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
        </h2>
      </section>

      
      <section className="mb-12">
        <div className="inline-block bg-[#f3e8ff] px-4 py-2 rounded-sm mb-6">
          <a href="https://www.evoca.am/hy/loans/unsecured-consumer-loans/salary-overdrafts" className="text-[#561a8b] font-bold text-[18px]">
            Oվերդրաֆտ կամ Մարման գրաֆիկով վարկ
          </a>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև աշխատավարձի <span className="text-[#561a8b] font-bold">15-ապատիկի չափով</span></span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">10 մլն դրամ</span> գումար</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">60 ամիս</span> մարման ժամկետ</span>
          </li>
        </ul>
      </section>

  
      <section className="mb-12">
        <div className="inline-block bg-[#f3e8ff] px-4 py-2 rounded-sm mb-6">
          <a href="https://www.evoca.am/hy/loans/car-loans/car-loans" className="text-[#561a8b] font-bold text-[18px]">
            Ավտովարկ
          </a>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]"><span className="text-[#561a8b] font-bold">0.5 - 0.7</span> տոկոսային կետով ավելի ցածր տոկոսադրույք</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">50 մլն դրամ</span> գումար</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">84 ամիս</span> մարման ժամկետ</span>
          </li>
          <li className="flex items-center gap-3 pl-5 italic text-gray-600">
             Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից
          </li>
        </ul>
      </section>

      
      <section className="mb-12">
        <div className="inline-block bg-[#f3e8ff] px-4 py-2 rounded-sm mb-6">
          <a href="https://www.evoca.am/hy/loans/consumer-loans/property-secured-personal-loans-based-on-client-creditworthiness" className="text-[#561a8b] font-bold text-[18px]">
            Անշարժ գույքի գրավով սպառողական վարկ
          </a>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]"><span className="text-[#561a8b] font-bold">0.5 - 0.7</span> տոկոսային կետով ավելի ցածր տոկոսադրույք</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">100 մլն դրամ</span> գումար</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[6px] h-[6px] bg-[#561a8b] rounded-full"></div>
            <span className="text-[16px]">Մինչև <span className="text-[#561a8b] font-bold">120 ամիս</span> մարման ժամկետ</span>
          </li>
        </ul>
      </section>
    </div>
    
     <section className="bg-[#F8F9FB] py-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-10">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black font-montserrat-arm text-[#1A1A1A] tracking-tight">
            Վերջին նորությունները
          </h2>
          <button className="flex items-center gap-2 bg-[#F3EEFF] text-[#6600CC] px-7 py-3 rounded-full hover:bg-[#6600CC] hover:text-white transition-all duration-300 font-bold shadow-sm">
            Բոլոր նորությունները
            <span className="text-xl font-bold">›</span>
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col group cursor-pointer border border-gray-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              
             
              <div className="relative aspect-[439/320] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

             
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div style={{ backgroundColor: item.categoryColor }} className="w-1.5 h-6 rounded-full" />
                    <span className="text-gray-500 text-[13px] font-semibold tracking-wide uppercase">
                      {item.category}
                    </span>
                  </div>

                 
                  <h3 className="text-[19px] font-bold text-[#1A1A1A] leading-tight mb-8 line-clamp-3 group-hover:text-[#6600CC] transition-colors">
                    {item.title}
                  </h3>
                </div>

             
                <div className="text-[#C2C2C2] text-sm font-medium">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     
      <section className="max-w-[900px] mx-auto px-6 pb-24">
        <h2 className="text-[32px] font-black mb-10">Հաճախ տրվող հարցեր</h2>
        <div className="border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-[17px] font-bold transition-colors ${openFAQ === i ? 'text-[#561a8b]' : 'text-[#333]'}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${openFAQ === i ? 'rotate-180 text-[#561a8b]' : 'text-gray-400'}`}>
                  {openFAQ === i ? '−' : '∨'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-[300px] pb-6' : 'max-h-0'}`}>
                <p className="text-[#666] text-[16px] leading-[1.6] pl-2 border-l-2 border-[#561a8b]/20">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    </div>
    </div>
  )
}

export default Salary