import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const FontLink: React.FC = () => (
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
);

interface CardType {
  id: number;
  name: string;
  text:string;
  desc: string;
  img: string;
}

const EvocaCardShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allCards: CardType[] = [
    { id: 1, name: 'Evoca Travel Card',text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg' },
    { id: 2, name: 'Evoca Gift Card',text:'', desc:'Evoca Gift Card-ը երբեք չի հիասթափեցնի. այն իդեալական նվեր է:Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:Evoca Gift Card-ով կարող ես վճարել ցանկացած POS և V-POS տերմինալով խանութներում, սրճարաններում, զվարճանքի կենտրոններում, սուպերմարկետներում, օնլայն խանութներում:', img: 'https://www.evoca.am/images-cache/cards/1/17149864970842/415x261.png' },
    { id: 3, name: 'Digital Gift Card',text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png' },
    { id: 4, name: 'Visa Infinite', text:'Ձեր բանալին՝ դեպի արտոնությունների մեծ աշխարհ:', desc: 'Քարտը կնվիրի Ձեզ բացառիկ հնարավորությունների փաթեթ՝ անվտանգ գնումների, ապահովագրված ճամփորդությունների, VIP կարգավիճակի ձեռքբերման համար և ոչ միայն: Այն կգոհացնի անգամ ամենաքմահաճ ու պահանջկոտ հաճախորդին:', img: 'https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png' },
    { id: 5, name: 'Visa Vision',text:'Evocabank-ը ներկայացնում է իր նոր՝ Visa Vision քարտը, որի հետ դու կստանաս՝', desc: '0% կանխիկացում Evoca-ի բոլոր բանկոմատներիցCashback բոլոր անկանխիկ վճարումներիցԴրական մնացորդի վրա գումարի կուտակումՎարկային սահմանաչափ` քո ցանկությամբ', img: 'https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png' },
    { id: 6, name: 'Mastercard World Digital',text:'', desc:'Պատվիրիր թվային քարտը հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում։', img: 'https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png' },
    { id: 7, name: 'UnionPay Business Platinum',text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png' },
    { id: 8, name: 'Homplex Gift card',text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17527569508235/415x261.png' },
    { id: 9, name: 'MyLer Gift Card', text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png' },
    { id: 10, name: 'UnionPay Gold', text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png' },
    { id: 11, name: '4U.am Gift card', text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png' },
    { id: 12, name: 'Mastercard Gold', text:'', desc: 'Քարտը կընդգծի քո կարգավիճակը և անմոռանալի կդարձնի քո բոլոր ճանապարհորդությունները:Հաշված րոպեների ընթացքում դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա՝ վճարելով Mastercard Gold քարտով:', img: 'https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png' },
    { id: 13, name: 'Mastercard Standard', text:'', desc: 'Ամենօրյա գնումներից մինչև անմոռանալի ճանապարհորդություն՝ քո Mastercard Standard քարտով:Եթե հաճախ ես ճամփորդում, այս քարտը քեզ համար պարզապես անհրաժեշտություն կդառնա։ Դու կկարողանաս նախապես գնել քո ավիատոմսը, ամրագրել հյուրանոցային համար կամ վարձել ավտոմեքենա` վճարելով Mastercard Standard քարտով։', img: 'https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png' },
    { id: 14, name: 'Visa Digital', text:'', desc: '', img: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png' },
    { id: 15, name: 'Visa Classic', text:'', desc: 'Ունիվերսալ վճարային քարտ, որը հասանելի կլինի աշխարհի ցանկացած կետում` 24/7 սկզբունքով:Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով պարզ և արագ` առանց PIN կոդի մուտքագրման:', img: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png' },
    { id: 16, name: 'Arca Classic', text:'', desc: 'Ձեռք բեր ArCa Classic քարտը և կատարիր քո գործարքները մեր նորաոճ քարտի օգնությամբ:Ընդամենը մեկ հպում EvocaTOUCH հավելվածում և վերջ: Քարտը կարող ես ստանալ նույնիսկ առանց Բանկ այցելելու՝ հավելվածում նշելով առաքման տարբերակը: Evocabank-ը մշտապես հոգում է քո հարմարավետության մասին:', img: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png' },
    { id: 17, name: 'Visa Business', desc: 'Մեկնեք գործուղման Evocabank-ի Visa Business քարտով։ Նախապես գնեք Ձեր ավիատոմսը, ամրագրեք հյուրանոցային համար կամ վարձեք ավտոմեքենա։',text:'Ձեր կազմակերպության դրամական միջոցները հասանելի են աշխարհի բոլոր կետերում:',  img: 'https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png' },
    { id: 18, name: "Dalma Gift Card", text:'', desc: 'Նվեր ընտրելն այլևս դժվար չէ: 21-րդ դարում տոներին Gift քարտ նվիրելը նորաձև է դարձել։ Դու որոշում ես՝ որքան գումար տալ, նրանք որոշում են՝ որտեղ ծախսեն:Dalma Gift Card-ը նվերի իդեալական տարբերակ է, որը համապատասխանում է նվեր ընտրելու քո բոլոր պահանջներին։', img: 'https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png' },
    { id: 19, name: 'Rio Gift Card', text:'', desc: 'Մեզ հետ դու կարող ես խնայել ամենաթանկը՝ ժամանակը, բայց նույն պահին ունենալ նվերի լավագույն տարբերակը։', img: 'https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png' },
    { id: 20, name: "Garage Masters' Mall Gift Card",text:'', desc: 'Garage Masters’ Mall-ի հետ համագործակցության արդյունքում՝ Evocabank-ը ներկայացնում է իր նոր Garage Masters Mall Gift Card-ը։', img: 'https://www.evoca.am/images-cache/cards/1/17404717481136/415x261.png' },
    { id: 21, name: 'Visa Gold', text:'', desc: 'Քարտն ապահովում է Ձեր հարմարավետությունն ու հաճելի դարձնում ցանկացած գնում:Visa Gold քարտը ճամփորդության ողջ ընթացքում կլինի Ձեր հուսալի ուղեկիցն ու կընդգծի Ձեր յուրահատուկ կարգավիճակը:', img: 'https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png' },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allCards.length - 1 ? 0 : prev + 1));
  }, [allCards.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allCards.length - 1 : prev - 1));
  }, [allCards.length]);

  // Autoplay with Hover Pause
  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(handleNext, 5000);
    return () => window.clearInterval(interval);
  }, [handleNext, isPaused]);

  // Sidebar Auto-Scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const activeItem = document.getElementById(`thumb-${currentIndex}`);
      if (activeItem) {
        const offsetTop = activeItem.offsetTop - scrollContainer.offsetTop - (scrollContainer.clientHeight / 2) + (activeItem.clientHeight / 2);
        scrollContainer.scrollTo({ top: offsetTop, behavior: 'smooth' });
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
    <div className="min-h-screen w-full bg-[#f4f7f9] font-['Inter',_sans-serif] flex items-center justify-center p-4 lg:p-10 overflow-hidden">
      <FontLink />
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* SIDEBAR */}
        <div className="relative w-full lg:w-44 flex flex-col items-center order-2 lg:order-1 h-[350px] lg:h-[600px]">
          <button onClick={handlePrev} className="mb-2 p-2 text-gray-400 hover:text-[#553081] transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          
          <div ref={scrollRef} className="relative w-full flex lg:flex-col gap-6 overflow-x-auto lg:overflow-y-auto scrollbar-hide py-4 px-2">
            {allCards.map((card, index) => (
              <div
                key={card.id}
                id={`thumb-${index}`}
                onClick={() => setCurrentIndex(index)}
                className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0 group"
              >
                <div className={`transition-all duration-500 rounded-xl overflow-hidden border-2 w-24 lg:w-full p-0.5 ${
                  currentIndex === index ? 'border-[#6C2AF5] shadow-lg scale-105 bg-white' : 'border-transparent opacity-40 group-hover:opacity-70'
                }`}>
                  <img src={card.img} alt={card.name} className="w-full aspect-[1.6/1] object-cover rounded-lg" />
                </div>
                <span className={`text-[8px] font-semibold text-center leading-tight transition-colors ${currentIndex === index ? 'text-[#111]' : 'text-gray-400'}`}>
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className="mt-2 p-2 text-gray-400 hover:text-[#6C2AF5] transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>

        {/* MAIN DISPLAY */}
        <div 
          className="flex-1 flex items-center justify-center order-1 lg:order-2"
          style={{ perspective: "1500px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); x.set(0); y.set(0); }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - rect.left) / rect.width - 0.5);
            y.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ rotateX, rotateY }}
            >
              <img src={allCards[currentIndex].img} className="w-[300px] md:w-[460px] lg:w-[600px] rounded-[35px] shadow-[0_45px_90px_-25px_rgba(0,0,0,0.18)]" alt="Hero" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full lg:w-[350px] order-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-[32px] lg:text-[30px] font-[500] mb-6 tracking-tight text-[#2d3139] leading-[1.1]">
                {allCards[currentIndex].name}
              </h1>
              <p className="text-[#7000ff] text-[16px] lg:text-[16px] mb-5 font-medium leading-[1.6]">
                {allCards[currentIndex].text}
              </p>
              <p className="text-[#5f6c7a] text-[16px] lg:text-[16px] mb-10 font-medium leading-[1.6]">
                {allCards[currentIndex].desc}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full hover:bg-[#553081] lg:w-auto bg-[#6C2AF5] text-white font-bold py-4 px-12 rounded-full text-[17px] shadow-lg shadow-purple-100 transition-all"
              >
                Պատվիրել օնլայն
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

export default EvocaCardShowcase;