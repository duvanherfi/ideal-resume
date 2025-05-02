import ResumeThemeContext, { type ResumeThemeContextType } from "@resume-api/context/resume-theme/ResumeThemeContext";
import { useContext } from "react";

const useResumeTheme = (): ResumeThemeContextType => {
    const context = useContext(ResumeThemeContext);
    if (!context) {
        throw new Error("useResumeTheme must be used within a ThemeProvider");
    }
    return context;
};

export default useResumeTheme;