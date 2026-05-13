import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../pages/Menu';

const Product: React.FC = () => {
  
  const [activeCategory, setActiveCategory] = useState('Պրոդուկտներ');
  
  const categories = [
    { name: "Բանկային", path: "/bankayin" },
    { name: "Պրոդուկտներ", path: "" },
    { name: "Նորարարություններ", path: "/nor" },
    { name: "Կենսակերպ", path: "" },
    { name: "Մրցանակներ", path: "" },
    { name: "CSR", path: "" },
    { name: "Այլ", path: "" }
  ];

  
  const newsItems = [
    {
      img: "https://www.evoca.am/images-cache/news/1/17732233309185/510x383.png",
      category: "Պրոդուկտներ",
      title: "Վճարիր Evoca Mastercard-ով և ստացիր 10% cashback",
      date: "10.03.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1773403253997/510x383.png",
      category: "Պրոդուկտներ",
      title: "Ներդրումային առաջարկ կանանց համար",
      date: "06.03.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17722002491716/510x383.png",
      category: "Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում",
      title: "Քո Crypto հաշիվն արդեն EvocaTOUCH-ում",
      date: "27.02.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17700093062846/510x383.png",
      category: "Պրոդուկտներ",
      title: "Կատարիր գնումներ Mastercard-ով և շահիր նվեր քարտ",
      date: "01.02.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17665876075785/510x383.png",
      category: "Պրոդուկտներ",
      title: "Վճարիր Evoca Mastercard-ով, ստացիր հավելյալ 10% cashback",
      date: "01.02.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17641620297289/510x383.png",
      category: "Պրոդուկտներ",
      title: "Վճարիր Evoca Mastercard-ով Glovo-ում և ստացիր 40% զեղչ",
      date: "26.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17636522117371/510x383.png",
      category: "Պրոդուկտներ",
      title: "Սև ուրբաթը Evoca-ում",
      date: "24.12.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17622656011294/510x383.png",
      category: "Պրոդուկտներ",
      title: "Evoca x Arca. Խաղարկում ենք 5 iPhone 17 Pro",
      date: "26.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17625016329726/510x383.png",
      category: "Պրոդուկտներ",
      title: "Մեծ զեղչեր Չինաստանից, 20% cashback Evoca-ից",
      date: "12.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17576778780897/510x383.png",
      category: "Պրոդուկտներ",
      title: "Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար",
      date: "19.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17573391299753/510x383.png",
      category: "Պրոդուկտներ",
      title: "iPhone և MacBook Air՝ 0% սպասարկման վճարով",
      date: "04.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17569912369255/510x383.png",
      category: "Պրոդուկտներ",
      title: "Evoca Visa քարտապաններն ունեն առաջարկ",
      date: "01.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17567286835411/510x383.png",
      category: "Պրոդուկտներ",
      title: "Նոր առաջարկ Evoca Mastercard քարտապանների համար",
      date: "12.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17551746889694/510x383.png",
      category: "Պրոդուկտներ",
      title: "Back to School. Վճարիր Evoca Mastercard-ով, ստացիր 20% cashback",
      date: "08.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17537015540189/510x383.png",
      category: "Պրոդուկտներ",
      title: "10% cashback և Skip The Line հնարավորություն",
      date: "04.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17534487529816/510x383.png",
      category: "Պրոդուկտներ",
      title: "Դու ունես հնարավորություն հանդիպելու JLo-ին",
      date: "01.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17490227658695/510x383.jpg",
      category: "Պրոդուկտներ",
      title: "Վայելիր հանգիստդ և խնայիր գումար Evoca Visa քարտի միջոցով",
      date: "08.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17479803552747/510x383.png",
      category: "Պրոդուկտներ",
      title: "Evoca Travel Card-ը վայրէջք կատարեց",
      date: "04.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17477364797809/510x383.png",
      category: "Պրոդուկտներ",
      title: "20% զեղչ ԱԿԳ հավելվածում Evoca Visa քարտապանների համար",
      date: "01.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1744964814312/510x383.png",
      category: "Պրոդուկտներ",
      title: "Առցանց դասընթացներ միջազգային հարթակներում՝ մինչև 25% զեղչովղ",
      date: "01.09.2025"
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden">
      <Menu />
    
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="text-gray-800">Նորություններ</span>
        <span>›</span>
        <span className="text-gray-800 font-bold">Պրոդուկտներ</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <h1 className="text-[40px] md:text-[68px] font-black text-[#1a1a1a] mb-10 tracking-[-0.04em] leading-none">
          Նորություններ
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all tracking-wide inline-block
                  ${activeCategory === cat.name 
                    ? 'hover:bg-[#A70ECD] text-black shadow-sm bg-[#f2f2f2]' 
                    : 'bg-transparent text-gray-500 hover:text-black'}`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <button className="flex items-center gap-3 bg-[#f3e8ff] text-[#730D8D] px-8 py-3 rounded-full text-[14px] font-black hover:bg-[#ebd5ff] transition-colors uppercase tracking-wider">
            Բոլորը <span className="text-[24px] leading-none mb-1">›</span>
          </button>
        </div>

        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-[1.2] order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[3px] h-3 bg-[#730D8D]"></div>
              <span className="text-[#1a1a1a] font-black text-[12px] uppercase tracking-[0.1em]">Պրոդուկտներ</span>
            </div>
            <h2 className="text-[34px] md:text-[48px] font-black leading-[1.1] mb-6 tracking-[-0.03em] hover:text-[#730D8D] transition-colors cursor-pointer">
              Ներդրումային առաջարկ կանանց համար
            </h2>
            <p className="text-[#4a4a4a] text-[18px] leading-[1.6] max-w-2xl font-medium">
              Դուք կարող եք անվճար բացել բրոքերային հաշիվ EvocaINVEST-ում և առանց միջնորդավճարի կատարել արժեթղթերով գործարքներ:
            </p>
          </div>

          <div className="flex-1 order-1 lg:order-2 relative w-full group cursor-pointer">
           
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[8px] border-l-[8px] border-[#730D8D] z-10 transition-transform group-hover:scale-110"></div>
            <div className="relative overflow-hidden shadow-lg">
             
               <img 
                 src="https://www.evoca.am/images-cache/news/1/1773403253997/780x585.png" 
                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="Investment offer" 
               />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-[8px] border-l-[8px] border-[#730D8D] z-10 transition-transform group-hover:scale-110"></div>
          </div>
        </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-16">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col">
              <div className="overflow-hidden mb-5 rounded-sm">
                <img 
                  src={item.img} 
                  className="w-full aspect-[1.33] object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.title} 
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-[3px] h-3 bg-[#730D8D]"></div>
                <span className="text-[#1a1a1a] font-black text-[11px] uppercase tracking-[0.1em]">{item.category}</span>
              </div>
              <h3 className="font-bold text-[18px] leading-[1.3] tracking-tight group-hover:text-[#730D8D] transition-colors flex-grow">
                {item.title}
              </h3>
              <p className="text-gray-400 font-bold text-[13px] mt-4 tracking-tighter">{item.date}</p>
            </div>
          ))}
        </div>

        
        <div className="flex items-center gap-4 text-gray-500 font-bold text-[15px] pb-20 mt-10">
            <span className="text-black bg-gray-100 px-3 py-1 rounded cursor-pointer">1</span>
           <span className="hover:text-black cursor-pointer transition-colors">2</span>
           <span className="hover:text-black cursor-pointer transition-colors">3</span>
           <span className="hover:text-black cursor-pointer transition-colors">4</span>
           <span className="hover:text-black cursor-pointer transition-colors">5</span>
           <span className="hover:text-black cursor-pointer transition-colors">6</span>
           <span className="hover:text-black cursor-pointer transition-colors">7</span>
           <span className="hover:text-black cursor-pointer transition-colors">8</span>
           <span className="text-[#730D8D] text-[22px] font-black cursor-pointer ml-2 hover:translate-x-1 transition-transform">→</span>
        </div>

      </div>
    </div>
  );
}

export default Product;
