import React from "react";
import useTranslations from "../../hooks/useTranslations";
import TemplateThumbGallery from "../view/gallery/template-thumb-gallery/TemplateThumbGallery";
import ThemeColorSelector from "../view/gallery/theme-color-selector/ThemeColorSelector";

const ScreenTemplateGallery: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="w-full space-y-8">
      <ThemeColorSelector />
      <TemplateThumbGallery />
    </div>
  );
};

export default ScreenTemplateGallery;