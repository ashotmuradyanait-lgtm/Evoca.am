import React, { useState } from 'react';

const Money: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Կանխիկ');
  const [showMore, setShowMore] = useState(false);
  const [haveCurrency, setHaveCurrency] = useState('AMD');
  const [getCurrency, setGetCurrency] = useState('USD');
  const [openHave, setOpenHave] = useState(false);
  const [openGet, setOpenGet] = useState(false);

  const baseRates = [
    { currency: 'USD', buy: '369', sell: '374', flag: 'https://cdn-icons-png.flaticon.com/128/197/197484.png' },
    { currency: 'EUR', buy: '428', sell: '439', flag: 'https://cdn-icons-png.flaticon.com/128/197/197615.png' },
    { currency: 'RUB', buy: '4.85', sell: '5', flag: 'https://cdn-icons-png.flaticon.com/128/197/197408.png' },
  ];

  const extraRates = [
    { currency: 'GBP', buy: '492', sell: '505', flag: 'https://cdn-icons-png.flaticon.com/128/197/197374.png' },
    { currency: 'CHF', buy: '463', sell: '480', flag: 'https://cdn-icons-png.flaticon.com/128/197/197540.png' },
    { currency: 'CNY', buy: '51', sell: '56.5', flag: 'https://cdn-icons-png.flaticon.com/128/197/197375.png' },
    { currency: 'AED', buy: '98', sell: '103', flag: 'https://cdn-icons-png.flaticon.com/512/197/197459.png' },
    { currency: 'JPY', buy: '2.25', sell: '2.48', flag: 'https://cdn-icons-png.flaticon.com/512/197/197604.png' },
    { currency: 'KZT', buy: '0.75', sell: '0.85', flag: 'https://cdn-icons-png.flaticon.com/512/197/197603.png' },
    { currency: 'BYN', buy: '125', sell: '140', flag: 'https://cdn-icons-png.flaticon.com/512/197/197635.png' },
  ];

  const allCurrencies = ['AMD', ...baseRates.map(r => r.currency), ...extraRates.map(r => r.currency)];

  const getDropdownCurrencies = () => {
    return activeTab === 'Կանխիկ' ? allCurrencies.slice(0, 5) : allCurrencies;
  };

  const goldRates = [
    { purity: '375', price: '12,940' },
    { purity: '500', price: '17,250' },
    { purity: '583', price: '20,110' },
    { purity: '750', price: '25,880' },
    { purity: '875', price: '30,190' },
    { purity: '900', price: '31,050' },
    { purity: '916', price: '31,600' },
    { purity: '958', price: '33,050' },
    { purity: '999', price: '34,500' },
  ];

  const getDisplayRates = () => {
    if (activeTab === 'Կանխիկ') return showMore ? [...baseRates, ...extraRates.slice(0, 2)] : baseRates;
    if (activeTab === 'Անկանխիկ') return showMore ? [...baseRates, ...extraRates] : baseRates;
    return [];
  };

  return (
    <section className="bg-white py-12 font-sans max-w-[1240px] mx-auto px-4 relative">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">
        <div className="lg:w-[65%]">
          <p className="text-[#333] text-[18px] font-bold leading-[1.4]">
            20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
          </p>
        </div>
        
        <div className="lg:w-[30%]">
          <h3 className="text-[24px] font-black text-[#1A1A1A] mb-1">Մեր հասցեները</h3>
          <p className="text-gray-400 text-sm font-medium mb-6">Բանկի հասցեները, աշխատանքային ժամերը, բանկոմատները</p>
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-4 group cursor-pointer overflow-hidden rounded-[32px]">
              <img src="https://www.evoca.am/img/addresses.png" className="w-full max-w-[300px] rounded-[32px] shadow-lg transition-transform duration-700 group-hover:scale-110" alt="Map" />
              {/* ՄԵԴԻԱ: Անիմացիոն փին */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6600CC] w-14 h-20 rounded-full border-4 border-white flex items-center justify-center shadow-xl z-10 animate-bounce">
                <span className="text-white text-3xl font-black italic">V</span>
              </div>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <button className="bg-[#F0ECFF] text-[#6600CC] w-full max-w-[300px] py-4 rounded-full font-black text-[15px] flex items-center justify-center gap-3 hover:bg-[#6600CC] hover:text-white transition-all group shadow-sm">
              Դիտել քարտեզը 
              <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-[0_10px_60px_rgba(0,0,0,0.06)] rounded-[32px] overflow-hidden border border-gray-50 bg-white relative">
        {/* ՄԵԴԻԱ: Ֆոնային դեկորատիվ տարր */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#6600CC]/5 rounded-full blur-3xl -z-0" />

        <div className="flex bg-[#F8F9FB] p-1 relative z-10">
          {['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowMore(false); setOpenHave(false); setOpenGet(false); }}
              className={`flex-1 py-4 text-sm font-bold rounded-2xl transition-all duration-300 ${
                activeTab === tab ? 'bg-white shadow-md text-[#1A1A1A] scale-[1.02]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
          <div className={`${activeTab === 'Ոսկու փոխարժեք' ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
            {activeTab === 'Ոսկու փոխարժեք' ? (
              <div className="px-4">
                <div className="flex justify-between text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-6 border-b pb-4">
                  <span>Հարգ</span>
                  <span>Սակագին (Արժեքը ՀՀ Դրամով 1 գրամի համար)</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {goldRates.map((g, i) => (
                    <div key={i} className="flex justify-between items-center py-4 hover:bg-gray-50/50 transition-colors px-2 rounded-xl">
                      <span className="font-black text-xl text-[#1A1A1A]">{g.purity}</span>
                      <span className="font-black text-xl text-[#6600CC]">{g.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="flex text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-8 px-4">
                  <span className="w-40">Արժույթ</span>
                  <div className="flex gap-20"><span>Առք</span><span>Վաճառք</span></div>
                </div>
                <div className="space-y-8">
                  {getDisplayRates().map((r) => (
                    <div key={r.currency} className="flex items-center px-4 group transition-all">
                      <div className="flex items-center gap-4 w-40">
                        <div className="relative">
                           <img src={r.flag} className="w-9 h-9 rounded-full object-cover shadow-md transition-transform group-hover:scale-110" alt="" />
                           <div className="absolute inset-0 rounded-full border border-black/5" />
                        </div>
                        <span className="font-bold text-[18px] group-hover:text-[#6600CC] transition-colors">{r.currency}</span>
                      </div>
                      <div className="flex gap-14 items-center">
                        <div className="flex items-center gap-2 w-24">
                          <span className="text-red-500 text-[10px] animate-pulse">▼</span>
                          <span className="font-black text-2xl tracking-tighter">{r.buy}</span>
                        </div>
                        <div className="flex items-center gap-2 w-24">
                          <span className="text-green-500 text-[10px] animate-pulse">▲</span>
                          <span className="font-black text-2xl tracking-tighter">{r.sell}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    <span className="text-gray-400 text-[13px]">Թարմացվել է՝ 23.04.26</span>
                  </div>
                  <button onClick={() => setShowMore(!showMore)} className="text-[#6600CC] font-bold uppercase text-[12px] hover:bg-[#6600CC] hover:text-white px-4 py-2 rounded-lg transition-all">
                    {showMore ? 'Թաքցնել' : 'Այլ արժույթներ'}
                  </button>
                </div>
              </>
            )}
          </div>

          {activeTab !== 'Ոսկու փոխարժեք' && (
            <div className="bg-[#F8F9FB] rounded-[28px] p-6 self-start space-y-4 shadow-inner">
              {/* ՄԵԴԻԱ: Հաշվիչի վերնագիր */}
              <div className="flex items-center gap-2 mb-2 text-[#6600CC]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span className="text-xs font-black uppercase">Փոխարկիչ</span>
              </div>
            
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative group hover:border-[#6600CC]/30 transition-colors">
                <label className="text-[11px] text-gray-400 font-bold uppercase block mb-1">Ունեմ</label>
                <input type="text" className="w-full outline-none font-bold text-2xl mb-2 text-[#1A1A1A]" placeholder="0" />
                <button 
                  onClick={() => { setOpenHave(!openHave); setOpenGet(false); }}
                  className="flex items-center justify-between w-full text-[#6600CC] font-black border-t border-gray-50 pt-2 hover:opacity-70 transition-opacity"
                >
                  <span className="flex items-center gap-2">{haveCurrency}</span> 
                  <span className={`text-[10px] transition-transform duration-300 ${openHave ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openHave && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-20 max-h-40 overflow-y-auto p-2 space-y-1 animate-in fade-in slide-in-from-top-2">
                    {getDropdownCurrencies().map(c => (
                      <div 
                        key={c} 
                        onClick={() => { setHaveCurrency(c); setOpenHave(false); }}
                        className="p-2 hover:bg-[#F0ECFF] hover:text-[#6600CC] rounded-lg cursor-pointer font-bold text-sm transition-colors"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ՄԵԴԻԱ: Switch Icon */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="bg-white p-2 rounded-full shadow-md border border-gray-50 text-[#6600CC] cursor-pointer hover:rotate-180 transition-transform duration-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l4-4M17 20l-4-4"></path></svg>
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative group hover:border-[#6600CC]/30 transition-colors">
                <label className="text-[11px] text-gray-400 font-bold uppercase block mb-1">Կստանամ</label>
                <input type="text" className="w-full outline-none font-bold text-2xl mb-2 text-[#6600CC]" placeholder="0" readOnly />
                <button 
                  onClick={() => { setOpenGet(!openGet); setOpenHave(false); }}
                  className="flex items-center justify-between w-full text-[#6600CC] font-black border-t border-gray-50 pt-2 hover:opacity-70 transition-opacity"
                >
                  <span className="flex items-center gap-2">{getCurrency}</span>
                  <span className={`text-[10px] transition-transform duration-300 ${openGet ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openGet && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-20 max-h-40 overflow-y-auto p-2 space-y-1 animate-in fade-in slide-in-from-top-2">
                    {getDropdownCurrencies().map(c => (
                      <div 
                        key={c} 
                        onClick={() => { setGetCurrency(c); setOpenGet(false); }}
                        className="p-2 hover:bg-[#F0ECFF] hover:text-[#6600CC] rounded-lg cursor-pointer font-bold text-sm transition-colors"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Money;