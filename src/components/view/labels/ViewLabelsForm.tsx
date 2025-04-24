import React from "react";
import ViewTitle from "../common/ViewTitle";
import FormLabels from "./form/FormLabels";

const ViewLabelsForm: React.FC = () => {
  return (
    <div className="2xl:w-full lg:px-16 2xl:py-12">
      <ViewTitle title="screen.form.labels.title" subtitle="screen.form.labels.subtitle" />
      <FormLabels />
    </div>
  );
};

export default ViewLabelsForm;