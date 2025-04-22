import { createContext } from "react";
import { Locale } from "../../locales/translations";

export interface LanguageContextType {
  lang: Locale;
  setLang: React.Dispatch<React.SetStateAction<Locale>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;