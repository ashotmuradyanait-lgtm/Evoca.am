import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Նկարների direct link-երը
const images = [
  "https://www.evoca.am/img/temp/biometric/face1.png", // Face with dots (կետեր)
  "https://www.evoca.am/img/temp/biometric/face2.png", // Face with lines (գծեր)
  "https://www.evoca.am/img/temp/biometric/face3.png"  // Pure face (մաքուր դեմք)
];

export default function Anhat() {
  const [index, setIndex] = useState(0);

  // Անիմացիայի հերթականությունը
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2800); // Փոխվում է 2.8 վայրկյանը մեկ
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent pb-70">
      {/* Գլխավոր կոնտեյներ եռանկյունու համար (380px լայնություն) */}
      <div className="relative w-[420px] h-[480px] flex items-center justify-center">
        
        {/* 1. ՇՐՋՎԱԾ ԵՌԱՆԿՅՈՒՆԻ (Յուրահատուկ SVG, Evoca style) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-[140%] h-[140%] drop-shadow-2xl">
            <path 
              d="M 10 15 L 90 15 L 50 90 Z" 
              fill="#5d24d6"
              stroke="#5d24d6"
              strokeWidth="12"
              strokeLinejoin="round" // Կլորացված անկյուններ
            />
          </svg>
        </div>

        {/* 2. ԱՆԻՄԱՑԻՈՆ ՆԿԱՐ (Փոքր չափսերի, կենտրոնացված) */}
        <div className="relative z-10 w-[600px] h-[400px] mt-[-20px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-contain rounded-3xl brightness-110 contrast-105"
              alt="Anhat Biometric"
            />
          </AnimatePresence>
        </div>
      </div>
      <div className="pt-10">
        <p className="font-bold text-4xl text-gray-800 pb-5">Դարձիր Evocabank-ի հաճախորդ <br />
        բիոմետրիկ նույնականացմամբ</p>
        <p className="font-normal text-xl text-gray-800 pb-5">Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH <br />
         հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և <br />
         ստացիր քարտ</p>
         <div className='flex gap-14'>
         <img className="h-[200px] w-[200px]" src="https://www.evoca.am/img/biometric-section-QR-Code.png" alt="" />
         <p className='mt-39 text-white bg-[#6400dc] rounded-3xl text-center p-2 font-semibold h-[40px] w-[200px] hover:bg-[#541d93]'>Իմանալ ավելին</p>
         </div>
      </div>
    </div>
  );
}