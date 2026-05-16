import React, { useState } from 'react';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="w-full min-h-screen bg-white pt-24 px-4 md:px-8 flex flex-col">
      
      
      <div className="flex items-center w-full max-w-5xl mx-auto py-4 gap-6 bg-white border-b border-gray-100">
        <span className="text-[#333333] font-semibold text-[20px] whitespace-nowrap">
          Որոնում
        </span>

        <div className="relative flex-1">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full h-11 pl-3 pr-10 border border-gray-200 rounded text-gray-800 text-[16px] focus:outline-none focus:border-gray-400 transition-colors"
            placeholder="Մուտքագրեք փնտրվող բառը..."
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

      
      <div className="w-full max-w-5xl mx-auto mt-16 flex flex-col items-center justify-center flex-1 pb-32">
        <div className="w-full max-w-2xl bg-[#fbf9fe] border border-purple-50/60 rounded-3xl p-10 text-center flex flex-col items-center gap-4 shadow-xs">
          
         
          <div className="w-24 h-24 rounded-full bg-[#f3e8ff] flex items-center justify-center text-[#6c2db5] mb-2 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <div className="absolute inset-0 rounded-full border-2 border-[#6c2db5]/20 animate-ping opacity-75"></div>
          </div>
          
          <h3 className="text-[#1a1a1a] font-bold text-[18px]">Ի՞նչ եք փնտրում</h3>
          <p className="text-gray-400 text-[14px] max-w-md mx-auto leading-relaxed">
            Գտեք վարկեր, ավանդներ, քարտեր կամ բանկային ցանկացած այլ ծառայություն վայրկյանների ընթացքում:
          </p>
          
         
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {['Վարկեր', 'EvocaINVEST', 'Ավանդներ', 'Visa Gold', 'Դիջիթալ'].map((tag) => (
              <span 
                key={tag} 
                onClick={() => setSearchValue(tag)}
                className="px-4 py-1.5 bg-white border border-gray-100 rounded-full text-[13px] text-gray-500 font-medium cursor-pointer hover:border-[#6c2db5] hover:text-[#6c2db5] transition-colors shadow-2xs"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Search;