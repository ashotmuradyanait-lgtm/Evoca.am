import Menu from '../pages/Menu';
import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';

const Hashivner: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '/varker' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '/sqor' },
    { name: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում', path: '/nyut' }
  ];


  return (
    <div className="w-full bg-white">
      <Menu />
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
                         <div className="flex flex-col gap-1">
                          <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                            <img src="https://www.evoca.am/img/social-icons/fb-icon.png" alt="Facebook" />
                          </Link>
                          <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                            <img src="https://www.evoca.am/img/social-icons/twitter-icon.png" alt="Twitter" />
                          </Link>
                          <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold font-serif italic">
                            <img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" alt="LinkedIn" />
                          </Link>
                          <Link to="#" className="text-gray-400 hover:text-gray-200 transition-all text-center font-bold">
                            <img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" alt="Pinterest" />
                          </Link>
                        </div>
                      </div>
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Հաշիվներ</span>
        <span>›</span>
        <span className="text-gray-800">Հաշիվների բացում և սպասարկում</span>
      </div>

      
     

    </div>
  )
}
export default Hashivner;