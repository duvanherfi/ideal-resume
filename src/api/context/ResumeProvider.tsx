import { type UserData } from "@resume-api/types/UserData";
import React from "react";
import { pdfjs } from "react-pdf";
import ResumeLabelProvider from "./resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "./resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "./resume-theme/ResumeThemeProvider";
import UserDataProvider from "./user-data/UserDataProvider";

const isMobile = /Mobi|Android/i.test(navigator.userAgent);
pdfjs.GlobalWorkerOptions.workerSrc = isMobile ? "" : "/pdf.worker.js";

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