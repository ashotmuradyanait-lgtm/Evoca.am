import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով...",
    author: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
    date: "22/04/2026 16:37"
  },
  {
    id: 2,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների՝ հեշտ, արագ, որակով: Սպասարկման...",
    author: "Նունե Գևորգյան",
    role: "Հաճախորդ",
    date: "22/04/2026 16:37"
  },
  {
    id: 3,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
    author: "Սուսաննա Վանյան",
    role: "Հաճախորդ",
    date: "22/04/2026 16:37"
  },
  {
    id: 4,
    text: "Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով:",
    author: "Էլեն Վարդանյան",
    role: "Հաճախորդ",
    date: "22/04/2026 16:37"
  },
  {
    id: 5,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ:",
    author: "Արամ Ազարյան",
    role: "Indigo Branding-ի հիմնադիր",
    date: "22/04/2026 16:37"
  }
];

const Reviews: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAuto]);

  const handleDotClick = (index: number) => {
    setCurrentIdx(index);
    setIsAuto(false); 
  };

  const review = testimonials[currentIdx];

  return (
    <div className="w-full bg-[#F8F9FB] font-sans relative overflow-hidden">
      
      {/* ՄԵԴԻԱ: Ֆոնային շերտեր (Visual overlays) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6121E1]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF00FF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto h-[600px] flex items-center justify-center px-4 z-10">
        
        {/* === Անիմացիոն Ձեռքեր (Media Assets) === */}
        <div className="absolute left-10 top-16 hidden lg:flex flex-col items-center pointer-events-none select-none z-10 animate-float-slow">
          <div className="relative group">
            <img src="https://www.evoca.am/img/reviews/hand2.png" alt="OK" className="w-[135px] mb-14 drop-shadow-2xl transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6121E1]/20 to-transparent blur-2xl rounded-full" />
          </div>
          <svg width="30" height="80" viewBox="0 0 30 80" className="opacity-40">
            <path d="M0 0 L15 15 L0 30 L15 45 L0 60 L15 75" stroke="#6121E1" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="absolute right-10 top-16 hidden lg:flex flex-col items-center pointer-events-none select-none z-10 animate-float-delayed">
          <div className="relative group">
            <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Thumbs Up" className="w-[135px] mb-24 drop-shadow-2xl transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF00FF]/20 to-transparent blur-2xl rounded-full" />
          </div>
          <svg width="50" height="25" viewBox="0 0 50 25" className="opacity-60">
            <path d="M0 12 L8 0 L16 12 L24 0 L32 12 L40 0 L48 12" stroke="#FF00FF" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* === Քարտ (Media Enhanced) === */}
        <div className="relative z-20 w-full max-w-3xl bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-[45px] shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-white/50 text-center transition-all duration-700 hover:shadow-[0_40px_90px_rgba(97,33,225,0.1)] group">
          
          {/* ՄԵԴԻԱ: Աստղերի փայլ */}
          <div className="flex justify-center gap-2 mb-10 transition-transform duration-500 group-hover:scale-110">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FFC107] text-3xl drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]">★</span>
            ))}
          </div>

          <div className="relative inline-block px-4 lg:px-12 min-h-[170px] flex items-center justify-center">
            {/* ՄԵԴԻԱ: Դեկորատիվ չակերտներ */}
            <span className="absolute left-[-20px] top-[-50px] text-[#6121E1] text-[130px] font-serif opacity-[0.07] select-none group-hover:opacity-15 transition-opacity italic">“</span>
            
            <p className="text-[#1A1A1A] text-xl lg:text-2xl font-semibold leading-[1.7] italic transition-all duration-500 relative z-10">
              {review.text}
            </p>

            <span className="absolute right-[-20px] bottom-[-75px] text-[#6121E1] text-[130px] font-serif opacity-[0.07] rotate-180 select-none group-hover:opacity-15 transition-opacity italic">“</span>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-black text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#6121E1] transition-colors">{review.author}</h3>
            <div className="inline-block px-5 py-1.5 rounded-full bg-[#F3EEFF] border border-[#6121E1]/10">
              <p className="text-[#6121E1] text-[13px] font-bold uppercase tracking-widest">{review.role}</p>
            </div>
          </div>

          {/* Dots Control (Media Shimmer) */}
          <div className="flex justify-center gap-3 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-500 relative overflow-hidden ${
                  currentIdx === i ? 'w-12 bg-[#6121E1]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {currentIdx === i && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ՄԵԴԻԱ: Թարմացման ինդիկատոր */}
      <div className="w-full bg-white/60 backdrop-blur-md py-6 px-12 border-t border-gray-100 flex justify-end items-center relative z-20">
        <div className="flex items-center gap-2.5 group">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          <p className="text-[#8E8E8E] text-[11px] font-bold uppercase tracking-[0.1em] group-hover:text-black transition-colors">
            Թարմացվել է՝ {review.date}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(1.5deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite reverse; animation-delay: -3s; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
      `}</style>
    </div>
  );
};

export default Reviews;