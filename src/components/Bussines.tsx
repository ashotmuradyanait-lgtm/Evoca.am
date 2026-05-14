import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bussines: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Բիզնես');
  
  const categories = [
    { name: "Բիզնես", path: "" },
    { name: "Կենսակերպ", path: "" },
    { name: "Ներդրումներ", path: "" },
  ];

  return (
    <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden mt-20">
      
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="text-gray-800">Բլոգ</span>
        <span>›</span>
        <span className="text-gray-800 font-bold">Բիզնես</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <h1 className="text-[32px] sm:text-[40px] md:text-[68px] font-black text-[#1a1a1a] mb-6 md:mb-10 tracking-[-0.04em] leading-tight md:leading-none">
          Բլոգ
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
              <div className="w-4 md:w-5 h-4 md:h-5 bg-[#23004d]"></div>
              <span className="text-[#1a1a1a] font-bold text-[13px] md:text-[15px]">Բիզնես</span>
            </div>
            <h2 className="text-[24px] sm:text-[30px] md:text-[46px] font-black leading-tight md:leading-[1.1] mb-4 md:mb-6 tracking-[-0.03em] hover:text-[#730D8D] transition-colors cursor-pointer">
              Ինչպե՞ս սկսել բիզնես։ Guide from A to Z
            </h2>
            <p className="text-[#4a4a4a] text-[15px] md:text-[18px] leading-[1.6] max-w-2xl font-medium">
            Եթե ուզում եք ունենալ այն, ինչը երբեք չեք ունեցել, սկսեք անել այն, ինչը երբեք չեք արել:
            </p>
            <p className='mt-5 text-gray-500'>05.01.2024</p>
          </div>

          <div className="flex-1 order-1 lg:order-2 relative w-full group cursor-pointer">
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-t-[4px] md:border-t-[8px] border-l-[4px] md:border-l-[8px] border-[#23004d] z-10 transition-transform group-hover:scale-110"></div>
            <div className="relative overflow-hidden shadow-lg rounded-sm">
               <img 
                 src="https://www.evoca.am/images-cache/blogs/1/16691870758279/780x585.jpg" 
                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="Gyumri Branch" 
               />
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 md:w-12 h-8 md:h-12 border-b-[4px] md:border-b-[8px] border-l-[4px] md:border-l-[8px] border-[#23004d] z-10 transition-transform group-hover:scale-110"></div>
          </div>
        </div>

    </div>
    </div>
  );
}

export default Bussines