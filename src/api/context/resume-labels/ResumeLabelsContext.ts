import { createContext } from "react";
import I18n from "@language/common/I18nKeys";
import type { ResumeLabels } from "@resume-api/types/template/ResumeLabels";

export const defaultLabels: ResumeLabels = {
    profileSummary: I18n.FORM.LABELS.FIELD.PROFILE_SUMMARY,
    workExperiences: I18n.FORM.LABELS.FIELD.WORK_EXPERIENCES,
    education: I18n.FORM.LABELS.FIELD.EDUCATION,
    projects: I18n.FORM.LABELS.FIELD.PROJECTS,
    skills: I18n.FORM.LABELS.FIELD.SKILLS,
    languages: I18n.FORM.LABELS.FIELD.LANGUAGES,
    email: I18n.FORM.LABELS.FIELD.EMAIL,
    phone: I18n.FORM.LABELS.FIELD.PHONE,
    location: I18n.FORM.LABELS.FIELD.LOCATION,
    lastUpdated: I18n.FORM.LABELS.FIELD.LAST_UPDATED,
    present: I18n.FORM.LABELS.FIELD.PRESENT
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