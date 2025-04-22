import React from "react";
import Icons from "../../ui/icons/Icons";
import TemplatePreviewGallery from "./template-preview-gallery/TemplatePreviewGallery";
import ThemeColorSelector from "./theme-color-selector/ThemeColorSelector";

const ViewGallery: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <TemplatePreviewGallery />
      <Icons.LineSeparator />
      <ThemeColorSelector />
    </div>
  );
};

export default ViewGallery;