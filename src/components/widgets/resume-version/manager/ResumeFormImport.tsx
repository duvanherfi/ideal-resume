import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";

const ResumeFormImport: React.FC = () => {
    const { load, importResume } = useResumeVersions();

    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                const id = importResume(content);
                if (id) {
                    load(id);
                } else {
                    alert("Error al importar el CV. El formato podría ser incorrecto.");
                }
            };
            reader.readAsText(file);
            event.target.value = "";
        }
    };

    return (
        <Button variant="outline">
            <label className="cursor-pointer">
                <Icons.Import />
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
        </Button>
    );
};

export default ResumeFormImport;