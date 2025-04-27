import React from "react";
import GlassCard from "../ui/GlassCard";
import ViewTitle from "../view/common/ViewTitle";
import TemplateThumbGallery from "../view/gallery/TemplateThumbGallery";

const ViewThumbGallery: React.FC = () => {
  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title="gallery.templates.title" subtitle="gallery.templates.subtitle" />
      <GlassCard>
        <TemplateThumbGallery />
      </GlassCard>
    </div>
  );
};

export default ViewThumbGallery;