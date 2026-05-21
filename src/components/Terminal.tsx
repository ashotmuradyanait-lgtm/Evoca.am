import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Terminal: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  
  
  const [formData, setFormData] = useState({
    companyType: 'Իրավաբանական անձ',
    companyName: '',
    taxCode: '',
    activityAddress: '',
    webSite: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    terminalType: 'POS տերմինալ',
  });

  const subMenuItems = [
    { name: 'V-POS Տերմինալ', path: '/digital' },
    { name: 'POS Տերմինալ', path: '/pos' },
    { name: 'Սակագներ', path: '/sak' },
    { name: 'Տերմինալի տեղադրման հայտ', path: '' },
    { name: 'Evoca Mobile POS՝ mPOS', path: '/mpos' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Հայտի տվյալները:', formData);
    alert('Ձեր հայտն ընդունված է։ Մեր մասնագետը շուտով կկապնվի Ձեզ հետ։');
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800 antialiased selection:bg-[#6c2db5] selection:text-white">
      
   
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 pt-6 lg:pt-14 px-4 max-w-[1400px] mx-auto">
        <Link to="/" className="flex justify-center lg:justify-start w-full lg:w-auto">
          <img 
            className="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[140px] w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6 text-gray-800 font-medium text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] w-full lg:w-auto px-2">
          <Link to="/biznes" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Լիզինգ</Link>
          <Link to="/hashiv" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Հաշիվներ</Link>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Ավանդներ</Link>
          <Link to="/shuka" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Արժեթղթերի շուկա</Link>
          <Link to="/arevtur" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Առևտրի ֆինանսավորում</Link>
          <Link to="/digital" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Դիջիթալ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold whitespace-nowrap">Այլ</Link>
        </nav>
        
        <Link to="/evocaonline" className="mt-2 lg:mt-0 flex justify-center items-center w-full lg:w-auto">
          <span className="text-white bg-[#6c2db5] h-[38px] sm:h-[40px] w-[160px] sm:w-[180px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-medium transition-colors text-center text-[13px] sm:text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white mt-6 overflow-x-auto scrollbar-none">
        <div className="max-w-[1400px] mx-auto flex items-center h-[50px] sm:h-[60px] px-4 md:px-6 whitespace-nowrap">
          {subMenuItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-3 sm:px-5 md:px-8 transition-colors text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-wide
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 sm:py-6 flex items-center gap-2 text-gray-400 text-[11px] sm:text-[12px] md:text-[13px] overflow-x-auto whitespace-nowrap">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Դիջիթալ</span>
        <span>›</span>
        <span className="text-gray-800 font-medium">Տերմինալի տեղադրման հայտ</span>
      </div>

      
      <div className="max-w-[800px] mx-auto px-4 pb-20">
        <div className="text-center my-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Տերմինալի տեղադրման օնլայն հայտ</h1>
          <p className="text-sm md:text-base text-gray-500 max-w-[600px] mx-auto">
            Լրացրեք ստորև ներկայացված դաշտերը, և մեր մասնագետը 1 աշխատանքային օրվա ընթացքում կկապնվի Ձեզ հետ:
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 md:p-10 space-y-6">
          
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Կազմակերպության տեսակը</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer font-medium">
                <input 
                  type="radio" 
                  name="companyType" 
                  value="Իրավաբանական անձ"
                  checked={formData.companyType === 'Իրավաբանական անձ'}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#6c2db5]" 
                />
                Իրավաբանական անձ
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer font-medium">
                <input 
                  type="radio" 
                  name="companyType" 
                  value="Անհատ Ձեռնարկատեր (ԱԿ)"
                  checked={formData.companyType === 'Անհատ Ձեռնարկատեր (ԱԿ)'}
                  onChange={handleInputChange}
                  className="w-4 h-4 accent-[#6c2db5]" 
                />
                Անհատ Ձեռնարկատեր (ԱԿ)
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Անվանում / Անուն Ազգանուն *</label>
              <input 
                type="text" 
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Օր․՝ Էվոկաբանկ ՓԲԸ"
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">ՀՎՀՀ (Հարկ վճարողի հաշվառման համար) *</label>
              <input 
                type="text" 
                name="taxCode"
                required
                maxLength={8}
                value={formData.taxCode}
                onChange={handleInputChange}
                placeholder="8 նիշանոց կոդը"
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Գործունեության իրականացման հասցե *</label>
            <input 
              type="text" 
              name="activityAddress"
              required
              value={formData.activityAddress}
              onChange={handleInputChange}
              placeholder="Օր․՝ ք․ Երևան, Հանրապետության 44/2"
              className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Կայքի հասցե (եթե դիմում եք V-POS-ի համար)</label>
            <input 
              type="url" 
              name="webSite"
              value={formData.webSite}
              onChange={handleInputChange}
              placeholder="www.example.am"
              className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Կոնտակտային անձ *</label>
              <input 
                type="text" 
                name="contactPerson"
                required
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="Անուն Ազգանուն"
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Հեռախոսահամար *</label>
              <input 
                type="tel" 
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+374 __ __ __ __"
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Էլեկտրոնային հասցե *</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@mail.com"
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#6c2db5] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1.5">Տերմինալի տեսակը *</label>
              <select 
                name="terminalType"
                value={formData.terminalType}
                onChange={handleInputChange}
                className="w-full h-[46px] px-4 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-[#6c2db5] transition-colors cursor-pointer"
              >
                <option value="POS տերմինալ">Ֆիզիկական POS տերմինալ</option>
                <option value="V-POS տերմինալ">Վիրտուալ V-POS (Կայքի համար)</option>
                <option value="mPOS">Evoca Mobile mPOS</option>
                <option value="ՀԴՄ-POS">Համակցված ՀԴՄ-POS</option>
              </select>
            </div>
          </div>

          {/* Հաստատման կոճակ */}
          <div className="pt-4 flex justify-center">
            <button 
              type="submit"
              className="w-full sm:w-[240px] h-[48px] text-white bg-[#6c2db5] hover:bg-[#530498] rounded-full font-semibold text-sm transition-colors shadow-md shadow-purple-100"
            >
              Ուղարկել հայտը
            </button>
          </div>

        </form>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>

    </div>
  );
};

export default Terminal;