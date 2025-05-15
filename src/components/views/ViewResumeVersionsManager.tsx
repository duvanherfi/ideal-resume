import Icons from "@components/ui/icons/Icons";
import Modal from "@components/ui/modal/Modal";
import ResumeVersionsManager from "@components/widgets/resume-version/manager/ResumeVersionsManager";
import ResumeFormSave from "@components/widgets/resume-version/saver/ResumeFormSave";
import React from "react";

const ViewResumeVersionsManager: React.FC = () => {
  return (
    <div className="absolute right-4 top-2 space-x-2">
      <Modal buttonText={<Icons.Save />} buttonVariant="primary">
        <ResumeFormSave />
      </Modal>
      <Modal buttonText={<Icons.History />} buttonVariant="primary">
        <ResumeVersionsManager />
      </Modal>
    </div>
  );
};

export default ViewResumeVersionsManager;