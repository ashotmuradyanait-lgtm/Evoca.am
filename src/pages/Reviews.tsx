import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    { name: "Անահիտ Ս.", text: "Շատ հարմար հավելված է, ամեն ինչ արագ ու պարզ է:", date: "12.03.2024" },
    { name: "Արմեն Գ.", text: "Evoca-ն լավագույնն է իր տեսակի մեջ, սպասարկումը հիանալի է:", date: "10.03.2024" },
    { name: "Լիլիթ Մ.", text: "Դիզայնը ուղղակի ֆանտաստիկ է, հաճույքով եմ օգտվում:", date: "08.03.2024" },
    { name: "Կարեն Հ.", text: "Վերջապես մի բանկ, որը մտածում է օգտատիրոջ մասին:", date: "05.03.2024" },
    { name: "Սոնա Ա.", text: "Ամեն ինչ շատ արագ է կատարվում, շնորհակալություն:", date: "01.03.2024" },
  ];

  return (
    <section className="bg-[#F8F9FB] py-20 px-4 overflow-hidden relative min-h-[600px] flex flex-col justify-center">
      
      {/* Ձեռքերի անիմացիա */}
      <div className="absolute top-10 left-[-50px] animate-bounce-slow hidden lg:block select-none pointer-events-none">
        <img src="https://www.evoca.am/img/reviews/hand2.png" alt="Hand Left" className="w-[200px]" />
      </div>
      <div className="absolute bottom-10 right-[-50px] animate-bounce-reverse hidden lg:block select-none pointer-events-none">
        <img src="https://www.evoca.am/img/reviews/hand1.png" alt="Hand Right" className="w-[200px]" />
      </div>

      <div className="max-w-[1240px] mx-auto w-full relative z-10 text-center">
        <h2 className="text-[#1A1A1A] text-[32px] lg:text-[48px] font-black mb-12 uppercase tracking-tight">
          Ինչ են ասում <span className="text-[#6600CC]">մեր մասին</span>
        </h2>

        {/* Կարուսելի կոնտեյներ */}
        <div className="relative flex overflow-hidden py-10 mask-gradient">
          <div className="flex animate-scroll gap-6 hover:pause">
            {[...reviews, ...reviews].map((review, index) => (
              <div 
                key={index} 
                className="min-w-[300px] lg:min-w-[380px] bg-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-[#1A1A1A] text-[18px] group-hover:text-[#6600CC] transition-colors">
                    {review.name}
                  </h4>
                  <span className="text-gray-300 text-[12px] font-bold">{review.date}</span>
                </div>
                <p className="text-[#4D4D4D] text-[15px] leading-relaxed text-left font-medium">
                  «{review.text}»
                </p>
                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFC107] text-lg">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-300px * 5 - 1.5rem * 5)); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes bounce-reverse {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }

        .animate-bounce-reverse {
          animation: bounce-reverse 7s ease-in-out infinite;
        }

        .hover\\:pause:hover {
          animation-play-state: paused;
        }

        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Reviews;