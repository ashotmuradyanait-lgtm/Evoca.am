import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface SubMenuItem {
  name: string;
  path: string;
}

interface ReviewItem {
  id: number;
  author: string;
  role: string;
  stars: number;
  text: string;
  subText?: string;
  avatarBg?: string;
  handType: 'ok' | 'thumbsup';
}

const Karciq: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  
  const subMenuItems: SubMenuItem[] = [
    { name: 'Ընդհանուր', path: '/mermasin' },
    { name: 'Կառուցվածք', path: '/karuyc' },
    { name: 'Բաժնետերեր', path: '/bazin' },
    { name: 'Ղեկավարություն', path: '/xekavar' },
    { name: 'Գործընկերներ', path: '/gorc' },
    { name: 'Մրցանակներ', path: '/mrcanakner' },
    { name: 'Կարծիքներ', path: '' },
    { name: 'CSR', path: '/corp' },
  ];

  
  const reviews: ReviewItem[] = [
    {
      id: 1,
      author: 'Ժաննա Վանյան',
      role: 'Հաճախորդ',
      stars: 5,
      handType: 'ok',
      text: 'Հայաստանի իրականության մեջ բացառիկ, հրաշք բանկ։ Միայն այս հնարավորությունն ընձեռելով երիտասարդ ընտանիքներին՝ ցածր տոկոսով բնակարան ձեռք բերել, արդեն մեծ հարգանքի։ Շնորհակալ եք, որ Դուք...',
    },
    {
      id: 2,
      author: 'Նունե Գևորգյան',
      role: 'Հաճախորդ',
      stars: 5,
      handType: 'thumbsup',
      text: 'Անց սպասարկում, ընտիր ու հավես Ազատության մասնաճյուղում։ Իմ բաժնից շատ շնորհակալ եմ, վարկս տվեց առանց ավելորդ քաշքշուկների՝ արագ, որակով։ Սպասարկման աղջիկներն ժպիտով ու բարեհամբույր։ Դարձել եմ մշտական հաճախորդ։',
    },
    {
      id: 3,
      author: 'Լիլիթ Ազարյան',
      role: 'Branding-ի տնօրեն',
      stars: 5,
      handType: 'ok',
      text: 'Դեպի նոր իրականություն. ահա թե ուր ենք շարժվում՝ ամեն մի նախագիծ Evocabank-ի հաջողությամբ ավարտելիս։ Ավելի քան 5 տարի համագործակցելով՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ՝ լի մագնիսական ստեղծագործ պահերով և ընկերական ու ջերմ հարաբերություններով։',
      subText: 'Վստահորեն կարող ենք նշել, որ մեր ամենանորարարական և համարձակ գործընկերներից մեկն է Evocabank-ը՝ միշտ պատրաստ նորությունների և ստանդարտներից դուրս լուծումների։',
    },
    {
      id: 4,
      author: 'Էլեն Վարդանյան',
      role: 'Հաճախորդ',
      stars: 5,
      handType: 'thumbsup',
      text: 'Լավագույն նորարարական և թվային բանկ՝ լավագույն ծառայություններով և անձնակազմով։',
    },
    {
      id: 5,
      author: 'Կամո Թովմասյան',
      role: 'KAMOBLOG մեդիահարթակի հիմնադիր, influencer',
      stars: 5,
      handType: 'ok',
      text: 'Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառումով, աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրող։ Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից հայացքով նայել երբեմնի կարծրացած բանկային ծանր մթնոլորտին։',
      subText: 'Հրաշալի թիմ, յուրահատուկ լուծումներ ու, որ ամենակարևորն է, նոր իրականություն։',
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased text-[#1a1a1a] select-none">
      
    
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-2 md:pt-14 px-6">
        <Link to="/">
          <img 
            className="h-[80px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Evoca-ի մասին</Link>
          <Link to="/sakagin" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Սակագներ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշվետվություններ</Link>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հայտարարություններ</Link>
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
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Մեր մասին</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Evoca-ի մասին</span>
        <span>›</span>
        <span className="text-gray-800">Կարծիքներ</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 mb-10">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a]">Կարծիքներ</h1>
      </div>

      
      <div className="w-full bg-[#faf8f5] py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-24 relative">
          
          {reviews.map((review, index) => {
            const isEven = index % 2 === 1; 
            
            return (
              <div 
                key={review.id} 
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                <div className="relative flex-shrink-0 w-[240px] h-[240px] md:w-[280px] md:h-[280px]">
                 
                  <div className="w-full h-full bg-white rounded-full shadow-sm flex items-center justify-center relative overflow-hidden">
                    
                   
                    <img 
                      src={
                        review.handType === 'ok' 
                          ? "https://i.ibb.co/6R7mX7D/ok-hand.png"
                          : "https://i.ibb.co/yN6Mv30/thumb-hand.png" 
                      }
                      alt="Hand Status"
                      className="w-[120px] md:w-[140px] object-contain z-10 select-none pointer-events-none"
                    />

                    <div className={`absolute bottom-0 right-0 w-24 h-24 clip-triangle bg-gradient-to-tr opacity-20 ${
                      isEven ? 'from-cyan-400 to-blue-500' : 'from-[#6c2db5] to-purple-400'
                    }`} />
                  </div>

                 
                  <div className="absolute -bottom-4 left-6 text-[#6c2db5] font-bold text-2xl animate-pulse">
                    {isEven ? '∿∿∿' : '⚡⚡'}
                  </div>
                  <div className="absolute -top-6 right-8 text-cyan-400 font-bold text-3xl">
                    {isEven ? '▲' : '■'}
                  </div>
                </div>

                
                <div className="flex-1 flex flex-col justify-center relative">
                  
                
                  <div className={`absolute -top-10 text-[100px] font-serif font-bold text-[#6c2db5] opacity-20 leading-none ${
                    isEven ? 'right-0' : 'left-0'
                  }`}>
                    “
                  </div>

                 
                  <div className={`flex gap-1 mb-3 ${isEven ? 'justify-start md:justify-end' : ''}`}>
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>

                  
                  <p className={`text-[15px] md:text-[17px] text-gray-700 leading-relaxed font-normal mb-4 ${
                    isEven ? 'md:text-right' : 'md:text-left'
                  }`}>
                    {review.text}
                  </p>

               
                  {review.subText && (
                    <p className={`text-[15px] md:text-[17px] text-gray-700 leading-relaxed font-normal mb-4 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {review.subText}
                    </p>
                  )}

               
                  <div className={`mt-2 flex flex-col ${isEven ? 'items-start md:items-end' : 'items-start'}`}>
                    <h3 className="text-[18px] font-bold text-[#1a1a1a]">{review.author}</h3>
                    <p className="text-[13px] text-gray-400 font-medium mt-0.5">{review.role}</p>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default Karciq;