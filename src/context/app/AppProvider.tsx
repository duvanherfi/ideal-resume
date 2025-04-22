import React from "react";
import ResumeDataProvider from "../../api/context/resume-data/ResumeDataProvider";
import ResumeLabelProvider from "../../api/context/resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "../../api/context/resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "../../api/context/resume-theme/ResumeThemeProvider";
import LanguageProvider from "../language/LanguageProvider";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <ResumeDataProvider>
                <ResumeLabelProvider>
                    <ResumeTemplateProvider>
                        <ResumeThemeProvider>
                            {props.children}
                        </ResumeThemeProvider>
                    </ResumeTemplateProvider>
                </ResumeLabelProvider>
            </ResumeDataProvider>
        </LanguageProvider>
    );
}

export default AppProvider;