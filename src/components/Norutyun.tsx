import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../pages/Menu';

const Norutyun: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };



  return (
    <div className="w-full bg-white font-sans">
      <Menu />
    
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px] overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Արժեթղթեր</span>
        <span>›</span>
        <span className="text-gray-800">Պարտատոմսեր</span>
      </div>

      </div>
  )
}
export default Norutyun