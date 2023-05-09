import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { DateTime } from "luxon";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        
    });

i18n.services.formatter.add('DATE_LONG', (value, lng, _options) => {
    return  DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
})

// i18n
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     debug: true,
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     resources: {
//       en: {
//         translation: {
//           // here we will place our translations...
//           description: {
//             part1: 'Testtting i18n React',
//             part2: 'Second Test'
//           }
//         },
//       },
//       de: {
//         translation: {
//           description: {
//             part1: 'Ändere und speichere um neu zu laden.',
//             part2: 'Serni Test'
//           }
//         }
//       }
//     },
//   });

export default i18n;
