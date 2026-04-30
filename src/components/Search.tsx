import React, { useState } from 'react';

const Search: React.FC = () => {
 
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex items-center w-full max-w-5xl mx-auto py-4 gap-6 bg-white">
      <span className="text-[#333333] font-semibold text-[20px] whitespace-nowrap">
        Որոնում
      </span>

      <div className="relative flex-1">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full h-11 pl-3 pr-10 border border-gray-200 rounded text-gray-800 text-[16px] focus:outline-none focus:border-gray-400 transition-colors"
        />
        
       
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

     
      <button 
        onClick={() => setSearchValue('')}
        className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
        aria-label="Մաքրել"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
    </div>
  );
};

export default Search;