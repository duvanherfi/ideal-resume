import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";
import TableRow from "./row/TableRow";

const ResumeVersionsTable: React.FC = () => {
    const { versions, currentResumeId } = useResumeVersions();

    return (
        <table className="min-w-full bg-white/50 dark:bg-black/50 dark:text-white rounded-lg shadow overflow-hidden">
            <tbody>
                {versions.map((version) => (
                    <TableRow version={version} currentResumeId={currentResumeId} />
                ))}
            </tbody>
        </table>
    );
};

export default ResumeVersionsTable;