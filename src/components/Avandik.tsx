import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Avandik: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const subMenuItems = [
    { name: 'Վարկեր ֆիզիկական անձանց', path: '/sakagin' },
    { name: 'Վարկեր իրավաբանական անձանց', path: '/irav' },
    { name: 'Միջնորդավճարների սակագները', path: '/mijnord' },
    { name: 'Ավանդների սակագներ', path: '' },
    { name: 'Արխիվ', path: '' }
  ];

  const depositDetails = [
    {
      title: '«Evoca-դասական» ավանդ',
      rows: [
        { term: '30-90 օր', amd: '6.0%', usd: '1.5%' },
        { term: '91-180 օր', amd: '7.5%', usd: '2.0%' },
        { term: '181-365 օր', amd: '9.5%', usd: '3.0%' },
        { term: '366-730 օր', amd: '10.0%', usd: '3.5%' }
      ]
    },
    {
      title: '«Կուտակային» ավանդ',
      rows: [
        { term: '365 օր', amd: '8.5%', usd: '2.5%' },
        { term: '730 օր', amd: '9.0%', usd: '3.0%' }
      ]
    },
    {
      title: '«Մանկական» ավանդ',
      rows: [
        { term: 'մինչև 18 տարեկան', amd: '10.5%', usd: '4.0%' }
      ]
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 py-6 px-6">
        <Link to="/"><img className="h-[80px] w-[200px] object-contain" src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" alt="Logo" /></Link>
        <nav className="flex gap-8 font-bold text-[15px]">
          <Link to="/mermasin" className="hover:text-[#6c2db5]">Evoca-ի մասին</Link>
          <Link to="" className="hover:text-[#6c2db5]">Սակագներ</Link>
          <Link to="" className="hover:text-[#6c2db5]">Հաշվետվություններ</Link>
        </nav>
        <div className="text-white bg-[#6c2db5] px-10 py-3 rounded-full cursor-pointer hover:bg-[#530498] transition">EvocaONLINE</div>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
          {subMenuItems.map((item, i) => (
            <NavLink key={i} to={item.path} className="h-full flex items-center px-8 hover:bg-[#530498] text-[14px] font-medium">
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1000px] mx-auto py-16 px-6">
        <h1 className="text-[40px] font-extrabold mb-12">Ավանդների սակագներ</h1>
        
      
        <div className="space-y-6">
          {depositDetails.map((group, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                className="w-full text-left p-8 bg-white font-bold text-[22px] flex justify-between items-center"
              >
                {group.title}
                <span className="text-[#6c2db5]">{openAccordion === i ? '−' : '+'}</span>
              </button>
              
              {openAccordion === i && (
                <div className="p-8 bg-gray-50 border-t">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-500 text-[14px]">
                        <th className="pb-4">Ժամկետ</th>
                        <th className="pb-4">AMD (%)</th>
                        <th className="pb-4">USD (%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {group.rows.map((r, ri) => (
                        <tr key={ri} className="text-[16px] font-medium">
                          <td className="py-4">{r.term}</td>
                          <td className="py-4 text-[#6c2db5] font-bold">{r.amd}</td>
                          <td className="py-4">{r.usd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

       
        <div className="mt-16 p-10 bg-gray-900 text-white rounded-3xl">
          <h2 className="text-[28px] font-bold mb-6">Կարևոր տեղեկատվություն</h2>
          <p className="leading-relaxed text-gray-300 text-[16px] mb-4">
            Ավանդի տոկոսները հաշվարկվում են անվանական տոկոսադրույքի հիման վրա: Տարեկան տոկոսային եկամտաբերությունը ցույց է տալիս, թե որքան եկամուտ կստանաք ավանդի դիմաց: Ավանդները երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամի» կողմից՝ ՀՀ օրենսդրության համաձայն:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Նվազագույն գումարը՝ 50,000 ՀՀ դրամ</li>
            <li>Տոկոսների վճարումը՝ ամսական կամ ժամկետի ավարտին</li>
            <li>Ավանդի ժամկետից շուտ դադարեցումը՝ վերահաշվարկի ենթակա</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Avandik;