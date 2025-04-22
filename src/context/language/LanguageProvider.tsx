import React, { ReactNode, useState } from "react";
import { Locale } from "../../locales/translations";
import LanguageContext from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
  lang?: Locale;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, lang: defLang }) => {
  const [lang, setLang] = useState<Locale>(defLang ?? "es");

  const contextValue = React.useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
