import { createContext } from 'react';
import { ResumeLabels } from '../../types';

export const defaultLabels: ResumeLabels = {
    profileSummary: "About",
    workExperiences: "Professional Experience",
    education: "Academic Background",
    projects: "Projects",
    skills: "Technical Skills",
    languages: "Languages",
    email: "Email",
    phone: "Phone",
    location: "Location",
    lastUpdated: "Last updated",
    present: "Present"
};

export interface ResumeLabelsContextType {
    labels: ResumeLabels;
    defaultLabels: ResumeLabels;
    resetLabels: () => void;
    updateLabels: (data: Partial<ResumeLabels>) => void;
    updateLabel: (property: keyof ResumeLabels, value: string) => void;
}

const ResumeLabelsContext = createContext<ResumeLabelsContextType | undefined>(undefined);

export default ResumeLabelsContext;