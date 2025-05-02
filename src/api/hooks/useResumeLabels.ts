import ResumeLabelsContext, { ResumeLabelsContextType } from "@resume-api/context/resume-labels/ResumeLabelsContext";
import { useContext } from "react";

const useResumeLabels = (): ResumeLabelsContextType => {
    const context = useContext(ResumeLabelsContext);
    if (!context) {
        throw new Error("useResumeLabels must be used within a ResumeLabelProvider");
    }
    return context;
};

export default useResumeLabels;