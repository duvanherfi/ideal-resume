import React, { ReactNode, useRef, useState } from "react";
import { TabButtonProps } from "./TabButton";
import Tabs from "./Tabs";
import { getAnimationClasses, SlideDirection } from "./tabHelper";

export interface Tab {
    id: string;
    text?: string;
    component?: ReactNode;
    children?: ReactNode;
}

interface TabsContainerProps {
    items: Tab[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
    className?: string;
    tabsClassName?: string;
    contentClassName?: string;
    animationDuration?: number;
    slideDirection?: SlideDirection;
    showTabList?: boolean;
    inline?: boolean;
    Button?: React.FC<TabButtonProps>;
}

const TabsContainer: React.FC<TabsContainerProps> = ({
    items,
    defaultIndex = 0,
    onChange,
    className = "",
    tabsClassName = "",
    contentClassName = "",
    animationDuration = 200,
    slideDirection = "left",
    showTabList = true,
    inline,
    Button
}) => {
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
    const activeTab = items[displayIndex];
    let activeContent = activeTab.component;

    const animationClasses = getAnimationClasses(slideDirection, transitioning);
    const contentClasses = `transition-all duration-${animationDuration} ${animationClasses} ${contentClassName}`;

    return (
        <div className={className}>
            {showTabList && (
                <Tabs inline={inline} items={items} currentIndex={currentIndex} onChange={handleTabChange} className={tabsClassName} Button={Button} />
            )}

            <div className={contentClasses}>
                {activeContent}
            </div>
        </div>
    );
};

export default TabsContainer;