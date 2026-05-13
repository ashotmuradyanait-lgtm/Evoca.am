import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Erkrord: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Նորարարություններ');
  
  const categories = [
    { name: "Բանկային", path: "/bankayin" },
    { name: "Պրոդուկտներ", path: "/product" },
    { name: "Նորարարություններ", path: "/nor" },
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
  ]

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
               <div className="w-[3px] h-3 bg-[#37E7FF]"></div>
               <span className="text-[#1a1a1a] font-black text-[12px] uppercase tracking-[0.1em]">Նորարարություններ</span>
             </div>
             <h2 className="text-[34px] md:text-[48px] font-black leading-[1.1] mb-6 tracking-[-0.03em] group-hover:text-[#37E7FF] transition-colors">
               {newsItems[0].title}
             </h2>
             <p className="text-[#4a4a4a] text-[18px] leading-[1.6] max-w-2xl font-medium mb-4">
               Կցեք Ձեր Visa կամ Mastercard քարտերը Google Wallet-ին և կատարեք անհպում վճարումներ Ձեր Android սարքով:
             </p>
             <p className="text-gray-400 font-bold text-[14px]">{newsItems[0].date}</p>
          </div>
          
          <div className="flex-1 order-1 lg:order-2 relative w-full">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[8px] border-l-[8px] border-[#37E7FF] z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
               <img 
                src={newsItems[0].img} 
                alt={newsItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-[8px] border-l-[8px] border-[#37E7FF] z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
          </div>
        </div>

            <div>
                <img src="https://www.evoca.am/images-cache/news/1/16184080372165/510x383.png" alt="" />
                <p className='font-bold hover:text-[#730D8D] ml-10'>3D Secure` առավել անվտանգ <br />
                 online գնումներ</p>
                 <p className='text-gray-400 ml-10'>23.03.2016</p>
            </div>

            <div className="flex items-center gap-4 text-gray-400 font-black text-[16px] pb-24 border-t border-gray-100 pt-10">
                       <Link to="/nor" className="text-black bg-[#f2f2f2] px-3 py-1 rounded-md cursor-pointer">1</Link>
                       <Link to="/erkrord" className="hover:text-black cursor-pointer transition-colors px-2">2</Link>
                       <span className="text-[#730D8D] text-[24px] font-black cursor-pointer ml-4 transition-transform hover:translate-x-2">→</span>
                    </div>
        </div>
        </div>
  )
}
export default Erkrord
