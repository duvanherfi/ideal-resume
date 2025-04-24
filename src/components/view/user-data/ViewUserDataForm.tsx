import React from "react";
import TabsContainer from "../../ui/tabs/TabsContainer";
import ViewTitle from "../common/ViewTitle";
import userDataFormTabs from "./userDataFormTabs";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full lg:px-16 2xl:py-8">
      <div className="lg:py-8 lg:space-y-4">
        <ViewTitle title="screen.form.data.title" subtitle="screen.form.data.subtitle" />
        <TabsContainer
          items={userDataFormTabs}
          defaultIndex={0}
          slideDirection="left"
        />
      </div>
    </div>
  );
};

export default ViewUserDataForm;