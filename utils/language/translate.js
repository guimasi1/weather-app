import { useLanguage } from "@/contexts/LanguageContext";
import english from "./en.json";
import italian from "./it.json";

export const useTranslate = () => {
  const { language } = useLanguage();
  return (key) => {
    const translations = language === "it" ? italian : english;
    return translations[key] || key;
  };
};
