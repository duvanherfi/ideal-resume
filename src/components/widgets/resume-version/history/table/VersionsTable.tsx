import { ResumeVersion } from "@resume-api/context/resume-versions/ResumeVersionsContext";
import React from "react";
import TableRow from "./row/TableRow";

interface ResumeVersionsTableProps {
    currentResumeId: string | null;
    versions: ResumeVersion[];
}

const VersionsTable: React.FC<ResumeVersionsTableProps> = ({ versions, currentResumeId }) => {
    return (
        <table className="min-w-full bg-white/50 dark:bg-black/50 dark:text-white rounded-lg shadow overflow-hidden">
            <tbody>
                {versions.map((version) => (
                    <TableRow key={version.id} version={version} currentResumeId={currentResumeId} />
                ))}
            </tbody>
        </table>
    );
};

export default VersionsTable;