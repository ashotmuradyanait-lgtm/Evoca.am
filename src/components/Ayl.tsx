import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ayl: React.FC = () => {
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
      img: "https://www.evoca.am/images-cache/news/1/16183823394046/510x383.png",
      category: "Այլ",
      title: "Հաճախորդների սպասարկման ժամեր",
      date: "10.12.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16183848935683/510x383.png",
      category: "Այլ",
      title: "Evoca-ն միանում է Զինծառայողների ապահովագրության…",
      date: "22.11.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16929548288114/510x383.jpg",
      category: "Այլ",
      title: "Բացօթյա բարեգործական համերգ-դրամահավաք",
      date: "02.11.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16183878191416/510x383.png",
      category: "Այլ",
      title: "Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման ժամերում",
      date: "16.10.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16183857705231/510x383.png",
      category: "Այլ",
      title: "50 մլն դրամ Hayastan All Armenian Fund-ին Evocabank-ի կողմից",
      date: "09.10.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16104316577652/510x383.png",
      category: "Այլ",
      title: "Փոփոխություններ Evocabank-ի հաճախորդների սպասարկման աշխատանքային…",
      date: "04.09.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16106089552228/510x383.png",
      category: "Այլ",
      title: "Evocabank-ի «Թումանյան» մասնաճյուղը գործում է նոր՝ Թումանյան 15 հասցեում",
      date: "03.08.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16106234052244/510x383.png",
      category: "Այլ",
      title: "Evocabank-ն ընդլայնվում է՝ շարունակելով մոտիվացնել ու զարգացնել թիմը",
      date: "03.07.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16206393286192/510x383.jpg",
      category: "Այլ",
      title: "Evocabank-ը նոր մասնաճյուղ է բացել Երևանում",
      date: "15.06.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16106918386913/510x383.png",
      category: "Այլ",
      title: "Անհրաժեշտ է պահպահնել 1.5 մետր սոցիալական հեռավորություն",
      date: "04.06.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16107742335408/510x383.png",
      category: "Այլ",
      title: "Կանխարգելիչ ախտահանում` Evocabank-ի բոլոր գրասենյակներում",
      date: "14.04.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16107766803641/510x383.png",
      category: "Այլ",
      title: "ՊԱՐԶԱԲԱՆՈՒՄ",
      date: "01.04.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16107821445879/510x383.png",
      category: "Այլ",
      title: "«Էրեբունի» մասնաճյուղը ժամանակավորապես չի գործելու",
      date: "25.03.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16108083510392/510x383.png",
      category: "Այլ",
      title: "Ոչ աշխատանքային օրեր",
      date: "20.03.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16107824534762/510x383.png",
      category: "Այլ",
      title: "Evocabank-ը 10։00-12։00 սպասարկելու է միայն 60 տարեկանից բարձր անձանց",
      date: "03.03.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16119831112076/510x383.png",
      category: "Այլ",
      title: "Հաճախորդների սպասարկում շաբաթ օրերին",
      date: "19.10.2018"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16119832563891/510x383.png",
      category: "Այլ",
      title: "Վերաբացվեց Բանկի «Կոտայք» մասնաճյուղը",
      date: "18.10.2018"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1611987211088/510x383.png",
      category: "Այլ",
      title: "Իվետա Մուկուչյանի մենահամերգը",
      date: "17.09.2018"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16184040636341/510x383.png",
      category: "Այլ",
      title: "Տոնական բացօթյա համերգ",
      date: "11.09.2018"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/16120143492752/510x383.png",
      category: "Այլ",
      title: "Համագործակցության նոր համաձայնագիր",
      date: "31.01.2018"
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
           <span className="text-black bg-gray-100 px-2.5 md:px-3 py-0.5 md:py-1 rounded cursor-pointer">1</span>
           <Link to="/two" className="text-black bg-gray-100 px-2.5 md:px-3 py-0.5 md:py-1 rounded cursor-pointer">2</Link>
           <span className="text-[#730D8D] text-[20px] md:text-[22px] font-black cursor-pointer ml-1 md:ml-2 hover:translate-x-1 transition-transform">→</span>
        </div>

      </div>
    </div>
  );
}

export default Ayl;