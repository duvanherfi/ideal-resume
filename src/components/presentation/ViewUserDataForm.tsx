import React from "react";
import I18nKeys from "src/locales/I18nKeys";
import userDataFormTabs from "../tabs/userDataFormTabs";
import TabsContainer from "../ui/tabs/TabsContainer";
import ViewTitle from "../view/common/ViewTitle";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
      <ViewTitle title={I18nKeys.FORM.DATA.TITLE} subtitle={I18nKeys.FORM.DATA.SUBTITLE} />
      <TabsContainer {...userDataFormTabs} />
    </div>
  );
};

export default ViewUserDataForm;