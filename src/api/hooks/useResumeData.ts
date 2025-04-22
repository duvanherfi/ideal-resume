import { useContext } from "react";
import ResumeDataContext from "../../context/resume-data/ResumeDataContext";

const useResumeData = () => {
    const context = useContext(ResumeDataContext);
    if (!context) {
        throw new Error("useResumeData must be used within a ResumeDataProvider");
    }
    return context;
};

export default useResumeData;