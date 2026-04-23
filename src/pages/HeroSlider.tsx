import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց...",
    author: "Կամո Թովմասյան",
    role: "KAMOBLOG մեդիա-հարթակի հիմնադիր",
    date: "22/04/2026 16:37"
  },
  {
    id: 2,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ...",
    author: "Նունե Գևորգյան",
    role: "Հաճախորդ",
    date: "22/04/2026 16:37"
  },
  {
    id: 3,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին...",
    author: "Սուսաննա Վանյան",
    role: "Հաճախորդ",
    date: "22/04/2026 16:37"
  }
];

const EvocaReviews: React.FC = () => {
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
    <div className="w-full bg-[#F8F9FB] font-sans overflow-hidden">
     
      <div className="relative max-w-7xl mx-auto min-h-[600px] md:h-[650px] flex items-center justify-center px-4 py-12 md:py-0">
        
   
        <div className="absolute -left-4 md:left-10 top-10 md:top-16 flex flex-col items-center pointer-events-none select-none z-10 animate-float-slow scale-[0.5] md:scale-100 opacity-40 md:opacity-100">
          <img src="https://www.evoca.am/img/reviews/hand2.png" alt="OK" className="w-[100px] md:w-[130px] mb-8 md:mb-14" />
          <svg width="30" height="80" viewBox="0 0 30 80" className="opacity-70 hidden md:block">
            <path d="M0 0 L15 15 L0 30 L15 45 L0 60 L15 75" stroke="#6121E1" strokeWidth="3" fill="none" />
          </svg>
        </div>

      
        <div className="absolute -right-4 md:right-10 top-10 md:top-16 flex flex-col items-center pointer-events-none select-none z-10 animate-float-delayed scale-[0.5] md:scale-100 opacity-40 md:opacity-100">
          <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Thumbs Up" className="w-[100px] md:w-[130px] mb-8 md:mb-24" />
          <svg width="50" height="25" viewBox="0 0 50 25" className="opacity-90 hidden md:block">
            <path d="M0 12 L8 0 L16 12 L24 0 L32 12 L40 0 L48 12" stroke="#FF00FF" strokeWidth="3" fill="none" />
          </svg>
        </div>

       
        <div className="relative z-20 w-full max-w-3xl bg-white p-6 sm:p-8 md:p-14 rounded-[24px] md:rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-50 text-center transition-all duration-700">
          
          <div className="flex justify-center gap-1 mb-6 md:mb-10">
            {[...Array(5)].map((_, i) => <span key={i} className="text-[#FFC107] text-lg md:text-3xl">★</span>)}
          </div>

          <div className="relative inline-block px-2 md:px-12 min-h-[160px] md:min-h-[180px] flex items-center justify-center">
            {/* Չակերտների չափսերը փոքրացվել են mobile-ում */}
            <span className="absolute left-[-10px] md:left-0 top-[-20px] md:top-[-30px] text-[#6121E1] text-[50px] md:text-[100px] font-serif opacity-10">“</span>
            
            <p className="text-[#333] text-base sm:text-lg md:text-2xl font-medium leading-[1.6] md:leading-[1.65] italic transition-all duration-500">
              {review.text}
            </p>
            
            <span className="absolute right-[-10px] md:right-0 bottom-[-20px] md:bottom-[-40px] text-[#6121E1] text-[50px] md:text-[100px] font-serif opacity-10 rotate-180">“</span>
          </div>

          <div className="mt-8 md:mt-20">
            <h3 className="text-base md:text-xl font-bold text-[#1A1A1A] mb-1">{review.author}</h3>
            <p className="text-[#8E8E8E] text-[11px] md:text-[15px] font-medium uppercase tracking-widest">{review.role}</p>
          </div>

         
          <div className="flex justify-center gap-2 mt-8 md:mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-1.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  currentIdx === i ? 'w-6 md:w-9 bg-[#6121E1]' : 'w-1.5 md:w-2.5 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-full bg-white py-4 px-6 border-t border-gray-100 flex justify-center md:justify-end items-center">
        <p className="text-[#8E8E8E] text-[10px] font-medium uppercase tracking-tighter md:tracking-widest">
          Թարմացվել է՝ {review.date}
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out infinite reverse; animation-delay: -2s; }
      `}</style>
    </div>
  );
};

export default EvocaReviews;