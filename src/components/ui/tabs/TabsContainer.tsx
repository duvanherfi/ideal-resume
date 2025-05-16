import useTabs, { SlideDirection } from "@hooks/components/useTabs";
import React, { ReactNode } from "react";
import { TabProps } from "./Tab";
import TabHeader from "./TabHeader";

export interface TabType {
    id: string;
    text?: string;
    component?: ReactNode;
    children?: ReactNode;
}

export interface TabsContainerProps {
    tabs: TabType[];
    defaultIndex?: number;
    onChange?: (index: number) => void;
    className?: string;
    tabsClassName?: string;
    contentClassName?: string;
    animationDuration?: number;
    slideDirection?: SlideDirection;
    showTabList?: boolean;
    inline?: boolean;
    Button?: React.FC<TabProps>;
}

const TabsContainer: React.FC<TabsContainerProps> = ({
    tabs,
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
    const {
        currentIndex,
        handleTabChange,
        activeContent,
        animationClasses
    } = useTabs({
        tabs,
        defaultIndex,
        onChange,
        animationDuration,
        slideDirection
    });
    const contentClasses = `transition-all duration-${animationDuration} ${animationClasses} ${contentClassName}`;
    
    return (
        <div className={className}>
            {showTabList && (
                <TabHeader inline={inline} tabs={tabs} currentIndex={currentIndex} onChange={handleTabChange} className={tabsClassName} Button={Button} />
            )}
            <div className={contentClasses}>
                {activeContent}
            </div>
        </div>
    );
};

export default TabsContainer;