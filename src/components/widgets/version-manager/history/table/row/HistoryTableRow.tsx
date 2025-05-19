import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import ResumeVersion from "@resume-api/types/storage/ResumeVersion";
import React, { useState } from "react";
import HistoryColumnActions from "./HistoryColumnActions";
import HistoryColumnName from "./HistoryColumnName";

interface HistoryTableRowProps {
    currentResumeId: string | null;
    version: ResumeVersion;
}

const HistoryTableRow: React.FC<HistoryTableRowProps> = ({ currentResumeId, version }) => {
    const [renameId, setRenameId] = useState<string | null>(null);
    const [newName, setNewName] = useState<string>("");
    const { load } = useResumeVersions();

    const isCurrent = currentResumeId === version.id;
    const classNameNormal = `cursor-pointer flex items-center w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg whitespace-nowrap border border-secondary-500/50`;
    const classNameStatus = isCurrent
        ? "bg-accent-200/50 dark:bg-accent-950 font-bold text-secondary-900 dark:text-secondary-300"
        : " bg-secondary-100/50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-secondary-800 dark:hover:text-secondary-200";

    return (
        <tr onClick={() => load(version.id)} className={`${classNameStatus} ${classNameNormal}`}>
            <HistoryColumnName isRenaming={renameId === version.id} name={version.name} newName={newName} setNewName={setNewName} date={new Date(version.updatedAt).toLocaleString()} />
            {isCurrent && <HistoryColumnActions version={version} renameId={renameId} setRenameId={setRenameId} newName={newName} setNewName={setNewName} currentResumeId={currentResumeId} />}
        </tr>
    )
};

export default HistoryTableRow;