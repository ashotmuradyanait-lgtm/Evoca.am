import React, { useState } from 'react';

type Tab = 'loan' | 'deposit';

const Calculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('loan');
  const [amount, setAmount] = useState<number>(5164561);
  const [term, setTerm] = useState<number>(1);
  const [rate, setRate] = useState<number>(36);
  const [repaymentType, setRepaymentType] = useState<'annuity' | 'declining'>('declining');

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#FDFCFE] min-h-screen font-sans text-[#2D2D2D]">
      <h1 className="text-4xl font-bold mb-8 text-[#3A2D4A]">Հաշվիչներ</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('loan')}
          className={`px-8 py-2 rounded-t-lg font-medium transition-all ${
            activeTab === 'loan' ? 'bg-white shadow-sm text-[#3A2D4A]' : 'text-gray-400'
          }`}
        >
          Վարկ
        </button>
        <button
          onClick={() => setActiveTab('deposit')}
          className={`px-8 py-2 rounded-t-lg font-medium transition-all ${
            activeTab === 'deposit' ? 'bg-white shadow-sm text-[#3A2D4A]' : 'text-gray-400'
          }`}
        >
          Ավանդ
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Inputs */}
          <div className="space-y-10">
            {/* Amount Input */}
            <div className="relative border-b-2 border-[#5D2D91] pb-2">
              <label className="block text-sm font-semibold text-[#3A2D4A] mb-1">
                {activeTab === 'loan' ? 'Վարկի գումար' : 'Ներդրվող գումար'}
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={amount.toLocaleString()}
                  onChange={(e) => setAmount(Number(e.target.value.replace(/\D/g, '')))}
                  className="text-2xl font-bold outline-none w-full bg-transparent"
                />
                <span className="text-xl font-bold ml-2">֏</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="absolute -bottom-[2px] left-0 w-full accent-[#5D2D91] cursor-pointer"
              />
            </div>

            {/* Interest Rate */}
            <div className="relative border-b-2 border-[#5D2D91] pb-2">
              <label className="block text-sm font-semibold text-[#3A2D4A] mb-1">
                Տարեկան տոկոսադրույք
              </label>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  value={`${rate}%`}
                  readOnly
                  className="text-2xl font-bold outline-none bg-transparent"
                />
              </div>
              <input
                type="range"
                min="1"
                max="36"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="absolute -bottom-[2px] left-0 w-full accent-[#5D2D91] cursor-pointer"
              />
            </div>

            {activeTab === 'loan' && (
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-4">Մարման ձև</label>
                <div className="flex gap-8">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'declining'}
                      onChange={() => setRepaymentType('declining')}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${repaymentType === 'declining' ? 'border-[#5D2D91]' : 'border-gray-300'}`}>
                      {repaymentType === 'declining' && <div className="w-2.5 h-2.5 bg-[#5D2D91] rounded-full" />}
                    </div>
                    <span className="font-medium">Զսպանակաձև</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="repayment"
                      checked={repaymentType === 'annuity'}
                      onChange={() => setRepaymentType('annuity')}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${repaymentType === 'annuity' ? 'border-[#5D2D91]' : 'border-gray-300'}`}>
                      {repaymentType === 'annuity' && <div className="w-2.5 h-2.5 bg-[#5D2D91] rounded-full" />}
                    </div>
                    <span className="font-medium text-gray-400 group-hover:text-black transition-colors">Անուիտետ</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Term & Summary */}
          <div className="space-y-10">
            {/* Term Input */}
            <div className="relative border-b-2 border-[#5D2D91] pb-2">
              <label className="block text-sm font-semibold text-[#3A2D4A] mb-1">Ժամկետ</label>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{term} {activeTab === 'loan' ? 'ամիս' : 'օր'}</span>
              </div>
              <input
                type="range"
                min="1"
                max={activeTab === 'loan' ? 1200 : 1095}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="absolute -bottom-[2px] left-0 w-full accent-[#5D2D91] cursor-pointer"
              />
            </div>

            {/* Results Section for Deposit */}
            {activeTab === 'deposit' && (
              <div className="space-y-4 pt-4 border-l-2 border-gray-100 pl-6">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">Օրական կտրվածքով հաշվարկվող տոկոսագումար *</span>
                  <span className="text-lg font-bold">910.13</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-500">Ընդհանուր տոկոսային եկամուտ</span>
                  <span className="text-lg font-bold">124,657.53</span>
                </div>
              </div>
            )}

            <div className="pt-6">
              <button className="w-full bg-[#5D2D91] text-white py-4 rounded-2xl font-bold text-xl hover:bg-[#4a2475] transition-all shadow-lg shadow-purple-200">
                Հաշվել
              </button>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-xs text-gray-400 leading-relaxed">
          Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
        </p>
      </div>
    </div>
  );
};

export default Calculator;