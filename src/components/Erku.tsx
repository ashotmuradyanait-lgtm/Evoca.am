
import Menu from '../pages/Menu';

function Erku (){
    return(
        <div>
       <Menu />
    <div className="max-w-[1400px] mx-auto px-6 mb-8">
      <div className="flex bg-white rounded-[20px] shadow-sm overflow-hidden border border-gray-100 p-6 gap-8 hover:shadow-md transition-shadow">

        <div className="w-[415px] h-[261px] shrink-0">
          <img 
            src="https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png" 
            alt="Bicycle Loan" 
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        

        <div className="flex flex-col justify-between flex-grow py-2">
          <div>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">
           Visa Gold
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[800px] mb-8">
              Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից
            </p>

            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-[#6c2db5] text-[24px] font-bold">0.2%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում բանկի <br />
                 կանխիկացման կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-[#6c2db5] text-[24px] font-bold">0.8%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                 բանկերի կանխիկացման <br />
                  կետերում</span>   
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8">
                <span className="text-gray-400 text-[12px] mt-1">min 1,500 ֏</span>
                <span className="text-[#6c2db5] text-[24px] font-bold">1%</span>
                <span className="text-gray-400 text-[12px] mt-1">Կանխիկացում ԱրՔա անդամ <br />
                 չհանդիսացող բանկերի <br />
                  կանխիկացման կետերում</span>
              </div>

              <div className="flex flex-col border-l border-gray-100 pl-8 mt-5">
                <span className="text-[#6c2db5] text-[24px] font-bold">15,000 ֏</span>
                <span className="text-gray-400 text-[12px] mt-1">Տարեկան սպասարկում</span>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-[#f2ecf9] text-[#6c2db5] px-8 py-3 rounded-full w-fit font-bold hover:bg-[#e8dff5] transition-colors mt-6 text-[14px]">
            Մանրամասն
            <span className="text-[18px]">›</span>
          </button>
        </div>
      </div>
    </div>
    </div>
    );
}
export default Erku