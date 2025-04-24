import React from "react";
import Title from "../../ui/text/Title";
import FormLabels from "./form/FormLabels";

const LabelsForm: React.FC = () => {
  return (
    <div className="lg:py-8 lg:space-y-4">
      <Title className="hidden md:block">screen.form.labels.title</Title>
      <FormLabels />
    </div>
  );
};

export default LabelsForm;