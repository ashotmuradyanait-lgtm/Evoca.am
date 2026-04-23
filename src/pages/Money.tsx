import React, { useState } from 'react';

const Money = () => {
  const [activeTab, setActiveTab] = useState('կանխիկ');

  const rates = [
    { currency: 'USD', buy: 389, sell: 394, flag: '🇺🇸' },
    { currency: 'EUR', buy: 418, sell: 428, flag: '🇪🇺' },
    { currency: 'RUB', buy: 4.15, sell: 4.35, flag: '🇷🇺' },
    { currency: 'GBP', buy: 485, sell: 505, flag: '🇬🇧' },
  ];

  return (
    <section className="bg-white py-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-12">
        
        {/* Ձախ մաս - Փոխարժեքներ և Կալկուլյատոր */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-black text-[#333] mb-8">Փոխարժեքներ</h2>
          
          <div className="bg-[#F8F9FB] rounded-[32px] p-8">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-200 mb-8">
              {['կանխիկ', 'անկանխիկ', 'ոսկու փոխարժեք'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab ? 'text-[#6600CC] border-b-2 border-[#6600CC]' : 'text-gray-400'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              {/* Table */}
              <div className="flex-grow">
                <div className="grid grid-cols-3 mb-4 text-[#B5B5B5] text-xs font-bold uppercase px-4">
                  <span>Արժույթ</span>
                  <span className="text-center">Առք</span>
                  <span className="text-center">Վաճառք</span>
                </div>
                <div className="space-y-2">
                  {rates.map((r) => (
                    <div key={r.currency} className="grid grid-cols-3 items-center bg-white p-4 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 font-bold text-[#333]">
                        <span className="text-lg">{r.flag}</span> {r.currency}
                      </div>
                      <div className="text-center font-bold text-[#333]">{r.buy}</div>
                      <div className="text-center font-bold text-[#333]">{r.sell}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-[#6600CC] font-bold text-sm hover:underline">Այլ արժույթներ</button>
              </div>

              {/* Calculator Block */}
              <div className="w-full md:w-72 space-y-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Ունեմ</label>
                  <div className="flex items-center justify-between mt-1">
                    <input type="text" placeholder="0" className="w-full outline-none font-bold text-lg" />
                    <select className="bg-transparent font-bold text-[#6600CC] outline-none">
                      <option>AMD</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <label className="text-[10px] text-gray-400 font-bold uppercase">Կստանամ</label>
                  <div className="flex items-center justify-between mt-1">
                    <input type="text" placeholder="0" className="w-full outline-none font-bold text-lg" />
                    <select className="bg-transparent font-bold text-[#6600CC] outline-none">
                      <option>USD</option>
                      <option>AMD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-[11px] text-gray-400 leading-relaxed">
              * 100,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արժույթի փոխանակման դեպքում գործարքը հաստատվում է Բանկի կողմից։
            </p>
          </div>
        </div>

        {/* Աջ մաս - Քարտեզի բլոկ */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-black text-[#333] mb-8">Մեր հասցեները</h2>
          <div className="relative rounded-[40px] overflow-hidden group cursor-pointer h-[400px]">
            <img 
              src="https://www.evoca.am/img/addresses.png" 
              alt="Map" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay and Content */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                <div className="text-[#6600CC] text-3xl font-bold italic">V</div>
              </div>
              <button className="bg-white text-[#6600CC] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#6600CC] hover:text-white transition-all">
                Դիտել քարտեզը ›
              </button>
            </div>
          </div>
          <p className="mt-6 text-[#333] text-sm leading-relaxed">
            Բանկի հասցեները, աշխատանքային ժամերը և մոտակա բանկոմատները:
          </p>
        </div>

      </div>
    </section>
  );
};

export default Money;