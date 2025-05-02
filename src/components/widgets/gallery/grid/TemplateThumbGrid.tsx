import useResumeTemplate from "@api-hooks/useResumeTemplate";
import GlassCard from "@components/ui/GlassCard";
import { ScrollDirection } from "@hooks/useCarousel";
import { useState } from "react";
import GalleryNavigation from "./GalleryNavigation";
import ScrollButton from "../common/ScrollButton";
import TemplateThumb from "../common/TemplateThumb";

interface TemplateThumbGridProps {
    className?: string;
}

const TemplateThumbGrid: React.FC<TemplateThumbGridProps> = ({ className = "" }) => {
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
                <div className="grid xl:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto scrollbar">
                    {getCurrentPageTemplates().map((templateToPreview) => (
                        <TemplateThumb
                            key={templateToPreview.id}
                            selectCurrentTemplate={() => template.select(templateToPreview)}
                            templateToPreview={templateToPreview}
                            isActive={templateToPreview.id === template.active?.id}
                        />
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

export default TemplateThumbGrid;