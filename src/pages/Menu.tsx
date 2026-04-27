import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="flex items-center gap-6 pt-14   ">
      
      <Link to="/">
      <img 
        className="h-[140px] w-[300px] object-contain" 
        src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
        alt="Evocabank Logo" 
      />
      </Link>
     
      
      <nav className="flex gap-6 text-gray-800 font-medium text-[15px]">
        <Link to="/varker" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Քարտեր</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Փոխանցումներ</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթեր</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaSALARY</p>
        <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaTOUCH</p>
      </nav>
      <Link to="/evocaonline" className="px-20">
      <p className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-1">EvocaONLINE</p>
      </Link>
    </div>
  );
}

export default Menu;