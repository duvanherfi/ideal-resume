import TemplateTheme from "@resume-api/common/TemplateTheme";
import React, { createContext } from "react";

export interface ResumeThemeContextType {
    get: TemplateTheme;
    setTheme: React.Dispatch<React.SetStateAction<TemplateTheme>>;
    changeProperty: (property: keyof TemplateTheme, value: string) => void;
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;