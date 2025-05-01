import thumbGalleryTabs from "@components/tabs/thumbGalleryTabs";
import TabsContainer from "@components/ui/tabs/TabsContainer";
import ViewTitle from "@components/view/common/ViewTitle";
import TemplateThumbGrid from "@components/view/gallery/TemplateThumbGrid";
import React from "react";

const ViewThumbGallery: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title="gallery.title" subtitle="gallery.subtitle" />
      <TabsContainer {...thumbGalleryTabs} />
      <TemplateThumbGrid className="block xl:hidden" />
    </div>
  );
};

export default ViewThumbGallery;