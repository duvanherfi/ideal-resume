import useResumeTemplate from "@api-hooks/useResumeTemplate";
import GlassCard from "@components/ui/glass-card/GlassCard";
import { ScrollDirection } from "@hooks/useCarousel";
import Icons from "@icons/Icons";
import { useState } from "react";
import ScrollButton from "../common/ScrollButton";
import TemplateThumb from "../common/TemplateThumb";
import GalleryNavigation from "./GalleryNavigation";

interface TemplateGridGalleryProps {
    className?: string;
}

const TemplateGridGallery: React.FC<TemplateGridGalleryProps> = ({ className = "" }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const template = useResumeTemplate();

    const templatesPerPage = 6;
    const totalPages = Math.ceil(template.getAll.length / templatesPerPage);
    const canScrollLeft = currentPage !== 0;
    const canScrollRight = currentPage !== totalPages - 1;

    const getCurrentPageTemplates = () => {
        const startIdx = currentPage * templatesPerPage;
        return template.getAll.slice(startIdx, startIdx + templatesPerPage);
    };

    const goToPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <GlassCard className={className}>
            <div className="space-y-4 overflow-hidden">
                <GalleryNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
                <div className="grid md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto scrollbar">
                    {getCurrentPageTemplates().map((templateToPreview) => (
                        <div className="py-2" key={templateToPreview.id}>
                            <TemplateThumb
                                selectCurrentTemplate={() => template.select(templateToPreview)}
                                templateToPreview={templateToPreview}
                                isActive={templateToPreview.id === template.active?.id}
                            />
                            <Icons.LineSeparator />
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <ScrollButton direction={ScrollDirection.LEFT} canScroll={canScrollLeft} onScroll={goToPrevPage} />
                            <ScrollButton direction={ScrollDirection.RIGHT} canScroll={canScrollRight} onScroll={goToNextPage} />
                        </div>
                    </div>
                )}
            </div>
        </GlassCard>
    );
};

export default TemplateGridGallery;