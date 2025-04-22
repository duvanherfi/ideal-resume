import React from "react";
import TabsContainer from "../../ui/tabs/TabsContainer";
import Title from "../../ui/text/Title";
import userDataFormTabs from "./userDataFormTabs";

const UserDataForm: React.FC = () => {
  return (
    <>
      <Title className="hidden xl:block">screen.form.data.title</Title>
      <TabsContainer
        items={userDataFormTabs}
        defaultIndex={0}
        slideDirection="bottom"
      />
    </>
  );
};

export default UserDataForm;