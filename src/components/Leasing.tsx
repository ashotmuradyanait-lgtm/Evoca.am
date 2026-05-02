import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Leasing: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  const subMenuItems = [
    { name: 'Վարկեր', path: '/varker' },
    { name: 'Վարկային պատմություն և սքոր', path: '/varkayin-patmutyun' },
    { name: 'Կարևոր տեղեկատվություն', path: '/karevvor-texekatvutyun' }
  ];

  const filters = [
    { name: 'Բոլորը', path: '/varker' },
    { name: 'Գրավով ապահովված սպառողական վարկեր', path: '/grav' },
    { name: 'Անգրավ սպառողական վարկեր', path: '/angrav' },
    { name: 'Հիփոթեքային վարկեր', path: '/hipotek' },
    { name: 'Ավտովարկ', path: '/avto' },
    { name: 'Լիզինգ', path: '/leasing' },
    { name: 'Օնլայն վարկեր', path: '/online' }
  ];

  return (
    <div className="w-full bg-white">
      <Menu/>
      <div className="w-full bg-[#6c2db5] text-white">
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

      {/* 2. Breadcrumbs (Հասցեի շղթա) */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span>
        <span>›</span>
        <span className="text-gray-800">Վարկեր</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[48px] font-bold text-[#1a1a1a]">Վարկեր</h1>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap gap-3 mb-10">
        {filters.map((filter) => (
          <NavLink
            key={filter.path}
            to={filter.path}
            onClick={() => setActiveFilter(filter.name)}
            className={({ isActive }) => 
              `px-6 py-2.5 rounded-full text-[14px] font-medium transition-all
              ${isActive 
                ? 'bg-[#6c2db5] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }
          >
            {filter.name}
          </NavLink>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold  text-[#1a1a1a] mb-4">
              Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
                Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ <br />
                ճկուն պայմաններով և մատչելի գնով:  
          </p>

            {/* Թվային տվյալներ */}
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">50Մլն ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Գումար</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Մինչև</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">60 ամիս</span>
                <span className="text-gray-400 text-[12px] mt-1">Ժամկետ</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mb-1">Սկսած</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">14%</span>
                <span className="text-gray-400 text-[12px] mt-1">Տոկոսադրույքից</span>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>
      </div>
  )
}
export default Leasing;