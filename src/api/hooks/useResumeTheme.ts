import { useContext } from "react";
import ResumeThemeContext, { ResumeThemeContextType } from "../context/resume-theme/ResumeThemeContext";

const useResumeTheme = (): ResumeThemeContextType => {
    const context = useContext(ResumeThemeContext);
    if (!context) {
        throw new Error("useResumeTheme must be used within a ThemeProvider");
    }
    return context;
};

export default useResumeTheme;