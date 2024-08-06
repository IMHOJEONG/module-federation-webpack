import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // let detect the language on client side
    // >> changed default to "ko" from undefined to explicitly set
    lng: "ko",
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    fallbackLng: "ko",
    supportedLngs: ["ko", "en"],
    resources: {
      ko: {
        translation: {
          search_placeholder: "검색어를 입력하세요.",
          yes: "예",
          no: "아니오",
          hide_filters: "필터 숨기기",
          filters: "필터",
        },
      },
      en: {
        translation: {
          search_placeholder: "Search by anything...",
          yes: "Yes",
          no: "No",
          hide_filters: "Hide Filters",
          filters: "Filters",
        },
      },
    },
  });

export const i18nextLanguages = i18next.isInitialized;

export const i18nextT = i18next.t;
