import thumbGalleryTabs from "@components/tabs/thumbGalleryTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/widgets/common/ViewTitle";
import TemplateThumbGrid from "@components/widgets/gallery/TemplateThumbGrid";
import React from "react";
import I18n from "src/locales/I18nKeys";

const ViewThumbGallery: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title={I18n.GALLERY.TITLE} subtitle={I18n.GALLERY.SUBTITLE} />
      <TabsContainer {...thumbGalleryTabs} />
      <TemplateThumbGrid className="block xl:hidden" />
    </div>
  );
};

export default ViewThumbGallery;