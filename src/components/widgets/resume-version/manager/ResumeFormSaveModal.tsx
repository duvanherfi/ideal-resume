import Icons from "@components/ui/icons/Icons";
import Modal from "@components/ui/modal/Modal";
import ResumeFormSave from "@components/widgets/resume-version/manager/ResumeFormSave";
import React from "react";

const ResumeFormSaveModal: React.FC = () => {
  return (
    <Modal buttonText={<Icons.Save />} buttonVariant="outline">
      <ResumeFormSave />
    </Modal>
  );
};

export default ResumeFormSaveModal;