import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Kariera: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subMenuItems = [
    { name: 'Մշակույթ', path: '' },
    { name: 'Առավելություններ', path: '/aravel' },
    { name: 'Հաճախ տրվող հարցեր', path: '/hacax' },
    { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '/yndunvel' },
  ];

  const mediaVideos = [
    { id: 1, title: 'Evoca New Year Corporate Party 2022', videoUrl: 'https://youtu.be/gowxeSi1iJs?si=ZYX_3cIq7nchRBcL', tag: 'Evoca 2022' },
    { id: 2, title: 'EVOCAISLAND Evoca Summer Party 2022', videoUrl: 'https://youtu.be/PvDYyPGb3RU?si=bMMvZJzs_coMjWU9', tag: 'EVOCAISLAND' },
    { id: 3, title: 'Attention!!! You have never seen anything like this', videoUrl: 'https://youtu.be/PF9JbEC-z-I?si=GoxNZFkkzFd6jVmk', tag: 'Attention' },
    { id: 4, title: 'Purple photoshoot with Evocabank', videoUrl: 'https://youtu.be/Abpc2dbNEdU?si=1VdAjwii1GvcAVXl', tag: 'Photoshoot' },
    { id: 5, title: 'Welcome to Evocabank!', videoUrl: 'https://youtu.be/X9yAx39078s?si=z1JDWTzDTIVSpsVu', tag: 'Welcome' },
    { id: 6, title: 'Evoca Corporate Party 2021', videoUrl: 'https://youtu.be/ygQS-e1-2I8?si=caFu2EmVchFKDaQh', tag: 'Corporate' },
    { id: 7, title: 'Evocabank neon art corporate party', videoUrl: 'https://youtu.be/VNVSaTULcBk?si=0rwcdFxsA29aq_4_', tag: 'Neon Art' },
  ];

  const teamReviews = [
    { title: 'Դինամիկ Պրպտող Զարգացող', name: 'Լիլիթ Գալստյան', role: 'Գլխավոր ֆինանսական տնօրեն' },
    { title: 'Կրեատիվ Նորարար Մանուշակագույն', name: 'Ալլա Զաքարյան', role: 'Վճարային գործիքների մասնագետ' },
    { title: 'Գույներ Էմոցիաներ Նորարարություններ', name: 'Գայանե Առաքելյան', role: 'Մասնաճյուղի կառավարիչ' },
    { title: 'Թրենդային Պահանջված Ուրախ', name: 'Հարություն Սահակյան', role: 'Անվտանգության մասնագետ' },
  ];

  const nextSlide = () => {
    if (currentIndex < mediaVideos.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  
  const getEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}&controls=0&modestbranding=1`;
    }
    return url;
  };

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
     
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-4">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center md:gap-6 mr-120 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
          <Link to="/practic" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-6">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 min-w-[800px]">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-6 md:px-8 transition-colors text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="relative w-full min-h-[450px] bg-gradient-to-r from-purple-100 via-pink-100 to-white overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black text-[#6c2db5] mb-6">Թ</h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              Ուրախ հաճելի է: Առօրյան լցված է նորարարություններով:
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Մենք անընդհատ զարգանում ենք ու կատարելագործվում:
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-[#6c2db5] to-[#a25ddc] rounded-[40px] transform rotate-12 flex items-center justify-center shadow-2xl relative">
              <span className="text-white text-9xl md:text-[180px] font-black transform -rotate-12 select-none">V</span>
              <div className="absolute -left-10 bottom-10 w-24 h-48 bg-yellow-400 rounded-lg -rotate-12 shadow-md flex flex-col justify-between p-2">
                <div className="w-full h-3 bg-white/40 rounded"></div>
                <div className="w-full h-3 bg-white/40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -left-20 top-1/4 w-72 h-72 border-[24px] border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -left-10 top-1/4 w-72 h-72 border-[12px] border-[#6c2db5] rounded-full opacity-20"></div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Ինչո՞ւ աշխատել Evoca-ում
        </h2>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="border-l-4 border-[#6c2db5] pl-6 italic text-lg text-gray-600 font-medium">
              «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցները ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <img 
                src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
                alt="Evoca Employee" 
                className="max-w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Մշակույթ</h2>
              <p className="text-purple-200 max-w-2xl">
                Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ Սովորում ենք, մեր փորձն ենք կիսում գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացե՛ք մեզ։
              </p>
            </div>
            
           
            <div className="flex gap-3 mt-6 md:mt-0">
              <button 
                type="button"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border border-white/40 flex items-center justify-center transition-colors ${currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button 
                type="button"
                onClick={nextSlide}
                disabled={currentIndex >= mediaVideos.length - 3}
                className={`w-12 h-12 rounded-full border border-white/40 flex items-center justify-center transition-colors ${currentIndex >= mediaVideos.length - 3 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/10'}`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {mediaVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="w-full min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between"
                >
                  
                  <div className="relative aspect-video bg-black flex items-center justify-center group">
                    <iframe
                      src={getEmbedUrl(video.videoUrl)}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <span className="absolute top-3 left-3 bg-[#6c2db5] text-white text-xs px-2 py-1 rounded font-bold z-10 pointer-events-none">
                      {video.tag}
                    </span>
                  </div>
                  <div className="p-5 bg-white flex-grow flex items-center">
                    <h3 className="font-bold text-sm md:text-base text-gray-800 line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Հարցրու՛ մեր թիմին */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {teamReviews.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between relative">
              <span className="text-5xl text-purple-200 font-serif absolute top-2 left-2">“</span>
              <div className="pt-6">
                <h3 className="text-xl font-black text-[#6c2db5] mb-4 leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Դառնալ թիմի անդամ</h2>
        <p className="text-center text-gray-600 mb-10 text-sm">
          Եթե ցանկանում ես միանալ <span className="text-[#6c2db5] font-bold">EvocaTEAM</span>-ին, կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Անուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ազգանուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Հեռախոսահամար <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+374</span>
              <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-r-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Էլ. հասցե <span className="text-red-500">*</span></label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook էջ</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn էջ</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ուղեկցող նամակ</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]"></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Կցե՛ք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50">
              <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="bg-[#6c2db5] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#530498] transition-colors shadow-md w-full sm:w-auto">
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Kariera;