import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Xekavar: React.FC = () => {

  const councilMembers = [
    {
      name: 'ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ,',
      qualifications: 'MBA, PhD',
      titles: 'Խորհրդի նախագահ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png', 
    },
    {
      name: 'ՄԱՐՏԱ ԷՉԱՐՐԻ',
      titles: 'Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png', 
    },
    {
      name: 'ՎԱԶԳԵՆ ԳԵՎՈՐԿՅԱՆ',
      qualifications: 'MBA, PhD',
      titles: 'Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png', 
    },
    {
      name: 'ՄԱՐԻՆԱ ԲՈՒԿԻ',
      qualifications: 'MBA',
      titles: 'Խորհրդի անդամ Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png', 
    },
     {
      name: 'ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԴԱ,',
      qualifications: 'LL.M., MBA,',
      titles: 'Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png', 
    }
  ];

  const boardMembers = [
    {
      name: 'ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ',
      qualifications: 'PhD',
      titles: 'Վարչության նախագահի առաջին տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png', 
    },
    {
      name: 'ՏԱԹԵՎԻԿ ԽԱՉԱՏՐՅԱՆ',
      qualifications: 'MBA, PMP',
      titles: 'Վարչության նախագահի տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png',
    },
    {
      name: 'ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ',
      titles: 'Վարչության նախագահի տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png',
      purpleBg: true, 
    },
   
  ];

  const otherManagers = [
    {
      name: 'ՍՄԲԱՏ ՄԱՐՏԻՐՈՍՅԱՆ',
      titles: 'Վարչության անդամ, Իրավաբանական վարչության պետ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602029763987/230x230.png', 
    },
    {
      name: 'ՄՀԵՐ ՍԱՀԱԿՅԱՆ',
      titles: 'Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602028738374/230x230.png', 
    },

  ];

  const subMenuItems = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '/karciq' },
    { name: 'CSR', path: '/corp' },
  ];

  const ProfileCard: React.FC<{
    name: string;
    qualifications?: string;
    titles: string;
    imageUrl: string;
    purpleBg?: boolean;
  }> = ({ name, qualifications, titles, imageUrl, purpleBg }) => (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div
        className={`w-[200px] h-[200px] overflow-hidden flex items-center justify-center p-3 mb-4 rounded-xl ${
          purpleBg ? 'bg-[#6c2db5]' : 'bg-[#f8f9fa]'
        }`}
        style={{
          borderRadius: purpleBg
            ? '30px 10px 30px 30px'
            : '30px 30px 30px 10px',
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
          style={{
            borderRadius: purpleBg
              ? '20px 5px 20px 20px'
              : '20px 20px 20px 5px',
          }}
        />
      </div>
      <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-2">{name}</h3>
      {qualifications && (
        <p className="text-[14px] text-gray-500 mb-1">{qualifications}</p>
      )}
      <p className="text-[14px] text-gray-600 mb-1">{titles}</p>
    </div>
  );

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
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">
            Evoca-ի մասին
          </Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">
            Սակագներ
          </Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">
            Հաշվետվություններ
          </Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">
            Հայտարարություններ
          </Link>
        </nav>
        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
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

      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">
          🏠
        </Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Ղեկավարություն</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a] mb-10">Ղեկավարություն</h1>

       
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {councilMembers.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </div>

        
        <div className="mb-12">
          <h2 className="text-[20px] md:text-[28px] font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#6c2db5] pl-4"> Աուդիտ կոմիտե </h2>
        </div>

        
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </div>

       
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherManagers.map((manager) => (
              <ProfileCard key={manager.name} {...manager} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xekavar;