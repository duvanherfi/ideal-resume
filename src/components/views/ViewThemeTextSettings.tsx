import ThemeFontSettings from "@components/widgets/theme-font-settings/ThemeFontSettings";
import FormLabels from "@components/widgets/form-labels/FormLabels";
import React from "react";

const ViewTextSettings: React.FC = () => {
  return (
    <>
      <FormLabels />
      <ThemeFontSettings />
    </>
  );
};

export default ViewTextSettings;