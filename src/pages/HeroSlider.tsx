
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "Ավանդ EvocaTOUCH",
    subtitle: "բարձր տոկոսադրույքով",
    description: "Ներդրիր ավանդ Evocabank-ում՝ բարձր, շատ բարձր տոկոսներով:",
    buttonText: "Իմանալ ավելին",
    image: "https://www.evoca.am/static/media/touch-deposit.png", // Փոխիր իրական հղումներով
    bgColor: "bg-[#F3E8FF]"
  },
  {
    title: "Visa Travel Card",
    subtitle: "Քո ճամփորդության ընկերը",
    description: "Բացահայտիր աշխարհը բազմաթիվ առավելություններով:",
    buttonText: "Պատվիրել",
    image: "https://www.evoca.am/static/media/travel-card.png",
    bgColor: "bg-[#E5E7EB]"
  },
  {
    title: "Աշխատավարձային",
    subtitle: "նախագիծ",
    description: "Ստացիր ավելին Evoca-ից: Տար շատ ավելին...",
    buttonText: "Տեսնել",
    image: "https://www.evoca.am/static/media/salary.png",
    bgColor: "bg-[#7C3AED]"
  }
];

const HeroSlider = () => {
  return (
    <div className="w-full relative group pt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'} // Սահուն անցումների համար
        loop={true}
        speed={1000} // Անցման արագությունը (1 վայրկյան)
        autoplay={{
          delay: 4000, // 4 վայրկյանը մեկ կփոխվի
          disableOnInteraction: false, // Եթե օգտատերը թերթի, ավտոմատը չի անջատվի
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`w-full h-full ${slide.bgColor} flex items-center justify-center px-6 md:px-20 transition-all uppercase`}>
              <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Ձախ մաս - Տեքստ */}
                <div className="flex-1 animate-fadeIn">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                    {slide.title} <br />
                    <span className="text-[#6c2db5]">{slide.subtitle}</span>
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg max-w-[450px]">
                    {slide.description}
                  </p>
                  <button className="mt-8 bg-[#6c2db5] text-white px-10 py-3 rounded-full font-bold hover:shadow-xl transition-all">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Աջ մաս - Նկար */}
                <div className="flex-1 flex justify-center items-center">
                   <img src={slide.image} alt={slide.title} className="max-h-[350px] md:max-h-[450px] object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Ներքևի Նավիգացիան (Սլաքներ և Կետեր) */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-center gap-8">
        <button className="swiper-button-prev-custom text-[#6c2db5] cursor-pointer hover:scale-125 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>

        <div className="swiper-pagination-custom flex gap-3"></div>

        <button className="swiper-button-next-custom text-[#6c2db5] cursor-pointer hover:scale-125 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;