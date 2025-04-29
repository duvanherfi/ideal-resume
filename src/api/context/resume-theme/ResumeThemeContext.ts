import React, { createContext } from "react";
import TemplateTheme from "../../common/TemplateTheme";

export interface ResumeThemeContextType {
    get: TemplateTheme;
    setTheme: React.Dispatch<React.SetStateAction<TemplateTheme>>;
    changeProperty: (property: keyof TemplateTheme, value: string) => void;
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;