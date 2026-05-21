import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Xekavar: React.FC = () => {
  // Սրանով պահում ենք ընտրված ղեկավարի տվյալները (եթե null է, ցույց է տալիս ամբողջ ցուցակը)
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const councilMembers = [
    {
      name: 'ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ',
      qualifications: 'MBA, PhD',
      titles: 'Խորհրդի նախագահ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png', 
      bio: 'Վարուժան Ավետիքյանն ունի ֆինանսական և իրավաբանական ոլորտում տարիների մեծ փորձառություն, հանդիսանում է բազմաթիվ գիտական հոդվածների հեղինակ:'
    },
    {
      name: 'ՄԱՐՏԱ ԷՉԱՐՐԻ',
      titles: 'Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png', 
      bio: 'Մարտա Էչարրին միջազգային փորձագետ է ռազմավարական պլանավորման, աուդիտի և ֆինանսական ռիսկերի կառավարման բնագավառում:'
    },
    {
      name: 'ՎԱԶԳԵՆ ԳԵՎՈՐԿՅԱՆ',
      qualifications: 'MBA, PhD',
      titles: 'Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png', 
      bio: 'Վազգեն Գևորկյանը ղեկավարում է բանկի ռազմավարական զարգացման ուղղությունները՝ նպաստելով թվային տեխնոլոգիաների ներդրմանը:'
    },
    {
      name: 'ՄԱՐԻՆԱ ԲՈՒԿԻ',
      qualifications: 'MBA',
      titles: 'Խորհրդի անդամ Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png', 
      bio: 'Մարինա Բուկին պատասխանատու է ներքին աուդիտի, հսկողության համակարգերի և բանկային գործառնությունների թափանցիկության համար:'
    },
    {
      name: 'ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԴԱ',
      qualifications: 'LL.M., MBA',
      titles: 'Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png', 
      bio: 'Խոսե Մարիան իրականացնում է ռիսկերի կառավարման և միջազգային համապատասխանության ստանդարտների վերահսկողությունը:'
    },
    {
      name: 'ՏԱԹԵՒԻԿ ՋԱՆՈՅԱՆ',
      qualifications: 'MBA',
      titles: 'Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602030046225/230x230.png', 
      bio: 'Տաթևիկ Ջանոյանը համակարգում է աուդիտորական և ռիսկերի գնահատման համատեղ ծրագրերը բանկային էկոհամակարգում:'
    },
    {
      name: 'ՊԻԵՐ ԿԱԶԻՅԱԿ',
      qualifications: 'MBA',
      titles: 'Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/17544805424545/230x230.png', 
      bio: 'Պիեր Կազիյակը զբաղվում է միջազգային գործընկերության ընդլայնմամբ և ռազմավարական ռիսկերի զսպման մեխանիզմներով:'
    }
  ];

  const boardMembers = [
    {
      name: 'ԿԱՐԵՆ ԵՂԻԱԶԱՐՅԱՆ',
      qualifications: 'MBA, PhD',
      titles: 'Վարչության նախագահ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png', 
      bio: 'Կարեն Եղիազարյանը ղեկավարում է Evocabank-ի գործադիր մարմինը՝ ապահովելով բանկի կայուն աճն ու առաջատար դիրքը թվային շուկայում:'
    },
    {
      name: 'ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ',
      qualifications: 'PhD',
      titles: 'Վարչության նախագահի առաջին տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png', 
      bio: 'Արմեն Հակոբյանը համակարգում է բանկի ֆինանսական հոսքերը, գանձապետարանը և տնտեսական զարգացման պլանները:'
    },
    {
      name: 'ՏԱԹԵՎԻԿ ԽԱՉԱՏՐՅԱՆ',
      qualifications: 'MBA, PMP',
      titles: 'Վարչության նախագահի տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png',
      bio: 'Տաթևիկ Խաչատրյանը ղեկավարում է բանկի թվային տեխնոլոգիաների, պրոդուկտների մշակման և նախագծերի կառավարման թիմերը:'
    },
    {
      name: 'ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ',
      titles: 'Վարչության նախագահի տեղակալ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png',
      purpleBg: true, 
      bio: 'Հայկ Պետրոսյանը պատասխանատու է բանկի մակրո-գործառնությունների, մասնաճյուղային ցանցի զարգացման և հաճախորդների սպասարկման որակի համար:'
    },
  ];

  const otherManagers = [
    {
      name: 'ՍՄԲԱՏ ՄԱՐՏԻՐՈՍՅԱՆ',
      titles: 'Վարչության անդամ, Իրավաբանական վարչության պետ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602029763987/230x230.png', 
      bio: 'Սմբատ Մարտիրոսյանը ղեկավարում է բանկի իրավական անվտանգության ապահովման և օրենսդրական համապատասխանության գործընթացները:'
    },
    {
      name: 'ՄՀԵՐ ՍԱՀԱԿՅԱՆ',
      titles: 'Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ',
      imageUrl: 'https://www.evoca.am/images-cache/team_members/1/16602028738374/230x230.png', 
      bio: 'Մհեր Սահակյանը համակարգում է տեղեկատվական տեխնոլոգիաների ենթակառուցվածքները, ավտոմատացված համակարգերը և անվտանգությունը:'
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

  // Կոմպակտ Քարտի բաղադրիչը՝ նկարին սեղմելու հնարավորությամբ (onClick)
  const ProfileCard: React.FC<{
    member: any;
  }> = ({ member }) => (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div
        onClick={() => setSelectedMember(member)} // Սեղմելիս բացում է անհատական էջը
        className={`w-[200px] h-[200px] overflow-hidden flex items-center justify-center p-3 mb-4 rounded-xl cursor-pointer hover:scale-[1.03] transition-transform ${
          member.purpleBg ? 'bg-[#6c2db5]' : 'bg-[#f8f9fa]'
        }`}
        style={{
          borderRadius: member.purpleBg ? '30px 10px 30px 30px' : '30px 30px 30px 10px',
        }}
      >
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover rounded-xl"
          style={{
            borderRadius: member.purpleBg ? '20px 5px 20px 20px' : '20px 20px 20px 5px',
          }}
        />
      </div>
      <h3 
        onClick={() => setSelectedMember(member)}
        className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-2 cursor-pointer hover:text-[#6c2db5] transition-colors"
      >
        {member.name}
      </h3>
      {member.qualifications && (
        <p className="text-[13px] md:text-[14px] text-gray-500 mb-1">{member.qualifications}</p>
      )}
      <p className="text-[13px] md:text-[14px] text-gray-600 mb-1 leading-snug">{member.titles}</p>
    </div>
  );

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a]">
      
      {/* Գլխավոր Հեդեր */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-4 md:pt-14 px-6">
        <Link to="/">
          <img
            className="h-[60px] md:h-[140px] w-[180px] md:w-[300px] object-contain"
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png"
            alt="Evocabank Logo"
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-800 font-medium text-[13px] md:text-[15px]">
          <Link to="/mermasin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="/hashvetu" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
        </nav>
        <Link to="/evocaonline" className="w-full md:w-auto text-center">
          <span className="inline-block text-white bg-[#6c2db5] h-[40px] w-[180px] hover:bg-[#530498] text-center rounded-3xl pt-2 transition-colors font-medium text-[14px]">
            EvocaONLINE
          </span>
        </Link>
      </div>

      {/* Ենթամենյու */}
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto mt-4">
        <div className="max-w-[1400px] mx-auto flex items-center h-[55px] md:h-[60px] px-6 min-w-[800px]">
          {subMenuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `h-full flex items-center px-5 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium whitespace-nowrap
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 md:py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[12px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800 font-medium cursor-pointer" onClick={() => setSelectedMember(null)}>Ղեկավարություն</span>
        {selectedMember && (
          <>
            <span>›</span>
            <span className="text-[#6c2db5] font-semibold">{selectedMember.name}</span>
          </>
        )}
      </div>

      {/* ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ ՓՈՓՈԽՎՈՂ ՀԱՏՎԱԾԸ */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        
        {selectedMember ? (
          /* ՏԱՐԲԵՐԱԿ Ա. ԱՆՀԱՏԱԿԱՆ ՏԵՂԵԿՈՒԹՅԱՆ ԷՋ (Երբ սեղմել են նկարին) */
          <div className="mt-4 animate-fadeIn">
            <button 
              onClick={() => setSelectedMember(null)} // Հետ է տանում ընդհանուր ցուցակ
              className="text-sm font-semibold text-gray-500 hover:text-[#6c2db5] transition-colors mb-8 inline-flex items-center gap-1"
            >
              ← Վերադառնալ ղեկավարության ցանկին
            </button>
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              {/* Նկարի բլոկ */}
              <div 
                className={`w-[260px] h-[260px] p-4 rounded-3xl flex items-center justify-center shadow-md shrink-0 ${
                  selectedMember.purpleBg ? 'bg-[#6c2db5]' : 'bg-[#f8f9fa]'
                }`}
                style={{ borderRadius: selectedMember.purpleBg ? '40px 15px 40px 40px' : '40px 40px 40px 15px' }}
              >
                <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover rounded-2xl" />
              </div>

              {/* Տեքստային բլոկ */}
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-950">{selectedMember.name}</h1>
                {selectedMember.qualifications && (
                  <span className="inline-block bg-purple-50 text-[#6c2db5] text-xs font-bold px-3 py-1 rounded-md">{selectedMember.qualifications}</span>
                )}
                <p className="text-base md:text-lg text-gray-700 font-medium leading-snug">{selectedMember.titles}</p>
                <div className="h-[1px] w-full bg-gray-100 my-4"></div>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-3xl">
                  {selectedMember.bio || "Կենսագրական տվյալները հասանելի են բանկի պաշտոնական տեղեկատվական հարթակներում։"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ՏԱՐԲԵՐԱԿ Բ. ԳԼԽԱՎՈՐ ՑՈՒՑԱԿԸ (Սկզբնական էջը) */
          <>
            <h1 className="text-[28px] md:text-[48px] font-bold text-[#1a1a1a] mb-8">Ղեկավարություն</h1>

            {/* Խորհուրդ */}
            <div className="mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {councilMembers.map((member) => (
                  <ProfileCard key={member.name} member={member} />
                ))}
              </div>
            </div>

            {/* Աուդիտ կոմիտե */}
            <div className="mb-12">
              <h2 className="text-[18px] md:text-[24px] font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#6c2db5] pl-4">Աուդիտ կոմիտե</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {boardMembers.map((member) => (
                  <ProfileCard key={member.name} member={member} />
                ))}
              </div>
            </div>

            {/* Այլ ղեկավարներ */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {otherManagers.map((manager) => (
                  <ProfileCard key={manager.name} member={manager} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default Xekavar;