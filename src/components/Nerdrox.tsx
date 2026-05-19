import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nerdrox: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  // Խմբավորված տվյալներ՝ 4 հատանոց շարքերով
  const presentationData = [
    {
      year: '2025',
      items: [
        { title: 'Q1 2025', img: 'https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg' },
        { title: 'Q2 2025', img: 'https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png' },
        { title: 'Q3 2025', img: 'https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg' },
        { title: 'Q4 2025', img: 'https://www.evoca.am/images-cache/presentations/1/16524487203697/310x249.jpg' },
      ]
    },
    {
      year: '2024',
      items: [
        { title: 'Q1 2024', img: 'https://www.evoca.am/images-cache/presentations/1/16164091530204/310x249.jpg' },
        { title: 'Q2 2024', img: 'https://www.evoca.am/images-cache/presentations/1/16164099260851/310x249.png' },
        { title: 'Q3 2024', img: 'https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg' },
        { title: 'Q4 2024', img: 'https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png' },
      ]
    }
  ];

  const subMenuItems = [
    { name: 'Աուդիտորական եզրակացություն', path: '/hashvetu' },
    { name: 'Ֆինանսական հաշվետվություններ', path: '/finans' },
    { name: 'Ներդրողների համար', path: '' },
    { name: 'Կիսամյակային հաշվետվություն', path: '' },
    { name: 'Տարեկան հաշվետվություն', path: '' }
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
        <span className="cursor-pointer text-gray-800">Ներդրողների համար</span>
        <span>›</span>
        <span className="text-gray-800">Ներդրողների համար</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-12 leading-snug">
          Ֆինանսական հաշվետվություններ
        </h1>

       <a href="https://www.evoca.am/files/presentations/1/17663899054056.pdf">
        <div className="flex flex-col gap-12">
          {presentationData.map((group) => (
            <div key={group.year} className="flex flex-col gap-6">
              <h2 className="text-[24px] font-bold text-[#1a1a1a]">{group.year}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded-lg shadow-sm" />
                    <p className="text-[14px] font-bold text-[#1a1a1a]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </a>
      </div>
    </div>
  )
}
export default Nerdrox;