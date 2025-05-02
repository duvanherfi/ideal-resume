import userDataFormTabs from "@config/tabs/userDataFormTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import React from "react";
import I18n from "src/locales/I18nKeys";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
      <ViewTitle title={I18n.FORM.DATA.TITLE} subtitle={I18n.FORM.DATA.SUBTITLE} />
      <TabsContainer {...userDataFormTabs} />
    </div>
  );
};

export default ViewUserDataForm;