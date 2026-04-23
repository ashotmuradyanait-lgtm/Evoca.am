import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const FontLink: React.FC = () => (
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
);

interface CardType {
  id: number;
  name: string;
  text: string;
  desc: string;
  img: string;
}

const EvocaCardShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCards: CardType[] = [
    { id: 1, name: 'Evoca Travel Card', text: '', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg' },
    { id: 2, name: 'Evoca Gift Card', text: '', desc: 'Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է:', img: 'https://www.evoca.am/images-cache/cards/1/17149864970842/415x261.png' },
    { id: 4, name: 'Visa Infinite', text: 'Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ:', desc: 'Քարտը կնվիրի Ձեզ բացառիկ հնարավորությունների փաթեթ:', img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' },
    { id: 5, name: 'Visa Vision', text: 'Visa Vision քարտը, որի հետ դու կստանաս՝', desc: '0% կանխիկացում Evoca-ի բոլոր բանկոմատներից:', img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' },
    { id: 12, name: 'Mastercard Gold', text: '', desc: 'Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները:', img: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png' },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allCards.length - 1 ? 0 : prev + 1));
  }, [allCards.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allCards.length - 1 : prev - 1));
  }, [allCards.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(handleNext, 5000);
    return () => window.clearInterval(interval);
  }, [handleNext, isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const activeItem = document.getElementById(`thumb-${currentIndex}`);
      if (activeItem) {
        // Mobile-ի համար սքրոլլը լինում է հորիզոնական (Left), Desktop-ի համար՝ ուղղահայաց (Top)
        if (window.innerWidth < 1024) {
            const offsetLeft = activeItem.offsetLeft - scrollContainer.offsetLeft - (scrollContainer.clientWidth / 2) + (activeItem.clientWidth / 2);
            scrollContainer.scrollTo({ left: offsetLeft, behavior: 'smooth' });
        } else {
            const offsetTop = activeItem.offsetTop - scrollContainer.offsetTop - (scrollContainer.clientHeight / 2) + (activeItem.clientHeight / 2);
            scrollContainer.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    }
  }, [currentIndex]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div className="min-h-screen w-full bg-[#f4f7f9] font-['Inter',_sans-serif] flex items-center justify-center p-4 lg:p-10 overflow-x-hidden">
      <FontLink />
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        
        {/* Thumbnails Sidebar - Mobile-ում դառնում է հորիզոնական շարք ներքևում */}
        <div className="relative w-full lg:w-44 flex flex-row lg:flex-col items-center order-2 lg:order-1 h-auto lg:h-[600px]">
          <button onClick={handlePrev} className="hidden lg:block mb-2 p-2 text-gray-400 hover:text-[#553081] transition-transform rotate-90 lg:rotate-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          
          <div ref={scrollRef} className="relative w-full flex flex-row lg:flex-col gap-4 lg:gap-6 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-4 px-2">
            {allCards.map((card, index) => (
              <div
                key={card.id}
                id={`thumb-${index}`}
                onClick={() => setCurrentIndex(index)}
                className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 group"
              >
                <div className={`transition-all duration-500 rounded-lg lg:rounded-xl overflow-hidden border-2 w-20 sm:w-24 lg:w-full p-0.5 ${
                  currentIndex === index ? 'border-[#6C2AF5] shadow-lg scale-105 bg-white' : 'border-transparent opacity-40 group-hover:opacity-70'
                }`}>
                  <img src={card.img} alt={card.name} className="w-full aspect-[1.6/1] object-cover rounded-md lg:rounded-lg" />
                </div>
                <span className={`text-[9px] lg:text-[10px] font-semibold text-center leading-tight transition-colors max-w-[80px] lg:max-w-none ${currentIndex === index ? 'text-[#111]' : 'text-gray-400'}`}>
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className="hidden lg:block mt-2 p-2 text-gray-400 hover:text-[#6C2AF5] transition-transform rotate-90 lg:rotate-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>

        {/* Main Card Image with 3D Effect */}
        <div 
          className="w-full flex-1 flex items-center justify-center order-1 lg:order-2 px-4"
          style={{ perspective: "1500px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); x.set(0); y.set(0); }}
          onMouseMove={(e) => {
            if (window.innerWidth < 1024) return; // Mobile-ում 3D-ն անջատում ենք հարմարավետության համար
            const rect = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{ rotateX, rotateY }}
              className="w-full max-w-[500px] lg:max-w-[600px]"
            >
              <img src={allCards[currentIndex].img} className="w-full rounded-[20px] md:rounded-[35px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] md:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.18)]" alt="Hero" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[380px] order-3 px-2 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-[28px] lg:text-[32px] font-bold mb-4 tracking-tight text-[#2d3139] leading-[1.2]">
                {allCards[currentIndex].name}
              </h1>
              {allCards[currentIndex].text && (
                <p className="text-[#7000ff] text-[15px] lg:text-[16px] mb-4 font-semibold leading-[1.5]">
                  {allCards[currentIndex].text}
                </p>
              )}
              <p className="text-[#5f6c7a] text-[14px] lg:text-[16px] mb-8 font-medium leading-[1.6]">
                {allCards[currentIndex].desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full lg:w-auto bg-[#6C2AF5] text-white font-bold py-4 px-10 rounded-full text-[16px] shadow-lg shadow-purple-100"
                >
                    Պատվիրել օնլայն
                </motion.button>
              </div>
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