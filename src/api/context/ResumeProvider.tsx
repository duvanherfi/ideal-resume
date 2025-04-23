import React from "react";
import UserDataProvider from "./user-data/UserDataProvider";
import ResumeLabelProvider from "./resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "./resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "./resume-theme/ResumeThemeProvider";
import mockedResume from "../../mock/mockedResume";

interface ResumeProviderProps {
    children: React.ReactNode
}

const ResumeProvider = (props: ResumeProviderProps) => {
    return (
        <UserDataProvider defaultData={mockedResume}>
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