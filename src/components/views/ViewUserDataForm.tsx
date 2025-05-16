import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import formUserDataTabs from "@config/tabs/Tabs.FormUserData.config";
import I18n from "@language/common/I18nKeys";
import React from "react";
import ViewVersionManager from "../widgets/version-manager/VersionManager";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
        <ViewTitle title={I18n.FORM.DATA.TITLE} subtitle={I18n.FORM.DATA.SUBTITLE} className="w-full">
          <ViewVersionManager />
        </ViewTitle>
      <TabsContainer {...formUserDataTabs} />
    </div>
  );
};

export default ViewUserDataForm;