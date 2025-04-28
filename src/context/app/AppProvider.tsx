import ResumeProvider from "@resume-api/context/ResumeProvider";
import React from "react";
import mockedUserData from "src/mock/mockedUserData";
import LanguageProvider from "../language/LanguageProvider";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <ResumeProvider defaultData={mockedUserData}>
                {props.children}
            </ResumeProvider>
        </LanguageProvider>
    );
}

export default AppProvider;