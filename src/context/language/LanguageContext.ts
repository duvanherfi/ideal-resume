import { createContext } from "react";
import type { Locale } from "src/locales/wordings";

export interface LanguageContextType {
  lang: Locale;
  setLang: React.Dispatch<React.SetStateAction<Locale>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default LanguageContext;