import GlassCard from "@components/ui/GlassCard";
import React from "react";
import labelsFormTabs from "../tabs/labelsFormTabs";
import TabsContainer from "../ui/tabs/TabsContainer";
import ViewTitle from "../view/common/ViewTitle";

const ViewLabelsForm: React.FC = () => {
  return (
    <GlassCard>
      <ViewTitle simple title="form.labels.title" subtitle="form.labels.subtitle" className="pb-4" />
      <TabsContainer {...labelsFormTabs} />
    </GlassCard>
  );
};

export default ViewLabelsForm;