

function Header() {
  return (
    <header className="bg-white">
        <div className="bg-[#f4f4f4] py-2 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] text-gray-600">
          <div className="flex gap-4">
            <p className="">Անհատ</p>
            <p className="">Բիզնես</p>
          </div>
          <div className="flex items-center gap-4">
            <span>+374 10 271111</span>
            <div className="flex gap-2 border-l pl-4">
              <span className="cursor-pointer hover:text-black font-bold text-black">ARM</span>
              <span className="cursor-pointer hover:text-black">RUS</span>
              <span className="cursor-pointer hover:text-black">ENG</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Հիմնական Header (Main Navigation) */}
      <div className="bg-white py-4 px-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-[#eb162b] text-3xl font-black italic tracking-tighter">
              evocabank
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800">
            <a href="#" className="hover:text-[#eb162b] transition-colors">Քարտեր</a>
            <a href="#" className="hover:text-[#eb162b] transition-colors">Վարկեր</a>
            <a href="#" className="hover:text-[#eb162b] transition-colors">Ավանդներ</a>
            <a href="#" className="hover:text-[#eb162b] transition-colors">Փոխանցումներ</a>
            <a href="#" className="hover:text-[#eb162b] transition-colors">Այլ ծառայություններ</a>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-gray-700 font-medium hover:text-[#eb162b]">
              <i className="fas fa-search"></i> {/* Որոնման նշան */}
            </button>
            <button className="bg-[#eb162b] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:bg-red-700 transition-all uppercase shadow-md">
              EvocaTouch
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;