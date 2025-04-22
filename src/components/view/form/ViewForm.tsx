import React from "react";
import formTabs from "./formTabs";
import TabsContainer from "../../ui/tabs/TabsContainer";
import Title from "../../ui/text/Title";

const ViewForm: React.FC = () => {
  return (
    <div className="w-full py-4 xl:py-8">
      <Title className="hidden md:block">screen.form.title</Title>
      <TabsContainer
        items={formTabs}
        defaultIndex={0}
        slideDirection="bottom"
      />
    </div>
  );
};

export default ViewForm;