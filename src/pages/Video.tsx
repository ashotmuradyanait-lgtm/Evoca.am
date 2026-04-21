const Video = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* Մեկ հիմնական ֆոն՝ width-ը փոքրացրած և ձախ վերևը կլորացրած */}
      <div className="relative w-full  bg-[#6600cc]  min-h-[600px] rounded-tl-[100px] flex items-center p-8 md:p-16 shadow-2xl">
        
        {/* Background Animated Shapes (Լողացող էլեմենտներ) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-[15%] w-10 h-10 bg-white/10 rounded-lg rotate-45 animate-bounce" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-20 right-[20%] w-12 h-12 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-[10%] w-6 h-6 border border-white/20 rotate-12 animate-spin" style={{ animationDuration: '6s' }}></div>
          <div className="absolute top-1/2 right-12 opacity-20 animate-pulse text-3xl text-white">〰️</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
          
          {/* 1. Notebook Section - Առանց ավելորդ QR պատկերի */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[620px]">
              {/* MacBook Screen */}
              <div className="bg-black p-[2%] rounded-t-xl border-x-[8px] border-t-[8px] border-[#1a1a1a]">
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
              {/* MacBook Base */}
              <div className="h-3 bg-[#222] rounded-b-lg w-[106%] -ml-[3%] shadow-xl"></div>
            </div>
          </div>

          {/* 2. Phone Section */}
          <div className="lg:col-span-3 flex justify-center pt-32 pr-20">
            <div className="relative w-40 h-[300px] bg-black rounded-[20px] border-[6px] border-[#1a1a1a] overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                className="w-full h-full "
                alt="phone-display"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center text-white font-black text-xl italic uppercase tracking-tighter">evoca</div>
            </div>
          </div>

          {/* 3. Content Section */}
          <div className="lg:col-span-4 space-y-6 text-white">
            <h1 className="text-4xl font-black leading-tight tracking-tight">
              Օնլայն և մոբայլ բանկ
            </h1>
            <p className="text-sm opacity-80 leading-relaxed font-light">
              Evocabank-ը արագ, պարզ և նորարարական ծառայություններ մատուցող բանկ է:
            </p>
            
            <button className="bg-white  text-[#6600cc] px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors shadow-lg shadow-black/10">
              Դառնալ հաճախորդ
            </button>

            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1 shadow-inner">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    className="w-full h-full"
                    alt="qr"
                  />
                </div>
                <span className="text-[11px] font-bold leading-tight opacity-90 uppercase tracking-wider">
                  Ներբեռնեք <br /> հավելվածները
                </span>
              </div>
              <div className="flex gap-2">
                <a className="h-10 w-24 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-[8px] font-bold cursor-pointer hover:bg-black/60 transition-colors" href="https://apps.apple.com/am/app/evocatouch/id970309076"></a>
                <a className="h-10 w-24 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center text-[8px] font-bold cursor-pointer hover:bg-black/60 transition-colors" href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US"></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Video;