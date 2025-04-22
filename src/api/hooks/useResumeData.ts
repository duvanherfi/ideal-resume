import { useContext } from "react";
import ResumeDataContext, { ResumeDataContextType } from "../context/resume-data/ResumeDataContext";

const useResumeData = (): ResumeDataContextType => {
    const context = useContext(ResumeDataContext);
    if (!context) {
        throw new Error("useResumeData must be used within a ResumeDataProvider");
    }
    return context;
};

export default useResumeData;