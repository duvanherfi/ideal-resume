import React from "react";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import LanguageProvider from "./context/language/LanguageProvider";
import ResumeDataProvider from "./context/resume-data/ResumeDataProvider";
import ResumeTemplateProvider from "./context/resume-template/ResumeTemplateProvider";
import { ResumeThemeProvider } from "./context/resume-theme/ResumeThemeProvider";
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