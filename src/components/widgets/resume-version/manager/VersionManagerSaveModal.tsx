import Modal from "@components/ui/modal/Modal";
import Text from "@components/ui/text/Text";
import VersionManagerSave from "@components/widgets/resume-version/manager/VersionManagerSave";
import I18n from "@language/common/I18nKeys";
import React from "react";

const VersionManagerSaveModal: React.FC = () => {
  return (
    <Modal customTrigger={<Text>{I18n.VERSION_MANAGER.SAVE.BUTTON}</Text>}>
      <VersionManagerSave />
    </Modal>
  );
};

export default VersionManagerSaveModal;