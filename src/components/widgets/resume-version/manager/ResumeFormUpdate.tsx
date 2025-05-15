import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import Toast from "@components/ui/toast/Toast";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React, { useState } from "react";

const ResumeFormUpdate: React.FC = () => {
  const { currentResumeId, updateResume } = useResumeVersions();
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOverwrite = () => {
    if (!currentResumeId) return;

    setIsSaving(true);
    try {
      updateResume();
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error al sobrescribir CV:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mt-2 flex items-center">
      <Button variant="outline" onClick={handleOverwrite}>
        {isSaving ? <Icons.Loading /> : <Icons.Save />}
      </Button>
      {showSuccess && (
        <Toast type="success" message="CV ACTUALIZADO" setShow={setShowSuccess} />
      )}
    </div>
  );
};

export default ResumeFormUpdate;