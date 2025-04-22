import React from "react";
import formTabs from "./formTabs";
import TabsContainer from "../../ui/tabs/TabsContainer";
import Title from "../../ui/text/Title";
import FormLabels from "./form/FormLabels";

const ViewForm: React.FC = () => {
  return (
    <div className="w-full py-4 xl:py-8 lg:px-16 space-y-4">
      <Title className="hidden md:block">screen.form.data.title</Title>
      <TabsContainer
        items={formTabs}
        defaultIndex={0}
        slideDirection="bottom"
      />
      <Title className="hidden md:block">screen.form.labels.title</Title>
      <FormLabels />
    </div>
  );
};

export default ViewForm;