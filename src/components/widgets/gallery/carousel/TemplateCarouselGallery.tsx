import useResumeTemplate from "@api-hooks/useResumeTemplate";
import GlassCard from "@components/ui/glass-card/GlassCard";
import { ScrollDirection, useCarousel } from "@hooks/useCarousel";
import ScrollButton from "../common/ScrollButton";
import TemplateThumb from "../common/TemplateThumb";

interface TemplateCarouselGalleryProps {
    className?: string;
}

const TemplateCarouselGallery: React.FC<TemplateCarouselGalleryProps> = ({ className }) => {
    const template = useResumeTemplate();
    const { scrollContainerRef, canScrollLeft, canScrollRight, scroll, checkScrollability } = useCarousel();

    return (
        <GlassCard className={className}>
            <div className="relative md:px-8">
                <ScrollButton direction={ScrollDirection.LEFT} canScroll={canScrollLeft} onScroll={scroll} />
                <ScrollButton direction={ScrollDirection.RIGHT} canScroll={canScrollRight} onScroll={scroll} />

                <div ref={scrollContainerRef} className="overflow-x-auto py-4 scrollbar" onScroll={checkScrollability}>
                    <div className="flex space-x-4 min-w-min">
                        {template.getAll.map((templateToPreview) => (
                            <TemplateThumb
                                key={templateToPreview.id}
                                selectCurrentTemplate={() => template.select(templateToPreview)}
                                templateToPreview={templateToPreview}
                                isActive={templateToPreview.id === template.active?.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default TemplateCarouselGallery;