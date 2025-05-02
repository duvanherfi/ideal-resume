import useI18N from "@hooks/useI18N";
import { ResumeLabels } from "@resume-api/types";
import React, { useMemo, useState } from "react";
import ResumeLabelContext, { defaultLabels } from "./ResumeLabelsContext";

interface ResumeLabelProviderProps {
    children: React.ReactNode;
    initialLabels?: ResumeLabels;
}

const ResumeLabelProvider: React.FC<ResumeLabelProviderProps> = ({ children, initialLabels }) => {
    const { t } = useI18N();
    const translatedLabels = (Object.entries(defaultLabels) as [keyof ResumeLabels, string][]).reduce((acc, [key, val]) => ({ ...acc, [key]: t(val) }), {} as ResumeLabels);
    const [resumeLabels, setResumeLabels] = useState<ResumeLabels>(initialLabels ?? translatedLabels);

    const updateLabels = (data: Partial<ResumeLabels>) => {
        setResumeLabels((prevLabels: ResumeLabels) => ({
            ...prevLabels,
            ...data,
        }));
    };

    const updateLabel = (property: keyof ResumeLabels, value: string) => {
        setResumeLabels((prevLabels: ResumeLabels) => ({
            ...prevLabels,
            [property]: value,
        }));
    };

    const resetLabels = () => {
        setResumeLabels({ ...defaultLabels });
    }

    const value = useMemo(() => ({
        labels: resumeLabels,
        defaultLabels: translatedLabels,
        resetLabels,
        updateLabels,
        updateLabel,
    }), [resumeLabels]);

    return (
        <ResumeLabelContext.Provider value={value}>
            {children}
        </ResumeLabelContext.Provider>
    );
};

export default ResumeLabelProvider;
