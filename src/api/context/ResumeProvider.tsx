import React from "react";
import ResumeLabelProvider from "./resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "./resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "./resume-theme/ResumeThemeProvider";
import UserDataProvider from "./user-data/UserDataProvider";

interface ResumeProviderProps {
    children: React.ReactNode
}

const ResumeProvider = (props: ResumeProviderProps) => {
    return (
        <UserDataProvider>
            <ResumeLabelProvider>
                <ResumeTemplateProvider>
                    <ResumeThemeProvider>
                        {props.children}
                    </ResumeThemeProvider>
                </ResumeTemplateProvider>
            </ResumeLabelProvider>
        </UserDataProvider>
    );
}

export default ResumeProvider;