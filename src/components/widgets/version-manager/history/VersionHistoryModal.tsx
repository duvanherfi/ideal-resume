import Modal from "@components/ui/modal/Modal";
import Text from "@components/ui/text/Text";
import I18n from "@language/common/I18nKeys";
import React from "react";
import VersionHistory from "./VersionHistory";

const VersionHistoryModal: React.FC = () => {
    return (
        <Modal customTrigger={<Text className="text-left">{I18n.VERSION_MANAGER.HISTORY.BUTTON}</Text>}>
            <VersionHistory />
        </Modal>
    );
};

export default VersionHistoryModal;