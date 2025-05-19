import Text from "@components/ui/text/Text";
import useToast from "@hooks/components/useToast";
import I18n from "@language/common/I18nKeys";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";

const VersionManagerUpdate: React.FC = () => {
  const { currentResumeId, updateResume } = useResumeVersions();
  const { showToast } = useToast();

  const handleOverwrite = () => {
    if (!currentResumeId) return;
    try {
      updateResume();
      showToast(I18n.VERSION_MANAGER.UPDATE.CONGRATS, "success");
    } catch (error) {
      console.error("Error al sobrescribir CV:", error);
    }
  };

  return (
    <div className="flex items-center w-full" onClick={handleOverwrite}>
      <Text>
        {I18n.VERSION_MANAGER.UPDATE.BUTTON}
      </Text>
    </div>
  );
};

export default VersionManagerUpdate;