import formUserDataTabs from "@config/tabs/Tabs.FormUserData.config";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import React from "react";
import I18n from "@language/common/I18nKeys";
import ResumeVersionsManager from "@components/widgets/version-manager/ResumeVersionsManager";
import SaveResumeForm from "@components/widgets/version-manager/SaveResumeForm";

const ViewUserDataForm: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-8 2xl:px-16">
      <aside className="col-span-3">
        {/* Panel lateral con opciones de guardado */}
        <SaveResumeForm />
        <ResumeVersionsManager />
      </aside>
      <ViewTitle title={I18n.FORM.DATA.TITLE} subtitle={I18n.FORM.DATA.SUBTITLE} />
      <TabsContainer {...formUserDataTabs} />
    </div>
  );
};

export default ViewUserDataForm;