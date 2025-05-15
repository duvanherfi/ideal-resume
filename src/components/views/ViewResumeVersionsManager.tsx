import Icons from "@components/ui/icons/Icons";
import Modal from "@components/ui/modal/Modal";
import ResumeVersionsManager from "@components/widgets/resume-version/manager/ResumeVersionsManager";
import ResumeFormSave from "@components/widgets/resume-version/saver/ResumeFormSave";
import ResumeFormUpdate from "@components/widgets/resume-version/saver/ResumeFormUpdate";
import useResumeVersions from "@resume-api/hooks/useResumeVersions";
import React from "react";

const ViewResumeVersionsManager: React.FC = () => {
  const { currentResumeId } = useResumeVersions();

  return (
    <div className="absolute flex flex-col right-4 top-2 space-y-2">
      <Modal buttonText={<Icons.History />} buttonVariant="outline">
        <ResumeVersionsManager />
      </Modal>
      {currentResumeId ? <ResumeFormUpdate /> : (
        <Modal buttonText={<Icons.Save />} buttonVariant="outline">
          <ResumeFormSave />
        </Modal>
      )}
    </div>
  );
};

export default ViewResumeVersionsManager;