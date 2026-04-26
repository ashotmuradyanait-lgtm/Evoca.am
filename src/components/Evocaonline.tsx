import React, { useState } from 'react';
import { EyeOff, Eye, QrCode, UserPlus, Phone, Mail, Globe, X, ArrowLeft, ArrowRight, CreditCard, Landmark, CircleDollarSign, User } from 'lucide-react';

const translations = {
  am: {
    loginTitle: "Մուտք համակարգ",
    username: "Մուտքանուն",
    password: "Գաղտնաբառ",
    requiredField: "Դաշտը պարտադիր է",
    loginBtn: "Մուտք",
    forgotPass: "Մոռացե՞լ եք մուտքանունը կամ գաղտնաբառը",
    loginQr: "Մուտք QR կոդով",
    register: "Գրանցվել համակարգում",
    oldVersion: "Կայքի հին տարբերակ",
    controlledBy: "Վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից",
    qrTitle: "Արագ և ապահով",
    qrDesc: "Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար",
    regPhysical: "Ֆիզիկական անձ",
    mainPage: "Գլխավոր էջ",
    cardNum: "Քարտի համար",
    accNum: "Հաշվեհամար",
    loan: "Վարկ",
    continue: "Շարունակել",
    errorTitle: "Հաղորդագրություն",
    errorDesc: "Մուտքանունը կամ գաղտնաբառը սխալ է: 3 անընդմեջ անհաջող փորձերի դեպքում Ձեր մուտքը համակարգ կարգելափակվի: Եթե չեք հիշում Ձեր մուտքանունը կամ գաղտնաբառը, խնդրում ենք օգտվել «Մոռացել եք գաղտնաբառը» հղումից կամ զանգահարել Բանկ: Հեռ. (+374 10) 60 55 55",
    ok: "Լավ"
  },
  ru: {
    loginTitle: "Вход",
    username: "Имя пользователя",
    password: "Пароль",
    requiredField: "Поле обязательно",
    loginBtn: "Вход",
    forgotPass: "Забыли имя пользователя или пароль?",
    loginQr: "Вход с помощью QR кода",
    register: "Зарегистрироваться",
    oldVersion: "Старая версия сайта",
    controlledBy: "Контролируется Центральным банком РА",
    qrTitle: "Быстро и безопасно",
    qrDesc: "Если у вас есть приложение EvocaTOUCH, отсканируйте QR-код для быстрого входа",
    regPhysical: "Физическое лицо",
    mainPage: "Главная страница",
    cardNum: "Номер карты",
    accNum: "Номер счета",
    loan: "Кредит",
    continue: "Продолжить",
    errorTitle: "Сообщение",
    errorDesc: "Неверное имя пользователя или пароль. После 3 неудачных попыток ваш доступ будет заблокирован. Если вы не помните данные, воспользуйтесь ссылкой восстановления или позвоните в Банк.",
    ok: "ОК"
  },
  en: {
    loginTitle: "Login",
    username: "Username",
    password: "Password",
    requiredField: "Field is required",
    loginBtn: "Login",
    forgotPass: "Forgot your username or password?",
    loginQr: "Login With QR Code",
    register: "Register",
    oldVersion: "Website old version",
    controlledBy: "Controlled by the CBA",
    qrTitle: "Fast and Safe",
    qrDesc: "If you have EvocaTOUCH app, scan the QR code for faster login",
    regPhysical: "Individual",
    mainPage: "Main page",
    cardNum: "Card number",
    accNum: "Account number",
    loan: "Loan",
    continue: "Continue",
    errorTitle: "Message",
    errorDesc: "Invalid username or password. Your access will be blocked after 3 failed attempts. If you forgot your credentials, use the recovery link or call the Bank.",
    ok: "OK"
  }
};

type Language = 'am' | 'ru' | 'en';

const Evocaonline: React.FC = () => {
  const [lang, setLang] = useState<Language>('am');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showRegisterView, setShowRegisterView] = useState(false);
  const [regStep, setRegStep] = useState(1); // 1: Ընտրություն, 2: Տվյալների մուտքագրում
  const [regType, setRegType] = useState<'card' | 'account' | 'id' | 'loan'>('card');

  const t = translations[lang];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [regValue, setRegValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [regTouched, setRegTouched] = useState(false);

  const usernameError = usernameTouched && username.trim() === '';
  const passwordError = passwordTouched && password.trim() === '';
  const regError = regTouched && regValue.trim() === '';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUsernameTouched(true);
    setPasswordTouched(true);
    if (username.trim() && password.trim()) {
      setShowErrorModal(true);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegTouched(true);
  };

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setIsLangMenuOpen(false);
  };

  const qrImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACDElEQVR4nO2ZXa6DIBCFSVxAl+TWXZILMKHnBwRzm+vzSSCmRfz6MM5wZpiW+jauspD1XlYwvG+SwrHjukrZzlI+x/WpFRPcZiL4rueuu51IKWCx4keRyAlb99tumEv3aSUawZ3X+Nl/lI2cBfGICcxVhCYjchqeIzBxYavBk9uP2I1BLB6ye77+6ksM4iEQsgHvURG3H1VQDGIVtAOvz0E3Mlr3yegwpGkGnksOcdmxtZJNRCyBUnTcMgPLmViZk3ASgqm8V1tZQX9ycRtGpyEKQ1l/yHt+DUQm8UhCuNVkuufec3wHkpBEhMZJ0VsktlQ8C3wYwjCsTQibLkrpJzeGIZh6oSM6c1g/MpFrrmHp0iYhWA9FXBlZRSjzEngV7MONYYiE3MVRy8b05zMJRyFdAm206z46swtkIsLDkz6527qKPI2OQnDnetYW1+7MOQdkIXCg9c/hCaOdfrEeishoxeOdeOVVv4BEBAFouzVpFrOrNxezUQhVULkXy26Due6zQCYiQzzUz+tlbLc+ELF4+BQoi2muGxJPOYxBPFT6uWhSynJjLBNx40FNSjXzRiN2VPBZiE6Eylq9D8FT1MPoNOQ2UZWsWiw6uI9CKRKxonN7qSlOdW//0qQirmFdXLRoncuKLESB6XLPEkJPyrHP2I1BLB7s57nRoiTWT72RyP9jIeu9rGB42yRfi3+JzSO5aeoAAAAASUVORK5CYII=";

  return (
    <div className="min-h-screen bg-[#f8f8fa] flex flex-col justify-between font-sans relative">
      
      <header className="p-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center">
          <img src="https://online.evoca.am/OnlineBanking/Web/images/bank-logo-login.svg" alt="" className="h-12" />
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="text-gray-500 hover:text-gray-800 transition-colors p-2"
          >
            <Globe size={22} />
          </button>

          {isLangMenuOpen && (
            <div className="absolute right-0 mt-1 bg-white rounded-xl shadow-lg py-2 w-16 border border-gray-100 flex flex-col z-50">
              {['am', 'ru', 'en'].map((l) => (
                <button 
                  key={l}
                  onClick={() => handleLangChange(l as Language)} 
                  className={`px-3 py-1.5 text-xs font-bold ${lang === l ? 'text-black' : 'text-gray-400'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 -mt-10">
        {!showRegisterView ? (
          <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] w-full max-w-[460px] p-8 md:p-10">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">{t.loginTitle}</h1>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1 relative">
                <div className={`border rounded-2xl p-3 transition-colors ${usernameError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#5C1A8B]'}`}>
                  <input
                    type="text"
                    placeholder={t.username}
                    className="w-full bg-transparent outline-none text-gray-800"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => setUsernameTouched(true)}
                  />
                </div>
                {usernameError && <p className="text-[#e25050] text-[11px] absolute -bottom-5 left-2">{t.requiredField}</p>}
              </div>

              <div className="space-y-1 relative">
                <div className={`border rounded-2xl p-3 flex items-center transition-colors ${passwordError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#5C1A8B]'}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={t.password}
                    className="w-full bg-transparent outline-none text-gray-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordTouched(true)}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400">
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
                {passwordError && <p className="text-[#e25050] text-[11px] absolute -bottom-5 left-2">{t.requiredField}</p>}
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-[#5C1A8B] hover:bg-[#4d1574] text-white rounded-2xl py-4 font-semibold text-[15px] transition-all">
                  {t.loginBtn}
                </button>
              </div>
            </form>

            <div className="text-center mt-6">
              <a href="#" className="text-[13px] text-gray-500 hover:text-[#5C1A8B]">{t.forgotPass}</a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <button onClick={() => setShowQrModal(true)} className="flex items-center justify-center gap-2 bg-[#f9f9fa] rounded-2xl py-3 px-2 text-[13px] font-medium text-gray-700">
                <QrCode size={18} className="text-[#5C1A8B]" />
                <span>{t.loginQr}</span>
              </button>
              <button onClick={() => { setShowRegisterView(true); setRegStep(1); }} className="flex items-center justify-center gap-2 bg-[#f9f9fa] rounded-2xl py-3 px-2 text-[13px] font-medium text-gray-700">
                <UserPlus size={18} className="text-[#5C1A8B]" />
                <span>{t.register}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-[500px] p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => regStep === 2 ? setRegStep(1) : setShowRegisterView(false)} className="text-gray-400">
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">{t.register}</h1>
            </div>

            {regStep === 1 ? (
              <div 
                onClick={() => setRegStep(2)}
                className="border border-gray-100 rounded-2xl p-4 flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-50 p-2 rounded-xl text-[#5C1A8B]"><UserPlus size={24} /></div>
                  <span className="font-semibold text-gray-800">{t.regPhysical}</span>
                </div>
                <ArrowRight size={20} className="text-[#5C1A8B]" />
              </div>
            ) : (
              <div className="space-y-6">
                {/* Registration Tabs */}
                <div className="flex justify-between items-center gap-2 mb-6">
                  <button 
                    onClick={() => setRegType('card')}
                    className={`flex-1 flex flex-col items-center py-3 rounded-xl border transition-all ${regType === 'card' ? 'border-[#5C1A8B] text-[#5C1A8B]' : 'border-gray-100 text-gray-400'}`}
                  >
                    <CreditCard size={20} className="mb-1" />
                    <span className="text-[10px] font-bold">{t.cardNum}</span>
                  </button>
                  <button 
                    onClick={() => setRegType('account')}
                    className={`flex-1 flex flex-col items-center py-3 rounded-xl border transition-all ${regType === 'account' ? 'border-[#5C1A8B] text-[#5C1A8B]' : 'border-gray-100 text-gray-400'}`}
                  >
                    <Landmark size={20} className="mb-1" />
                    <span className="text-[10px] font-bold">{t.accNum}</span>
                  </button>
                  <button 
                    onClick={() => setRegType('id')}
                    className={`w-14 flex flex-col items-center py-3 rounded-xl border transition-all ${regType === 'id' ? 'border-[#5C1A8B] text-[#5C1A8B]' : 'border-gray-100 text-gray-400'}`}
                  >
                    <User size={20} />
                  </button>
                  <button 
                    onClick={() => setRegType('loan')}
                    className={`flex-1 flex flex-col items-center py-3 rounded-xl border transition-all ${regType === 'loan' ? 'border-[#5C1A8B] text-[#5C1A8B]' : 'border-gray-100 text-gray-400'}`}
                  >
                    <CircleDollarSign size={20} className="mb-1" />
                    <span className="text-[10px] font-bold">{t.loan}</span>
                  </button>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div className="space-y-1 relative">
                    <label className="text-xs text-gray-400 px-2">
                      {regType === 'card' ? t.cardNum : regType === 'account' ? t.accNum : regType === 'loan' ? t.loan : "ՀԾՀ"}
                    </label>
                    <div className={`border rounded-2xl p-3 transition-colors ${regError ? 'border-red-400' : 'border-gray-200 focus-within:border-[#5C1A8B]'}`}>
                      <input
                        type="text"
                        placeholder={regType === 'card' ? "XXXX XXXX XXXX XXXX" : ""}
                        className="w-full bg-transparent outline-none text-gray-800"
                        value={regValue}
                        onChange={(e) => setRegValue(e.target.value)}
                        onBlur={() => setRegTouched(true)}
                      />
                    </div>
                    {regError && <p className="text-[#e25050] text-[11px] absolute -bottom-5 left-2">{t.requiredField}</p>}
                  </div>

                  <button type="submit" className="w-full bg-[#5C1A8B] text-white rounded-2xl py-4 font-semibold text-[15px]">
                    {t.continue}
                  </button>
                </form>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <button onClick={() => setShowRegisterView(false)} className="text-[#5C1A8B] font-bold text-[14px]">{t.mainPage}</button>
            </div>
          </div>
        )}
      </main>

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-[1.5rem] p-6 max-w-[450px] w-full relative shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <X className="bg-red-50 text-red-500 rounded-full p-1" size={24} />
                {t.errorTitle}
              </h3>
              <button onClick={() => setShowErrorModal(false)} className="text-gray-400"><X size={20} /></button>
            </div>
            <p className="text-gray-600 text-[14px] leading-relaxed mb-6">{t.errorDesc}</p>
            <button 
              onClick={() => setShowErrorModal(false)} 
              className="w-full bg-[#5C1A8B] text-white rounded-xl py-3 font-semibold transition-colors"
            >
              {t.ok}
            </button>
          </div>
        </div>
      )}

      {/* QR Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-[400px] w-full relative text-center shadow-2xl">
            <button onClick={() => setShowQrModal(false)} className="absolute right-8 top-8 text-gray-400"><X size={24} /></button>
            <div className="mb-8 flex justify-center">
              <img src={qrImageBase64} alt="QR" className="w-[180px] h-[180px] rounded-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t.qrTitle}</h2>
            <p className="text-gray-500 text-[14px] leading-relaxed">{t.qrDesc}</p>
          </div>
        </div>
      )}

      <footer className="w-full pb-6 px-6 text-xs flex flex-col items-center gap-6">
        <a href="#" className="font-semibold text-gray-800 border-b border-gray-800 pb-0.5">{t.oldVersion}</a>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
          <div className="text-center md:text-left">
            <p>«Էվոկաբանկ» ՓԲԸ</p>
            <p>{t.controlledBy}</p>
          </div>
          <div className="flex gap-6 text-[13px] text-gray-600 font-medium">
            <a href="tel:+37410605555" className="flex items-center gap-2"><Phone size={16} /> (+374 10) 60 55 55</a>
            <a href="mailto:hello@evoca.am" className="flex items-center gap-2"><Mail size={16} /> hello@evoca.am</a>
          </div>
          <div className="flex gap-2">
            <img src="images/appstore.svg" alt="App Store" className="h-8" />
            <img src="images/googleplay.svg" alt="Google Play" className="h-8" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Evocaonline;