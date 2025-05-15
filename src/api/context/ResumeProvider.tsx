import UserData from "@resume-api/types/user-data/UserData";
import React from "react";
import { pdfjs } from 'react-pdf';
import ResumeLabelProvider from "./resume-labels/ResumeLabelsProvider";
import ResumeTemplateProvider from "./resume-template/ResumeTemplateProvider";
import ResumeThemeProvider from "./resume-theme/ResumeThemeProvider";
import UserDataProvider from "./user-data/UserDataProvider";
import ResumeVersionsProvider from "./resume-versions/ResumeVersionsProvider";

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

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
                        <ResumeVersionsProvider>
                            {props.children}
                        </ResumeVersionsProvider>
                    </ResumeThemeProvider>
                </ResumeTemplateProvider>
            </ResumeLabelProvider>
        </UserDataProvider>
    );
}

export default ResumeProvider;