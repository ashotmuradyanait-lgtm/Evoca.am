import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

export default function Anhat() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-transparent py-10 sm:py-20 lg:py-0 px-4 sm:px-6 lg:px-8 gap-10 lg:gap-20 overflow-hidden">
      
      {/* Ձախ մաս - Պատկերների հատված */}
      <div className="relative w-full max-w-[300px] h-[280px] sm:max-w-[400px] sm:h-[350px] lg:max-w-[420px] lg:h-[480px] flex items-center justify-center">
        
        {/* Եռանկյուն ֆոն (SVG) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] drop-shadow-2xl">
            <path 
              d="M 10 15 L 90 15 L 50 90 Z" 
              fill="#5d24d6"
              stroke="#5d24d6"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Անիմացիոն նկարներ */}
        <div className="relative z-10 w-full h-full mt-[-10px] lg:mt-[-20px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-contain brightness-110 contrast-105"
              alt="Anhat Biometric"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Աջ մաս - Տեքստային հատված */}
      <div className="text-center lg:text-left max-w-full sm:max-w-[500px] lg:max-w-[600px]">
        <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl text-gray-800 pb-4 leading-tight lg:leading-[1.2]">
          Դարձիր Evocabank-ի հաճախորդ <br className="hidden sm:block" />
          բիոմետրիկ նույնականացմամբ
        </h2>
        
        <p className="font-normal text-sm sm:text-lg lg:text-xl text-gray-600 pb-8 leading-relaxed">
          Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH <br className="hidden sm:block" />
          հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և <br className="hidden sm:block" />
          ստացիր քարտ
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-14'>
          {/* QR Code */}
          <div className="relative group">
            <img 
              className="h-[140px] w-[140px] lg:h-[180px] lg:w-[180px] bg-white p-2 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105" 
              src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
              alt="QR Code" 
            />
          </div>
          
          {/* Action Button */}
          <button className='bg-[#6400dc] hover:bg-[#541d93] text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap text-sm sm:text-base'>
            Իմանալ ավելին
          </button>
        </div>
      </div>
    </div>
  );
}