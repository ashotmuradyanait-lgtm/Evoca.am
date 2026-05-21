import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Benefits: React.FC = () => {
  const subMenuItems = [
    { name: 'Քարտեր', path: '/qarter' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '/spasarkum' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '/social' },
    { name: 'Evoca Benefits', path: '' }
  ];

  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  
  const cardTypes = [
    { id: 'visa_infinite', name: 'Visa Infinite', count: 112 },
    { id: 'evoca_travel', name: 'Evoca Travel Card', count: 102 },
    { id: 'visa_vision', name: 'Visa Vision', count: 86 },
    { id: 'master_gold', name: 'Mastercard Gold', count: 96 },
    { id: 'visa_gold', name: 'Visa Gold', count: 96 },
    { id: 'master_standard', name: 'Mastercard Standard', count: 96 },
    { id: 'visa_classic', name: 'Visa Classic', count: 88 },
    { id: 'master_digital', name: 'Mastercard World Digital', count: 88 },
    { id: 'visa_digital', name: 'Visa Digital', count: 88 },
    { id: 'arca_classic', name: 'Arca Classic', count: 87 },
    { id: 'visa_business', name: 'Visa Business', count: 80 }
  ];

  
  const locations = [
    { id: 'armenia', name: 'Հայաստան', count: 112 },
    { id: 'abroad', name: 'Արտերկիր', count: 1 }
  ];

 
  const benefitTypes = [
    { id: 'cashback', name: 'Cashback', count: 15 },
    { id: 'discount', name: 'Զեղչ', count: 95 },
    { id: 'gift_card', name: 'Նվեր քարտ', count: 3 }
  ];

 
  const categories = [
    { id: 'restaurants', name: 'Սրճարաններ և ռեստորաններ', count: 28 },
    { id: 'hotels', name: 'Հյուրանոցներ', count: 5 },
    { id: 'entertainment', name: 'Ժամանց', count: 11 },
    { id: 'apparel', name: 'Նորաձևություն', count: 19 },
    { id: 'electronics', name: 'Էլեկտրոնիկա', count: 2 },
    { id: 'health', name: 'Առողջություն և գեղեցկություն', count: 5 },
    { id: 'services', name: 'Ծառայություններ', count: 5 },
    { id: 'auto', name: 'Ավտո', count: 8 },
    { id: 'tourism', name: 'Տուրիզմ', count: 14 },
    { id: 'other', name: 'Այլ', count: 8 }
  ];

  
  const benefitsData = [
    { id: 1, name: 'Chronograph', value: '15%', type: 'Զեղչ', tag: 'Աքսեսուարներ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737342206664/304x140.png' },
    { id: 2, name: 'Paul Armenia', value: '10%', type: 'Զեղչ', tag: 'Սրճարաններ և ռեստորաններ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737344773161/304x140.png' },
    { id: 3, name: 'Swarovski', value: '10%', type: '10%-ի չափով նվեր', tag: 'Աքսեսուարներ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/1773734536707/304x140.png' },
    { id: 4, name: 'Henderson', value: '15%', type: 'Զեղչ', tag: 'Նորաձևություն', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737343677733/304x140.png' },
    { id: 5, name: 'Pullman', value: '10-20%', type: 'Զեղչ', tag: 'Ինտերիեր', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737342611081/304x140.png' },
    { id: 6, name: 'Burmunk', value: '10%', type: 'Զեղչ', tag: 'Աքսեսուարներ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737344282891/304x140.png' },
    { id: 7, name: 'Seven Visions Resort & Places, The Dvin', value: '20%', type: 'Զեղչ', tag: 'Միջոցառումներ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737342267694/304x140.png' },
    { id: 8, name: 'Body & Soul Fitness Center', value: '20%', type: 'Զեղչ', tag: 'Սպորտ', img: 'https://www.evoca.am/images-cache/landing_benefits/1/17737342096146/304x140.png' }
  ];

  
  const faqData = [
    {
      q: 'Ի՞նչ է Evoca Benefits-ը:',
      a: 'Evoca Benefits-ը նոր նախագիծ է, որի շրջանակում Evoca բոլոր քարտապանները ստանում են բենեֆիթներ՝ զեղչեր, քեշբեքեր կամ այլ առաջարկներ՝ 100-ից ավել գործընկերների մոտ պարզապես վճարելով իրենց Evoca քարտերով:'
    },
    {
      q: 'Ո՞ր բենեֆիթներից կարող են օգտվել Բանկի քարտապանները:',
      a: '• Զեղչ, որը կստանաք տեղում՝ վճարելով Ձեր Evoca քարտով:\n• Cashback, որը տվյալ ամսվա բոլոր գնումների համար հանրագումարային կփոխանցվի Ձեր քարտին մինչև հաջորդ ամսվա 25-ը:\n• Նվեր քարտ, որը կարող եք օգտագործել տեղում կամ Ձեր հաջորդ գնման ժամանակ:'
    },
    {
      q: 'Ինչպե՞ս օգտվել բենեֆիթներից:',
      a: 'Օնլայն խանութներում կամ վաճառակետերում բենեֆիթներից օգտվելու համար պարզապես անհրաժեշտ է վճարել Ձեր Evoca քարտով: Վճարելուց առաջ պետք է զգուշացնել, որ Դուք վճարում եք Evoca քարտով, որպեսզի աշխատակիցը կիրառի զեղչը նախքան վճարումը: Ի դեպ, կարող եք վճարել ֆիզիկական քարտով կամ Ձեր սմարթֆոնով` Apple Pay-ին, Google Pay-ին կցված Evoca քարտով:'
    },
    {
      q: 'Քանի՞ անգամ է հնարավոր օգտվել Evoca բենեֆիթներից:',
      a: 'Բենեֆիթներից կարող եք օգտվել անսահմանափակ քանակությամբ, եթե տվյալ գործընկերոջ էջում նշված չէ որևէ սահմանափակում:'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="w-full bg-white">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        </div>
        <div className="w-full bg-[#6c2db5] text-white ">
          <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
            {subMenuItems.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                  ${isActive || item.name === 'Evoca Benefits' ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-8 mt-4 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատական</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Evoca Benefits</span>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-8 mt-6">
        <div className="bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-3xl p-12 text-center relative overflow-hidden border border-purple-100 shadow-sm">
         
          <div className="absolute top-10 left-12 animate-bounce"><img src="https://www.evoca.am/images/landing_card_groups/1/17768428900225.png" className="w-14" alt="visa" /></div>
          <div className="absolute top-28 right-20 animate-pulse"><img src="https://www.evoca.am/images/landing_card_groups/1/17768429357504.png" className="w-12" alt="mastercard" /></div>
          <div className="absolute bottom-10 left-24"><img src="https://www.evoca.am/images/landing_card_groups/1/17768429488894.png" className="w-10" alt="arca" /></div>
          <div className="absolute bottom-12 right-32"><img src="https://www.evoca.am/images/landing_card_groups/1/17768429612343.png" className="w-12" alt="unionpay" /></div>

          <h1 className="text-3xl font-bold text-[#6c2db5] mb-6">Բացահայտիր Evoca քարտերի բենեֆիթները</h1>
          
        
          <div className="flex justify-center gap-6 mb-8 bg-white p-3 rounded-full shadow-sm max-w-md mx-auto border border-gray-100">
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768428900225.png" alt="Visa" className="h-6 object-contain"/>
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429357504.png" alt="Mastercard" className="h-6 object-contain"/>
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429488894.png" alt="ArCa" className="h-6 object-contain"/>
            <img src="https://www.evoca.am/images/landing_card_groups/1/17768429612343.png" alt="UnionPay" className="h-6 object-contain"/>
          </div>

         
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Որոնել" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6c2db5] pl-12 text-[15px]"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-8 mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <h3 className="font-bold text-[16px]">Ֆիլտրներ</h3>
            <button className="text-xs text-purple-600 font-medium hover:underline">Մաքրել ֆիլտրերը</button>
          </div>

        
          <div>
            <h4 className="font-semibold text-[14px] text-gray-700 mb-3">Քարտատեսակ</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-[13px]">
              {cardTypes.map(card => (
                <label key={card.id} className="flex items-center justify-between cursor-pointer hover:text-purple-700">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-[#6c2db5] focus:ring-[#6c2db5]" />
                    <span>{card.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{card.count}</span>
                </label>
              ))}
            </div>
          </div>

        
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-[14px] text-gray-700 mb-3">Վայր</h4>
            <div className="space-y-2 text-[13px]">
              {locations.map(loc => (
                <label key={loc.id} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-[#6c2db5]" />
                    <span>{loc.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{loc.count}</span>
                </label>
              ))}
            </div>
          </div>

         
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-[14px] text-gray-700 mb-3">Բենեֆիթ</h4>
            <div className="space-y-2 text-[13px]">
              {benefitTypes.map(b => (
                <label key={b.id} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-[#6c2db5]" />
                    <span>{b.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{b.count}</span>
                </label>
              ))}
            </div>
          </div>

         
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-[14px] text-gray-700 mb-3">Ոլորտ</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-[13px]">
              {categories.map(cat => (
                <label key={cat.id} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-[#6c2db5]" />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{cat.count}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

       
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {benefitsData.map(item => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="relative">
                  <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-1 text-[#6c2db5] font-bold text-xl mb-1">
                      <span>{item.value}</span>
                      <span className="text-sm font-semibold">{item.type}</span>
                    </div>
                    <h3 className="font-bold text-[16px] text-gray-800 line-clamp-1">{item.name}</h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                    <span>{item.tag}</span>
                    <div className="flex gap-2 text-gray-400">
                      <button className="hover:text-purple-600">🌐</button>
                      <button className="hover:text-purple-600">ℹ️</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <div className="text-center pt-4">
            <button className="px-6 py-2.5 border border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-colors text-sm inline-flex items-center gap-2">
              Բեռնել ավելին <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </div>

      
      <div className="max-w-[900px] mx-auto px-8 mt-20">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Հաճախ տրվող հարցեր</h2>
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition-colors text-[15px]"
              >
                <span>{faq.q}</span>
                <span className={`text-purple-600 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 pt-2 text-gray-600 text-[14px] leading-relaxed whitespace-pre-line border-t border-gray-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;