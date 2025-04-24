import React from "react";
import GlassCard from "../../ui/GlassCard";
import Icons from "../../ui/icons/Icons";
import Title from "../../ui/text/Title";
import TemplatePreviewGallery from "./template-preview-gallery/TemplatePreviewGallery";
import ThemeColorSelector from "./theme-color-selector/ThemeColorSelector";

const ViewGallery: React.FC = () => {
  return (
    <div className="w-full space-y-6 min-h-screen xl:h-auto  xl:py-8">
      <Title>themes.title</Title>
      <GlassCard className={`bg-white/20 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md p-4 w-full mx-auto border`}>
        <ThemeColorSelector />
      </GlassCard>

      <Icons.LineSeparator />

      <Title>gallery.templates.title</Title>
      <GlassCard className={`bg-white/20 dark:bg-black/50 border-secondary-500/30 dark:border-secondary-500/20 backdrop-blur-xl rounded-br-lg rounded-bl-lg  shadow-md w-full mx-auto border`}>
        <TemplatePreviewGallery />
      </GlassCard>
    </div>
  );
};

export default ViewGallery;