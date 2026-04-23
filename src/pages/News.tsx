import React from 'react';

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

const News: React.FC = () => {
  return (
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
  );
};

export default News;