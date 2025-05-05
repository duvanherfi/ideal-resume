import type TemplateTheme from "@resume-api/types/template/TemplateTheme";
import { TemplateColorScheme } from "@resume-api/types/template/TemplateTheme";
import { createContext } from "react";
import { FontName } from "./availableFonts";

export interface ResumeThemeContextType {
    get: TemplateTheme;
    color: {
        change: (key: keyof TemplateColorScheme, value: string) => void;
        getKeys: () => (keyof TemplateColorScheme)[];
        of: (key: keyof TemplateColorScheme) => string;
    },
    font: {
        get: () => string;
        change: (newFont: string) => void;
        available: FontName[];
    },
}

const ResumeThemeContext = createContext<ResumeThemeContextType | undefined>(undefined);

export default ResumeThemeContext;