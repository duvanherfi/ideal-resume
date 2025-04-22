import React from "react";
import ResumeDataProvider from "./api/context/resume-data/ResumeDataProvider";
import ResumeTemplateProvider from "./api/context/resume-template/ResumeTemplateProvider";
import { ResumeThemeProvider } from "./api/context/resume-theme/ResumeThemeProvider";
import LanguageProvider from "./context/language/LanguageProvider";
import "./styles.css";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <ResumeDataProvider>
                <ResumeTemplateProvider>
                    <ResumeThemeProvider>
                        {props.children}
                    </ResumeThemeProvider>
                </ResumeTemplateProvider>
            </ResumeDataProvider>
        </LanguageProvider>
    );
}

export default AppProvider;