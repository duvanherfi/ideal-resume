import { useEffect, useRef, useState } from "react";
import useResumeTemplate from "../../../../api/hooks/useResumeTemplate";
import ScrollButton from "../../../ui/buttons/ScrollButton";
import TemplateThumb from "./TemplateThumb";

enum ScrollDirection {
    LEFT = "left",
    RIGHT = "right"
};

const TemplateThumbGallery = () => {
    const template = useResumeTemplate();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const scroll = (direction: ScrollDirection) => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.75;

            scrollContainerRef.current.scrollBy({
                left: direction === ScrollDirection.LEFT ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });

            setTimeout(checkScrollability, 300);
        }
    };

    const x = [...template.getAll];

    return (
        <div className="relative">
            <div className="relative px-8">
                <ScrollButton direction={ScrollDirection.LEFT} canScroll={canScrollLeft} onScroll={scroll} />
                <ScrollButton direction={ScrollDirection.RIGHT} canScroll={canScrollRight} onScroll={scroll} />

                <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar" onScroll={checkScrollability}>
                    <div className="flex space-x-4 min-w-min">
                        {x.map((templateToPreview) => (
                            <TemplateThumb
                                key={templateToPreview.id}
                                selectCurrentTemplate={() => template.select(templateToPreview)}
                                templateToPreview={templateToPreview}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateThumbGallery;