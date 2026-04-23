import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  text: string;
  author: string;
  position: string;
  stars: number;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրեց: Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով...",
    author: "Կամո Թովմասյան",
    position: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
    stars: 5,
  },
  {
    id: 2,
    text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում: Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների՝ հեշտ, արագ, որակով: Սպասարկման...",
    author: "Նունե Գևորգյան",
    position: "Հաճախորդ",
    stars: 5,
  },
  {
    id: 3,
    text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ: Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին` նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի: Շնորհակալ ենք, որ Դուք կաք:",
    author: "Սուսաննա Վանյան",
    position: "Հաճախորդ",
    stars: 5,
  },
  {
    id: 4,
    text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս: Ավելի քան 5 տարի համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ:",
    author: "Արամ Ազարյան",
    position: "Indigo Branding-ի հիմնադիր",
    stars: 5,
  },
  {
    id: 5,
    text: "Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով:",
    author: "Էլեն Վարդանյան",
    position: "Հաճախորդ",
    stars: 5,
  }
];

const Gnahatakan: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ավտոմատ փոփոխություն 5 վայրկյանը մեկ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[450px] bg-[#f8f9fb] flex items-center justify-center overflow-hidden py-10 px-4">
      
      {/* Ձախ ձեռքը */}
      <motion.img
        src="https://www.evoca.am/img/reviews/hand2.png"
        alt="hand left"
        className="absolute left-0 bottom-0 w-[150px] md:w-[250px] lg:w-[350px] pointer-events-none"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Աջ ձեռքը */}
      <motion.img
        src="https://www.evoca.am/img/reviews/hand1.png"
        alt="hand right"
        className="absolute right-0 bottom-0 w-[150px] md:w-[250px] lg:w-[350px] pointer-events-none"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-3xl w-full text-center z-10">
        {/* Աստղիկներ */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[#ffc107] text-2xl">★</span>
          ))}
        </div>

        <div className="relative min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Չակերտներ և տեքստ */}
              <div className="relative px-8">
                <span className="absolute left-0 top-0 text-[#6121e1] text-4xl font-serif">"</span>
                <p className="text-[#333] text-lg md:text-xl font-medium leading-relaxed italic">
                  {reviews[currentIndex].text}
                </p>
                <span className="absolute right-0 bottom-0 text-[#6121e1] text-4xl font-serif transform rotate-180">"</span>
              </div>

              {/* Հեղինակ */}
              <div className="mt-8">
                <h4 className="text-[#333] font-bold text-lg leading-tight">
                  {reviews[currentIndex].author}
                </h4>
                <p className="text-[#6c757d] text-sm mt-1">
                  {reviews[currentIndex].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Կետիկներ (Pagination) */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#6121e1] scale-125' : 'bg-[#d1d5db]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gnahatakan;