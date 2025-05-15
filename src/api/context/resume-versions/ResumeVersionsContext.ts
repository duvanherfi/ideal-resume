import { createContext } from "react";

export interface ResumeVersion {
    id: string;
    name: string;
    updatedAt: number;
}

export interface ResumeVersionsContextType {
    versions: ResumeVersion[];
    isLoading: boolean;
    currentResumeId: string | null;
    save: (name: string) => string;
    updateResume: (name: string, id?: string) => boolean;
    load: (id: string) => boolean;
    remove: (id: string) => boolean;
    rename: (id: string, newName: string) => boolean;
    exportResume: (id: string) => string | null;
    importResume: (jsonString: string) => string | null;
    getResumeDetails: (id: string) => any | null;
    refresh: () => void;
    exists: (id: string) => boolean;
}

const ResumeVersionsContext = createContext<ResumeVersionsContextType | undefined>(undefined);

export default ResumeVersionsContext;
