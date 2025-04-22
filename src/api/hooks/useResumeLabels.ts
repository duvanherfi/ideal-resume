import { useContext } from 'react';
import ResumeLabelsContext, { ResumeLabelsContextType } from '../context/resume-labels/ResumeLabelsContext';

const useResumeLabels = (): ResumeLabelsContextType => {
    const context = useContext(ResumeLabelsContext);
    if (!context) {
        throw new Error("useResumeLabels must be used within a ResumeLabelProvider");
    }
    return context;
};

export default useResumeLabels;