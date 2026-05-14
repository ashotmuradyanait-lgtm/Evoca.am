import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Two: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Այլ');
  
  const categories = [
    { name: "Բանկային", path: "/bankayin" },
    { name: "Պրոդուկտներ", path: "/product" },
    { name: "Նորարարություններ", path: "/nor" },
    { name: "Կենսակերպ", path: "/kensakerp" },
    { name: "Մրցանակներ", path: "/mrcanak" },
    { name: "CSR", path: "/csr" },
    { name: "Այլ", path: "" }
  ];

  const newsItems = [
    {
      img: "https://www.evoca.am/images-cache/news/1/16120315634577/510x383.jpg",
      category: "Այլ",
      title: "Ռուսաստանում Հայաստանի մշակույթի օրեր",
      date: "15.11.2017"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120694485726/510x383.png",
      category: "Այլ",
      title: "EvocaLAB",
      date: "09.11.2017"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120720079643/510x383.png",
      category: "Այլ",
      title: "Վերաբացվեց Բանկի Գարեգին Նժդեհ մասնաճյուղը",
      date: "09.10.2017"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16184079052961/510x383.png",
      category: "Այլ",
      title: "Համատեղ սոցիալական ծրագիր COAF-ի հետ",
      date: "02.05.2017"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120810480612/510x383.png",
      category: "Այլ",
      title: "Վճարային տերմինալներ` Բանկի բոլոր մասնաճյուղերում",
      date: "26.07.2016"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120819542661/510x383.png",
      category: "Այլ",
      title: "Evocabank-ը ստացել է ISO27001:2013 միջազգային հավաստագիր",
      date: "03.09.2015"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120822521947/510x383.png",
      category: "Այլ",
      title: "Հայաստանի «Լավագույն ենթապահառու բանկ»",
      date: "18.05.2011"
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden mt-20">
      
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="text-gray-800">Նորություններ</span>
        <span>›</span>
        <span className="text-gray-800 font-bold">Այլ</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <h1 className="text-[32px] sm:text-[40px] md:text-[68px] font-black text-[#1a1a1a] mb-6 md:mb-10 tracking-[-0.04em] leading-tight md:leading-none">
          Նորություններ
        </h1>
        
       
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16">
          <div className="flex flex-wrap gap-1 md:gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[13px] md:text-[15px] font-bold transition-all tracking-wide inline-block
                  ${activeCategory === cat.name 
                    ? 'hover:bg-[#A70ECD] text-black shadow-sm bg-[#f2f2f2]' 
                    : 'bg-transparent text-gray-500 hover:text-black'}`}
                >
                    {cat.name}
                </Link>
                ))}
            </div>
          <button className="w-fit flex items-center gap-2 md:gap-3 bg-[#f3e8ff] text-[#730D8D] px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[12px] md:text-[14px] font-black hover:bg-[#ebd5ff] transition-colors uppercase tracking-wider">
            Բոլորը <span className="text-[20px] md:text-[24px] leading-none mb-1">›</span>
          </button>
        </div>

        
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="flex-[1.2] order-2 lg:order-1 text-left">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-4 md:w-5 h-4 md:h-5 bg-[#7F7F7F]"></div>
              <span className="text-[#1a1a1a] font-bold text-[13px] md:text-[15px]">Այլ</span>
            </div>
            <h2 className="text-[24px] sm:text-[30px] md:text-[46px] font-black leading-tight md:leading-[1.1] mb-4 md:mb-6 tracking-[-0.03em] hover:text-[#730D8D] transition-colors cursor-pointer">
              Evocabank-ը նոր մասնաճյուղ է բացել Երևանում
            </h2>
            <p className="text-[#4a4a4a] text-[15px] md:text-[18px] leading-[1.6] max-w-2xl font-medium">
             Մալաթիա-Սեբաստիա համայնքում՝ Անդրանիկի 134/8 հասցեում, բացվեց Evocabank-ի նոր՝ «Մալաթիա» մասնաճյուղը:
            </p>
            <p className='mt-5 text-gray-500'>15.06.2020</p>
          </div>

          <div className="flex-1 order-1 lg:order-2 relative w-full group cursor-pointer">
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-t-[4px] md:border-t-[8px] border-l-[4px] md:border-l-[8px] border-[#7F7F7F] z-10 transition-transform group-hover:scale-110"></div>
            <div className="relative overflow-hidden shadow-lg rounded-sm">
               <img 
                 src="https://www.evoca.am/images-cache/news/1/16206393286192/780x585.jpg" 
                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="Gyumri Branch" 
               />
            </div>                                                              
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-b-[4px] md:border-b-[8px] border-l-[4px] md:border-l-[8px] border-[#7F7F7F] z-10 transition-transform group-hover:scale-110"></div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12 mb-12 md:mb-16">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col">
              <div className="overflow-hidden mb-4 md:mb-5 rounded-sm">
                <img 
                  src={item.img} 
                  className="w-full aspect-[1.33] object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.title} 
                />
              </div>
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <div className="w-[3px] h-3 bg-[#730D8D]"></div>
                <span className="text-[#1a1a1a] font-black text-[11px] md:text-[12px]">{item.category}</span>
              </div>
              <h3 className="font-bold text-[15px] md:text-[17px] leading-[1.3] group-hover:text-[#730D8D] transition-colors flex-grow">
                {item.title}
              </h3>
              <p className="text-gray-400 font-medium text-[12px] md:text-[13px] mt-3 md:mt-4">{item.date}</p>
            </div>
          ))}
        </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-500 font-bold text-[14px] md:text-[15px] pb-10 md:pb-20">
            <Link to="/ayl" className="hover:text-black cursor-pointer transition-colors px-1">1</Link>
           <span className="text-black bg-gray-100 px-2.5 md:px-3 py-0.5 md:py-1 rounded cursor-pointer">2</span>
           <span className="text-[#730D8D] text-[20px] md:text-[22px] font-black cursor-pointer ml-1 md:ml-2 hover:translate-x-1 transition-transform">→</span>
        </div>

      </div>
    </div>
  );
}

export default Two;