import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Kariera: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const subMenuItems = [
    { name: 'Մշակույթ', path: '' },
    { name: 'Առավելություններ', path: '' },
    { name: 'Հաճախ տրվող հարցեր', path: '' },
    { name: 'Ինչպես ընդունվել աշխատանքի Evocabank-ում', path: '' },
  ];

  
  const mediaVideos = [
    { id: 1, title: 'Evoca New Year Corporate Party 2022', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=60', tag: 'Evoca 2022' },
    { id: 2, title: 'EVOCAISLAND Evoca Summer Party 2022', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=60', tag: 'EVOCAISLAND' },
    { id: 3, title: 'Attention!!! You have never seen anything like this', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60', tag: 'Attention' },
    { id: 4, title: 'Purple photoshoot with Evocabank', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60', tag: 'Photoshoot' },
    { id: 5, title: 'Welcome to Evocabank!', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=60', tag: 'Welcome' },
    { id: 6, title: 'Evoca Corporate Party 2021', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60', tag: 'Corporate' },
    { id: 7, title: 'Evocabank neon art corporate party', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=60', tag: 'Neon Art' },
  ];

 
  const teamReviews = [
    { title: 'Դինամիկ Պրպտող Զարգացող', name: 'Լիլիթ Գալստյան', role: 'Գլխավոր ֆինանսական տնօրեն' },
    { title: 'Կրեատիվ Նորարար Մանուշակագույն', name: 'Ալլա Զաքարյան', role: 'Վճարային գործիքների մասնագետ' },
    { title: 'Գույներ Էմոցիաներ Նորարարություններ', name: 'Գայանե Առաքելյան', role: 'Մասնաճյուղի կառավարիչ' },
    { title: 'Թրենդային Պահանջված Ուրախ', name: 'Հարություն Սահակյան', role: 'Անվտանգության մասնագետ' },
  ];

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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca լայֆ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Աշխատանք և պրակտիկա</Link>
        </nav>

        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
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

      
      <div className="relative w-full min-h-[450px] bg-gradient-to-r from-purple-100 via-pink-100 to-white overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 grid md:grid-cols-2 gap-8 items-center z-10 py-12">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm max-w-xl">
            <h1 className="text-4xl md:text-6xl font-black text-[#6c2db5] mb-6">Թ</h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              Ուրախ հաճելի է: Առօրյան լցված է նորարարություններով:
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Մենք անընդհատ զարգանում ենք ու կատարելագործվում:
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-[#6c2db5] to-[#a25ddc] rounded-[40px] transform rotate-12 flex items-center justify-center shadow-2xl relative">
              <span className="text-white text-9xl md:text-[180px] font-black transform -rotate-12 select-none">V</span>
              <div className="absolute -left-10 bottom-10 w-24 h-48 bg-yellow-400 rounded-lg -rotate-12 shadow-md flex flex-col justify-between p-2">
                <div className="w-full h-3 bg-white/40 rounded"></div>
                <div className="w-full h-3 bg-white/40 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -left-20 top-1/4 w-72 h-72 border-[24px] border-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute -left-10 top-1/4 w-72 h-72 border-[12px] border-[#6c2db5] rounded-full opacity-20"></div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Ինչո՞ւ աշխատել Evoca-ում
        </h2>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="border-l-4 border-[#6c2db5] pl-6 italic text-lg text-gray-600 font-medium">
              «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ: Աշխատակիցները ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
             
              <img 
                src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" 
                alt="Evoca Employee with laptop on bean bag" 
                className="max-w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Մշակույթ</h2>
          <p className="text-purple-200 max-w-2xl mb-10">
            Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ Սովորում ենք, մեր փորձն ենք կիսում գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացե՛ք մեզ։
          </p>

        
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-purple-400">
            {mediaVideos.map((video) => (
              <div key={video.id} className="min-w-[300px] md:min-w-[360px] bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] flex flex-col justify-between">
                <div className="relative aspect-video bg-black flex items-center justify-center group cursor-pointer">
                  <img 
                    src={video.image} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity"
                  />
               
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 hover:bg-white/40 border border-white backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#6c2db5] text-white text-xs px-2 py-1 rounded font-bold">
                    {video.tag}
                  </span>
                </div>
                <div className="p-4 bg-white flex-grow flex items-center">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {teamReviews.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between relative">
              <span className="text-5xl text-purple-200 font-serif absolute top-2 left-2">“</span>
              <div className="pt-6">
                <h3 className="text-xl font-black text-[#6c2db5] mb-4 leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        
       
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6c2db5]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-purple-200"></span>
        </div>
      </div>

    
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Դառնալ թիմի անդամ</h2>
        <p className="text-center text-gray-600 mb-10 text-sm">
          Եթե ցանկանում ես միանալ <span className="text-[#6c2db5] font-bold">EvocaTEAM</span>-ին, կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Անուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ազգանուն <span className="text-red-500">*</span></label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Հեռախոսահամար <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+374</span>
              <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-r-xl focus:outline-none focus:border-[#6c2db5]" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Էլ. հասցե <span className="text-red-500">*</span></label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" required />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook սոց. կայքում անձնական էջի հղում</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn սոց. կայքում անձնական էջի հղում</label>
              <input type="url" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ուղեկցող նամակ</label>
            <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6c2db5]"></textarea>
          </div>

         
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Կցե՛ք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#6c2db5] transition-colors cursor-pointer bg-gray-50">
              <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Կցել ֆայլը / Ֆայլերը</span>
            </div>
          </div>

        
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Պաշտպանության ծածկագիր <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Մուտքագրեք ծածկագիրը" className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6c2db5] text-sm" required />
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm select-none">
              <span className="font-mono font-bold text-xl tracking-widest text-gray-700 line-through decoration-double decoration-purple-600">NCT48N</span>
              <button type="button" className="text-gray-400 hover:text-[#6c2db5]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 11H19" /></svg>
              </button>
            </div>
          </div>

          
          <div className="text-center pt-4">
            <button type="submit" className="bg-[#6c2db5] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#530498] transition-colors shadow-md w-full sm:w-auto">
              Ես ուզում եմ աշխատել Evoca-ում :)
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Kariera;