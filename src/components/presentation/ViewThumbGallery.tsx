import GlassCard from "@components/ui/GlassCard";
import ViewTitle from "@components/view/common/ViewTitle";
import GalleryModeToggle, { ViewMode } from "@components/view/gallery/GalleryModeToggle";
import TemplateThumbCarousel from "@components/view/gallery/TemplateThumbCarousel";
import TemplateThumbGrid from "@components/view/gallery/TemplateThumbGrid";
import React, { useState } from "react";

const ViewThumbGallery: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");

  return (
    <div className="2xl:w-full xl:px-4">
      <ViewTitle title="gallery.templates.title" subtitle="gallery.templates.subtitle" />
      <GalleryModeToggle viewMode={viewMode} onChange={setViewMode} />
      <GlassCard>
        {viewMode === "carousel" ? <TemplateThumbCarousel /> : <TemplateThumbGrid />}
      </GlassCard>
    </div>
  );
};

export default ViewThumbGallery;