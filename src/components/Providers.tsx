import { useState } from 'react';
import * as Icons from 'lucide-react';

const Providers = () => {
  const [currentView, setCurrentView] = useState('main');
  const [categoryName, setCategoryName] = useState('');

  const mainCategories = [
    { id: 'evoca', name: "EVOCABANK", img: "https://resource.evoca.am/images/WebPayment/evoca.png" },
    { id: 'intl', name: "Միջազգային բջջային օպերատորներ", img: "https://resource.evoca.am/images/WebPayment/international.png" },
    { id: 'utility', name: "Կոմունալ վճարումներ", img: "https://resource.evoca.am/images/WebPayment/utility.png" },
    { id: 'internet', name: "Ինտերնետ և TV", img: "https://resource.evoca.am/images/WebPayment/internettv.png" },
    { id: 'police', name: "ՃՈ վճարներ", img: "https://resource.evoca.am/images/WebPayment/roadpolice.png" },
    { id: 'loans', name: "Վարկային կազմակերպություններ", img: "https://resource.evoca.am/images/WebPayment/loan.png" },
    { id: 'events', name: "Միջոցառումներ", img: "https://resource.evoca.am/images/WebPayment/event.png" },
  ];

  
  const subCategories: Record<string, { name: string, img: string }[]> = {
    evoca: [
      { name: "Վարկի մարում", img: "https://resource.evoca.am/images/WebPayment/loan.png" },
      { name: "Հաշվի համալրում", img: "https://resource.evoca.am/images/WebPayment/evoca.png" },
      { name: "Քարտի համալրում", img: "https://resource.evoca.am/images/WebPayment/evoca.png" }
    ],
    intl: [
        { name: "Goodline", img: "https://resource.evoca.am/images/webPayment/goodline.png" },
      { name: "Yota", img: "https://resource.evoca.am/images/webPayment/yota.png" },
      { name: "Վրացական", img: "https://resource.evoca.am/images/WebPayment/georgian.png" },
      { name: "Ռուսական", img: "https://resource.evoca.am/images/WebPayment/russian.png" }
    ],
    utility: [
      { name: "Հեռախոս", img: "https://resource.evoca.am/images/WebPayment/phone.png" },
      { name: "Լույս", img: "https://resource.evoca.am/images/WebPayment/electricity.png" },
      { name: "Ջուր", img: "https://resource.evoca.am/images/WebPayment/water.png" },
      { name: "Գազի սպառում", img: "https://resource.evoca.am/images/WebPayment/gas.png" },
      { name: "Գազի սպասարկում", img: "https://resource.evoca.am/images/WebPayment/gas_service.png" },
    ],
    internet: [
      { name: "HyperNet", img: "https://resource.evoca.am/images/WebPayment/hypernet.png" },
      { name: "Team ինտերնետ", img: "https://resource.evoca.am/images/WebPayment/beeline.png" },
      { name: "VivaCell MTS Internet", img: "https://resource.evoca.am/images/webPayment/vivacell.png" },
      { name: "Ucom ֆիքսված կապ", img: "https://resource.evoca.am/images/webPayment/ucom.png" },
      { name: "Rostelekom", img: "https://resource.evoca.am/images/webPayment/rostelecom.png" },
      { name: "Interactive TV", img: "https://resource.evoca.am/images/webPayment/interactive.png" },
      { name: "CTV", img: "https://resource.evoca.am/images/webPayment/ctv.png" },
      { name: "YOURnet", img: "https://resource.evoca.am/images/webPayment/yournet.png" },
      { name: "Arpinet", img: "https://resource.evoca.am/images/webPayment/arpinet.png" },
      { name: "KT Internet", img: "https://resource.evoca.am/images/webPayment/karabakh.png" },
      { name: "Armcom", img: "https://resource.evoca.am/images/webPayment/armcom.png" },
      { name: "Interlink", img: "https://resource.evoca.am/images/webPayment/interlinknew.png" },
    ],
    police: [
      { name: "Արագաչափեր և տեսախցիկներ", img: "https://resource.evoca.am/images/WebPayment/roadpolice.png" },
    ],
    loans: [
      { name: "ԲԼԵՍՍ ՈՒՎԿ", img: "https://resource.evoca.am/images/WebPayment/bless.png" },
      { name: "Պրեմիում Կրեդիտ ՈՒՎԿ", img: "https://resource.evoca.am/images/WebPayment/premiumcredit.png" },
      { name: "ՖԻՆՔԱ ՈՒՎԿ", img: "https://resource.evoca.am/images/Payment/finca-logo.png" },
      { name: "Միկրո Կապիտալ ՈՒՎԿ", img: "https://resource.evoca.am/images/Payment/MikroKapital-Logo.png" },
    ],
    events: [
    ],
  };

  const handleCategoryClick = (cat: any) => {
    if (subCategories[cat.id]) {
      setCurrentView(cat.id);
      setCategoryName(cat.name);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans">
      <main className="max-w-[1200px] mx-auto px-4 py-10">
        <h1 className="text-center text-[28px] font-black mb-12 uppercase">
          {currentView === 'main' ? 'Գլխավոր' : categoryName}
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {currentView === 'main' ? (
            mainCategories.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl cursor-pointer flex flex-col items-center w-full sm:w-[270px] transition-all"
              >
                <img src={cat.img} alt={cat.name} className="h-40 w-40 object-contain mb-6 hover:grayscale-0" />
                <span className="text-[14px] font-black text-[#444] uppercase">{cat.name}</span>
              </div>
            ))
          ) : (
            subCategories[currentView]?.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer flex flex-col items-center w-full sm:w-[250px] transition-all"
              >
              
                <img src={item.img} alt={item.name} className="h-50 w-50 object-contain mb-4" />
                <span className="text-[14px] font-bold text-[#333]">{item.name}</span>
              </div>
            ))
          )}
        </div>

        {currentView !== 'main' && (
          <button 
            onClick={() => setCurrentView('main')}
            className="mt-10 block mx-auto text-[#4b1088] font-bold underline"
          >
            Հետ գնալ
          </button>
        )}
      </main>
    </div>
  );
};

export default Providers;