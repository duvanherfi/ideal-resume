import GlassCard from "@components/ui/GlassCard";
import React from "react";
import labelsFormTabs from "../tabs/labelsFormTabs";
import TabsContainer from "../ui/tabs/TabsContainer";
import ViewTitle from "../view/common/ViewTitle";

const ViewLabelsForm: React.FC = () => {
  return (
    <GlassCard>
      <div className="2xl:w-full">
        <ViewTitle simple title="screen.form.labels.title" subtitle="screen.form.labels.subtitle" className="pb-4" />
        <TabsContainer items={labelsFormTabs} slideDirection="bottom" />
      </div>
    </GlassCard>
  );
};

export default ViewLabelsForm;