import { initReactI18next } from "react-i18next";
import translationEnglish from "./locales/en/en.json";
import translationUkrainian from "./locales/ua/ua.json";
import i18n from "i18next";

export const defaultNS = "translation";
export const resources = {
  en: { translation: translationEnglish },
  ua: { translation: translationUkrainian },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["translation"],
  defaultNS,
  resources,

  react: {
    defaultTransParent: "div",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["p", "br", "i"],
  },
});
