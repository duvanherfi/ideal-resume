import { useContext } from "react";
import ResumeTemplateContext from "../../context/resume-template/ResumeTemplateContext";

const useResumeTemplate = () => {
    const context = useContext(ResumeTemplateContext);
    if (!context) {
        throw new Error("useTemplate must be used within a TemplateProvider");
    }
    return context;
};

export default useResumeTemplate;