import Button from "@components/ui/buttons/Button";
import GlassCard from "@components/ui/glass-card/GlassCard";
import Icons from "@components/ui/icons/Icons";
import Input from "@components/ui/input/Input";
import Text from "@components/ui/text/Text";
import Subtitle from "@components/ui/text/Subtitle";
import useUserData from "@resume-api/hooks/useUserData";
import React, { useState } from "react";

/**
 * Componente para guardar un CV con nombre
 */
const ResumeFormSave: React.FC = () => {
  const { save } = useUserData();
  const [resumeName, setResumeName] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    if (!resumeName.trim()) return;

    setIsSaving(true);
    try {
      save(resumeName);
      setResumeName("");
      setShowSuccess(true);

      // Ocultar el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error al guardar el CV:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <GlassCard className="space-y-2">
      <div>
        <Subtitle>Guardar CV</Subtitle>
        <Text className="text-xs text-gray-500">
          Dale un nombre descriptivo a tu CV para poder identificarlo fácilmente
        </Text>
      </div>
      <div className="flex items-start space-x-4">
        <Input
          type="text"
          label=""
          name="Name"
          value={resumeName}
          onChange={(e) => setResumeName(e.target.value)}
          placeholder="Nombre para este CV (ej: 'CV para Desarrollador')"
          disabled={isSaving}
        />
        <Button variant="secondary" disabled={!resumeName.trim() || isSaving} onClick={handleSave}>
          {isSaving ? <Icons.Loading /> : <Icons.Save />}
        </Button>
      </div>

      {showSuccess && (
        <div className="mt-3 p-2 bg-green-100 text-green-700 rounded">
          ¡CV guardado exitosamente!
        </div>
      )}
    </GlassCard>
  );
};

export default ResumeFormSave;