import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import $ from "jquery"

// Import your translation files or resources
import enTranslation from './en.json';
import arTranslation from './ar.json';


let language = 'ar'
export function handlePageLanguageChange () {
  language = localStorage.getItem('language') ?? 'ar'
  if(language == 'en')
    $("html").attr("lang" , "en").attr("dir" , "ltr")
  else if(language == 'ar')
    $("html").attr("lang" , "ar").attr("dir" , "rtl")
}
handlePageLanguageChange()

i18n
  .use(initReactI18next) // pass i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: language, // default language
    fallbackLng: 'en', // fallback language in case the user language is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
