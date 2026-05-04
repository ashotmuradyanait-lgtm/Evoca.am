import { useState } from 'react';
import * as Icons from 'lucide-react';

const Providers = () => {
  const [currentView, setCurrentView] = useState('main');
  const [categoryName, setCategoryName] = useState('');
  const [step, setStep] = useState(1); 
  const [selectedSubItem, setSelectedSubItem] = useState<any>(null);

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
      { name: "Վարկի մարում", img: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png" },
      { name: "Հաշվի համալրում", img: "https://resource.evoca.am/images/webPayment/Account-Replenishment.png" },
      { name: "Քարտի համալրում", img: "https://resource.evoca.am/images/webPayment/cardtocard.png" }
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
    events: [],
  };

  const handleCategoryClick = (cat: any) => {
    if (subCategories[cat.id]) {
      setCurrentView(cat.id);
      setCategoryName(cat.name);
      setStep(2);
    }
  };

  const handleSubItemClick = (item: any) => {
    setSelectedSubItem(item);
    if (item.name === "Վարկի մարում") {
      setStep(3);
    } else {
      setStep(4);
    }
  };

  const goBack = () => {
    if (step === 2) {
      setCurrentView('main');
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] font-sans pb-20">
      <main className="max-w-[1200px] mx-auto px-4 py-10">
        <h1 className="text-center text-[28px] font-black mb-12 uppercase">
          {step === 1 ? 'Գլխավոր' : (step === 4 ? selectedSubItem?.name : categoryName)}
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
         
          {step === 1 && (
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
          )}

          
          {step === 2 && (
            subCategories[currentView]?.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => handleSubItemClick(item)}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer flex flex-col items-center w-full sm:w-[250px] transition-all"
              >
                <img src={item.img} alt={item.name} className="h-50 w-50 object-contain mb-4" />
                <span className="text-[14px] font-bold text-[#333]">{item.name}</span>
              </div>
            ))
          )}

        
          {step === 3 && (
            <div 
              onClick={() => setStep(4)}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer flex flex-col items-center w-full sm:w-[350px] transition-all border-2 border-transparent hover:border-[#4b1088]"
            >
              <div className="bg-purple-50 p-4 rounded-full mb-4">
                <Icons.CreditCard size={40} className="text-[#4b1088]" />
              </div>
              <span className="text-[18px] font-black text-[#222]">Հերթական մարում</span>
            </div>
          )}

          
          {step === 4 && (
            <div className="max-w-[500px] w-full bg-white p-10 rounded-[40px] shadow-sm text-center">
               <h2 className="text-[32px] font-black mb-8 text-[#222]">
                  {selectedSubItem?.name === "Վարկի մարում" ? "Հերթական մարում" : selectedSubItem?.name}
               </h2>
               <div className="text-left mb-2 pl-2">
                 <label className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">
                    {selectedSubItem?.name === "Վարկի մարում" ? "* Վարկային պայմանագրի համար" : "Հաշվեհամար"}
                 </label>
               </div>
               <input 
                 type="text" 
                 placeholder={selectedSubItem?.name === "Վարկի մարում" ? "TVxxxx" : "00000000"}
                 className="w-full bg-[#f9f9f9] border-2 border-purple-100 rounded-2xl p-5 mb-8 focus:ring-2 ring-purple-300 outline-none transition-all text-lg font-medium"
               />
               <button className="w-full bg-[#4b1088] text-white font-black py-5 rounded-2xl hover:bg-purple-900 transition-all text-xl shadow-lg shadow-purple-200">
                 Շարունակել
               </button>
            </div>
          )}
        </div>

        {step > 1 && (
          <button 
            onClick={goBack}
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