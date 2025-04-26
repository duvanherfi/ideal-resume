import React from "react";
import TabsContainer from "../../ui/tabs/TabsContainer";
import ViewTitle from "../common/ViewTitle";
import labelsFormTabs from "./labelsFormTabs";

const ViewLabelsForm: React.FC = () => {
  return (
    <div className="2xl:w-full lg:px-16 2xl:py-12">
      <ViewTitle title="screen.form.labels.title" subtitle="screen.form.labels.subtitle" />
      <TabsContainer items={labelsFormTabs} defaultIndex={0} slideDirection="left" />
    </div>
  );
};

export default ViewLabelsForm;