import { useRef, useEffect } from 'react';

const Video = () => {
  // Քո ուղարկած բոլոր նկարները
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
    "https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png",
    "https://www.evoca.am/images-cache/partners/1/17689930369925/185x80_grayscale.png"
  ];

  // Կրկնապատկում ենք ցանկը անվերջ սլայդերի համար
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans">
      
      {/* Բաժին 1. Hero Section */}
      <div className="p-4 md:p-8">
        <div className="bg-[#6600cc] min-h-[600px] rounded-[60px] md:rounded-tl-[120px] md:rounded-br-[120px] relative overflow-hidden flex items-center p-8 md:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 w-full relative z-10">
            <div className="text-white space-y-6 self-center">
              <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-tight">
                Օնլայն և <br /> մոբայլ բանկ
              </h1>
              <button className="bg-white text-[#6600cc] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
                Դառնալ հաճախորդ
              </button>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-full max-w-[500px] bg-[#1a1a1a] p-2 rounded-2xl shadow-3xl border-t-4 border-gray-700">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">Video Player</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Բաժին 2. Գործընկերներ */}
      <div className="py-24 relative overflow-hidden">
        
        {/* Դեղին պտտվող օղակներ */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 border-[2px] border-dotted border-yellow-500 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-20 border-[1px] border-dotted border-yellow-400 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Ձեռքը և Տեքստը */}
            <div className="flex items-center gap-8 lg:w-1/3 shrink-0">
              <img 
                src="https://www.evoca.am/images/partners-hand.png" 
                alt="Hand" 
                className="w-32 md:w-44 h-auto drop-shadow-xl"
              />
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Գործընկերներ</h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  Եղեք մեր Գործընկերն ու եկեք միասին գտնենք նոր հաճախորդներ:
                </p>
                <button className="flex items-center gap-3 border border-gray-200 pl-5 pr-1 py-1 rounded-full group hover:border-[#6600cc] transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Բոլորը</span>
                  <div className="w-8 h-8 bg-[#6600cc] rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>
            </div>

            {/* Սահուն Անվերջ Սլայդեր */}
            <div className="flex-1 w-full overflow-hidden">
              <div className="flex w-fit gap-6 animate-infinite-scroll hover:[animation-play-state:paused] py-10">
                {doubledPartners.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="min-w-[180px] h-28 bg-[#f9fafb] rounded-[32px] flex items-center justify-center p-6 transition-all duration-300 hover:bg-white hover:shadow-xl group"
                  >
                    <img 
                      src={logo} 
                      alt="Brand" 
                      className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      ` }} />
    </div>
  );
};

export default Video;