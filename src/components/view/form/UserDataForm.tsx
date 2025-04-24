import React from "react";
import TabsContainer from "../../ui/tabs/TabsContainer";
import Title from "../../ui/text/Title";
import userDataFormTabs from "./userDataFormTabs";

const UserDataForm: React.FC = () => {
  return (
    <div className="lg:py-8 lg:space-y-4">
      <Title className="hidden lg:block">screen.form.data.title</Title>
      <TabsContainer
        items={userDataFormTabs}
        defaultIndex={0}
        slideDirection="bottom"
      />
    </div>
  );
};

export default UserDataForm;