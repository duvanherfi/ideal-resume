import { UserData } from "@resume-api/types";
import React from "react";
import ResumeLabelProvider from "./resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "./resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "./resume-theme/ResumeThemeProvider";
import UserDataProvider from "./user-data/UserDataProvider";

interface ResumeProviderProps {
    children: React.ReactNode
    defaultData?: UserData;
}

const ResumeProvider = (props: ResumeProviderProps) => {
    const { defaultData } = props;
    
    return (
        <UserDataProvider defaultData={defaultData}>
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