import thumbGalleryTabs from "@config/tabs/thumbGalleryTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import TemplateGridGallery from "@components/widgets/gallery/grid/TemplateGridGallery";
import React from "react";
import I18n from "src/locales/I18nKeys";

const ViewTemplateGallery: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title={I18n.GALLERY.TITLE} subtitle={I18n.GALLERY.SUBTITLE} />
      <TabsContainer {...thumbGalleryTabs} />
      <TemplateGridGallery className="block md:hidden" />
    </div>
  );
};

export default ViewTemplateGallery;