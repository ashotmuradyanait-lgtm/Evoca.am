import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Սահմանում ենք սլայդի տիպը, որ սխալներ չլինեն
interface Slide {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  bgColor: string;
  uiColor: string;
  btnBg: string;
  btnText: string;
}

const slides: Slide[] = [
  {
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "#d1d5d8", 
    uiColor: "#212121",
    btnBg: "#6c2db5",
    btnText: "#ffffff"
  },
  {
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "#6a3db5", 
    uiColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#6c2db5"
  },
  {
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank: Մենք սպասում ենք Ձեր զանգին...",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "#000000", 
    uiColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#101010"
  },
  {
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "#282b30", 
    uiColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#4c4c4c"
  },
  {
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "#030303", 
    uiColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#101010"
  },
  {
    title: "Հիփոթեքային վարկեր Evocabank-ում՝ ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը՝ ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "rgb(230, 220, 255)", 
    uiColor: "#212121", 
    btnBg: "#6c2db5", 
    btnText: "#ffffff"
  },
  {
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
    bgColor: "#b2a36e", 
    uiColor: "#ffffff",
    btnBg: "#ffffff",
    btnText: "#b2a36e"
  },
  {
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի՛ր ավանդ Evocabank-ում՝ բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "#f8d4f9", 
    uiColor: "#212121",
    btnBg: "#6c2db5",
    btnText: "#ffffff"
  }
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = slides[activeIndex];

  return (
    <div className="w-full h-screen relative overflow-hidden bg-white font-sans antialiased">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(s: SwiperClass) => setActiveIndex(s.realIndex)}
        navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
        pagination={{ clickable: true, el: '.custom-dots' }}
        className="w-full h-[85vh] rounded-bl-[120px] md:rounded-bl-[220px] transition-colors duration-1000"
        style={{ backgroundColor: currentSlide.bgColor }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className="w-full h-full flex items-center justify-center px-6 md:px-24">
                <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-between gap-12">
                  
                  {/* Content */}
                  <div className={`flex-1 z-20 text-center md:text-left transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 
                      className="text-4xl md:text-[45px] lg:text-[28px] font-semibold leading-[1.1] mb-6 uppercase tracking-tighter"
                      style={{ color: slide.uiColor }}
                    >
                      {slide.title}
                    </h3>
                    
                    <p 
                      className="text-lg md:text-xl mb-12 max-w-xl font-normal leading-relaxed tracking-tight"
                      style={{ color: slide.uiColor, opacity: 0.8 }}
                    >
                      {slide.description}
                    </p>

                    <button 
                      className="px-14 py-4 rounded-full font-black text-[15px] uppercase shadow-2xl transition-all hover:scale-105 active:scale-95"
                      style={{ backgroundColor: slide.btnBg, color: slide.btnText }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>

                  {/* Image */}
                  <div className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <img 
                      src={slide.image} 
                      className="max-h-[350px] md:max-h-[500px] lg:max-h-[550px] w-auto object-contain drop-shadow-2xl" 
                      alt={slide.title} 
                    />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Buttons & Pagination */}
        <div className="absolute bottom-12 left-0 w-full z-50 flex justify-center">
          <div className="flex items-center gap-8">
            <button className="nav-prev cursor-pointer transition-transform hover:scale-125 p-2" style={{ color: currentSlide.uiColor }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <div className="custom-dots flex gap-4"></div>
            <button className="nav-next cursor-pointer transition-transform hover:scale-125 p-2" style={{ color: currentSlide.uiColor }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7 7 7-7-7-7"/></svg>
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;