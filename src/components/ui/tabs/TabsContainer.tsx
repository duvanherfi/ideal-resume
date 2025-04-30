import React, { useState, useRef, ReactNode } from "react";
import TabList from "./TabList";

export interface Tab {
    id: string;
    text?: string;
    component?: ReactNode;
    children?: ReactNode;
}

interface TabsContainerProps {
    items: Tab[];
    defaultIndex?: number;
    renderContent?: (activeTabId: string) => ReactNode;
    onChange?: (index: number) => void;
    className?: string;
    tabsClassName?: string;
    contentClassName?: string;
    animationDuration?: number;
    slideDirection?: 'left' | 'right' | 'top' | 'bottom' | 'none';
    showTabList?: boolean;
    inline?: boolean;
}

const TabsContainer: React.FC<TabsContainerProps> = ({
    items,
    defaultIndex = 0,
    renderContent,
    onChange,
    className = "",
    tabsClassName = "",
    contentClassName = "",
    animationDuration = 200,
    slideDirection = 'left',
    showTabList = true,
    inline
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);
    const [transitioning, setTransitioning] = useState(false);
    const previousIndexRef = useRef<number>(currentIndex);

    const getAnimationClasses = () => {
        if (slideDirection === 'none') {
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
    const activeTab = items[displayIndex];

    let activeContent;
    if (renderContent) {
        activeContent = renderContent(activeTab.id);
    } else if (activeTab.component) {
        activeContent = activeTab.component;
    }

    const animationClasses = getAnimationClasses();
    const contentClasses = `transition-all duration-${animationDuration} ${animationClasses} ${contentClassName}`;

    return (
        <div className={className}>
            {showTabList && (
                <TabList inline={inline} items={items} currentIndex={currentIndex} onChange={handleTabChange} className={tabsClassName} />
            )}

            <div className="min-h-[100px]">
                <div className={contentClasses}>
                    {activeContent}
                </div>
            </div>
        </div>
    );
};

export default TabsContainer;