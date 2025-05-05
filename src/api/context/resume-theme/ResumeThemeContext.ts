import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import { createContext } from "react";
import { FontName } from "./availableFonts";

export interface ResumeThemeContextType {
    get: TemplateTheme;
    changeColor: (key: keyof TemplateColorScheme, value: string) => void;
    getColorKeys: () => (keyof TemplateColorScheme)[];
    getColor: (key: keyof TemplateColorScheme) => string;
    getFont: () => string;
    changeFont: (newFont: string) => void;
    availableFonts: FontName[];
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;