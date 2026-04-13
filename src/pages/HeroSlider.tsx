
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
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/static/media/salary.png",
    bgColor: "bg-[#6c2db5]",
  }
];

const HeroSlider = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden font-sans">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
        pagination={{ 
          clickable: true, 
          el: '.custom-dots-container',
          renderBullet: (_, className) => `<span class="${className}"></span>`
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center relative px-6 md:px-24 uppercase`}>
              <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Ձախ մաս - Տեքստ */}
                <div className="flex-1 text-white z-10 text-center md:text-left">
                  <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] mb-6 tracking-tight animate-slideUp">
                    {slide.title}
                    {slide.subtitle && (
                      <span className="block text-xl md:text-3xl font-medium mt-2 lowercase opacity-90 italic">
                         {slide.subtitle}
                      </span>
                    )}
                  </h2>
                  <p className="text-base md:text-[18px] opacity-80 normal-case mb-10 max-w-md font-medium leading-relaxed animate-slideUp delay-100">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black px-10 py-3 rounded-full font-bold hover:scale-105 transition-all normal-case text-[14px] shadow-lg animate-slideUp delay-200">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Աջ մաս - Նկար */}
                <div className="flex-1 flex justify-center md:justify-end items-center relative animate-zoomIn">
                  <img 
                    src={slide.image} 
                    className="max-h-[300px] md:max-h-[550px] w-auto object-contain drop-shadow-[-30px_30px_60px_rgba(0,0,0,0.4)]" 
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* --- Ինտերֆեյս (Սլաքներ, Կետեր, Գիծ) --- */}
        <div className="absolute bottom-12 left-0 w-full z-50 flex flex-col items-center">
          <div className="flex items-center gap-6">
            <button className="nav-prev text-white opacity-60 hover:opacity-100 cursor-pointer transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>

            <div className="custom-dots-container flex gap-3 items-center"></div>

            <button className="nav-next text-white opacity-60 hover:opacity-100 cursor-pointer transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7 7 7-7-7-7"/></svg>
            </button>

            {/* Մանուշակագույն Progress Line */}
            <div className="relative w-32 md:w-48 h-[2px] bg-white/20 ml-4 hidden sm:block overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#6c2db5] shadow-[0_0_8px_#6c2db5] animate-progressLine"></div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;