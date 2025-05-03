import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import React, { createContext } from "react";

export interface ResumeThemeContextType {
    get: TemplateTheme;
    setTheme: React.Dispatch<React.SetStateAction<TemplateTheme>>;
    changeProperty: (property: keyof TemplateTheme, value: string) => void;
    changeColor: (propertyColor: keyof TemplateColorScheme, value: string) => void;
    getAllColors: () => {
        property: keyof TemplateColorScheme;
        color: string;
    }[];
    getAllPropertyColors: () => (keyof TemplateColorScheme)[];
    getColor: (property: keyof TemplateColorScheme) => string;
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;