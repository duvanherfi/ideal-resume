import { ReactNode, useRef, useState } from "react";

const getAnimationClasses = (slideDirection: SlideDirection, transitioning: boolean) => {
    if (slideDirection === "none") {
        return transitioning ? "opacity-0" : "opacity-100";
    }

    const translations = {
        left: transitioning ? "opacity-0 -translate-x-16" : "opacity-100 translate-x-0",
        right: transitioning ? "opacity-0 translate-x-16" : "opacity-100 translate-x-0",
        top: transitioning ? "opacity-0 -translate-y-16" : "opacity-100 translate-y-0",
        bottom: transitioning ? "opacity-0 translate-y-16" : "opacity-100 translate-y-0"
    };

    return translations[slideDirection];
};

export type SlideDirection = "left" | "right" | "top" | "bottom" | "none";

export interface TabType {
    id: string;
    text?: string;
    component?: ReactNode;
    children?: ReactNode;
}

export interface UseTabsOptions {
    tabs: TabType[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
    animationDuration?: number;
    slideDirection?: SlideDirection;
}

export interface UseTabsReturn {
    currentIndex: number;
    transitioning: boolean;
    displayIndex: number;
    activeTab: TabType;
    activeContent: ReactNode | undefined;
    handleTabChange: (index: number) => void;
    animationClasses: string;
}


const useTabs = ({ tabs, defaultIndex = 0, onChange, animationDuration = 200, slideDirection = "left" }: UseTabsOptions): UseTabsReturn => {
    const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);
    const [transitioning, setTransitioning] = useState(false);
    const previousIndexRef = useRef<number>(currentIndex);

    const changeIndex = (index: number) => {
        setCurrentIndex(index);
        requestAnimationFrame(() => {
            setTimeout(() => setTransitioning(false), animationDuration);
        });
    };

    const handleTabChange = (index: number) => {
        if (index === currentIndex || transitioning) return;
        previousIndexRef.current = currentIndex;
        if (onChange) {
            onChange(index);
        }
        setTransitioning(true);
        setTimeout(() => changeIndex(index), animationDuration);
    };

    const displayIndex = transitioning ? previousIndexRef.current : currentIndex;
    const activeTab = tabs[displayIndex];
    const activeContent = activeTab.component;
    const animationClasses = getAnimationClasses(slideDirection, transitioning);

    return {
        currentIndex,
        transitioning,
        displayIndex,
        activeTab,
        activeContent,
        handleTabChange,
        animationClasses
    };
};

export default useTabs;