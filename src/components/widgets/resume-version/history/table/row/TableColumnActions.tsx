import Icons from "@components/ui/icons/Icons";
import { ResumeVersion } from "@resume-api/context/resume-versions/ResumeVersionsContext";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";

interface TableColumnActionsProps {
    version: ResumeVersion;
    currentResumeId: string | null;
    renameId: string | null;
    newName: string;
    setRenameId: React.Dispatch<React.SetStateAction<string | null>>;
    setNewName: React.Dispatch<React.SetStateAction<string>>;
}

const TableColumnActions: React.FC<TableColumnActionsProps> = ({ version, currentResumeId, newName, setNewName, renameId, setRenameId }) => {
    const { remove, rename, exportResume } = useResumeVersions();

    const startRename = (id: string, currentName: string) => {
        setRenameId(id);
        setNewName(currentName);
    };

    const confirmRename = () => {
        if (renameId && newName.trim()) {
            rename(renameId, newName);
            setRenameId(null);
            setNewName("");
        }
    };

    const cancelRename = () => {
        setRenameId(null);
        setNewName("");
    };

    const handleExport = (id: string, name: string) => {
        const jsonContent = exportResume(id);
        if (jsonContent) {
            const blob = new Blob([jsonContent], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${name.replace(/\s+/g, "_")}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    const handleDelete = (id: string) => {
        if (confirm("¿Estás seguro de que deseas eliminar este CV?")) {
            remove(id);
        }
    }

    return (
        <td className="flex h-full w-full items-stretch justify-end space-x-2 text-black py-3 px-2">
            {renameId === version.id ? (
                <>
                    <button onClick={confirmRename} className="text-tertiary-200 bg-green-500 hover:bg-green-700 p-2 rounded-md">
                        <Icons.Save />
                    </button>
                    <button onClick={cancelRename} className="text-tertiary-200 bg-red-500 hover:bg-red-700 p-2 rounded-md">
                        <Icons.Cross />
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => startRename(version.id, version.name)} className="text-tertiary-200 bg-yellow-500 hover:bg-yellow-700 p-2 rounded-md">
                        <Icons.Draw />
                    </button>
                    <button onClick={() => handleExport(version.id, version.name)} className="text-tertiary-200 bg-green-500 hover:bg-green-700 p-2 rounded-md">
                        <Icons.Export />
                    </button>
                    <button onClick={() => handleDelete(version.id)} className="text-tertiary-200 bg-red-500 hover:bg-red-700 p-2 rounded-md h-full">
                        <Icons.Trash />
                    </button>
                </>
            )}
        </td>
    );
};

export default TableColumnActions;