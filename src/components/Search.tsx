import React, { useState } from 'react';


interface ResultItemProps {
  title: string;
  description: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ title, description }) => (
  <div className="mb-6">
    <a href="#" className="text-lg font-bold text-gray-900 hover:text-[#7338bc] transition-colors">
      {title}
    </a>
    <p className="text-[15px] text-gray-700 mt-1 leading-snug">
      {description}
    </p>
  </div>
);

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('վարկ');

  return (
    <div className="min-h-screen bg-[#e8e8e8] font-sans">
      {/* Search Input Section */}
      <div className="bg-white pt-6 pb-8 border-b-4 border-[#7338bc]">
        <div className="max-w-4xl mx-auto px-4 relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full text-lg py-4 px-6 border border-gray-300 rounded-md focus:outline-none focus:border-[#7338bc] focus:ring-1 focus:ring-[#7338bc] shadow-sm text-gray-800"
          />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

     
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-10">
          Որոնման արդյունքներ
        </h1>

        <div className="space-y-10">
          
       
          <div>
            <h2 className="text-[22px] font-bold text-gray-900 mb-6">Բաժիններ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <ResultItem 
                title="Արժեթղթերի շուկա" 
                description="Արժեթղթերի շուկա կոնսյումեր..." 
              />
              <ResultItem 
                title="Առևտրի" 
                description="Արժեթղթերի շուկա սպասարկող հաճախորդների կենտրոններ" 
              />
            </div>
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            <div>
              <h2 className="text-[22px] font-bold text-gray-900 mb-6">Բլոգ</h2>
              <ResultItem 
                title="Հոդված: Վարկերի տեսակները" 
                description="Արժեթղթերի շուկա կամ ծրագրերը: Վարկերի սպառող տեսակները." 
              />
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-gray-900 mb-6">Կարիերա</h2>
              <ResultItem 
                title="Աշխատատեղ: Վարկային խորհրդատու" 
                description="Աշխատատեղ: Վարկային խորհրդատու :Աշխատատեղ" 
              />
            </div>
          </div>

         
          <div>
            <h2 className="text-[22px] font-bold text-gray-900 mb-6">Ապրանքներ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <ResultItem 
                title="Evoca Visa Vision" 
                description="Evoca Visa Vision նոր սպառողի համար: Հեծանիվի ձեռքբերման վարկ" 
              />
              <ResultItem 
                title="Հեծանիվի ձեռքբերման վարկ" 
                description="Հեծանիվի ձեռքբերման վարկ տրամադրվում վարկային արժեթղթերի ձեռքբերման համար" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;