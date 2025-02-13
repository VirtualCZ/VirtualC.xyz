import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend';
import LngDetector from 'i18next-browser-languagedetector';
import translationsCs from './cs/translation';
import translationsEn from './en/translation';

const options = {
  order: ['localStorage', 'navigator'],
};

i18n
  .use(XHR)
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      cs: { translation: translationsCs },
    },
    detection: options,
    supportedLngs: [ 'en', 'cs'],
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
