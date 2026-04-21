import React, { useState } from 'react';

// Վարկի մարման գրաֆիկի տիպը
interface PaymentSchedule {
  month: number;
  remainingPrincipal: number;
  interestPayment: number;
  principalPayment: number;
  monthlyPayment: number;
}

const StoneBankCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loan' | 'deposit'>('loan');
  const [showResults, setShowResults] = useState(false);
  
  // States
  const [amount, setAmount] = useState<number>(13340000);
  const [rate, setRate] = useState<number>(1);
  const [term, setTerm] = useState<number>(36); 
  const [repaymentType, setRepaymentType] = useState<'declining' | 'annuity'>('declining');
  const [schedule, setSchedule] = useState<PaymentSchedule[]>([]);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  // Ավանդի դինամիկ հաշվարկ (Real-time)
  const dailyInterest = amount > 0 && rate > 0 ? (amount * (rate / 100)) / 365 : 0;
  const totalDepositInterest = dailyInterest * (activeTab === 'deposit' ? term : 0);
  const netIncome = totalDepositInterest * 0.9;

  // Վարկի հաշվարկի ֆունկցիա
  const calculateLoan = () => {
    if (amount <= 0 || rate <= 0 || term <= 0) return;

    const monthlyRate = (rate / 100) / 12;
    let tempSchedule: PaymentSchedule[] = [];
    let currentBalance = amount;
    let totalPaid = 0;

    if (repaymentType === 'annuity') {
      const annuityPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
      for (let i = 1; i <= term; i++) {
        const interest = currentBalance * monthlyRate;
        const principal = annuityPayment - interest;
        currentBalance -= principal;
        totalPaid += annuityPayment;
        tempSchedule.push({
          month: i,
          remainingPrincipal: Math.max(0, currentBalance),
          interestPayment: interest,
          principalPayment: principal,
          monthlyPayment: annuityPayment
        });
      }
    } else {
      const principalPart = amount / term;
      for (let i = 1; i <= term; i++) {
        const interest = currentBalance * monthlyRate;
        const monthlyPayment = principalPart + interest;
        currentBalance -= principalPart;
        totalPaid += monthlyPayment;
        tempSchedule.push({
          month: i,
          remainingPrincipal: Math.max(0, currentBalance),
          interestPayment: interest,
          principalPayment: principalPart,
          monthlyPayment: monthlyPayment
        });
      }
    }

    setSchedule(tempSchedule);
    setTotalPayment(totalPaid);
    setShowResults(true);
  };

  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString('en-US').replace(/,/g, ' ');
  };

  // Ֆունկցիա՝ սլայդերի տոկոսը հաշվելու համար (եռանկյան դիրքի համար)
  const getPercent = (val: number, max: number) => (val / max) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-white p-6 md:p-12 animate-in fade-in duration-300">
        <div className="max-w-[1000px] mx-auto">
          <button 
            onClick={() => setShowResults(false)}
            className="text-[#6001D3] font-bold flex items-center gap-2 mb-8 hover:underline"
          >
            ← ՀԵՏ ԳՆԱԼ
          </button>
          
          <h2 className="text-[28px] font-bold mb-8">Վարկի մարման գրաֆիկ</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-[#F9F9FB] p-8 rounded-2xl border border-[#F1F1F4]">
            <div>
              <p className="text-[#828282] text-[12px] font-bold uppercase mb-1">Գումար</p>
              <p className="text-[18px] font-bold">{formatNumber(amount)} ֏</p>
            </div>
            <div>
              <p className="text-[#828282] text-[12px] font-bold uppercase mb-1">Տոկոսադրույք</p>
              <p className="text-[18px] font-bold">{rate}%</p>
            </div>
            <div>
              <p className="text-[#828282] text-[12px] font-bold uppercase mb-1">Ժամկետ</p>
              <p className="text-[18px] font-bold">{term} ամիս</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#6001D3]/10">
              <p className="text-[#6001D3] text-[12px] font-bold uppercase mb-1">Ընդհանուր վճար</p>
              <p className="text-[20px] font-bold text-[#6001D3]">{formatNumber(totalPayment)} ֏</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EEE] text-[#828282] text-[13px] uppercase">
                  <th className="pb-4 font-bold">Ամիս</th>
                  <th className="pb-4 font-bold">Վճարվող տոկոսագումար</th>
                  <th className="pb-4 font-bold">Վարկի մարում</th>
                  <th className="pb-4 font-bold">Ամսական վճար</th>
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {schedule.map((item) => (
                  <tr key={item.month} className="border-b border-[#F8F8F8] hover:bg-[#FDFBFF]">
                    <td className="py-4 font-bold text-[#1A1A1A]">{item.month}</td>
                    <td className="py-4 text-[#4F4F4F]">{formatNumber(item.interestPayment)} ֏</td>
                    <td className="py-4 text-[#4F4F4F]">{formatNumber(item.principalPayment)} ֏</td>
                    <td className="py-4 font-bold text-[#1A1A1A]">{formatNumber(item.monthlyPayment)} ֏</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex flex-col items-center p-6 select-none" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full max-w-[940px] bg-white rounded-[12px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] p-10 border border-[#F1F1F4]">
        
        <h1 className="text-[32px] font-bold text-[#1A1A1A] mb-8 tracking-tight">Հաշվիչներ</h1>

        <div className="flex mb-10 border-b border-[#F2F2F5]">
          <button 
            onClick={() => { setActiveTab('loan'); }}
            className={`px-12 py-3.5 font-bold text-[15px] transition-all ${activeTab === 'loan' ? 'border-b-2 border-[#6001D3] text-[#1A1A1A]' : 'text-[#B8B8B8]'}`}
          >
            Վարկ
          </button>
          <button 
            onClick={() => { setActiveTab('deposit'); }}
            className={`px-12 py-3.5 font-bold text-[15px] transition-all ${activeTab === 'deposit' ? 'border-b-2 border-[#6001D3] text-[#1A1A1A]' : 'text-[#B8B8B8]'}`}
          >
            Ավանդ
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 flex flex-col gap-10">
            {/* Գումար Input & Slider */}
            <div className="relative">
              <div className="flex flex-col border border-[#E0E0E0] rounded-lg px-4 py-2.5 bg-white focus-within:border-[#6001D3] mb-2">
                <label className="text-[#828282] text-[11px] font-bold uppercase mb-1">{activeTab === 'loan' ? 'Վարկի գումար' : 'Ներդրվող գումար'}</label>
                <div className="flex items-center justify-between font-bold text-[22px] text-[#1A1A1A]">
                  <input type="text" className="outline-none w-full bg-transparent" value={formatNumber(amount)} onChange={(e) => setAmount(Number(e.target.value.replace(/\s/g, '')) || 0)} />
                  <span className="ml-2">֏</span>
                </div>
              </div>
              
              <div className="relative h-1 bg-[#EEEEEE] mx-1">
                <div className="absolute top-0 left-0 h-full bg-[#6001D3]" style={{ width: `${getPercent(amount, 50000000)}%` }} />
                <input type="range" min="0" max="50000000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-30" />
                {/* Մանուշակագույն եռանկյունի */}
                <div className="absolute top-1 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#6001D3] z-20 pointer-events-none transition-all duration-75" style={{ left: `${getPercent(amount, 50000000)}%`, transform: 'translateX(-50%)' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#BDBDBD] mt-4 font-bold">
                <span>0</span>
                <span>50 000 000</span>
              </div>
            </div>

            {/* Տոկոս կամ Ժամկետ Slider */}
            <div className="relative">
              <div className="flex flex-col border border-[#E0E0E0] rounded-lg px-4 py-2.5 bg-white focus-within:border-[#6001D3] mb-2">
                <label className="text-[#828282] text-[11px] font-bold uppercase mb-1">{activeTab === 'loan' ? 'Տարեկան տոկոսադրույք' : 'Ավանդի ժամկետ (օր)'}</label>
                <div className="flex items-center justify-between font-bold text-[22px] text-[#1A1A1A]">
                  <input type="text" className="outline-none w-full bg-transparent" value={activeTab === 'loan' ? rate : term} onChange={(e) => activeTab === 'loan' ? setRate(Number(e.target.value) || 0) : setTerm(Number(e.target.value) || 0)} />
                  <span>{activeTab === 'loan' ? '%' : 'օր'}</span>
                </div>
              </div>
              
              <div className="relative h-1 bg-[#EEEEEE] mx-1">
                {/* Դինամիկ Max արժեքը ըստ Tab-ի */}
                {(() => {
                  const maxVal = activeTab === 'loan' ? 36 : 1095;
                  const currentVal = activeTab === 'loan' ? rate : term;
                  return (
                    <>
                      <div className="absolute top-0 left-0 h-full bg-[#6001D3]" style={{ width: `${getPercent(currentVal, maxVal)}%` }} />
                      <input type="range" min="1" max={maxVal} value={currentVal} onChange={(e) => activeTab === 'loan' ? setRate(Number(e.target.value)) : setTerm(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-30" />
                      <div className="absolute top-1 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#6001D3] z-20 pointer-events-none transition-all duration-75" style={{ left: `${getPercent(currentVal, maxVal)}%`, transform: 'translateX(-50%)' }} />
                    </>
                  );
                })()}
              </div>
              <div className="flex justify-between text-[11px] text-[#BDBDBD] mt-4 font-bold">
                <span>1</span>
                <span>{activeTab === 'loan' ? '36%' : '1095 օր'}</span>
              </div>
            </div>

            {activeTab === 'deposit' && (
              <div className="relative">
                <div className="flex flex-col border border-[#E0E0E0] rounded-lg px-4 py-2.5 bg-white focus-within:border-[#6001D3] mb-2">
                  <label className="text-[#828282] text-[11px] font-bold uppercase mb-1">Տարեկան տոկոսադրույք</label>
                  <div className="flex items-center justify-between font-bold text-[22px] text-[#1A1A1A]">
                    <input type="text" className="outline-none w-full bg-transparent" value={rate} onChange={(e) => setRate(Number(e.target.value) || 0)} />
                    <span>%</span>
                  </div>
                </div>
                <div className="relative h-1 bg-[#EEEEEE] mx-1">
                  <div className="absolute top-0 left-0 h-full bg-[#6001D3]" style={{ width: `${getPercent(rate, 36)}%` }} />
                  <input type="range" min="1" max="36" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-30" />
                  <div className="absolute top-1 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#6001D3] z-20 pointer-events-none transition-all duration-75" style={{ left: `${getPercent(rate, 36)}%`, transform: 'translateX(-50%)' }} />
                </div>
                <div className="flex justify-between text-[11px] text-[#BDBDBD] mt-4 font-bold"><span>1%</span><span>36%</span></div>
              </div>
            )}
          </div>

          <div className="md:col-span-5 flex flex-col justify-start">
            {activeTab === 'loan' ? (
              <div className="flex flex-col gap-10 border-l border-[#F2F2F5] pl-10 pt-2">
                <div className="relative">
                  <div className="flex flex-col border border-[#E0E0E0] rounded-lg px-4 py-2.5 bg-white focus-within:border-[#6001D3] mb-2">
                    <label className="text-[#828282] text-[11px] font-bold uppercase mb-1">Ժամկետ (ամիս)</label>
                    <div className="flex items-center justify-between font-bold text-[22px] text-[#1A1A1A]">
                      <input type="text" className="outline-none w-full bg-transparent" value={term} onChange={(e) => setTerm(Number(e.target.value) || 0)} />
                      <span className="text-[16px]">ամիս</span>
                    </div>
                  </div>
                  <div className="relative h-1 bg-[#EEEEEE] mx-1">
                    <div className="absolute top-0 left-0 h-full bg-[#6001D3]" style={{ width: `${getPercent(term, 120)}%` }} />
                    <input type="range" min="1" max="120" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-30" />
                    <div className="absolute top-1 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[10px] border-b-[#6001D3] z-20 pointer-events-none transition-all duration-75" style={{ left: `${getPercent(term, 120)}%`, transform: 'translateX(-50%)' }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#BDBDBD] mt-4 font-bold"><span>1</span><span>120</span></div>
                </div>

                <div>
                  <label className="text-[#828282] text-[10px] font-bold uppercase tracking-widest mb-4 block">Մարման ձև</label>
                  <div className="flex flex-row gap-6">
                    <label className="flex items-center cursor-pointer gap-2" onClick={() => setRepaymentType('declining')}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${repaymentType === 'declining' ? 'border-[#6001D3]' : 'border-[#E0E0E0]'}`}>
                        {repaymentType === 'declining' && <div className="w-2.5 h-2.5 bg-[#6001D3] rounded-full" />}
                      </div>
                      <span className="text-[14px] font-bold text-[#1A1A1A]">Զսպանակաձև</span>
                    </label>
                    <label className="flex items-center cursor-pointer gap-2" onClick={() => setRepaymentType('annuity')}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${repaymentType === 'annuity' ? 'border-[#6001D3]' : 'border-[#E0E0E0]'}`}>
                        {repaymentType === 'annuity' && <div className="w-2.5 h-2.5 bg-[#6001D3] rounded-full" />}
                      </div>
                      <span className="text-[14px] font-bold text-[#1A1A1A]">Անուիտետ</span>
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-7 pt-2">
                <div className="flex justify-between items-center border-b border-[#F2F2F5] pb-5">
                  <span className="text-[#4F4F4F] font-medium text-[14px]">Օրական տոկոսագումար</span>
                  <span className="text-[18px] font-bold">{dailyInterest.toLocaleString('en-US', {maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F2F2F5] pb-5">
                  <span className="text-[#4F4F4F] font-medium text-[14px]">Ընդհանուր եկամուտ</span>
                  <span className="text-[18px] font-bold">{totalDepositInterest.toLocaleString('en-US', {maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F2F2F5] pb-5">
                  <span className="text-[#4F4F4F] font-medium text-[14px]">Զուտ եկամուտ (հարկված)</span>
                  <span className="text-[18px] font-bold text-[#6001D3]">{netIncome.toLocaleString('en-US', {maximumFractionDigits: 2})}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F2F2F5] flex justify-between items-center">
          <p className="text-[12px] text-[#BDBDBD] font-medium italic">Բոլոր հաշվարկները կրում են մոտավոր բնույթ:</p>
          {activeTab === 'loan' && (
            <button 
              onClick={calculateLoan}
              className="bg-[#6001D3] text-white px-16 py-4 rounded-2xl text-[17px] font-bold hover:bg-[#4d00b0] transition-all active:scale-95 shadow-xl shadow-purple-100"
            >
              Հաշվել
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoneBankCalculator;