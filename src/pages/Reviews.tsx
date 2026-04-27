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

  // Ավտոմատ փոփոխման տրամաբանությունը
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 վայրկյանը մեկ

    return () => clearInterval(interval);
  }, [isAuto]);

  const handleDotClick = (index: number) => {
    setCurrentIdx(index);
    setIsAuto(false); 
  };

  const review = testimonials[currentIdx];

  return (
    <div className="w-full bg-[#F8F9FB] font-sans">
      <div className="relative max-w-7xl mx-auto h-[600px] flex items-center justify-center overflow-hidden px-4">
        
        {/* === Անիմացիոն Ձեռքեր === */}
        <div className="absolute left-10 top-16 flex flex-col items-center pointer-events-none select-none z-10 animate-float-slow">
          <img src="https://www.evoca.am/img/reviews/hand2.png" alt="OK" className="w-[130px] mb-14" />
          <svg width="30" height="80" viewBox="0 0 30 80" className="opacity-70">
            <path d="M0 0 L15 15 L0 30 L15 45 L0 60 L15 75" stroke="#6121E1" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="absolute right-10 top-16 flex flex-col items-center pointer-events-none select-none z-10 animate-float-delayed">
          <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Thumbs Up" className="w-[130px] mb-24" />
          <svg width="50" height="25" viewBox="0 0 50 25" className="opacity-90">
            <path d="M0 12 L8 0 L16 12 L24 0 L32 12 L40 0 L48 12" stroke="#FF00FF" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* === Քարտ === */}
        <div className="relative z-20 max-w-3xl bg-white p-14 rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-50 text-center transition-all duration-700 hover:-translate-y-2 group">
          
          <div className="flex justify-center gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => <span key={i} className="text-[#FFC107] text-3xl">★</span>)}
          </div>

          <div className="relative inline-block px-12 min-h-[160px] flex items-center justify-center">
            <span className="absolute left-0 top-[-30px] text-[#6121E1] text-[100px] font-serif opacity-10">“</span>
            <p className="text-[#333] group-hover:text-black text-2xl font-medium leading-[1.65] italic transition-opacity duration-500">
              {review.text}
            </p>
            <span className="absolute right-0 bottom-[-50px] text-[#6121E1] text-[100px] font-serif opacity-10 rotate-180">“</span>
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-1.5">{review.author}</h3>
            <p className="text-[#8E8E8E] text-[15px] font-medium uppercase">{review.role}</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIdx === i ? 'w-9 bg-[#6121E1]' : 'w-2.5 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-5 px-12 border-t border-gray-100 flex justify-end items-center">
        <p className="text-[#8E8E8E] text-xs font-medium">Թարմացվել է՝ {review.date}</p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1.5deg); }
        }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out infinite reverse; animation-delay: -2s; }
      `}</style>
    </div>
  );
};

export default Reviews;