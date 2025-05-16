import ResumeProvider from "@resume-api/context/ResumeProvider";
import React from "react";
import LanguageProvider from "../language/LanguageProvider";
import ToastProvider from "../toast/ToastProvider";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <ResumeProvider>
                <ToastProvider>
                    {props.children}
                </ToastProvider>
            </ResumeProvider>
        </LanguageProvider>
    );
}

export default AppProvider;