import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import React, { ReactNode, useMemo, useState } from "react";
import ResumeThemeContext, { type ResumeThemeContextType } from "./ResumeThemeContext";
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

  const changeColor = (propertyColor: keyof TemplateColorScheme, value: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      color: {
        ...prevTheme.color,
        [propertyColor]: value
      }
    }));
  };

  const getColor = (property: keyof TemplateColorScheme) => theme.color[property];

  const getAllColors = (): { property: keyof TemplateColorScheme, color: string }[] =>
    Object.entries(theme.color).map(([key, color]) => ({ property: key as keyof TemplateColorScheme, color }));

  const getAllPropertyColors = (): (keyof TemplateColorScheme)[] => Object.keys(theme.color) as (keyof TemplateColorScheme)[];

  const value = useMemo<ResumeThemeContextType>(() => ({
    get: theme,
    setTheme,
    changeProperty,
    changeColor,
    getColor,
    getAllColors,
    getAllPropertyColors
  }), [theme]);

  return (
    <ResumeThemeContext.Provider value={value}>
      {children}
    </ResumeThemeContext.Provider>
  );
};

export default ResumeThemeProvider;