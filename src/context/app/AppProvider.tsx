import React from "react";
import LanguageProvider from "../language/LanguageProvider";
import ResumeProvider from "@resume-api/context/ResumeProvider";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <ResumeProvider>
                {props.children}
            </ResumeProvider>
        </LanguageProvider>
    );
}

export default AppProvider;