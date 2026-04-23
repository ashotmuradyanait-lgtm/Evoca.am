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
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-transparent py-20 lg:py-0 px-4 gap-10 lg:gap-20">
      
     
      <div className="relative w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] lg:w-[420px] lg:h-[480px] flex items-center justify-center">
        
       
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-[130%] h-[130%] drop-shadow-2xl">
            <path 
              d="M 10 15 L 90 15 L 50 90 Z" 
              fill="#5d24d6"
              stroke="#5d24d6"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </div>

     
        <div className="relative z-10 w-[400px] h-[280px] sm:w-[500px] sm:h-[350px] lg:w-[600px] lg:h-[400px] mt-[-10px] lg:mt-[-20px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-contain brightness-110 contrast-105"
              alt="Anhat Biometric"
            />
          </AnimatePresence>
        </div>
      </div>

     
      <div className="text-center lg:text-left max-w-[600px]">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 pb-4 leading-tight">
          Դարձիր Evocabank-ի հաճախորդ <br className="hidden sm:block" />
          բիոմետրիկ նույնականացմամբ
        </h2>
        
        <p className="font-normal text-base sm:text-lg lg:text-xl text-gray-600 pb-8 leading-relaxed">
          Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH <br className="hidden sm:block" />
          հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և <br className="hidden sm:block" />
          ստացիր քարտ
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-14'>
         
          <img 
            className="h-[150px] w-[150px] lg:h-[180px] lg:w-[180px] bg-white p-2 rounded-xl shadow-sm" 
            src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
            alt="QR Code" 
          />
          
          <button className='bg-[#6400dc] hover:bg-[#541d93] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap'>
            Իմանալ ավելին
          </button>
        </div>
      </div>
    </div>
  );
}