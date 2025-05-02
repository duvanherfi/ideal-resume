import ResumeTemplateContext, { type ResumeTemplateContextType } from "@resume-api/context/resume-template/ResumeTemplateContext";
import { useContext } from "react";

const useResumeTemplate = (): ResumeTemplateContextType => {
    const context = useContext(ResumeTemplateContext);
    if (!context) {
        throw new Error("useTemplate must be used within a TemplateProvider");
    }
    return context;
};

export default useResumeTemplate;