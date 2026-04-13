
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Հեռախոսահամար` 8444",
    description: "Evocabank: Մենք սպասում ենք Ձեր զանգին...",
    buttonText: "Զանգահարել",
    image: "https://www.evoca.am/static/media/contact-center.png",
    bgColor: "bg-[#7c7c7c]",
  },
  {
    title: "Vision",
    description: "Vision քարտ քո նախընտրած գույնով, դիզայնով և բազմաթիվ առավելություններից",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/static/media/vision-cards.png",
    bgColor: "bg-[#4a4a4a]",
  },
  {
    title: "Infinite",
    description: "Վիզա վճարային համակարգի ամենաբարձր դասի քարտ",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/static/media/infinite-card.png",
    bgColor: "bg-[#2d2d2d]",
  },
  {
    title: "Հիփոթեքային վարկեր",
    subtitle: "Evocabank-ում` ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
    buttonText: "Դիմել",
    image: "https://www.evoca.am/static/media/mortgage.png",
    bgColor: "bg-[#e2d5f7]",
  },
  {
    title: "UnionPay Gold",
    description: "Քո ուղեկիցը արտերկրում քո արագ և հարմար վճարումների համար",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/static/media/unionpay.png",
    bgColor: "bg-[#c1ae77]",
  },
  {
    title: "Ավանդ EvocaTOUCH",
    subtitle: "առավելագույն տոկոսադրույքով",
    description: "Ներդրիր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/static/media/touch-deposit.png",
    bgColor: "bg-[#f3e8ff]",
  },
  {
    title: "Visa Travel Card",
    description: "Քո լավագույն ճամփորդական ընկերը` բազմաթիվ առավելություններով",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/static/media/travel-card.png",
    bgColor: "bg-[#f3f4f6]",
  },
  {
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/static/media/salary.png",
    bgColor: "bg-[#6c2db5]",
  }
];

const HeroSlider = () => {
  return (
    <div className="w-full h-screen relative bg-white pt-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
        pagination={{ 
          clickable: true, 
          el: '.custom-dots',
          renderBullet: (_, className) => `<span class="${className}"></span>`
        }}
        // Ահա կլորացված անկյունը (rounded-bl)
        className="w-full h-[95vh] rounded-bl-[100px] md:rounded-bl-[180px] overflow-hidden shadow-2xl"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center relative px-6 md:px-24 uppercase`}>
              <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex-1 text-white z-10 text-center md:text-left">
                  <h2 className="text-4xl md:text-[60px] font-black leading-[1.05] mb-6 tracking-tighter animate-slideUp">
                    {slide.title}
                    {slide.subtitle && (
                      <span className="block text-xl md:text-2xl font-bold mt-2 lowercase opacity-90 italic">
                         {slide.subtitle}
                      </span>
                    )}
                  </h2>
                  <p className="text-base md:text-[20px] opacity-80 normal-case mb-10 max-w-md font-medium leading-snug animate-slideUp delay-100">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black px-12 py-3.5 rounded-full font-bold hover:scale-105 transition-all normal-case text-[14px] shadow-xl animate-slideUp delay-200 cursor-pointer">
                    {slide.buttonText}
                  </button>
                </div>

                <div className="flex-1 flex justify-center md:justify-end items-center relative animate-zoomIn">
                  <img 
                    src={slide.image} 
                    className="max-h-[320px] md:max-h-[580px] w-auto object-contain drop-shadow-[-40px_40px_80px_rgba(0,0,0,0.45)]" 
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* --- Navigation & Progress --- */}
        <div className="absolute bottom-14 left-0 w-full z-50 flex flex-col items-center">
          <div className="flex items-center gap-8 bg-black/10 px-8 py-3 rounded-full backdrop-blur-sm">
            <button className="nav-prev text-white opacity-60 hover:opacity-100 cursor-pointer transition-all scale-125">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>

            <div className="custom-dots flex gap-4 items-center"></div>

            <button className="nav-next text-white opacity-60 hover:opacity-100 cursor-pointer transition-all scale-125">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7 7 7-7-7-7"/></svg>
            </button>

            <div className="relative w-32 md:w-56 h-[3px] bg-white/20 ml-2 hidden sm:block overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#6c2db5] shadow-[0_0_10px_#6c2db5] animate-progressBar"></div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;