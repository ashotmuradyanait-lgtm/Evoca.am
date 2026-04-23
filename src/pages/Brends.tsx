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
    <section className="py-16 md:py-32 bg-white overflow-hidden font-sans relative">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 relative">
        
        {/* --- ԴԵՂԻՆ ՕՂԱԿՆԵՐ --- */}
        {/* Mobile-ում ավելի փոքր են և կենտրոնում */}
        <div className="absolute left-1/2 lg:left-[33%] top-[40%] lg:top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0 scale-[0.4] md:scale-[0.6] lg:scale-[0.7] origin-center opacity-60 lg:opacity-100">
          <div className="relative w-[750px] h-[750px] flex items-center justify-center">
            <div className="absolute inset-0 border-[10px] border-dotted border-yellow-400/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border-[8px] border-dotted border-yellow-400/50 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-24 border-[6px] border-dotted border-yellow-300/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[140px] border-[5px] border-dotted border-yellow-300/50 rounded-full animate-spin-reverse"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
          
          {/* 1. ՏԵՔՍՏԱՅԻՆ ՄԱՍ */}
          <div className="w-full lg:w-[400px] text-center lg:text-left shrink-0 space-y-6 md:space-y-8 z-30 mb-16 lg:mb-0">
            <h2 className="text-3xl md:text-[44px] font-black text-[#333333] tracking-tight leading-tight uppercase">
              Գործընկերներ
            </h2>
            <div className="space-y-4 text-[#333333] text-[14px] md:text-[15px] leading-[1.6] font-medium opacity-90 max-w-xl mx-auto lg:mx-0">
              <p>Դարձեք Evocabank-ի Գործընկեր և եկեք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ:</p>
            </div>
            
            <button className="inline-flex items-center gap-3 bg-[#f0eaff] hover:bg-[#6600cc] text-[#6600cc] hover:text-white px-8 py-3 rounded-full transition-all duration-300 group shadow-sm font-bold text-[14px]">
              Բոլոր գործընկերները
              <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>

          {/* 2. ՁԵՌՔԻ ՆԿԱՐԸ */}
          {/* Mobile-ում ավելի փոքր է և դիրքը հարմարեցված է */}
          <div className="relative z-40 lg:absolute lg:left-[33%] lg:-translate-x-1/2 pointer-events-none mb-[-40px] lg:mb-0">
            <img 
              src="https://www.evoca.am/img/hand.png" 
              alt="Hand" 
              className="w-32 md:w-42 lg:w-60 h-auto drop-shadow-2xl translate-y-4 mx-auto lg:mx-0"
            />
          </div>

          {/* 3. ԼՈԳՈՆԵՐԻ ՍԼԱՅԴԵՐ */}
          <div className="w-full lg:w-[60%] xl:w-[65%] relative z-20">
            <div className="bg-white/80 backdrop-blur-md rounded-[30px] md:rounded-[50px] shadow-[0_15px_60px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden relative">
              
              {/* Navigation Arrows (Թաքցված են mobile-ում) */}
              <button className="hidden md:flex absolute inset-y-0 left-4 items-center z-50 text-[#6600cc] text-4xl font-light hover:scale-110 transition-transform">‹</button>
              <button className="hidden md:flex absolute inset-y-0 right-4 items-center z-50 text-[#6600cc] text-4xl font-light hover:scale-110 transition-transform">›</button>

              <div className="flex animate-scroll-mobile md:animate-scroll-desktop h-32 md:h-60 items-center"> 
                {doubledPartners.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="w-[150px] md:w-[300px] flex-none flex items-center justify-center border-r border-gray-100/50 group cursor-pointer transition-all duration-300 hover:bg-white/40 px-4"
                  >
                    <img 
                      src={logo} 
                      alt="Partner" 
                      className="max-w-full max-h-[40%] object-contain filter grayscale opacity-40 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-3000px); }
        }
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1500px); }
        }
        .animate-scroll-desktop {
          animation: scroll-desktop 45s linear infinite;
        }
        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll-mobile {
            display: flex;
          }
        }
        .animate-scroll-desktop:hover, .animate-scroll-mobile:hover {
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