import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useState } from 'react';
import * as Icons from 'lucide-react';

const resources = {
  am: {
    translation: {
      "main_title": "ԳԼԽԱՎՈՐ",
      "back": "ՀԵՏ ԳՆԱԼ",
      "continue": "ՇԱՐՈՒՆԱԿԵԼ",
      "account_number": "Հաշվեհամար",
      "loan_pay": "Վարկի մարում"
    }
  },
  en: {
    translation: {
      "main_title": "MAIN",
      "back": "GO BACK",
      "continue": "CONTINUE",
      "account_number": "Account Number",
      "loan_pay": "Loan Payment"
    }
  },
  ru: {
    translation: {
      "main_title": "ГЛАВНАЯ",
      "back": "НАЗАД",
      "continue": "ПРОДОЛЖИТЬ",
      "account_number": "Номер счета",
      "loan_pay": "Погашение кредита"
    }
  }
};

// Ստուգում ենք, որ միայն մեկ անգամ initialize լինի
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'am', 
      interpolation: { escapeValue: false }
    });
}

// Հենց սա է այն կոմպոնենտը, որը պիտի import անես App.tsx-ում
const Trans = () => {
  const { i18n } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Սա փոխում է ԱՄԲՈՂՋ կայքի լեզուն
    setShowLangs(false);
  };

  return (
    <div className="relative inline-block">
      <button 
        onClick={() => setShowLangs(!showLangs)}
        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-all"
      >
        <Icons.Globe size={24} className="text-[#4b1088]" />
      </button>

      {showLangs && (
        <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-2xl p-2 flex flex-col gap-1 min-w-[120px] z-[999] border border-gray-100">
          <button onClick={() => changeLanguage('am')} className="hover:bg-purple-50 p-2 rounded-lg text-left text-sm font-bold">🇦🇲 Հայերեն</button>
          <button onClick={() => changeLanguage('ru')} className="hover:bg-purple-50 p-2 rounded-lg text-left text-sm font-bold">🇷🇺 Русский</button>
          <button onClick={() => changeLanguage('en')} className="hover:bg-purple-50 p-2 rounded-lg text-left text-sm font-bold">🇺🇸 English</button>
        </div>
      )}
    </div>
  );
};

export default Trans;