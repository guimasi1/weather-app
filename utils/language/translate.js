import english from "./en.json";
import italian from "./it.json";

export const t = (key, language) => {
  const translations = language === "it" ? italian : english;
  return translations[key] || key; // Fallback to key if translation is missing
};
