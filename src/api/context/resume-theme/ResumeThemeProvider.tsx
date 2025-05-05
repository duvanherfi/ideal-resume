import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { TemplateColorScheme, TemplateColorSchemeKey } from "@resume-api/types/template/TemplateTheme";
import React, { ReactNode, useMemo, useState } from "react";
import ResumeThemeContext, { type ResumeThemeContextType } from "./ResumeThemeContext";
import { availableFonts } from "./availableFonts";
import initialTheme from "./initialTheme";

interface ResumeThemeProviderProps {
  children: ReactNode;
  defaultTheme?: TemplateTheme;
}

const ResumeThemeProvider: React.FC<ResumeThemeProviderProps> = ({ children, defaultTheme = initialTheme }) => {
  const [theme, setTheme] = useState<TemplateTheme>(defaultTheme);

  const getColor = (key: keyof TemplateColorScheme) => theme.color[key];

  const getColorKeys = (): (keyof TemplateColorScheme)[] => Object.keys(theme.color).slice(1) as (keyof TemplateColorScheme)[];

  const changeColor = (key: keyof TemplateColorScheme, value: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      color: {
        ...prevTheme.color,
        [TemplateColorSchemeKey.ALL]: key !== TemplateColorSchemeKey.ALL ? "" : prevTheme.color.all,
        [key]: value
      }
    }));
  };

  const getFont = () => theme.font;

  const changeFont = (newFont: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      font: newFont
    }));
  };

  const value = useMemo<ResumeThemeContextType>(() => ({
    get: theme,
    changeColor,
    getColor,
    getColorKeys,
    getFont,
    changeFont,
    availableFonts
  }), [theme]);

  return (
    <ResumeThemeContext.Provider value={value}>
      {children}
    </ResumeThemeContext.Provider>
  );
};

export default ResumeThemeProvider;