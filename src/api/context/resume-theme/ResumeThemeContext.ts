import React, { createContext } from "react";
import TemplateTheme from "../../api/common/TemplateTheme";

export interface ResumeThemeContextType {
    get: TemplateTheme | null;
    setTheme: React.Dispatch<React.SetStateAction<TemplateTheme | null>>;
    changeProperty: (property: keyof TemplateTheme, value: string) => void;
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;