import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../pages/Menu';

const Product: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Բանկային');
  
  const categories = [
    { name: "Բանկային", path: "/bankayin" },
    { name: "Պրոդուկտներ", path: "" },
    { name: "Նորարարություններ", path: "" },
    { name: "Կենսակերպ", path: "" },
    { name: "Մրցանակներ", path: "" },
    { name: "CSR", path: "" },
    { name: "Այլ", path: "" }
  ];

  
  const newsItems = [
    {
      img: "https://www.evoca.am/images-cache/news/1/17785839458922/510x383.png",
      category: "Բանկային",
      title: "«Գյումրի» մասնաճյուղն արդեն գործում է նոր հասցեով",
      date: "14.05.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17780463751358/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի վարկային համաձայնագիր",
      date: "06.05.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png",
      category: "Բանկային",
      title: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
      date: "13.04.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png",
      category: "Բանկային",
      title: "ESG կառավարման համակարգը Evocabank-ում",
      date: "31.03.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը միացել է AI դաշինքին և ներդրել 300 մլն ԱՄՆ դոլար",
      date: "10.03.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17720089281517/510x383.png",
      category: "Բանկային",
      title: "Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times ամսագրին",
      date: "25.02.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17707319421286/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը միացել է AmCham Armenia-ին",
      date: "10.02.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17683825017248/510x383.jpg",
      category: "Բանկային",
      title: "Evocabank-ի «Աջակից» մասնաճյուղն արդեն գործում է",
      date: "12.01.2026"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1765801881883/510x383.png",
      category: "Բանկային",
      title: "Evocabank. 20 մլն ԱՄՆ դոլար՝ շվեյցարական BlueOrchard-ից",
      date: "08.12.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17649374043883/510x383.png",
      category: "Բանկային",
      title: "Կարեն Եղիազարյանի նոր հարցազրույցը Banks.am-ին",
      date: "11.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17628589568036/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը Robust Հայաստանում",
      date: "06.11.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17624341580743/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը Հայաստանում Արծաթե հովանավոր",
      date: "28.10.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17623251404538/510x383.png",
      category: "Բանկային",
      title: "Կարճ հեռախոսահամար՝ 8444",
      date: "22.10.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17611221350351/510x383.jpg",
      category: "Բանկային",
      title: "Evocabank-ը ներգրավել է 30 մլն ԱՄՆ դոլար OPEC-ից",
      date: "21.10.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17610618951769/510x383.png",
      category: "Բանկային",
      title: "Evoca is 35 Gala Event համաժողով",
      date: "14.10.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17604369402663/510x383.png",
      category: "Բանկային",
      title: "Done կոնֆերանս",
      date: "25.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17600922901514/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը ներգրավել է $5.5 մլն responsAbility-ից",
      date: "20.09.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17587062793679/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ի Խորհրդի նոր կազմը",
      date: "26.08.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png",
      category: "Բանկային",
      title: "Evocabank-ը 50-րդ հովանավոր",
      date: "19.08.2025"
    },
    {
      img: "https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png",
      category: "Բանկային",
      title: "Evoca LAB 4-րդ սերնդի ավարտական միջոցառումը",
      date: "10.08.2025"
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-[#1a1a1a] overflow-x-hidden">
      <Menu />
    
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="text-gray-800">Նորություններ</span>
        <span>›</span>
        <span className="text-gray-800 font-bold">Բանկային</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <h1 className="text-[40px] md:text-[68px] font-black text-[#1a1a1a] mb-10 tracking-[-0.04em] leading-none">
          Նորություններ
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all tracking-wide inline-block
                  ${activeCategory === cat.name 
                    ? 'hover:bg-[#A70ECD] text-black shadow-sm bg-[#f2f2f2]' 
                    : 'bg-transparent text-gray-500 hover:text-black'}`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <button className="flex items-center gap-3 bg-[#f3e8ff] text-[#730D8D] px-8 py-3 rounded-full text-[14px] font-black hover:bg-[#ebd5ff] transition-colors uppercase tracking-wider">
            Բոլորը <span className="text-[24px] leading-none mb-1">›</span>
          </button>
        </div>


        </div>
        </div>
  )
}
export default Product
