import { createContext } from 'react';
import { ResumeLabels } from '../../types';

export const defaultLabels: ResumeLabels = {
    profileSummary: "form.labels.field.profileSummary",
    workExperiences: "form.labels.field.workExperiences",
    education: "form.labels.field.education",
    projects: "form.labels.field.projects",
    skills: "form.labels.field.skills",
    languages: "form.labels.field.languages",
    email: "form.labels.field.email",
    phone: "form.labels.field.phone",
    location: "form.labels.field.location",
    lastUpdated: "form.labels.field.lastUpdated",
    present: "form.labels.field.present"
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