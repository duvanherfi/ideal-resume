import React from "react";
import ViewTitle from "../common/ViewTitle";
import FormLabels from "./form/FormLabels";

const LabelsForm: React.FC = () => {
  return (
    <div className="lg:py-8 lg:space-y-4">
      <ViewTitle title="screen.form.labels.title" subtitle="screen.form.labels.subtitle" />
      <FormLabels />
    </div>
  );
};

export default LabelsForm;