import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import formLabelsTabs from "@config/tabs/Tabs.FormLabels.config";
import React from "react";
import I18n from "src/locales/I18nKeys";

const FormLabels: React.FC = () => {
  return (
    <div className="space-y-4">
      <ViewTitle simple title={I18n.FORM.LABELS.TITLE} subtitle={I18n.FORM.LABELS.SUBTITLE} />
      <TabsContainer {...formLabelsTabs} />
    </div>
  );
};

export default FormLabels;