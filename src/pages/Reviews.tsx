import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    { 
      name: "Կամո Թովմասյան", 
      role: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer", 
      text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրող: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով նայել բանկային համակարգին:",
      stars: 5 
    },
    { 
      name: "Նունե Գևորգյան", 
      role: "Հաճախորդ", 
      text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների՝ հեշտ, արագ, որակով: Սպասարկման լավագույն փորձառություն:",
      stars: 5 
    },
    { 
      name: "Սուսաննա Վանյան", 
      role: "Հաճախորդ", 
      text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռնելով երիտասարդ ընտանիքներին՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
      stars: 5 
    },
    { 
      name: "Արամ Ազարյան", 
      role: "Indigo Branding-ի հիմնադիր", 
      text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ:",
      stars: 5 
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-20 px-4 overflow-hidden relative min-h-[650px] flex flex-col justify-center font-sans">
      
      {/* Ձեռքերի Անիմացիա - Absolute Positions */}
      <div className="absolute top-10 left-[-30px] animate-hand-float-left hidden xl:block select-none pointer-events-none z-20">
        <img src="https://www.evoca.am/img/reviews/hand2.png" alt="Hand Left" className="w-[280px] opacity-90" />
      </div>
      <div className="absolute bottom-10 right-[-30px] animate-hand-float-right hidden xl:block select-none pointer-events-none z-20">
        <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Hand Right" className="w-[280px] opacity-90" />
      </div>

      <div className="max-w-[1240px] mx-auto w-full relative z-10">
        {/* Աստղիկները վերևում */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#FFC107] text-2xl">★</span>
          ))}
        </div>

        {/* Կարուսելի հատվածը */}
        <div className="relative flex overflow-hidden py-12 mask-sides">
          <div className="flex animate-infinite-scroll gap-8 hover:pause">
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className="min-w-[350px] md:min-w-[500px] lg:min-w-[600px] bg-white p-10 lg:p-14 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col relative"
              >
                {/* Չակերտներ */}
                <span className="text-[#6600CC] text-6xl font-serif absolute top-8 left-6 opacity-20">“</span>
                
                <p className="text-[#1A1A1A] text-[16px] lg:text-[18px] leading-[1.6] mb-10 font-medium relative z-10 italic text-center">
                  {review.text}
                </p>

                <div className="mt-auto text-center">
                  <h4 className="font-black text-[#1A1A1A] text-[18px] mb-1 uppercase tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>

                <span className="text-[#6600CC] text-6xl font-serif absolute bottom-4 right-6 opacity-20 rotate-180">“</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Դեկորատիվ) */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full transition-all duration-300 ${i === 2 ? 'bg-[#6600CC] w-6' : 'bg-gray-200'}`}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-600px * 4 - 2rem * 4)); }
        }

        @keyframes hand-float-left {
          0%, 100% { transform: translateY(0) rotate(-3deg) translateX(0); }
          50% { transform: translateY(-30px) rotate(2deg) translateX(10px); }
        }

        @keyframes hand-float-right {
          0%, 100% { transform: translateY(0) rotate(3deg) translateX(0); }
          50% { transform: translateY(30px) rotate(-2deg) translateX(-10px); }
        }

        .animate-infinite-scroll {
          display: flex;
          animation: infinite-scroll 40s linear infinite;
        }

        .animate-hand-float-left {
          animation: hand-float-left 8s ease-in-out infinite;
        }

        .animate-hand-float-right {
          animation: hand-float-right 10s ease-in-out infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        .mask-sides {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Reviews;