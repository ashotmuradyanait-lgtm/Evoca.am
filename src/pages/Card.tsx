import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const FontLink: React.FC = () => (
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
);

// Սահմանում ենք քարտի տվյալների կառուցվածքը
interface CardType {
  id: number;
  name: string;
  desc: string;
  img: string;
}

const EvocaCardShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Հստակ նշում ենք, որ սա HTMLDivElement է
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCards: CardType[] = [
    { 
      id: 1, 
      name: 'Evoca Travel Card',  
      desc: 'FROM: HOME SWEET HOME. TO: NEXT DESTINATION. BOARDING PASS BUSINESS CLASS.',
      img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg' 
    },
    { 
      id: 2, 
      name: 'Visa Vision', 
      desc: '0% կանխիկացում Evoca-ի բոլոր բանկոմատներից, Cashback բոլոր անկանխիկ վճարումներից, դրական մնացորդի վրա գումարի կուտակում:', 
      img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' 
    },
    { 
      id: 3, 
      name: 'Mastercard World Digital', 
      desc: 'Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17527569508235/415x261.png' 
    },
    { 
      id: 4, 
      name: 'Visa Infinite', 
      desc: 'Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ: Քարտը կնվիրի Ձեզ բացառիկ հնարավորությունների փաթեթ:', 
      img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' 
    },
    { 
      id: 5, 
      name: 'Evoca Gift Card', 
      desc: 'Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է և լավագույն նվերը կլինի քոնը:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17404717481136/415x261.png' 
    },
    { 
      id: 6, 
      name: 'Visa Gold', 
      desc: 'Քարտը ապահովում է Ձեր հարմարավետությունն ու հաճելի դարձնում ցանկացած գնում:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png' 
    },
    { 
      id: 7, 
      name: "Garage Masters' Mall Gift Card", 
      desc: "Evocabank-ը ներկայացնում է իր նոր Garage Masters' Mall Gift Card-ը:", 
      img: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png' 
    },
    { 
      id: 8, 
      name: 'Rio Gift Card', 
      desc: 'Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png' 
    },
    { 
      id: 9, 
      name: 'Dalma Gift Card', 
      desc: 'Նվեր ընտրելն այլևս դժվար չէ: Dalma Gift Card-ը նվերի իդեալական տարբերակ է:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png' 
    },
    { 
      id: 10, 
      name: 'Visa Business', 
      desc: 'Ձեր կազմակերպության դրամական միջոցները հասանելի են աշխարհի բոլոր կետերում:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' 
    },
    { 
      id: 11, 
      name: 'Visa Classic', 
      desc: 'Ունիվերսալ վճարային գործիք, որը հասանելի է աշխարհի ցանկացած կետում՝ 24/7:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png' 
    },
    { 
      id: 12, 
      name: 'Arca Classic', 
      desc: 'Ձեռք բեր ArCa Classic քարտը և կատարիր քո գործարքները մեր նորաոճ քարտի օգնությամբ:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png' 
    },
    { 
      id: 13, 
      name: 'Mastercard Standard', 
      desc: 'Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն՝ Mastercard Standard-ը Ձեր հուսալի գործընկերն է:', 
      img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' 
    },
    { 
      id: 14, 
      name: 'Mastercard Gold', 
      desc: 'Քարտը կընդգծի Ձեր կարգավիճակը և անմոռանալի կդարձնի Ձեր բոլոր ճանապարհորդությունները:', 
      img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' 
    }
  ];

  const handlePrev = () => setCurrentIndex((p) => (p === 0 ? allCards.length - 1 : p - 1));
  const handleNext = () => setCurrentIndex((p) => (p === allCards.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Օգտագործում ենք "as HTMLElement", որպեսզի TS-ը թույլ տա կարդալ offset-ները
      const activeItem = document.getElementById(`thumb-${currentIndex}`) as HTMLElement | null;
      if (activeItem) {
        const offsetTop = activeItem.offsetTop - scrollContainer.offsetTop - (scrollContainer.clientHeight / 2) + (activeItem.clientHeight / 2);
        const offsetLeft = activeItem.offsetLeft - scrollContainer.offsetLeft - (scrollContainer.clientWidth / 2) + (activeItem.clientWidth / 2);

        scrollContainer.scrollTo({
          top: offsetTop,
          left: offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  // Framer Motion-ի արժեքները (արդեն իսկ ճիշտ տիպավորված են գրադարանի կողմից)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div className="min-h-screen w-full bg-white font-['Inter',_sans-serif] flex items-center justify-center p-4 lg:p-8 overflow-hidden">
      <FontLink />
      
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* SIDEBAR */}
        <div className="relative w-full lg:w-48 flex flex-col items-center order-2 lg:order-1 h-[350px] lg:h-[550px]">
          <button onClick={handlePrev} className="mb-1 p-1 text-gray-400 hover:text-[#6C2AF5] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>

          <div 
            ref={scrollRef} 
            className="relative w-full flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-2 px-1 transition-all"
          >
            {allCards.map((card, index) => (
              <motion.div
                id={`thumb-${index}`}
                key={card.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                className={`flex-shrink-0 cursor-pointer transition-all duration-500 rounded-[14px] overflow-hidden border-[2px] w-28 lg:w-full p-0.5 ${
                  currentIndex === index ? 'border-[#6C2AF5] shadow-md scale-105 bg-white' : 'border-gray-100 opacity-40'
                }`}
              >
                <img src={card.img} alt={card.name} className="w-full aspect-[1.6/1] object-cover rounded-[11px]" />
              </motion.div>
            ))}
          </div>

          <button onClick={handleNext} className="mt-1 p-1 text-gray-400 hover:text-[#6C2AF5] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
        </div>

        {/* MAIN 3D CARD */}
        <div 
          className="flex-1 flex items-center justify-center order-1 lg:order-2"
          style={{ perspective: "1500px" }}
          onMouseMove={(e: React.MouseEvent) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{ rotateX, rotateY }}
            >
              <img 
                src={allCards[currentIndex].img} 
                alt="Selected" 
                className="w-[280px] lg:w-[480px] rounded-[32px] shadow-[0_50px_90px_-25px_rgba(0,0,0,0.25)] pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full lg:w-[32%] order-3 text-left px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-[28px] lg:text-[40px] font-[900] mb-3 tracking-tighter text-black leading-[1.1]">
                {allCards[currentIndex].name}
              </h2>
              
              <p className="text-gray-500 text-base lg:text-lg mb-8 font-medium leading-relaxed max-w-xs">
                {allCards[currentIndex].desc}
              </p>
              
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#5a1cd1',
                  boxShadow: '0 15px 30px rgba(108, 42, 245, 0.2)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:w-auto bg-[#6C2AF5] text-white font-bold py-3.5 px-10 rounded-full text-base shadow-xl transition-all"
              >
                Պատվիրել օնլայն
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default EvocaCardShowcase;