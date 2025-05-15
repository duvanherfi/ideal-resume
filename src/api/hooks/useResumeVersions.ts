import ResumeVersionsContext, { ResumeVersionsContextType } from "@resume-api/context/resume-versions/ResumeVersionsContext";
import { useContext } from "react";

const useResumeVersions = (): ResumeVersionsContextType => {
    const context = useContext(ResumeVersionsContext);

    if (context === undefined) {
        throw new Error('useResumeVersions debe ser usado dentro de un ResumeVersionsProvider');
    }

    return context;
}

export default useResumeVersions;