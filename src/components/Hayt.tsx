import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hayt: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Օրացույցի ֆիլտրման համար անհրաժեշտ state-եր
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const announcements = [
    {
      title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով",
      date: "06.06.2025",
      content: "2025թ. հունիսի 19-ին՝ ժամը 15:00-ին (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով։ Օրակարգում ներառված են տարեկան հաշվետվությունների հաստատումը և շահույթի բաշխումը։"
    },
    {
      title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով",
      date: "28.03.2025",
      content: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողովի որոշմամբ հաստատվել են կանոնադրական փոփոխությունները և զարգացման նոր ռազմավարական ուղղությունները։"
    },
    {
      title: "Արտաքին աուդիտի մրցույթի հայտարարություն",
      date: "30.12.2024",
      content: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ն հայտարարում է բաց մրցույթ՝ 2025 թվականի գործունեության արտաքին աուդիտն իրականացնող անձի ընտրության նպատակով։ Մրցույթի մասնակցության հայտերն ընդունվում են մինչև սահմանված ժամկետի ավարտը։"
    },
    {
      title: "Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%",
      date: "12.11.2024",
      content: "Տեղեկացնում ենք, որ բանկի ներսում նույն արժույթով քարտից քարտ փոխանցումների միջնորդավճարը այսուհետ կազմելու է 0%՝ ապահովելով էլ ավելի հարմարավետ և արագ սպասարկում մեր հաճախորդների համար։"
    },
    {
      title: "«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով",
      date: "13.06.2024",
      content: "Կայացել է բանկի բաժնետերերի տարեկան ընդհանուր ժողովը, որտեղ ամփոփվել են նախորդ տարվա ֆինանսական արդյունքները և հաստատվել է զարգացման տարեկան ծրագիրը։"
    },
    {
      title: "МИР քարտերի սպասարկման դադարեցում",
      date: "13.06.2024",
      content: "Հարգելի հաճախորդներ, տեղեկացնում ենք, որ համակարգային փոփոխություններով պայմանավորված՝ բանկի սպասարկման կետերում և հարթակներում ՄԻՐ քարտերի սպասարկումը ժամանակավորապես դադարեցվում է։"
    }
  ];

  // Ֆունկցիա՝ ամսաթվերը DD.MM.YYYY ձևաչափից ֆիլտրմանը հարմարեցնելու համար
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  };

  // Հայտարարությունների ֆիլտրում ըստ ընտրված օրացույցի
  const filteredAnnouncements = announcements.filter((item) => {
    if (!startDate && !endDate) return true;
    const itemDate = parseDate(item.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    if (start && itemDate < start) return false;
    if (end && itemDate > end) return false;
    return true;
  });

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="/sakagin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="/hashvetu" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հայտարարություններ</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 border-b border-gray-100 pb-6">
          <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] leading-snug">
            Հայտարարություններ
          </h1>
          
          {/* Աջ կողմի Օրացույց և Արխիվ բաժինը */}
          <div className="flex items-center gap-6 text-gray-500 text-[14px] relative">
            <div className="relative">
              <button 
                onClick={() => setIsCalendarOpen(!isCalendarOpen)} 
                className={`flex items-center gap-2 p-2 rounded-full transition-colors ${isCalendarOpen ? 'text-[#6c2db5] bg-gray-50' : 'hover:text-[#6c2db5]'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </button>

              {/* Օրացույցի բացվող մաքսիմալ նման պատուհանը */}
              {isCalendarOpen && (
                <div className="absolute right-0 mt-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 w-[300px] flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[14px] font-bold text-[#1a1a1a] mb-1">Ֆիլտրել ըստ ամսաթվի</div>
                  
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-400">Սկիզբ</label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-gray-100 bg-[#f9f9fb] text-[14px] font-medium focus:outline-none focus:border-[#6c2db5] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-medium text-gray-400">Ավարտ</label>
                    <input 
                      type="date" 
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-gray-100 bg-[#f9f9fb] text-[14px] font-medium focus:outline-none focus:border-[#6c2db5] transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => { setStartDate(''); setEndDate(''); setIsCalendarOpen(false); }}
                      className="flex-1 h-9 rounded-xl text-[13px] font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                      Մաքրել
                    </button>
                    <button 
                      onClick={() => setIsCalendarOpen(false)}
                      className="flex-1 h-9 rounded-xl text-[13px] font-medium text-white bg-[#6c2db5] hover:bg-[#530498] transition-colors"
                    >
                      Կիրառել
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <span className="text-gray-300">|</span>
            <button className="hover:text-[#6c2db5] font-medium transition-colors">Արխիվ</button>
          </div>
        </div>

        {/* Accordion Ցանկ՝ Ֆիլտրված տվյալներով */}
        <div className="space-y-4 max-w-[1100px]">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-2xl bg-[#f9f9fb] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
                  >
                    <div className="flex-1">
                      <h3 className="text-[15px] md:text-[17px] font-bold text-[#1a1a1a] mb-2 group-hover:text-[#6c2db5] transition-colors leading-normal">
                        {item.title}
                      </h3>
                      <span className="text-[12px] md:text-[13px] text-gray-400 font-medium">
                        {item.date}
                      </span>
                    </div>
                    
                    <div className={`mt-1 text-[#6c2db5] p-1 bg-white rounded-full shadow-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>

                  {/* Բացվող հատված */}
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[1000px] border-t border-gray-100 bg-white' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 md:p-6 text-[14px] md:text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-400 text-[15px] font-medium">
              Նշված ժամանակահատվածի համար հայտարարություններ չեն գտնվել:
            </div>
          )}
        </div>

        {/* Էջադրում (Pagination) */}
        <div className="flex items-center gap-2 mt-12 pt-6 max-w-[1100px]">
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-[14px] font-bold transition-colors ${
                page === 1 
                  ? 'bg-[#6c2db5] text-white' 
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hayt;