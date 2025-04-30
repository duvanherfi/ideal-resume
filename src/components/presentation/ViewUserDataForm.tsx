import React from "react";
import TabsContainer from "../ui/tabs/TabsContainer";
import ViewTitle from "../view/common/ViewTitle";
import userDataFormTabs from "../tabs/userDataFormTabs";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
      <ViewTitle title="screen.form.data.title" subtitle="screen.form.data.subtitle" />
      <TabsContainer items={userDataFormTabs} slideDirection="left" />
    </div>
  );
};

export default ViewUserDataForm;