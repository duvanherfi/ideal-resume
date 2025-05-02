import React, { ReactNode, useEffect, useState } from "react";
import type { Locale } from "src/locales/wordings";
import LanguageContext from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
  lang?: Locale;
}

const getBrowserLanguage = (): Locale => {
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  return browserLang === "es" ? "es" : "en";
};

const getInitialLanguage = (defLang?: Locale): Locale => {
  const storedLang = localStorage.getItem("lang") as Locale | null;
  if (storedLang === "es" || storedLang === "en") {
    return storedLang;
  }
  if (defLang === "es" || defLang === "en") {
    return defLang;
  }
  return getBrowserLanguage();
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, lang: defLang }) => {
  const [lang, setLang] = useState<Locale>(getInitialLanguage(defLang));

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const contextValue = React.useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;