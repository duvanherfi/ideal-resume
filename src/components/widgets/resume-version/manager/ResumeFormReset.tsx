import Button from "@components/ui/buttons/Button";
import Icons from "@components/ui/icons/Icons";
import useUserData from "@resume-api/hooks/useUserData";
import React from "react";

const ResumeFormReset: React.FC = () => {
    const { createNew } = useUserData();

    return (
        <Button onClick={createNew} variant="outline">
            <Icons.Reset />
        </Button>
    );
};

export default ResumeFormReset;