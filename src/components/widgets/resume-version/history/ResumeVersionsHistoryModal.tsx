import Icons from "@components/ui/icons/Icons";
import Modal from "@components/ui/modal/Modal";
import React from "react";
import ResumeVersionsHistory from "./ResumeVersionsHistory";

const ResumeVersionsHistoryModal: React.FC = () => {
    return (
        <Modal buttonText={<Icons.History />} buttonVariant="outline">
            <ResumeVersionsHistory />
        </Modal>
    );
};

export default ResumeVersionsHistoryModal;