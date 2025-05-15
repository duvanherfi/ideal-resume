import ResumeVersionsContext from "@resume-api/context/resume-versions/ResumeVersionsContext";
import { useContext } from "react";

export default function useResumeVersions() {
    const context = useContext(ResumeVersionsContext);

    if (context === undefined) {
        throw new Error('useResumeVersions debe ser usado dentro de un ResumeVersionsProvider');
    }

    return context;
}