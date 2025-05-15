import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import Input from "@components/ui/input/Input";
import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React, { useState } from "react";

/**
 * Componente para guardar un CV con nombre
 */
const ResumeFormSave: React.FC = () => {
  const { save } = useResumeVersions();
  const [resumeName, setResumeName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveNew = () => {
    if (!resumeName.trim()) return;

    setIsSaving(true);
    try {
      save(resumeName);
      setResumeName("");
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error al guardar nuevo CV:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-2">
      <>
        <div>
          <Subtitle>Guardar CV</Subtitle>
          <Text className="text-xs text-gray-500">
            Dale un nombre descriptivo a tu CV para poder identificarlo fácilmente
          </Text>
        </div>
        <div className="flex items-start space-x-4">
          <Input
            label=""
            type="text"
            name="Name"
            value={resumeName}
            onChange={(e) => setResumeName(e.target.value)}
            placeholder="Nombre para este CV (ej: 'CV para Desarrollador')"
            disabled={isSaving}
          />
          <Button variant="secondary" disabled={!resumeName.trim() || isSaving} onClick={handleSaveNew}>
            {isSaving ? <Icons.Loading /> : <Icons.Save />}
          </Button>
        </div>
      </>
      {showSuccess && (
        <div className="mt-3 p-2 bg-green-100 text-green-700 rounded">
          {"¡CV guardado exitosamente!"}
        </div>
      )}
    </div>
  );
};

export default ResumeFormSave;