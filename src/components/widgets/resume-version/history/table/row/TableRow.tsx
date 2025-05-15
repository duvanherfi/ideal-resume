import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import ResumeVersion from "@resume-api/types/storage/ResumeVersion";
import React, { useState } from "react";
import TableColumnActions from "./TableColumnActions";
import TableColumnName from "./TableColumnName";

interface TableRowProps {
    currentResumeId: string | null;
    version: ResumeVersion;
}

const TableRow: React.FC<TableRowProps> = ({ currentResumeId, version }) => {
    const [renameId, setRenameId] = useState<string | null>(null);
    const [newName, setNewName] = useState<string>("");
    const { load } = useResumeVersions();

    const classNameNormal = `cursor-pointer flex items-center w-full px-3 py-2 transition-all text-sm md:text-base lg:text-lg whitespace-nowrap border-b-4`;
    const classNameStatus = (version: ResumeVersion) => currentResumeId === version.id
        ? "rounded-tr-md rounded-tl-md bg-accent-200/50 dark:bg-accent-900 font-bold text-accent-900 dark:text-accent-300 border-accent-900 dark:border-accent-300"
        : "text-secondary-700 dark:text-secondary-300 border-transparent hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:text-accent-800 dark:hover:text-accent-200";

    return (
        <tr onClick={() => load(version.id)} className={`${classNameStatus(version)} ${classNameNormal}`}>
            <TableColumnName isRenaming={renameId === version.id} name={version.name} newName={newName} setNewName={setNewName} date={new Date(version.updatedAt).toLocaleString()} />
            <TableColumnActions version={version} renameId={renameId} setRenameId={setRenameId} newName={newName} setNewName={setNewName} currentResumeId={currentResumeId} />
        </tr>
    )
};

export default TableRow;