import React from "react";
import UserDataProvider from "../../api/context/user-data/UserDataProvider";
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
            <UserDataProvider>
                <ResumeLabelProvider>
                    <ResumeTemplateProvider>
                        <ResumeThemeProvider>
                            {props.children}
                        </ResumeThemeProvider>
                    </ResumeTemplateProvider>
                </ResumeLabelProvider>
            </UserDataProvider>
        </LanguageProvider>
    );
}

export default AppProvider;