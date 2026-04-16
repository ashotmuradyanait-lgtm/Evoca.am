import React, { useEffect, useState } from 'react';

const COLORS = {
  mainPurple: '#6C2AF5',
  darkPurple: '#5119C2',
  animatedCircle: '#F7E135',
  animatedCircle2: '#E91E63',
  textBlack: '#1A1A1A',
  textGray: '#737373',
  labelGray: '#F5F5F7',
};

const GoddessComplexAnimation: React.FC<{ loaded: boolean }> = ({ loaded }) => {
  return (
    <div className={`relative flex w-full items-end justify-center lg:w-[40%] h-[40vh] lg:h-screen transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      
      <style>
        {`
          @keyframes rotateRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-ring-slow { animation: rotateRing 20s linear infinite; transform-origin: center; }
          .animate-ring-fast { animation: rotateRing 10s linear infinite reverse; transform-origin: center; }
          
          @keyframes floatAndRotate {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
            50% { transform: translateY(-15px) rotate(10deg); opacity: 1; }
            100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          }
          .animate-prism { animation: floatAndRotate infinite ease-in-out; transform-origin: center; }
        `}
      </style>

      <div className="absolute inset-0 z-0 opacity-50">
        <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path id="ball-path" d="M 50,25 a 25,25 0 1,1 0,50 a 25,25 0 1,1 0,-50" fill="none" />

          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={38 - i * 6} 
              stroke={COLORS.darkPurple}
              strokeWidth="0.8" 
              fill="none"
              strokeDasharray="4 4" 
              className={i % 2 === 0 ? 'animate-ring-slow' : 'animate-ring-fast'}
              style={{ animationDuration: `${12 + i * 4}s` }}
            />
          ))}

          <circle r="2.8" fill={COLORS.animatedCircle}>
            <animateMotion dur="7s" repeatCount="indefinite">
              <mpath href="#ball-path" />
            </animateMotion>
          </circle>
          
          <circle r="2" fill={COLORS.animatedCircle2}>
            <animateMotion dur="10s" repeatCount="indefinite" begin="1s">
              <mpath href="#ball-path" />
            </animateMotion>
          </circle>

          <circle r="1.4" fill="#FFFFFF">
            <animateMotion dur="5s" repeatCount="indefinite" begin="2s">
              <mpath href="#ball-path" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      <div className="absolute top-[15%] right-[5%] h-14 w-14 animate-prism">
        <svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="#F7E135" /></svg>
      </div>
      <div className="absolute bottom-[25%] left-0 h-10 w-10 animate-prism" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100" fill="#E91E63" /></svg>
      </div>

      <img 
        src="https://www.evoca.am/img/statue-1.png" 
        alt="Evoca Statue"
        className="relative z-10 h-[90%] object-contain object-bottom"
      />
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
    <div className="relative min-h-screen w-full overflow-hidden bg-[#6C2AF5] font-sans flex flex-col lg:flex-row items-center justify-start px-6 lg:px-12">
      
      
      <GoddessComplexAnimation loaded={loaded} />
      
     
      <div className="flex w-full flex-col justify-center lg:w-[60%] lg:-ml-24 z-10 py-10">
        <p className={`mb-12 text-3xl lg:text-4xl font-extrabold text-white transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Լավագույնը Evocabank-ից
        </p>

        {/* Քարտերի ցանց՝ Մեծացված չափսերով */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`group cursor-pointer rounded-2xl bg-white p-10 shadow-2xl transition-all duration-500 hover:-translate-y-3 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <div className="mb-4 inline-block rounded-full bg-[#F5F5F7] px-4 py-1.5">
                <span className="text-[12px] lg:text-[14px] font-bold text-[#6C2AF5]">{card.label}</span>
              </div>
              <h2 className={`mb-3 text-[22px] lg:text-[26px] font-bold text-black transition-colors group-hover:text-gray-400`}>
                {card.title}
              </h2>
              <p className={`text-[15px] lg:text-[17px] leading-relaxed text-black transition-colors group-hover:text-gray-400`}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvocaLandingPage;