import React from 'react';

const Arcanc: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
      
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[40px] md:text-[50px] font-bold text-[#1d1d1f] leading-tight">
            Անհատական <br /> փոխանցումներ
          </h2>
          
          <div className="space-y-4 text-[18px] text-gray-700 leading-relaxed">
            <p className="flex items-start gap-3">
              <span className="text-[#6c2db5] mt-1.5">•</span>
              Արագ դրամական փոխանցումներ
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#6c2db5] mt-1.5">•</span>
              Միջազգային և տեղական փոխանցումներ
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#6c2db5] mt-1.5">•</span>
              Փոխանցումներ ինչպես հաշվով, այնպես էլ առանց հաշվի բացման
            </p>
          </div>

          <button className="mt-8 bg-[#6c2db5] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#530498] transition-all shadow-lg hover:shadow-[#6c2db5]/20">
            Իմանալ ավելին
          </button>
        </div>

      
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/path-to-your-bank-interior-image.jpg" 
              alt="Bank Interior" 
              className="w-full h-auto object-cover"
            />
          </div>
          
        
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6c2db5]/10 rounded-full -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Arcanc;