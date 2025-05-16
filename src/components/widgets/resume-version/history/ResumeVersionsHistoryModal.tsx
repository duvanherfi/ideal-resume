import Modal from "@components/ui/modal/Modal";
import Text from "@components/ui/text/Text";
import I18n from "@language/common/I18nKeys";
import React from "react";
import ResumeVersionsHistory from "./ResumeVersionsHistory";

const ResumeVersionsHistoryModal: React.FC = () => {
    return (
        <Modal customTrigger={<Text>{I18n.VERSION_MANAGER.HISTORY.BUTTON}</Text>}>
            <ResumeVersionsHistory />
        </Modal>
    );
};

export default ResumeVersionsHistoryModal;