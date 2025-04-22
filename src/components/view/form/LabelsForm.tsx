import React from "react";
import Title from "../../ui/text/Title";
import FormLabels from "./form/FormLabels";

const LabelsForm: React.FC = () => {
  return (
    <>
      <Title className="hidden md:block">screen.form.labels.title</Title>
      <FormLabels />
    </>
  );
};

export default LabelsForm;