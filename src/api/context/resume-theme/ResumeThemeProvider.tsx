import TemplateTheme from "@resume-api/common/TemplateTheme";
import React, { ReactNode, useMemo, useState } from "react";
import ResumeThemeContext, { ResumeThemeContextType } from "./ResumeThemeContext";
import initialTheme from "./initialTheme";

interface ResumeThemeProviderProps {
  children: ReactNode;
  defaultTheme?: TemplateTheme;
}

const ResumeThemeProvider: React.FC<ResumeThemeProviderProps> = ({ children, defaultTheme = initialTheme }) => {
  const [theme, setTheme] = useState<TemplateTheme>(defaultTheme);

  const changeProperty = (property: keyof TemplateTheme, value: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      [property]: value
    }));
  };

  const value = useMemo<ResumeThemeContextType>(() => ({
    get: theme,
    setTheme,
    changeProperty
  }), [theme]);

  return (
    <ResumeThemeContext.Provider value={value}>
      {children}
    </ResumeThemeContext.Provider>
  );
};

export default ResumeThemeProvider;