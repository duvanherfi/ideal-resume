import Text from "@components/ui/text/Text";
import I18n from "@language/common/I18nKeys";
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
        <label className="cursor-pointer">
            <Text>{I18n.VERSION_MANAGER.IMPORT.BUTTON}</Text>
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
        </label>
    );
};

export default ResumeFormImport;