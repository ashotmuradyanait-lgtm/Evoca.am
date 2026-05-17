import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mrcanakner: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  const subMenuItems = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '' },
    { name: 'Կարծիքներ', path: '/karciq' },
    { name: 'CSR', path: '/corp' },
  ];

  const awards = [
    { year: '2025 թ.', title: 'Best AI-Powered Mobile App', subtitle: 'The Digital Banker', logo: 'https://www.evoca.am/images-cache/awards/1/17701876298505/140x65.png' },
    { year: '2025 թ.', title: 'Highest Cashless Achievement', subtitle: 'Visa International', logo: 'https://www.evoca.am/images-cache/awards/1/17696923392309/140x65.png' },
    { year: '2025 թ.', title: 'Լավագույն թվային բանկը Հայաստանում 2025', subtitle: 'Global Finance', logo: 'https://www.evoca.am/images-cache/awards/1/17635322442852/140x65.png' },
    { year: '2025 թ.', title: 'Ամենանորարար ՓՄՁ վարկավորման գործընկեր', subtitle: 'International Finance Magazine', logo: 'https://www.evoca.am/images-cache/awards/1/17574258664115/140x65.jpg' },
    { year: '2025 թ.', title: 'Լավագույն Բանկը Հայաստանում 2025', subtitle: 'International Investor Magazine', logo: 'https://www.evoca.am/images-cache/awards/1/1751877049822/140x65.png' },
    { year: '2025 թ.', title: 'Award for the Development of International Banking', subtitle: 'BACEE', logo: 'https://www.evoca.am/images-cache/awards/1/17518766542368/140x65.jpg' },
    { year: '2025 թ.', title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', subtitle: 'The Digital Banker', logo: 'https://www.evoca.am/images-cache/awards/1/17383050368673/140x65.png' },
    { year: '2025 թ.', title: 'Best Mobile Banking in Armenia', subtitle: 'Global Business & Finance Magazine', logo: 'https://www.evoca.am/images-cache/awards/1/17375257427062/140x65.png' },
    { year: '2025 թ.', title: 'Most Innovative Digital Bank in Armenia', subtitle: 'Global Business & Finance Magazine', logo: 'https://www.evoca.am/images-cache/awards/1/17313099132025/140x65.jpg' },
    { year: '2025 թ.', title: 'Excellence in New Product Development', subtitle: 'Mastercard', logo: 'https://www.evoca.am/images-cache/awards/1/17241397647186/140x65.png' },
    { year: '2024 թ.', title: 'Highest Cashless Ratio Achievement', subtitle: 'Visa International', logo: 'https://www.evoca.am/images-cache/awards/1/17310464503321/140x65.png' }
  ];

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAwards = awards.slice(indexOfFirstItem, indexOfLastItem);

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
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Մրցանակներ</span>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Մրցանակներ</h1>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentAwards.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#fcfaff] border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <span className="text-[#6c2db5] font-bold text-[18px] block mb-1">{item.year}</span>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#1a1a1a] leading-snug mb-4 line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50/50">
                <span className="text-gray-400 text-[13px] font-medium max-w-[60%] leading-tight">
                  {item.subtitle}
                </span>
                <div className="w-[110px] h-[50px] flex items-center justify-center bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                  <img 
                    src={item.logo} 
                    alt="Award Logo" 
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center items-center gap-2 mt-14">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-800 transition-colors text-[18px]"
          >
            ‹
          </button>
          
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full font-bold text-[15px] transition-all duration-300 ${
                currentPage === page
                  ? 'bg-[#6c2db5] text-white shadow-md'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-800 transition-colors text-[18px]"
          >
            ›
          </button>
        </div>
      </div>

    </div>
  );
};

export default Mrcanakner;