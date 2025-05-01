import useResumeTemplate from "@api-hooks/useResumeTemplate";
import { ScrollDirection, useCarousel } from "@hooks/useCarousel";
import ScrollButton from "./ScrollButton";
import TemplateThumb from "./TemplateThumb";
import GlassCard from "@components/ui/GlassCard";

const TemplateThumbCarousel = () => {
    const template = useResumeTemplate();
    const { scrollContainerRef, canScrollLeft, canScrollRight, scroll, checkScrollability } = useCarousel();

    return (
        <GlassCard>
            <div className="relative px-8">
                <ScrollButton direction={ScrollDirection.LEFT} canScroll={canScrollLeft} onScroll={scroll} />
                <ScrollButton direction={ScrollDirection.RIGHT} canScroll={canScrollRight} onScroll={scroll} />

                <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar" onScroll={checkScrollability}>
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

export default TemplateThumbCarousel;