import Icons from "@components/ui/icons/Icons";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import useUserData from "@resume-api/hooks/useUserData";
import React from "react";

const ResumeVersionsManagerActions: React.FC = () => {
    const { createNew } = useUserData();
    const { load, importResume } = useResumeVersions();

    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const id = importResume(content);
                if (id) {
                    // Opcional: cargar automáticamente el CV importado
                    load(id);
                } else {
                    alert("Error al importar el CV. El formato podría ser incorrecto.");
                }
            };
            reader.readAsText(file);
            // Limpiar el input file para permitir seleccionar el mismo archivo
            event.target.value = "";
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <button onClick={createNew} className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded">
                <Icons.Add />
            </button>
            <label className="inline-block bg-primary-700 hover:bg-primary-600 text-white px-4 py-2 rounded cursor-pointer">
                <Icons.Import />
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
        </div>
    );
};

export default ResumeVersionsManagerActions;