import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hy: { translation: { "nav_individual": "Անհատ", "nav_business": "Բիզնես" } },
      en: { translation: { "nav_individual": "Individual", "nav_business": "Business" } },
      ru: { translation: { "nav_individual": "Физическим лицам", "nav_business": "Бизнес" } },
    },
    lng: "hy", // սկզբնական լեզուն
    fallbackLng: "hy",
    interpolation: { escapeValue: false }
  });

export default i18n;