import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-6 lg:pt-14 px-4 lg:px-0">
      
      <Link to="/">
        <img 
          className="h-[80px] lg:h-[140px] w-[200px] lg:w-[300px] object-contain" 
          src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
          alt="Evocabank Logo" 
        />
      </Link>
     
      <nav className="hidden lg:flex gap-6 text-gray-800 font-medium text-[15px]">
        <Link to="/varker" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
        <Link to="/qarter" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Քարտեր</Link>
        <Link to="/avandner" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
        <Link to="/hashivner" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</Link>
        <Link to="/poxancum" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Փոխանցումներ</Link>
        <Link to="/arzetxter" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթեր</Link>
        <Link to="/salary" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaSALARY</Link>
        <Link to="/evocatouch" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">EvocaTOUCH</Link>
      </nav>

   
      <Link to="/evocaonline" className="px-0 lg:px-20">
        <p className="text-white bg-[#6c2db5] h-[35px] w-[150px] hover:bg-[#530498] text-center rounded-3xl p-1">EvocaONLINE</p>
      </Link>
    </div>
  );
}

export default Menu;