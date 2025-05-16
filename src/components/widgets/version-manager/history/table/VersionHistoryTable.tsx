import { ResumeVersion } from "@resume-api/context/resume-versions/ResumeVersionsContext";
import React from "react";
import HistoryTableRow from "./row/HistoryTableRow";

interface ResumeVersionsTableProps {
    currentResumeId: string | null;
    versions: ResumeVersion[];
}

const VersionHistoryTable: React.FC<ResumeVersionsTableProps> = ({ versions, currentResumeId }) => {
    return (
        <table className="min-w-full bg-white/50 dark:bg-black/50 dark:text-white rounded-lg shadow overflow-hidden">
            <tbody>
                {versions.map((version) => (
                    <HistoryTableRow key={version.id} version={version} currentResumeId={currentResumeId} />
                ))}
            </tbody>
        </table>
    );
};

export default VersionHistoryTable;