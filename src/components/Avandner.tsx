import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

interface DepositItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amount: string;
  duration: string;
  rate: string;
  topUp?: string;
  detailedInfo?: string;
}

const Avandner: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [selectedDeposit, setSelectedDeposit] = useState<DepositItem | null>(null);

  const subMenuItems = [
    { name: 'Ավանդներ', path: '' },
    { name: 'Կարևոր տեղեկատվություն', path: '/karevor' },
  ];

  // Բոլոր 3 ավանդների տվյալների բազան
  const depositsData: DepositItem[] = [
    {
      id: 'dasakan',
      title: 'Դասական ավանդ',
      description: 'Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:',
      imageUrl: 'https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg',
      amount: '100,000 ֏',
      duration: '31-1,825 օր',
      rate: '10.5%',
      topUp: '100,000 ֏',
      detailedInfo: 'Դասական ավանդի դեպքում տոկոսագումարները կարող են վճարվել ամսական կտրվածքով կամ ժամկետի վերջում: Ավանդի գործողության ընթացքում գումարի նվազեցում կամ հավելում չի նախատեսվում (բացառությամբ հատուկ պայմանների): Սա լավագույն ընտրությունն է երկարաժամկետ կայուն եկամուտ ապահովելու համար:'
    },
    {
      id: 'mankakan',
      title: 'Մանկական ավանդ',
      description: 'Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ՝ մինչև երեխայի 18 տարին լրանալը:',
      imageUrl: 'https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg',
      amount: '100,000 ֏',
      duration: 'մինչև 18 լրանալը',
      rate: '9.5%',
      topUp: '40,000 ֏',
      detailedInfo: 'Մանկական ավանդը հիանալի միջոց է երեխայի ապագա կրթության կամ այլ նպատակների համար խնայողություններ ձևավորելու համար: Ավանդը կարող է համալրվել պարբերաբար, իսկ կուտակված տոկոսները կապիտալացվում են՝ ավելացնելով ընդհանուր եկամտաբերությունը:'
    },
    {
      id: 'online',
      title: 'Ավանդ Evoca Online',
      description: 'Ձևակերպե՛ք EvocaONLINE ավանդ՝ առանց բանկ այցելելու՝ Ձեր հեռախոսից կամ համակարգչից:',
      imageUrl: 'https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg',
      amount: '100,000 ֏',
      duration: '31-1,825 օր',
      rate: '10.75%',
      detailedInfo: 'Evoca Online ավանդատեսակը նախատեսված է նրանց համար, ովքեր գնահատում են իրենց ժամանակը: Բացի հարմարավետությունից, այս տարբերակն առաջարկում է ավելի բարձր տոկոսադրույք՝ սովորական եղանակով ձևակերպվող ավանդների համեմատությամբ:'
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      <Menu />
      
     
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex items-center h-[55px] md:h-[60px] px-4 md:px-6 min-w-max">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-2 text-gray-400 text-[12px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600" onClick={() => setSelectedDeposit(null)}>Ավանդներ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium cursor-pointer" onClick={() => setSelectedDeposit(null)}>Ավանդներ</span>
        {selectedDeposit && (
          <>
            <span>›</span>
            <span className="text-[#6c2db5] font-semibold">{selectedDeposit.title}</span>
          </>
        )}
      </div>

    
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 pb-16">
        
        {selectedDeposit ? (
         
          <div className="mt-4 animate-fadeIn">
            <button 
              onClick={() => setSelectedDeposit(null)}
              className="text-sm font-bold text-gray-500 hover:text-[#6c2db5] transition-colors mb-6 md:mb-8 inline-flex items-center gap-1"
            >
              ← Վերադառնալ ավանդների ցանկին
            </button>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 max-w-[550px] rounded-2xl overflow-hidden shadow-md">
                <img src={selectedDeposit.imageUrl} alt={selectedDeposit.title} className="w-full h-auto object-cover" />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950">{selectedDeposit.title}</h1>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{selectedDeposit.description}</p>
                
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-y py-6 border-gray-100">
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase font-medium">Գումար</span>
                    <span className="text-lg md:text-2xl font-bold text-[#6c2db5]">{selectedDeposit.amount}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase font-medium">Ժամկետ</span>
                    <span className="text-lg md:text-2xl font-bold text-[#6c2db5]">{selectedDeposit.duration}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block uppercase font-medium">Տոկոսադրույք</span>
                    <span className="text-lg md:text-2xl font-bold text-[#6c2db5]">{selectedDeposit.rate}</span>
                  </div>
                  {selectedDeposit.topUp && (
                    <div>
                      <span className="text-[11px] text-gray-400 block uppercase font-medium">Համալրում</span>
                      <span className="text-lg md:text-2xl font-bold text-[#6c2db5]">{selectedDeposit.topUp}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed pt-2">{selectedDeposit.detailedInfo}</p>
                
                <div className="pt-4">
                  <button className="w-full sm:w-auto bg-[#6c2db5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#530498] transition-colors shadow-sm text-sm">
                    Ներդնել ավանդ
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          
          <>
            <div className="mb-6 md:mb-10">
              <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Ավանդներ</h1>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              {depositsData.map((deposit) => (
                <div key={deposit.id} className="flex flex-col md:flex-row bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-4 md:p-6 gap-6 lg:gap-8 hover:shadow-md transition-all duration-300">
                
                  <div className="w-full md:w-[320px] lg:w-[415px] h-[180px] sm:h-[220px] md:h-[261px] shrink-0">
                    <img 
                      src={deposit.imageUrl} 
                      alt={deposit.title} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                 
                  <div className="flex flex-col justify-between flex-grow py-1">
                    <div>
                      <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#1a1a1a] mb-2 md:mb-3">{deposit.title}</h2>
                      <p className="text-gray-600 text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-[800px] mb-4 md:mb-6">
                        {deposit.description}
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">Սկսած</span>
                          <span className="text-[#6c2db5] text-[15px] md:text-[19px] lg:text-[22px] font-bold whitespace-nowrap">{deposit.amount}</span>
                          <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Գումար</span>
                        </div>
                        <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-6"> 
                          <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">Տևողություն</span>
                          <span className="text-[#6c2db5] text-[15px] md:text-[19px] lg:text-[22px] font-bold whitespace-nowrap">{deposit.duration}</span>
                          <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Ժամկետ</span>
                        </div>
                        <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-6">
                          <span className="text-gray-400 text-[10px] md:text-[11px] mb-1">մինչև</span>
                          <span className="text-[#6c2db5] text-[15px] md:text-[19px] lg:text-[22px] font-bold">{deposit.rate}</span>
                          <span className="text-gray-400 text-[10px] md:text-[11px] mt-1">Տոկոսադրույք</span>
                        </div>
                        {deposit.topUp && (
                          <div className="flex flex-col border-l border-gray-100 pl-4 md:pl-6">
                            <span className="text-gray-400 text-[10px] md:text-[11px] mb-1 italic">սկսած</span>
                            <span className="text-[#6c2db5] text-[15px] md:text-[19px] lg:text-[22px] font-bold whitespace-nowrap">{deposit.topUp}</span>
                            <span className="text-gray-400 text-[10px] md:text-[11px] mt-1 italic">Համալրում</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    
                    <button 
                      onClick={() => setSelectedDeposit(deposit)}
                      className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-2.5 md:py-3 rounded-full w-full md:w-fit justify-center font-bold hover:bg-[#e8dff5] transition-colors mt-6 md:mt-8 text-[13px] md:text-[14px]"
                    >
                      Մանրամասն <span className="text-[16px] md:text-[18px]">›</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Avandner;