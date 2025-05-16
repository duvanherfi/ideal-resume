import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import I18n from "@language/common/I18nKeys";
import React from "react";

const VersionHistoryHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <Subtitle>{I18n.VERSION_MANAGER.HISTORY.MODAL.TITLE}</Subtitle>
                <Text className="text-xs text-gray-500">
                    {I18n.VERSION_MANAGER.HISTORY.MODAL.SUBTITLE}
                </Text>
            </div>
        </div>
    );
};

export default VersionHistoryHeader;