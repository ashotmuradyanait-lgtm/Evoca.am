import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nor: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Նորարարություններ');
  
  const categories = [
    { name: "Բանկային", path: "/bankayin" },
    { name: "Պրոդուկտներ", path: "/product" },
    { name: "Նորարարություններ", path: "" },
    { name: "Կենսակերպ", path: "" },
    { name: "Մրցանակներ", path: "" },
    { name: "CSR", path: "" },
    { name: "Այլ", path: "" }
  ];    

  const newsItems = [
    {
      img:"https://www.evoca.am/images-cache/news/1/17531989779123/780x585.png",
      category: "Նորարարություններ",
      title: "Google Pay-ն արդեն հասանելի է Evocabank-ի քարտապանների համար",
      date: "15.11.2023",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/17531989779123/510x383.png",
      category: "Նորարարություններ",
      title: "Evoca-ն ներկայացնում է նոր Visa Digital քարտեր",
      date: "14.06.2023",
    },
    { 
      img:"https://www.evoca.am/images-cache/news/1/17515401570632/510x383.png",
      category: "Նորարարություններ",
      title: "Apple Pay-ը և Evoca-ն. Անվտանգ և արագ վճարումներ",
      date: "16.03.2023",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/17500622728518/510x383.png",
      category: "Նորարարություններ",
      title: "Նոր EvocaTouch 2.0. Ավելի քան բանկային հավելված",
      date: "26.01.2023",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16854405293433/510x383.png",
      category: "Նորարարություններ",
      title: "Evoca-ն՝ Հայաստանում առաջին ամբողջությամբ թվային բանկ",
      date: "16.12.2022",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16684929021333/510x383.png",
      category: "Նորարարություններ",
      title: "Վճարիր QR կոդով EvocaTouch-ի միջոցով",
      date: "19.06.2022",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/1657533997991/510x383.png",
      category: "Նորարարություններ",
      title: "AI և Չատ-բոտեր. Բանկային սպասարկման նոր մակարդակը",
      date: "05.02.2022",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16594261127317/510x383.png",
      category: "Նորարարություններ",
      title: "Բիոմետրիկ նույնականացում Evocabank-ում",
      date: "12.12.2021",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16528587352385/510x383.jpg",
      category: "Նորարարություններ",
      title: "Audio նորություններ Evoca-ում",
      date: "09.02.2022",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16449296989543/510x383.jpg",
      category: "Նորարարություններ",
      title: "Evoca թվային բուկլետներ QR կոդով",
      date: "08.06.2021",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16231559412787/510x383.jpg",
      category: "Նորարարություններ",
      title: "Բիոմետրիկ նույնականացում Evocabank-ում",
      date: "12.12.2021",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16183847834993/510x383.png",
      category: "Նորարարություններ",
      title: "Քո բիզնեսի լոգոն, բրենդինգն ու կայքը՝ ապառիկով",
      date: "08.12.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16103863601729/510x383.png",
      category: "Նորարարություններ",
      title: "Evocabank 3.0",
      date: "21.09.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/161838218561/510x383.png",
      category: "Նորարարություններ",
      title: "Անհպում կանխիկացում NFC տեխնոլոգիայով",
      date: "20.09.2020",
    },
     {
      img:"https://www.evoca.am/images-cache/news/1/16106122151393/510x383.png",
      category: "Նորարարություններ",
      title: "EvocaBot` հայկական առաջին վճարային բանկային բոտն Evocabank-ից",
      date: "18.07.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16183854252197/510x383.png",
      category: "Նորարարություններ",
      title: "Բիոմետրիկ նույնականացում՝ EvocaTOUCH հավելվածում",
      date: "15.07.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16100391636205/510x383.png",
      category: "Նորարարություններ",
      title: "Evocabank Online ապառիկ՝ Crossroad.com օնլայն խանութում",
      date: "07.07.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16108139410022/510x383.png",
      category: "Նորարարություններ",
      title: "Ողջույն, Robin!",
      date: "25.01.2020",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16184013480217/510x383.png",
      category: "Նորարարություններ",
      title: "Evocathon - Fintech Hackathon",
      date: "19.12.2019",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16108760343289/510x383.png",
      category: "Նորարարություններ",
      title: "Կարեն Եղիազարյան. Evocabank-ը թվային տրանսֆորմացիայի ակտիվ փուլում է",
      date: "12.06.2019",
    },
    {
      img:"https://www.evoca.am/images-cache/news/1/16120812636471/510x383.png",
      category: "Նորարարություններ",
      title: "SMS-հիշեցումների համակարգ",
      date: "28.04.2016",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden mt-20">
      
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="text-gray-800">Նորություններ</span>
        <span>›</span>
        <span className="text-gray-800 font-bold">Նորարարություններ</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <h1 className="text-[40px] md:text-[68px] font-black text-[#1a1a1a] mb-10 tracking-[-0.04em] leading-none uppercase">
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
                    ? 'text-black shadow-sm bg-[#f2f2f2]' 
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

        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24 group cursor-pointer">
          <div className="flex-1 order-2 lg:order-1">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-[3px] h-3 bg-[#730D8D]"></div>
               <span className="text-[#1a1a1a] font-black text-[12px] uppercase tracking-[0.1em]">Նորարարություններ</span>
             </div>
             <h2 className="text-[34px] md:text-[48px] font-black leading-[1.1] mb-6 tracking-[-0.03em] group-hover:text-[#730D8D] transition-colors">
               {newsItems[0].title}
             </h2>
             <p className="text-[#4a4a4a] text-[18px] leading-[1.6] max-w-2xl font-medium mb-4">
               Կցեք Ձեր Visa կամ Mastercard քարտերը Google Wallet-ին և կատարեք անհպում վճարումներ Ձեր Android սարքով:
             </p>
             <p className="text-gray-400 font-bold text-[14px]">{newsItems[0].date}</p>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative w-full">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[8px] border-l-[8px] border-[#730D8D] z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
               <img 
                src={newsItems[0].img} 
                alt={newsItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-[8px] border-l-[8px] border-[#730D8D] z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 mb-24">
          {newsItems.slice(1).map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col">
              <div className="overflow-hidden mb-5 rounded-sm relative aspect-[1.33]">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-[2px] h-3 bg-[#730D8D]"></div>
                <span className="text-[#1a1a1a] font-black text-[11px] uppercase tracking-[0.1em]">{item.category}</span>
              </div>
              <h3 className="font-bold text-[18px] leading-[1.3] tracking-tight group-hover:text-[#730D8D] transition-colors flex-grow">
                {item.title}
              </h3>
              <p className="text-gray-400 font-bold text-[13px] mt-4 uppercase tracking-tighter">{item.date}</p>
            </div>
          ))}
        </div>

        
        <div className="flex items-center gap-4 text-gray-400 font-black text-[16px] pb-24 border-t border-gray-100 pt-10">
           <span className="text-black bg-[#f2f2f2] px-3 py-1 rounded-md cursor-pointer">1</span>
           <Link to="/erkrord" className="hover:text-black cursor-pointer transition-colors px-2">2</Link>
           <span className="text-[#730D8D] text-[24px] font-black cursor-pointer ml-4 transition-transform hover:translate-x-2">→</span>
        </div>

      </div>
    </div>
  );
}

export default Nor;
