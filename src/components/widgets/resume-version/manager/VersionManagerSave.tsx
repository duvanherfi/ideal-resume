import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import Input from "@components/ui/input/Input";
import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import useToast from "@hooks/components/useToast";
import I18n from "@language/common/I18nKeys";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React, { useState } from "react";

/**
 * Componente para guardar un CV con nombre
 */
const VersionManagerSave: React.FC = () => {
  const { save } = useResumeVersions();
  const { showToast } = useToast();
  const [resumeName, setResumeName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveNew = () => {
    if (!resumeName.trim()) return;

    setIsSaving(true);
    try {
      save(resumeName);
      setResumeName("");
      showToast(I18n.VERSION_MANAGER.SAVE.CONGRATS, "success");
    } catch (error) {
      console.error("Error al guardar nuevo CV:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-2">
      <div>
        <Subtitle>{I18n.VERSION_MANAGER.SAVE.TITLE}</Subtitle>
        <Text className="text-xs text-gray-500">
          {I18n.VERSION_MANAGER.SAVE.SUBTITLE}
        </Text>
      </div>
      <div className="flex items-start space-x-4">
        <Input
          label=""
          type="text"
          name="Name"
          value={resumeName}
          onChange={(e) => setResumeName(e.target.value)}
          placeholder={I18n.VERSION_MANAGER.SAVE.PLACEHOLDER}
          disabled={isSaving}
        />
        <Button variant="secondary" disabled={!resumeName.trim() || isSaving} onClick={handleSaveNew}>
          {isSaving ? <Icons.Loading /> : <Icons.Save />}
        </Button>
      </div>
    </div>
  );
};

export default VersionManagerSave;