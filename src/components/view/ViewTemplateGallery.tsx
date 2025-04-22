import React from "react";
import TemplatePreviewGallery from "../gallery/template-preview-gallery/TemplatePreviewGallery";
import ThemeColorSelector from "../gallery/theme-color-selector/ThemeColorSelector";
import Icons from "../ui/icons/Icons";

const ViewTemplateGallery: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <TemplatePreviewGallery />
      <Icons.LineSeparator />
      <ThemeColorSelector />
    </div>
  );
};

export default ViewTemplateGallery;