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
    <section className="bg-white py-8 md:py-12 font-sans max-w-[1240px] mx-auto px-4">
      {/* Վերևի մաս - Տեքստ և Քարտեզ */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 mb-10">
        <div className="w-full lg:w-[65%]">
          <p className="text-[#333] text-sm md:text-[18px] font-bold leading-[1.6]">
            20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ...
          </p>
        </div>
        
        <div className="w-full lg:w-[30%]">
          <h3 className="text-xl md:text-[24px] font-black text-[#1A1A1A] mb-1">Մեր հասցեները</h3>
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-6">Բանկի հասցեները, աշխատանքային ժամերը</p>
          
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-4 w-full max-w-[300px]">
              <img src="https://www.evoca.am/img/addresses.png" className="w-full rounded-[32px] shadow-lg" alt="Map" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6600CC] w-12 h-16 md:w-14 md:h-20 rounded-full border-4 border-white flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl md:text-3xl font-black italic">V</span>
              </div>
            </div>
            <button className="bg-[#F0ECFF] text-[#6600CC] w-full max-w-[300px] py-4 rounded-full font-black text-[14px] md:text-[15px] flex items-center justify-center gap-3 hover:bg-[#6600CC] hover:text-white transition-all">
              Դիտել քարտեզը <span>›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Հիմնական բլոկ (Աղյուսակ + Հաշվիչ) */}
      <div className="shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[24px] md:rounded-[32px] overflow-hidden border border-gray-50 bg-white">
        {/* Tab-եր */}
        <div className="flex bg-[#F8F9FB] p-1 overflow-x-auto no-scrollbar">
          {['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowMore(false); }}
              className={`flex-1 min-w-[100px] py-3 md:py-4 text-[12px] md:text-sm font-bold rounded-xl md:rounded-2xl transition-all whitespace-nowrap ${
                activeTab === tab ? 'bg-white shadow-sm text-[#1A1A1A]' : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Աղյուսակի մաս */}
          <div className={`${activeTab === 'Ոսկու փոխարժեք' ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
            {activeTab === 'Ոսկու փոխարժեք' ? (
              <div className="px-0 md:px-4">
                <div className="flex justify-between text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-6 border-b pb-4">
                  <span>Հարգ</span>
                  <span>Սակագին (1գ)</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {goldRates.map((g, i) => (
                    <div key={i} className="flex justify-between items-center py-4">
                      <span className="font-black text-lg md:text-xl text-[#1A1A1A]">{g.purity}</span>
                      <span className="font-black text-lg md:text-xl text-[#1A1A1A]">{g.price} ֏</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="flex text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 px-2 md:px-4">
                  <span className="w-24 md:w-40">Արժույթ</span>
                  <div className="flex flex-1 justify-around md:justify-start md:gap-20 uppercase">
                    <span>Առք</span>
                    <span>Վաճառք</span>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {getDisplayRates().map((r) => (
                    <div key={r.currency} className="flex items-center px-2 md:px-4">
                      <div className="flex items-center gap-2 md:gap-4 w-24 md:w-40">
                        <img src={r.flag} className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover" alt="" />
                        <span className="font-bold text-sm md:text-[18px]">{r.currency}</span>
                      </div>
                      <div className="flex flex-1 justify-around md:justify-start md:gap-14 items-center">
                        <div className="flex items-center gap-1 md:gap-2 min-w-[70px] md:w-24">
                          <span className="text-red-500 text-[8px] md:text-[10px]">▼</span>
                          <span className="font-black text-lg md:text-2xl">{r.buy}</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2 min-w-[70px] md:w-24">
                          <span className="text-green-500 text-[8px] md:text-[10px]">▲</span>
                          <span className="font-black text-lg md:text-2xl">{r.sell}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 px-2 md:px-4">
                  <span className="text-gray-300 text-xs">Թարմացվել է՝ 23.04.26</span>
                  <button onClick={() => setShowMore(!showMore)} className="text-[#6600CC] font-bold uppercase text-[11px] hover:underline">
                    {showMore ? 'Թաքցնել' : 'Բոլոր արժույթները'}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Հաշվիչի բլոկ - Mobile-ում դառնում է 100% լայնություն */}
          {activeTab !== 'Ոսկու փոխարժեք' && (
            <div className="bg-[#F8F9FB] rounded-[24px] p-5 md:p-6 self-start space-y-4 w-full">
              <h4 className="text-[#1A1A1A] font-black text-sm uppercase mb-2">Փոխարկիչ</h4>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative">
                <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Ունեմ</label>
                <input type="number" className="w-full outline-none font-bold text-lg md:text-xl mb-2 bg-transparent" placeholder="0" />
                <button onClick={() => {setOpenHave(!openHave); setOpenGet(false)}} className="flex items-center justify-between w-full text-[#6600CC] font-black border-t pt-2 text-sm md:text-base">
                  {haveCurrency} <span>▼</span>
                </button>
                {openHave && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-xl z-20 max-h-40 overflow-y-auto p-1">
                    {getDropdownCurrencies().map(c => (
                      <div key={c} onClick={() => {setHaveCurrency(c); setOpenHave(false)}} className="p-2 hover:bg-[#F0ECFF] rounded-lg cursor-pointer font-bold text-sm">{c}</div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative">
                <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Կստանամ</label>
                <input type="number" className="w-full outline-none font-bold text-lg md:text-xl mb-2 bg-transparent" placeholder="0" />
                <button onClick={() => {setOpenGet(!openGet); setOpenHave(false)}} className="flex items-center justify-between w-full text-[#6600CC] font-black border-t pt-2 text-sm md:text-base">
                  {getCurrency} <span>▼</span>
                </button>
                {openGet && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border rounded-xl shadow-xl z-20 max-h-40 overflow-y-auto p-1">
                    {getDropdownCurrencies().map(c => (
                      <div key={c} onClick={() => {setGetCurrency(c); setOpenGet(false)}} className="p-2 hover:bg-[#F0ECFF] rounded-lg cursor-pointer font-bold text-sm">{c}</div>
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