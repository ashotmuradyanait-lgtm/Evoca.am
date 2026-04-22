const Video = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans bg-gray-50">
      
      {/* Հիմնական կոնտեյներ */}
      <div className="relative w-full bg-[#6600cc] min-h-[650px] rounded-tl-[120px] rounded-br-[120px] flex items-center p-8 md:p-16 shadow-[0_20px_50px_rgba(102,0,204,0.3)] overflow-hidden">
        
        {/* --- Ֆոնային Ակտիվ Անիմացիաներ --- */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Վարդագույն Քառակուսիներ */}
          <div className="absolute top-10 left-[5%] w-12 h-12 bg-pink-400/20 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[60%] left-[15%] w-8 h-8 bg-pink-500/30 rounded rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-[10%] w-16 h-16 bg-pink-300/20 rounded-2xl animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-1/2 right-[20%] w-6 h-6 bg-pink-400/40 rounded animate-ping"></div>

          {/* Դեղին Քառակուսիներ */}
          <div className="absolute top-[15%] right-[25%] w-10 h-10 bg-amber-400/20 rounded-lg animate-bounce" style={{ animationDuration: '5.5s' }}></div>
          <div className="absolute bottom-[10%] left-[30%] w-14 h-14 bg-amber-300/20 rounded-xl rotate-12 animate-pulse" style={{ animationDuration: '3.5s' }}></div>
          <div className="absolute top-1/3 left-10 w-6 h-6 bg-amber-500/40 rounded animate-ping" style={{ animationDuration: '2.5s' }}></div>

          {/* Դեղին Եռանկյունիներ */}
          <div className="absolute top-[40%] right-[5%] opacity-30 animate-bounce" 
               style={{ width: 0, height: 0, borderLeft: '25px solid transparent', borderRight: '25px solid transparent', borderBottom: '45px solid #fbbf24', animationDuration: '4s' }}>
          </div>
          <div className="absolute bottom-[30%] left-[20%] opacity-20 animate-spin" 
               style={{ width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '35px solid #fbbf24', animationDuration: '12s' }}>
          </div>

          {/* Վարդագույն Եռանկյունիներ */}
          <div className="absolute top-20 right-[40%] opacity-25 animate-pulse" 
               style={{ width: 0, height: 0, borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '55px solid #f472b6', animationDuration: '5s' }}>
          </div>
          <div className="absolute bottom-10 right-[45%] opacity-30 animate-bounce" 
               style={{ width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '30px solid #f472b6', animationDuration: '3.5s' }}>
          </div>

          {/* Glow Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
          
          {/* 1. Notebook Section (Լիովին ստատիկ) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[550px]">
              <div className="bg-black p-[1.5%] rounded-t-xl border-x-[6px] border-t-[6px] border-[#222] shadow-2xl">
                <div className="aspect-video bg-black overflow-hidden relative">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="video.mp4" 
                    title="EvocaTouch"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="h-3 bg-[#333] rounded-b-lg w-[108%] -ml-[4%] shadow-2xl"></div>
              <div className="h-1 bg-[#111] w-[20%] mx-auto rounded-b-md"></div>
            </div>
          </div>

          {/* 2. Phone Section (Լիովին ստատիկ) */}
          <div className="lg:col-span-3 flex justify-center lg:pt-30">
            <div className="relative w-44 h-[350px] bg-black rounded-[30px] border-[7px] border-[#1a1a1a] overflow-hidden shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                className="w-full h-full object-cover"
                alt="phone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center text-white font-black text-xl italic uppercase tracking-tighter">
                evoca
              </div>
            </div>
          </div>

          {/* 3. Content Section */}
          <div className="lg:col-span-4 space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                Օնլայն և <br />
                <span className="text-purple-300">մոբայլ բանկ</span>
              </h1>
              <p className="text-base opacity-80 leading-relaxed font-light max-w-sm">
                Evocabank-ը արագ, պարզ և նորարարական ծառայություններ մատուցող բանկ է՝ Ձեր հարմարավետության համար:
              </p>
            </div>
            
            <button className="bg-white text-[#6600cc] px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl active:scale-95">
              Դառնալ հաճախորդ
            </button>

            <div className="pt-8 flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    className="w-full h-full"
                    alt="qr"
                  />
                </div>
                <span className="text-xs font-bold leading-snug opacity-90 uppercase tracking-widest">
                  Ներբեռնեք <br /> <span className="text-purple-300">հավելվածը</span>
                </span>
              </div>
              
              {/* App Store & Google Play (Առանց hover էֆեկտների) */}
              <div className="flex gap-3">
                <a href="https://apps.apple.com/am/app/evocatouch/id970309076">
                   <img 
                      src="https://cdn.prod.website-files.com/5c67cca1c8252c4258aad60b/6508be8577cc9ad9700103a4_Download_on_the_App_Store_Badge.svg.png" 
                      alt="App Store" 
                      className="h-10 w-auto"
                   />
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank">
                   <img 
                      src="https://bciconline.com/wp-content/uploads/2025/09/1664287128google-play-store-logo-png.png" 
                      alt="Google Play" 
                      className="h-10 w-auto"
                   />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;