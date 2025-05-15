import Subtitle from "@components/ui/text/Subtitle";
import Text from "@components/ui/text/Text";
import React from "react";

const ResumeVersionsManagerHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <Subtitle>Mis CVs Guardados</Subtitle>
                <Text className="text-xs text-gray-500">
                    Dale un nombre descriptivo a tu CV para poder identificarlo fácilmente
                </Text>
            </div>
        </div>
    );
};

export default ResumeVersionsManagerHeader;