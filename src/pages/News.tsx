import React from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    image: 'https://www.evoca.am/images-cache/news/1/17782305453949/439x320.png',
    category: 'Մրցանակներ',
    categoryColor: '#e7d321', 
    title: 'Evocabank-ը՝ լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին…',
    date: '08.05.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/17780463751358/439x320.png',
    category: 'Բանկային',
    categoryColor: '#784BDD', 
    title: 'Evocabank-ը  և Proparco-AFD-ն ստորագրել են 20միլիոն եվրոյի...',
    date: '06.05.2026',
  },
  {
    image: 'https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png',
    category: 'Կենսակերպ',
    categoryColor: '#BEE553', 
    title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
    date: '17.04.2026',
  },
];

const News: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-16 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#784BDD]/5 rounded-full blur-[100px] -z-0" />
      
      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">
            Վերջին նորությունները
          </h2>
        <Link to="/norutyun">
          <button className="flex items-center gap-2 bg-[#F3EEFF] text-[#6600CC] px-7 py-3 rounded-full hover:bg-[#6600CC] hover:text-white transition-all duration-300 font-bold shadow-sm">
            Բոլոր նորությունները
            <span className="text-xl font-bold">›</span>
          </button>
        </Link>
        </div>

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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
             
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <div className="bg-white/90 p-4 rounded-full shadow-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6600CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                </div>
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

                <div className="flex items-center justify-between">
                  <div className="text-[#C2C2C2] text-sm font-medium">
                    {item.date}
                  </div>
                 
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <span className="text-[#6600CC] font-bold">Կարդալ ավելին ›</span>
                  </div>
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