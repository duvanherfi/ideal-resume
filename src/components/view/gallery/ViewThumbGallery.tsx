import React from "react";
import GlassCard from "../../ui/GlassCard";
import ViewTitle from "../common/ViewTitle";
import TemplateThumbGallery from "./template-thumb-gallery/TemplateThumbGallery";

const ViewThumbGallery: React.FC = () => {
  return (
    <div className="2xl:w-full lg:px-16">
      <ViewTitle title="gallery.templates.title" subtitle="gallery.templates.subtitle" />
      <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg shadow-md w-full mx-auto border`}>
        <TemplateThumbGallery />
      </GlassCard>
    </div>
  );
};

export default ViewThumbGallery;