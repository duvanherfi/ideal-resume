import React from "react";
import GlassCard from "../../ui/GlassCard";
import Icons from "../../ui/icons/Icons";
import Title from "../../ui/text/Title";
import TemplateThumbGallery from "./template-thumb-gallery/TemplateThumbGallery";
import ThemeColorSelector from "./theme-color-selector/ThemeColorSelector";
import ViewTitle from "../common/ViewTitle";

const ViewThumbGallery: React.FC = () => {
  return (
    <div className="w-full space-y-6 min-h-screen xl:h-auto xl:py-8">
      <ViewTitle title="gallery.templates.title" subtitle="gallery.templates.subtitle" />
      <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md w-full mx-auto border`}>
        <TemplateThumbGallery />
      </GlassCard>

      <ViewTitle title="themes.title" subtitle="themes.subtitle" />
      <GlassCard className={`bg-white/70 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
        <ThemeColorSelector />
      </GlassCard>
    </div>
  );
};

export default ViewThumbGallery;