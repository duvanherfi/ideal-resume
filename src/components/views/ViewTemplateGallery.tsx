import TemplateCarouselGallery from "@components/widgets/gallery/carousel/TemplateCarouselGallery";
import TemplateGallery from "@components/widgets/gallery/TemplateGallery";
import useIsMobile from "@hooks/app/useIsMobile";
import React from "react";

const ViewTemplateGallery: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <TemplateGallery />
      {isMobile && <TemplateCarouselGallery className="rounded-md" />}
    </>
  );
};

export default ViewTemplateGallery;