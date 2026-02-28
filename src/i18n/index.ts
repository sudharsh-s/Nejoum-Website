import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import ar from './ar.json';
import ur from './ur.json';
import hi from './hi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      ur: { translation: ur },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export const RTL_LANGUAGES = ['ar', 'ur'];

export const isRTL = (lang: string) => RTL_LANGUAGES.includes(lang);

export default i18n;
