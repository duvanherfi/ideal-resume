import labelsFormTabs from "@config/tabs/labelsFormTabs";
import GlassCard from "@components/ui/GlassCard";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import React from "react";
import I18n from "src/locales/I18nKeys";

const ViewLabelsForm: React.FC = () => {
  return (
    <GlassCard>
      <ViewTitle simple title={I18n.FORM.LABELS.TITLE} subtitle={I18n.FORM.LABELS.SUBTITLE} className="pb-4" />
      <TabsContainer {...labelsFormTabs} />
    </GlassCard>
  );
};

export default ViewLabelsForm;