import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Nverqart: React.FC = () => {
  const subMenuItems = [
    { name: 'Քարտեր', path: '/qarter' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '/spasarkum' },
    { name: 'Սոցիալական ապահովության վճարային քարտեր', path: '' },
    { name: 'Evoca Benefits', path: '' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 relative">
      <Menu />
      <div className="w-full bg-white">
        <div className="w-full bg-[#6c2db5] text-white ">
          <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6">
            {subMenuItems.map((item) => (
              <NavLink
                key={item.name} 
                to={item.path}
                className={({ isActive }) =>
                  `h-full flex items-center px-8 transition-colors text-[14px] font-medium
                ${isActive ? 'bg-[#6c2db5]' : 'hover:bg-[#530498]'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-6">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
          <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Քարտեր</span>
          <span>›</span>
          <span className="text-gray-800">Քարտեր</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Նվեր քարտեր</h1>

       
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            { name: 'Բոլորը', path: '/qarter' },
            { name: 'Պրեմիում', path: '/premium' },
            { name: 'Նվեր քարտեր', path: '/nverqart' },
            { name: 'Թվային քարտեր', path: '/tvayin' }
          ].map((tag) => (
            <NavLink
              key={tag.name}
              to={tag.path}
              end={tag.path === '/qarter'}
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-full font-medium text-[15px] transition-colors inline-block text-center ${
                  isActive
                    ? 'bg-[#7122e2] text-white' 
                    : 'bg-[#f0f0f5] text-gray-800 hover:bg-[#7122e2] hover:text-white' 
                }`
              }
            >
              {tag.name}
            </NavLink>
          ))}

        <Link to="/arca">
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-blue-700 transition-colors flex items-center gap-1">
            <img src="https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png" alt="" />
          </button>
        </Link>
        <Link to="premium">
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-extrabold text-blue-900 italic transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="" />
          </button>
        </Link>
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold transition-colors flex items-center gap-[-4px]">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="" />
          </button>
        <Link to="tvayin">
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-red-600 transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="" />
          </button>
        </Link>
        </div>


        <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Evoca Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:
            </p>

          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


          <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Digital Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, <br />
               բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ <br />
              կհավանի՞, թե՞ ոչ։ Մենք առաջարկում ենք իդեալական նվերի տարբերակ։
            </p>

          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


    <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17527569508235/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              Homplex Gift card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Թե՛ սրճեփ, թե՛ սրճարան, թե՛ կարուսել, թե՛ կառուցել, թե՛ տան կահավորում, <br />
              թե՛ ուղղակի ժամանց ընկերների հետ։ Evoca-ի նոր նվեր քարտը՝ Homplex-ից։
            </p>

          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>



           <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
              MyLer Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Մեկ քարտ, անսահմանափակ արկածներ:
            </p>

          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


          <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">
        
        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
             4U.am Gift card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։
            </p>

          </div>

        
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>



          <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">

        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            Dalma Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Նվեր ընտրելն այլևս դժվար չէ:
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>


     <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">

        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow py-2">
          <div>

            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            Rio Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Ամեն ինչ մեկ նվեր քարտում
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>



     <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">

        
        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17404717481136/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>


        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
            Garage Masters' Mall Gift Card
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
             Հաճելին, հետաքրքիրն ու օգտակարը մեկ նվեր քարտում։
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>

    </div>
    </div>
    )
}
export default Nverqart;