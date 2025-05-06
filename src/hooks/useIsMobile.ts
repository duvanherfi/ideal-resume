import { useEffect, useState } from "react";

const useIsMobile = (breakpoint: number = 768): boolean => {
    const query = `(max-width: ${breakpoint}px)`;
    const getMatch = () => typeof window !== "undefined" && window.matchMedia(query).matches;

    const [isMobile, setIsMobile] = useState(getMatch);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [query]);

    return isMobile;
}

export default useIsMobile;
