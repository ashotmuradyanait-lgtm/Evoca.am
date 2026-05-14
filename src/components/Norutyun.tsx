  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';


  const Norutyun: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Բանկային');
    
    const categories = [
      { name: "Բանկային", path: "/bankayin" },
      { name: "Պրոդուկտներ", path: "/product" },
      { name: "Նորարարություններ", path: "/nor" },
      { name: "Կենսակերպ", path: "/kensakerp" },
      { name: "Մրցանակներ", path: "" },
      { name: "CSR", path: "" },
      { name: "Այլ", path: "" }
    ];

    const newsItems = [
      {
        img: "https://www.evoca.am/images-cache/news/1/17545729507567/616x462.png",
        category: "Կենսակերպ",
        title: "Վճարիր Evoca Mastercard-ով և մասնակցիր խաղարկությանը",
        date: "10.04.2026"
      },
      {
        img: "https://www.evoca.am/images-cache/news/1/17382449387143/450x295.png",
        category: "Մրցանակներ",
        title: "2 նոր մրցանակ Evocabank-ին Global Business & Finance-ից",
        date: "30.01.2025"
      },
      {
        img: "https://www.evoca.am/images-cache/news/1/17373763573222/450x295.jpg",
        category: "Բանկային",
        title: "Համագործակցություն Իտալիա-Հայաստան բիզնես ֆորումում",
        date: "20.01.2025"
      },
      {
        img: "https://www.evoca.am/images-cache/news/1/17339403687437/450x295.jpg",
        category: "Բանկային",
        title: "Evocabank-ը և IFC-ն հայտարարեցին համագործակցության մասին",
        date: "11.12.2024"
      },
      {
        img: "https://www.evoca.am/images-cache/news/1/17067716894602/450x295.png",
        category: "Մրցանակներ",
        title: "2 նոր մրցանակ Global Business and Finance Magazine-ից",
        date: "01.02.2024"
      }
    ];

    return (
      <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden mt-20">
        
      
      
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="text-gray-800">Նորություններ</span>
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
                      ? 'hover:bg-[#A70ECD] text-black shadow-sm' 
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

          
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
            <div className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-4 h-4 bg-[#e9ff00]"></div>
                <span className="text-[#a11f81] font-black text-[12px] uppercase tracking-[0.2em]">Մրցանակներ</span>
              </div>
              <h2 className="text-[32px] md:text-[52px] font-black leading-[1.05] mb-8 tracking-[-0.03em]">
                Evocabank. Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ տարին անընդմեջ
              </h2>
              <p className="text-[#1a1a1a] text-[18px] leading-[1.6] mb-10 max-w-2xl font-medium opacity-90">
                Evocabank-ը երկրորդ տարին անընդմեջ արժանանում է «Լավագույն ՓՄՁ բանկը Հայաստանում» միջազգային մրցանակին The Digital Banker-ի կողմից:
              </p>
              <div className="text-gray-400 font-bold text-[14px] tracking-widest uppercase">08.05.2026</div>
            </div>

          <div className="flex-1 order-1 lg:order-2 relative group w-full">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[7px] border-l-[7px] border-[#e9ff00] z-10"></div>
            <div className="relative rounded-[40px] overflow-hidden">
               <img 
                 src="https://www.evoca.am/images-cache/news/1/17784860353078/780x585.png" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 alt="SME Award" 
               />
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[7px] border-r-[7px] border-[#e9ff00] z-10"></div>
          </div>
        </div>

        
        <div className="relative h-20 md:h-32 mb-10 select-none overflow-hidden">
          <h2 className="absolute left-0 top-0 text-[80px] md:text-[155px] font-[1000] text-[#f8f8f8] uppercase leading-none tracking-[-0.06em] whitespace-nowrap">
            Բաց մի թող
          </h2>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-28">
          {newsItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[35px] mb-6">
                <img src={item.img} className="w-full aspect-[1.4] object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              </div>
              <span className="text-[#a11f81] font-black text-[11px] uppercase tracking-[0.2em]">{item.category}</span>
              <h3 className="font-bold text-[22px] mt-3 leading-[1.2] tracking-tight group-hover:text-[#730D8D] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-400 font-bold text-[13px] mt-4 uppercase tracking-tighter">{item.date}</p>
            </div>
          ))}
        </div>

        
        <div className="bg-[#111111] rounded-[60px] flex flex-col lg:flex-row items-stretch overflow-hidden relative group cursor-pointer mb-32 min-h-[450px]">
            <div className="p-12 lg:p-24 flex-1 flex flex-col justify-center z-10">
                <div className="flex items-center gap-8 mb-4">
                    <span className="text-[#e9ff00] text-[85px] md:text-[130px] font-[1000] italic leading-none tracking-tighter">12%</span>
                    <div className="text-white font-black text-[20px] md:text-[28px] uppercase leading-[1.05] tracking-tight">
                        <span className="text-[#730D8D] text-[11px] tracking-[0.2em] font-black">Պրոդուկտներ</span> <br/>
                        ՀԻՓՈԹԵՔԱՅԻՆ ՎԱՐԿ <br/> ՑԱԾՐ ՏՈԿՈՍԱԴՐՈՒՅՔՈՎ
                    </div>
                </div>
                <h3 className="text-white text-[24px] md:text-[36px] font-black mb-8 group-hover:text-[#e9ff00] transition-colors leading-none tracking-tight">
                    Ձեռք բեր քո երազանքների բնակարանը 12%-ով
                </h3>   
                <p className="text-gray-500 font-black text-[14px] tracking-[0.1em]">26.03.2025</p>
            </div>
            <div className="flex-1 relative min-h-[400px]">
                <div className="absolute top-12 right-12 w-16 h-16 border-t-[8px] border-r-[8px] border-[#730D8D] z-20"></div>
                <img src="https://www.evoca.am/images-cache/news/1/17386587462914/438x328.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="House" />
                <div className="absolute bottom-12 left-12 w-16 h-16 border-b-[8px] border-l-[8px] border-[#a11f81] z-20"></div>
            </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mb-32">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[35px] mb-6">
                <img src="https://www.evoca.am/images-cache/news/1/17371104329802/438x328.jpg" className="w-full aspect-[1.4] object-cover transition-transform duration-700 group-hover:scale-110" alt="2024 Summary" />
              </div>
              <span className="text-[#8E0AAF] font-black text-[11px] uppercase tracking-[0.2em]">Բանկային</span>
              <h3 className="font-bold text-[22px] mt-3 leading-[1.2] tracking-tight group-hover:text-[#a11f81] transition-colors">Evocabank. 2024 թվականի ամփոփում</h3>
              <p className="text-gray-400 font-bold text-[13px] mt-4 uppercase tracking-tighter">17.01.2025</p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[35px] mb-6">
                <img src="https://www.evoca.am/images-cache/news/1/17304388351704/438x328.png" className="w-full aspect-[1.4] object-cover transition-transform duration-700 group-hover:scale-110" alt="10 Million" />
              </div>
              <span className="text-[#8E0AAF] font-black text-[11px] uppercase tracking-[0.2em]">Բանկային</span>
              <h3 className="font-bold text-[22px] mt-3 leading-[1.2] tracking-tight group-hover:text-[#a11f81] transition-colors">Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից</h3>
              <p className="text-gray-400 font-bold text-[13px] mt-4 uppercase tracking-tighter">31.10.2024</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Norutyun;