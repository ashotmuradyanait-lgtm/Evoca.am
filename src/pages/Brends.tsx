

const Partners = () => {
  const partners = [
    "https://www.evoca.am/images-cache/partners/1/16104594273635/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/1610459808737/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104599802947/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104603665095/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104604109064/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104604382658/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17104032198171/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17077436606929/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17107493820339/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png"
  ];

  const doubledPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-32 bg-white overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-10 relative">
        
        {/* 6 ՀԱՏ ԴԵՂԻՆ ՕՂԱԿՆԵՐ - Դիրքավորված ձեռքի հետևում (Կենտրոն-ձախ) */}
        <div className="absolute left-[33%] top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0 scale-[0.7] origin-center">
          <div className="relative w-[750px] h-[750px] flex items-center justify-center">
            <div className="absolute inset-0 border-[10px] border-dotted border-yellow-400/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border-[8px] border-dotted border-yellow-400/50 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-24 border-[6px] border-dotted border-yellow-300/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[140px] border-[5px] border-dotted border-yellow-300/50 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-[180px] border-[4px] border-dotted border-yellow-200/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[220px] border-[3px] border-dotted border-yellow-200/50 rounded-full animate-spin-reverse"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
          
          {/* 1. ՏԵՔՍՏԱՅԻՆ ՄԱՍ (Ձախ կողմում) */}
          <div className="lg:w-[400px] shrink-0 space-y-8 z-30">
            <h2 className="text-[44px] font-black text-[#333333] tracking-tight leading-tight">
              Գործընկերներ
            </h2>
            <div className="space-y-4 text-[#333333] text-[15px] leading-[1.6] font-medium opacity-90">
              <p>Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:</p>
            </div>
            
            <button className="flex items-center gap-3 bg-[#f0eaff] hover:bg-[#6600cc] text-[#6600cc] hover:text-white px-8 py-3.5 rounded-full transition-all duration-300 group shadow-sm font-bold text-[15px]">
              Բոլոր գործընկերները
              <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>

         
          <div className="relative z-40 lg:absolute lg:left-[33%] lg:-translate-x-1/2 pointer-events-none">
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Hand" 
              className="w-60 md:w-42 h-auto drop-shadow-2xl translate-y-4"
            />
          </div>

         
          <div className="w-full lg:w-[65%] xl:w-[70%] mt-12 lg:mt-0 lg:ml-auto relative z-20 h-full">
            <div className="bg-white/85 backdrop-blur-sm rounded-[50px] shadow-[0_15px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
              
          
              <button className="absolute inset-y-0 left-4 flex items-center z-50 text-[#6600cc] text-4xl font-light hover:scale-110 transition-transform">‹</button>
              <button className="absolute inset-y-0 right-4 flex items-center z-50 text-[#6600cc] text-4xl font-light hover:scale-110 transition-transform">›</button>

              <div className="flex animate-scroll-3-columns h-60 items-stretch pl-[120px]"> 
              
                {doubledPartners.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="w-[300px] flex-none flex items-center justify-center border-r border-gray-100/50 last:border-r-0 group cursor-pointer transition-all duration-300 hover:bg-white/40"
                  >
                    <img 
                      src={logo} 
                      alt="Partner" 
                      className="max-w-[60%] max-h-[45%] object-contain filter grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:contrast-125" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-3-columns {
          0% { transform: translateX(0); }
          100% { transform: translateX(-3000px); }
        }
        .animate-scroll-3-columns {
          animation: scroll-3-columns 45s linear infinite;
          display: flex;
        }
        .animate-scroll-3-columns:hover {
          animation-play-state: paused;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow { animation: spin-slow 60s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 45s linear infinite; }
      ` }} />
    </section>
  );
};

export default Partners;