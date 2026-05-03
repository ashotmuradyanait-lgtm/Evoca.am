import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Menu';

const Spasarkum: React.FC = () => {
  const subMenuItems = [
    { name: 'Քարտեր', path: '/qarter' },
    { name: 'Քարտերի տրամադրում և սպասարկում', path: '' },
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

        <h1 className="text-4xl font-extrabold mb-10 text-[#222]">Պրեմիում</h1>

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
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-extrabold text-blue-900 italic transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="" />
          </button>
        <Link to="nverqart">
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold transition-colors flex items-center gap-[-4px]">
            <img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="" />
          </button>
        </Link>
        <Link to="tvayin">
          <button className="bg-[#f0f0f5] hover:bg-gray-200 px-6 py-2.5 rounded-full font-bold text-red-600 transition-colors">
            <img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="" />
          </button>
        </Link>
        </div>

    </div>
    </div>
  )
}
export default Spasarkum