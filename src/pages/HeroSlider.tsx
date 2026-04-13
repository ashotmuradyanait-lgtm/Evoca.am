
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
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
    bgColor: "bg-[#7c7c7c]",
  },
  {
    title: "Vision",
    description: "Vision քարտ քո նախընտրած գույնով, դիզայնով և բազմաթիվ առավելություններից",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
    bgColor: "bg-[#4a4a4a]",
  },
  {
    title: "Infinite",
    description: "Վիզա վճարային համակարգի ամենաբարձր դասի քարտ",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
    bgColor: "bg-[#2d2d2d]",
  },
  {
    title: "Հիփոթեքային վարկեր",
    subtitle: "Evocabank-ում` ամենահարմար պայմաններով",
    description: "Ձեռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
    buttonText: "Դիմել",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
    bgColor: "bg-[#e2d5f7]",
  },
  {
    title: "UnionPay Gold",
    description: "Քո ուղեկիցը արտերկրում քո արագ և հարմար վճարումների համար",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
    bgColor: "bg-[#c1ae77]",
  },
  {
    title: "Ավանդ EvocaTOUCH",
    subtitle: "առավելագույն տոկոսադրույքով",
    description: "Ներդրիր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "bg-[#f3e8ff]",
  },
  {
    title: "Visa Travel Card",
    description: "Քո լավագույն ճամփորդական ընկերը` բազմաթիվ առավելություններով",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
    bgColor: "bg-[#f3f4f6]",
  },
  {
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
    bgColor: "bg-[#6c2db5]",
  }
];

const HeroSlider = () => {
  return (
    <div className="w-full h-screen relative bg-white pt-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={800}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
        pagination={{ 
          clickable: true, 
          el: '.custom-dots',
          renderBullet: (_, className) => `<span class="${className}"></span>`
        }}
        className="w-full h-full rounded-bl-[120px] md:rounded-bl-[240px] overflow-hidden"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center relative px-6 md:px-24 uppercase`}>
              <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Ձախ մաս - Տեքստ */}
                <div className="flex-1 text-white z-10 text-center md:text-left">
                  <h2 className="text-4xl md:text-[64px] font-[900] leading-[1.1] mb-8 tracking-tight animate-slideUp">
                    {slide.title}
                    {slide.subtitle && (
                      <span className="block text-xl md:text-3xl font-bold mt-2 lowercase opacity-95">
                         {slide.subtitle}
                      </span>
                    )}
                  </h2>
                  <p className="text-base md:text-[18px] opacity-90 normal-case mb-10 max-w-md font-medium leading-relaxed animate-slideUp delay-100">
                    {slide.description}
                  </p>
                  <button className="bg-white text-black px-12 py-3 rounded-full font-extrabold hover:bg-gray-100 transition-all normal-case text-[14px] animate-slideUp delay-200">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Աջ մաս - Նկար */}
                <div className="flex-1 flex justify-center md:justify-end items-center animate-zoomIn">
                  <img 
                    src={slide.image} 
                    className="max-h-[350px] md:max-h-[520px] w-auto object-contain drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.3)]" 
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* --- Navigation UI --- */}
        <div className="absolute bottom-16 left-0 w-full z-50 flex flex-col items-center">
          <div className="flex items-center gap-10">
            <button className="nav-prev text-white/60 hover:text-white cursor-pointer transition-all">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>

            <div className="custom-dots flex gap-3.5 items-center"></div>

            <button className="nav-next text-white/60 hover:text-white cursor-pointer transition-all">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7 7 7-7-7-7"/></svg>
            </button>

            <div className="relative w-48 h-[2.5px] bg-white/20 ml-6 hidden md:block overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#6c2db5] shadow-[0_0_10px_#6c2db5] animate-progress"></div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;