import Modal from "@components/ui/modal/Modal";
import Text from "@components/ui/text/Text";
import ResumeFormSave from "@components/widgets/resume-version/manager/ResumeFormSave";
import I18n from "@language/common/I18nKeys";
import React from "react";

const ResumeFormSaveModal: React.FC = () => {
  return (
    <Modal customTrigger={<Text>{I18n.VERSION_MANAGER.SAVE.BUTTON}</Text>}>
      <ResumeFormSave />
    </Modal>
  );
};

export default ResumeFormSaveModal;