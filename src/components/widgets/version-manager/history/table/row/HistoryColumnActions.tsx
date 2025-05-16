import Icons from "@components/ui/icons/Icons";
import { ResumeVersion } from "@resume-api/context/resume-versions/ResumeVersionsContext";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";

interface HistoryColumnActionsProps {
    version: ResumeVersion;
    currentResumeId: string | null;
    renameId: string | null;
    newName: string;
    setRenameId: React.Dispatch<React.SetStateAction<string | null>>;
    setNewName: React.Dispatch<React.SetStateAction<string>>;
}

const HistoryColumnActions: React.FC<HistoryColumnActionsProps> = ({ version, newName, setNewName, renameId, setRenameId }) => {
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
                <div className="flex space-x-2">
                    <button
                        onClick={confirmRename}
                        className="p-1.5 rounded-md text-green-600 hover:bg-green-100 hover:text-green-800 transition-colors"
                        title="Guardar"
                    >
                        <Icons.Save size={18} />
                    </button>
                    <button
                        onClick={cancelRename}
                        className="p-1.5 rounded-md text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors"
                        title="Cancelar"
                    >
                        <Icons.Cross size={18} />
                    </button>
                </div>
            ) : (
                <div className="flex space-x-2">
                    <button
                        onClick={() => startRename(version.id, version.name)}
                        className="p-1.5 rounded-md text-amber-600 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                        title="Renombrar"
                    >
                        <Icons.Draw size={18} />
                    </button>
                    <button
                        onClick={() => handleExport(version.id, version.name)}
                        className="p-1.5 rounded-md text-green-600 hover:bg-green-100 hover:text-green-800 transition-colors"
                        title="Exportar"
                    >
                        <Icons.Export size={18} />
                    </button>
                    <button
                        onClick={() => handleDelete(version.id)}
                        className="p-1.5 rounded-md text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors"
                        title="Eliminar"
                    >
                        <Icons.Trash size={18} />
                    </button>
                </div>
            )}
        </td>
    );
};

export default HistoryColumnActions;