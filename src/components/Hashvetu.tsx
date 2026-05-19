import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Hashvetu: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Աուդիտորական եզրակացություն', path: '' },
    { name: 'Ֆինանսական հաշվետվություններ', path: '/finans' },
    { name: 'Ներդրողների համար', path: '/nerdrox' },
    { name: 'Կիսամյակային հաշվետվություն', path: '/kisamyak' },
    { name: 'Տարեկան հաշվետվություն', path: '/tarekan' }
  ];


  const reports = [
    { year: 2024, title: '2024 Աուդիտորական եզրակացություն' },
    { year: 2022, title: '2022 Աուդիտորական եզրակացություն' },
    { year: 2020, title: '2020 Աուդիտորական եզրակացություն' },
    { year: 2018, title: '2018 Աուդիտորական եզրակացություն' },
    { year: 2016, title: '2016 Աուդիտորական եզրակացություն' },
    { year: 2014, title: '2014 Աուդիտորական եզրակացություն' },
    { year: 2012, title: '2012 Աուդիտորական եզրակացություն' },
    { year: 2010, title: '2010 Աուդիտորական եզրակացություն' },
    { year: 2008, title: '2008 Աուդիտորական եզրակացություն' },
    { year: 2006, title: '2006 Աուդիտորական եզրակացություն' },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="/sakagin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հաշվետվություններ</span>
        <span>›</span>
        <span className="text-gray-800">Աուդիտորական եզրակացություն</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-10 leading-snug">
          Աուդիտորական եզրակացություն
        </h1>

   
        <div className="flex flex-col gap-6">
          {reports.map((report) => (
            <div key={report.year} className="flex flex-row-reverse md:flex-row items-center justify-between border-b border-gray-100 py-6">
              <div className="text-[24px] md:text-[32px] font-bold text-gray-400 w-24">
                {report.year}
              </div>
              <a href="#" className="flex items-center gap-4 text-[#1a1a1a] hover:text-[#6c2db5] transition-colors font-medium">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/337/337946.png" 
                  alt="Download" 
                  className="w-8 h-8 opacity-80"
                />
                {report.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hashvetu;