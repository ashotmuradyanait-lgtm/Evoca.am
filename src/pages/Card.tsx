import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const FontLink = () => (
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
);

const EvocaCardShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCards = [
    { id: 1, name: 'Evoca Travel Card', desc: 'Բացառիկ սպասարկում և արտոնություններ ողջ աշխարհում:', img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg' },
    { id: 2, name: 'Mastercard World Digital', desc: 'Ժամանակակից թվային լուծումներ Ձեր վճարումների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17527569508235/415x261.png' },
    { id: 3, name: 'UnionPay Business Platinum', desc: 'Պրեմիում դասի քարտ Ձեր բիզնեսի հաջողության համար:', img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' },
    { id: 4, name: 'Homplex Gift card', desc: 'Լավագույն նվերը տան հարմարավետության սիրահարներին:', img: 'https://www.evoca.am/images-cache/cards/1/17404717481136/415x261.png' },
    { id: 5, name: 'MyLer Gift Card', desc: 'Անմոռանալի ժամանց և նվերներ MyLer-ից:', img: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png' },
    { id: 6, name: 'UnionPay Gold', desc: 'Ոսկե միջինը Ձեր միջազգային ճամփորդությունների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png' },
    { id: 7, name: '4U.am Gift card', desc: 'Ժպիտներ նվիրելու ամենահեշտ տարբերակը:', img: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png' },
    { id: 8, name: 'Mastercard Gold', desc: 'Հուսալիություն և հարմարավետություն Ձեր գնումների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17149864970842/415x261.png' },
    { id: 9, name: 'Mastercard Standard', desc: 'Պարզ և ապահով վճարային գործիք ամենուր:', img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' },
    { id: 10, name: 'Visa Digital', desc: 'Ակնթարթային քարտ Ձեր սմարթֆոնի մեջ:', img: 'https://www.evoca.am/images-cache/cards/1/17527569508235/415x261.png' },
    { id: 11, name: 'Visa Classic', desc: 'Մատչելի և պարզ լուծում Ձեր ֆինանսների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png' },
    { id: 12, name: 'Arca Classic', desc: 'Տեղական վճարումների հուսալի գործիք:', img: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png' },
    { id: 13, name: 'Visa Business', desc: 'Լավագույն գործիքը Ձեր բիզնեսի ծախսերը կառավարելու համար:', img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' },
    { id: 14, name: 'Dalma Gift Card', desc: 'Շոփինգի հաճույքը Դալմա Գարդեն Մոլում:', img: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png' },
    { id: 15, name: 'Visa Platinum', desc: 'Պրեմիում հնարավորություններ ճամփորդողների համար:', img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' }
  ];

  const handlePrev = () => setCurrentIndex((p) => (p === 0 ? allCards.length - 1 : p - 1));
  const handleNext = () => setCurrentIndex((p) => (p === allCards.length - 1 ? 0 : p + 1));

  useEffect(() => {
    if (scrollRef.current) {
      const active = document.getElementById(`thumb-${currentIndex}`);
      if (active) {
        const offset = active.offsetTop - scrollRef.current.offsetTop - (scrollRef.current.clientHeight / 2) + (active.clientHeight / 2);
        scrollRef.current.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

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
        
        {/* SIDEBAR - Ավելի կոմպակտ */}
        <div className="relative w-full lg:w-48 flex flex-col items-center order-2 lg:order-1 h-[350px] lg:h-[550px]">
          <button onClick={handlePrev} className="mb-1 p-1 text-gray-400 hover:text-[#6C2AF5] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>

          <div ref={scrollRef} className="w-full flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-2 px-1 transition-all">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>

        {/* MAIN 3D CARD - Չափսը փոքրացված է */}
        <div 
          className="flex-1 flex items-center justify-center order-1 lg:order-2"
          style={{ perspective: "1500px" }}
          onMouseMove={(e) => {
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
              {/* lg:w-[480px]՝ նախկին 620-ի փոխարեն */}
              <img 
                src={allCards[currentIndex].img} 
                alt="Selected" 
                className="w-[280px] lg:w-[480px] rounded-[32px] shadow-[0_50px_90px_-25px_rgba(0,0,0,0.25)] pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT - Փոքրացված տեքստեր ու կոճակ */}
        <div className="w-full lg:w-[32%] order-3 text-left px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Տեքստի չափսը 60px-ից դարձրել եմ 45px */}
              <h2 className="text-[32px] lg:text-[45px] font-[900] mb-3 tracking-tighter text-black leading-[1.1]">
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