import React, { useEffect, useState } from 'react';

// Վիդեոյի ճիշտ ֆոնտը՝ Plus Jakarta Sans
const FontLink = () => (
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
);

const GoddessComplexAnimation: React.FC<{ loaded: boolean }> = ({ loaded }) => {
  return (
    <div className={`relative flex w-full items-end justify-center lg:w-[40%] h-[40vh] lg:h-screen transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <style>
        {`
          @keyframes rotateRing { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-ring-slow { animation: rotateRing 30s linear infinite; transform-origin: center; }
          .animate-ring-fast { animation: rotateRing 20s linear infinite reverse; transform-origin: center; }
          
          @keyframes prismFloat {
            0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
            50% { transform: translateY(-30px) rotate(15deg) scale(1.1); }
          }
          .animate-prism { animation: prismFloat 6s infinite ease-in-out; }
        `}
      </style>

      {/* Background Circles */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path id="orbit-path" d="M 50,35 a 15,15 0 1,1 0,30 a 15,15 0 1,1 0,-30" fill="none" />
          {[...Array(8)].map((_, i) => (
            <circle key={i} cx="50" cy="50" r={45 - i * 6} stroke="#FFFFFF" strokeWidth="0.5" fill="none" strokeDasharray="2 6" className={i % 2 === 0 ? 'animate-ring-slow' : 'animate-ring-fast'} />
          ))}
        </svg>
      </div>

      {/* Animated Prisms (Եռանկյունիներ) */}
      <div className="absolute top-[15%] right-[-5%] h-16 w-16 animate-prism opacity-60"><svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="#FFFFFF" /></svg></div>
      <div className="absolute top-[30%] left-[-10%] h-10 w-10 animate-prism opacity-40" style={{ animationDelay: '1s' }}><svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="#F7E135" /></svg></div>
      <div className="absolute bottom-[20%] right-[10%] h-12 w-12 animate-prism opacity-50" style={{ animationDelay: '2s' }}><svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="#E91E63" /></svg></div>

      <img src="https://www.evoca.am/img/statue-1.png" alt="Statue" className="relative z-10 h-[85%] object-contain object-bottom" />
    </div>
  );
};

const EvocaLandingPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  const cards = [
    { label: 'Թվային քարտեր', title: 'Evoca Digital քարտ', text: 'Evoca Digital քարտը արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա:' },
    { label: 'Նվեր քարտեր', title: 'Evoca Gift Card', text: 'Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:' },
    { label: 'Նոր հավելված', title: 'EvocaTOUCH 2', text: 'EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:' },
    { label: 'Օնլայն վճարումներ', title: 'Արագ online վճարումներ', text: 'Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ:' }
  ];

  return (
    <div className="min-h-screen w-full bg-[#E5E7EB] p-4 lg:p-10 flex items-center justify-center font-['Plus_Jakarta_Sans',_sans-serif]">
      <FontLink />
      
      <div className={`relative w-full max-w-[1500px] min-h-[85vh] bg-[#6C2AF5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 ${loaded ? 'rounded-[50px] lg:rounded-[90px]' : 'rounded-none'} overflow-hidden flex flex-col lg:flex-row items-center px-10 lg:px-24`}>
        
        <GoddessComplexAnimation loaded={loaded} />
        
        <div className="flex w-full flex-col justify-center lg:w-[65%] lg:-ml-24 z-20 py-12">
          <h1 className={`flex mb-10 text-4xl lg:text-4xl font-[800] text-white tracking-tight leading-[1.1] transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Լավագույնը <br/> Evocabank-ից
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`group cursor-pointer rounded-[40px] bg-white p-8 lg:p-10 h-[220px] lg:h-[240px] flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-4 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div>
                  <div className="mb-4 inline-block rounded-full bg-[#F5F5F7] px-4 py-1.5">
                    <span className="text-[11px] font-bold text-[#6C2AF5] uppercase tracking-widest">{card.label}</span>
                  </div>

                  <h2 className="mb-2 text-[20px] lg:text-[24px] font-[700] text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#999999]">
                    {card.title}
                  </h2>
                  <p className="text-[13px] lg:text-[15px] font-[500] leading-snug text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#999999] line-clamp-2">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvocaLandingPage;