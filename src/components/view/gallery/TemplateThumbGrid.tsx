import useResumeTemplate from "@api-hooks/useResumeTemplate";
import { ScrollDirection } from "@hooks/useCarousel";
import { useState } from "react";
import GalleryNavigation from "./GalleryNavigation";
import ScrollButton from "./ScrollButton";
import TemplateThumb from "./TemplateThumb";

const TemplateThumbGrid = () => {
    const template = useResumeTemplate();
    const [currentPage, setCurrentPage] = useState(0);
    const templatesPerPage = 4;
    const totalPages = Math.ceil(template.getAll.length / templatesPerPage);

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
        <div className="px-8 space-y-4">
            <GalleryNavigation currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <div className="grid grid-cols-2 gap-4">
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
                        <ScrollButton direction={ScrollDirection.LEFT} canScroll={currentPage !== 0} onScroll={goToPrevPage} />
                        <ScrollButton direction={ScrollDirection.RIGHT} canScroll={currentPage !== totalPages - 1} onScroll={goToNextPage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateThumbGrid;