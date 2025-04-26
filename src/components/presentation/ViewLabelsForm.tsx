import React from "react";
import TabsContainer from "../ui/tabs/TabsContainer";
import ViewTitle from "../view/common/ViewTitle";
import labelsFormTabs from "../tabs/labelsFormTabs";

const ViewLabelsForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
      <ViewTitle title="screen.form.labels.title" subtitle="screen.form.labels.subtitle" />
      <TabsContainer items={labelsFormTabs} defaultIndex={0} slideDirection="bottom" />
    </div>
  );
};

export default ViewLabelsForm;