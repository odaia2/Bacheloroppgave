import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "nb",
    fallbackLng: "nb",
    interpolation: { escapeValue: false },
    resources: {
      nb: { translation: {} },
      en: { translation: {} },
    },
  });

export default i18n;
