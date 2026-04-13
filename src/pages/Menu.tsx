
function Menu() {
  return (
    <div className="flex items-center gap-6 pt-14   ">
      {/* Լոգոն */}
      <img 
        className="h-[140px] w-[300px] object-contain" 
        src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
        alt="Evocabank Logo" 
      />
      
      <nav className="flex gap-6 text-gray-800 font-medium text-[15px]">
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Քարտեր</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Փոխանցումներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթեր</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaSALARY</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaTOUCH</p>
      </nav>
      <div className="px-20">
      <p className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-2">EvocaONLINE</p>
      </div>
    </div>
  );
}

export default Menu;