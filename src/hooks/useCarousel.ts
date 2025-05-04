import { useEffect, useRef, useState } from "react";

export enum ScrollDirection {
    LEFT = "left",
    RIGHT = "right"
}

interface UseCarouselOptions {
    scrollFraction?: number; // Qué fracción del contenedor desplazar (por defecto: 0.75)
    scrollDelay?: number;    // Retardo en ms para comprobar el estado después del desplazamiento (por defecto: 300)
}

interface UseCarouselReturn {
    scrollContainerRef: React.RefObject<HTMLDivElement>;
    canScrollLeft: boolean;
    canScrollRight: boolean;
    scroll: (direction: ScrollDirection) => void;
    checkScrollability: () => void;
}

/**
 * Hook personalizado para manejar la funcionalidad de un carrusel con desplazamiento
 * 
 * @param options - Opciones de configuración del carrusel
 * @returns Objeto con refs, estados y funciones para controlar el carrusel
 */
export function useCarousel(options?: UseCarouselOptions): UseCarouselReturn {
    const { scrollFraction = 0.75, scrollDelay = 300 } = options || {};

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
        window.addEventListener("resize", checkScrollability);
        return () => window.removeEventListener("resize", checkScrollability);
    }, []);

    const scroll = (direction: ScrollDirection) => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * scrollFraction;

            scrollContainerRef.current.scrollBy({
                left: direction === ScrollDirection.LEFT ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });

            setTimeout(checkScrollability, scrollDelay);
        }
    };

    return {
        scrollContainerRef,
        canScrollLeft,
        canScrollRight,
        scroll,
        checkScrollability
    };
}