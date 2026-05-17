import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Gorc: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  const subMenuItems = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '/karciq' },
    { name: 'CSR', path: '/corp' },
  ];

  const partners = [
    'https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17072192635138/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17072192435541/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104583322099/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/17689930369925/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104594273635/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/1610459808737/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104599802947/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104603665095/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104604109064/348x150_grayscale.png',
    'https://www.evoca.am/images-cache/partners/1/16104604382658/348x150_grayscale.png',
  ];

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPartners = partners.slice(indexOfFirstItem, indexOfLastItem);

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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
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

     
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
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
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span >
        <span>›</span>
        <span className="text-gray-800">Գործընկերներ</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Գործընկերներ</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentPartners.map((partnerUrl, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center h-[180px] shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <img
                src={partnerUrl}
                alt={`Partner ${indexOfFirstItem + index + 1}`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            onClick={() => setCurrentPage(1)}
            className={`w-10 h-10 rounded-full font-bold text-[15px] transition-all duration-300 ${
              currentPage === 1
                ? 'bg-[#6c2db5] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`w-10 h-10 rounded-full font-bold text-[15px] transition-all duration-300 ${
              currentPage === 2
                ? 'bg-[#6c2db5] text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            2
          </button>
        </div>
      </div>

    </div>
  );
};

export default Gorc;