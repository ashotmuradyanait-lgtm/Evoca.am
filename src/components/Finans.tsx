import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Finans: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Աուդիտորական եզրակացություն', path: '/hashvetu' },
    { name: 'Ֆինանսական հաշվետվություններ', path: '' },
    { name: 'Ներդրողների համար', path: '' },
    { name: 'Կիսամյակային հաշվետվություն', path: '' },
    { name: 'Տարեկան հաշվետվություն', path: '' }
  ];

  // Տվյալների զանգված՝ ըստ վիդեոյի կառուցվածքի
  const reportsData = [
    { year: '2025', files: ['1-2025', '2-2025', '3-2025', '4-2025'] },
    { year: '2023', files: ['1-2023', '2-2023', '3-2023', '4-2023'] },
    { year: '2021', files: ['1-2021', '2-2021', '3-2021', '4-2021'] },
    { year: '2019', files: ['1-2019', '2-2019', '3-2019', '4-2019'] },
    { year: '2017', files: ['1-2017', '2-2017', '3-2017', '4-2017'] },
    { year: '2015', files: ['1-2015', '2-2015', '3-2015', '4-2015', 'Տարեկան 2015'] },
    { year: '2013', files: ['1-2013', '2-2013', '3-2013', '4-2013', 'Տարեկան 2013'] },
    { year: '2011', files: ['1-2011', '2-2011', '3-2011', '4-2011', 'Տարեկան 2011'] },
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      {/* Header */}
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

      {/* Submenu */}
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

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հաշվետվություններ</span>
        <span>›</span>
        <span className="text-gray-800">Ֆինանսական հաշվետվություններ</span>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 pb-24 mt-4">
        <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#1a1a1a] mb-12 leading-snug">
          Ֆինանսական հաշվետվություններ
        </h1>

        {/* Reports Grid */}
        <div className="space-y-12">
          {reportsData.map((data) => (
            <div key={data.year} className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-gray-100 pb-8">
              <div className="w-full md:w-24 text-[24px] md:text-[32px] font-bold text-[#1a1a1a]">{data.year}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {data.files.map((file) => (
                  <Link key={file} to="#" className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg group transition-colors">
                    <div className="text-[#6c2db5]">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M12 18v-6" />
                        <path d="M9 15l3 3 3-3" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-[#1a1a1a] group-hover:text-[#6c2db5]">{file}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Finans;