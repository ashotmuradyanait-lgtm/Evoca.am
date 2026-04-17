import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react'; // Օգտագործում ենք սլաքների համար

const FontLink = () => (
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
);

const EvocaInteractiveCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const allCards = [
    { id: 1, name: 'Visa Infinite', desc: 'Բացառիկ սպասարկում և արտոնություններ ողջ աշխարհում:', img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg' },
    { id: 2, name: 'Mastercard Gold', desc: 'Հուսալիություն և հարմարավետություն Ձեր ամենօրյա գնումների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17149864970842/415x261.png' },
    { id: 3, name: 'Visa Classic', desc: 'Մատչելի և պարզ լուծում Ձեր ֆինանսների կառավարման համար:', img: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png' },
    { id: 4, name: 'Visa Business', desc: 'Լավագույն գործիքը Ձեր բիզնես ծախսերը կառավարելու համար:', img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' },
    { id: 5, name: 'Mastercard Standard', desc: 'Պարզ, արագ և ապահով վճարումներ ամենուր:', img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' },
    { id: 6, name: 'Visa Vision', desc: 'Վառ դիզայն և ժամանակակից հնարավորություններ:', img: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png' },
    { id: 7, name: 'Evoca Gift Card', desc: 'Լավագույն նվերը բոլոր առիթների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png' },
  ];

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set( (e.clientX - rect.left) / rect.width - 0.5);
    y.set( (e.clientY - rect.top) / rect.height - 0.5);
  };

  const scroll = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'up' ? -200 : 200;
      scrollRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-['Inter',_sans-serif] flex items-center justify-center p-4 lg:p-10">
      <FontLink />
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20 h-auto lg:h-[700px]">
        
        {/* 1. SIDEBAR WITH ARROWS */}
        <div className="relative w-full lg:w-72 flex flex-col items-center group order-2 lg:order-1">
          {/* Top Arrow */}
          <button 
            onClick={() => scroll('up')}
            className="hidden lg:flex items-center justify-center p-2 mb-2 text-gray-400 hover:text-[#6C2AF5] transition-colors"
          >
            <ChevronUp size={32} strokeWidth={3} />
          </button>

          {/* List Container */}
          <div 
            ref={scrollRef}
            className="w-full flex lg:flex-col gap-5 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-2 px-2 max-h-[500px]"
          >
            {allCards.map((card, index) => (
              <motion.div
                key={card.id}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.02 }}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 rounded-[22px] overflow-hidden border-[3px] w-40 lg:w-full ${
                  currentIndex === index ? 'border-[#6C2AF5] shadow-lg' : 'border-gray-50'
                }`}
              >
                <img src={card.img} alt={card.name} className="w-full aspect-[1.6/1] object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Arrow */}
          <button 
            onClick={() => scroll('down')}
            className="hidden lg:flex items-center justify-center p-2 mt-2 text-gray-400 hover:text-[#6C2AF5] transition-colors"
          >
            <ChevronDown size={32} strokeWidth={3} />
          </button>
        </div>

        {/* 2. 3D CARD STAGE */}
        <div 
          className="flex-1 flex items-center justify-center order-1 lg:order-2"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              style={{ rotateX, rotateY }}
              className="relative cursor-pointer"
            >
              <img 
                src={allCards[currentIndex].img} 
                alt="Main" 
                className="w-[300px] lg:w-[550px] rounded-[35px] shadow-[0_60px_100px_-25px_rgba(0,0,0,0.35)] pointer-events-none"
              />
              <motion.div 
                className="absolute inset-0 rounded-[35px] pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
                  x: useTransform(mouseX, [-0.5, 0.5], ["-15%", "15%"]),
                  y: useTransform(mouseY, [-0.5, 0.5], ["-15%", "15%"]),
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. TEXT CONTENT */}
        <div className="w-full lg:w-[30%] order-3 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-[#111]">
                {allCards[currentIndex].name}
              </h2>
              <p className="text-gray-500 text-lg lg:text-xl mb-10 font-medium leading-relaxed">
                {allCards[currentIndex].desc}
              </p>
              <button className="w-full lg:w-auto bg-[#6C2AF5] text-white font-bold py-5 px-12 rounded-[20px] shadow-2xl hover:bg-[#581cd6] transition-all transform hover:-translate-y-1">
                Պատվիրել օնլայն
              </button>
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

export default EvocaInteractiveCard;