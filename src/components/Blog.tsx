import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Բլոգ');
  
  const categories = [
    { name: "Բիզնես", path: "/bussines" },
    { name: "Կենսակերպ", path: "" },
    { name: "Ներդրումներ", path: "" },
  ];

 
  const heroBlog = {
    img: "https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png",
    category: "Կենսակերպ",
    title: "Monthly Recap",
    description: "Օգնում է ամփոփել ամիսը, հասկանալ բացթողումները և փոքր քայլերով արդյունավետ փոփոխություններ:",
    date: "14.05.2026"
  };

  const blogItems = [
    {
      img: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg",
      category: "Ներդրումներ",
      title: "Ինչպե՞ս կատարել գործարքներ EvocaINVEST-ով",
      date: "12.05.2024"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg",
      category: "Ներդրումներ",
      title: "Ներդրումների կարևորներն ու չի կարելիները",
      date: "23.04.2024"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg",
      category: "Ներդրումներ",
      title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
      date: "11.04.2024"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg",
      category: "Բիզնես",
      title: "Ինչպես սկսել բիզնես: Guide from A to Z",
      date: "05.01.2024"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png",
      category: "Կենսակերպ",
      title: "Նայիր շուրջդ և տես ավելորդ իրեր կան",
      date: "09.02.2022"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png",
      category: "Կենսակերպ",
      title: "Ամանորի քո Evoca երազանքը",
      date: "21.12.2023",
      isWide: true 
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg",
      category: "Կենսակերպ",
      title: "2021-ի ամենասպասված ֆիլմերը",
      date: "18.01.2021"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png",
      category: "Կենսակերպ",
      title: "2021-ի ամենասպասված 21 սերիալները",
      date: "18.01.2021"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png",
      category: "Կենսակերպ",
      title: "Ապագայի ամենապահանջված մասնագիտությունները",
      date: "22.06.2020"
    },
    {
      img: "https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png",
      category: "Կենսակերպ",
      title: "Evoca-գույնի հոգեբանական նկարագիրը",
      date: "15.05.2020",
      isWide: true 
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] font-sans text-[#1a1a1a] min-h-screen pb-24 pt-20">
      
     
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 md:py-6 flex items-center gap-2 text-gray-400 text-[11px] md:text-[13px]">
              <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
              <span>›</span>
              <span className="text-gray-800">Բլոգ</span>
            </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h1 className="text-[48px] md:text-[80px] font-[900] text-[#1a1a1a] mb-14 tracking-[-0.05em] leading-[0.9]">
          Բլոգ
        </h1>
        
        
        <div className="flex flex-wrap items-center justify-between gap-8 mb-16 border-b border-gray-100 pb-8">
           <div className="flex flex-wrap gap-1 md:gap-2">
                {categories.map((cat) => (
                    <Link
                          key={cat.name}
                          to={cat.path}
                          onClick={() => setActiveCategory(cat.name)}
                          className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[13px] md:text-[15px] font-bold transition-all tracking-wide inline-block
                            ${activeCategory === cat.name 
                              ? 'hover:bg-[#A70ECD] text-black shadow-sm bg-[#f2f2f2]' 
                              : 'bg-transparent text-gray-500 hover:text-black'}`}
                          >
                              {cat.name}
                        </Link>
                  ))}
        </div>
          
          <button className="hidden lg:flex items-center gap-3 bg-[#F4EBFF] text-[#740fb3] px-10 py-4 rounded-full text-[14px] font-black hover:bg-[#eddfff] transition-all uppercase tracking-widest group">
            Արխիվ 
            <span className="text-[24px] leading-none transition-transform group-hover:translate-x-1">›</span>
          </button>
        </div>

        
        <div className="flex flex-col-reverse md:flex-row bg-white rounded-[40px] overflow-hidden mb-16 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-50 min-h-[500px] cursor-pointer group">
          <div className="w-full md:w-[45%] p-6 sm:p-10 md:p-16 flex flex-col justify-center">
            <span className="text-[#a70ecd] text-[14px] font-black uppercase tracking-widest mb-6 block">
              {heroBlog.category}
            </span>
            <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-[900] leading-[1.05] mb-6 tracking-tight group-hover:text-[#740fb3] transition-colors">
              {heroBlog.title}
            </h2>
            <p className="text-gray-500 text-[18px] leading-relaxed mb-8 font-medium">
              {heroBlog.description}
            </p>
            <div className="text-gray-400 font-bold text-[14px]">
              {heroBlog.date}
            </div>
          </div>
          <div className="w-full md:w-[55%] relative h-[350px] md:h-auto overflow-hidden">
            <img 
              src={heroBlog.img} 
              alt={heroBlog.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {blogItems.map((item, index) => (
            <div 
              key={index} 
              className={`group cursor-pointer flex flex-col ${item.isWide ? 'lg:col-span-3 md:col-span-2 flex-col md:flex-row gap-8 items-center bg-white rounded-[32px] p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all' : ''}`}
            >
              
              <div className={`relative overflow-hidden rounded-[32px] ${item.isWide ? 'w-full md:w-1/2 aspect-[16/9] mb-0' : 'aspect-[4/3] mb-6'} shadow-sm group-hover:shadow-2xl transition-all duration-500`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>
              
              
              <div className={`px-2 ${item.isWide ? 'w-full md:w-1/2 p-4 sm:p-6' : ''}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-[18px] h-[6px] bg-[#1a1a1a]"></div>
                  <span className="text-[#1a1a1a] text-[12px] font-black uppercase tracking-[0.15em]">
                    {item.category}
                  </span>
                </div>
                
                <h3 className={`font-extrabold text-[#1a1a1a] leading-[1.25] mb-5 group-hover:text-[#740fb3] transition-colors ${item.isWide ? 'text-[32px]' : 'text-[22px] line-clamp-2'}`}>
                  {item.title}
                </h3>
                <div className="text-gray-400 text-[13px] font-semibold tracking-wide">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
    