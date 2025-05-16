import React from "react";
import Tab, { TabProps } from "./Tab";
import type { TabType } from "./TabsContainer";

export interface TabHeaderProps {
  tabs: TabType[];
  currentIndex: number;
  onChange: (index: number) => void;
  className?: string;
  inline?: boolean;
  Button?: React.FC<TabProps>;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabs, currentIndex, onChange, className = "", inline, Button = Tab }) => {
  return (
    <div className={`${className} flex justify-start md:justify-between bg-white/50 backdrop-blur-xl dark:bg-black/50 rounded-tr-lg rounded-tl-lg overflow-x-auto scrollbar`}>
      <div className="flex space-x-1 md:space-x-2 w-full justify-stretch">
        {tabs.map((item, index) => (
          <Button inline={inline} onClick={() => onChange(index)} text={item.text} key={item.id} active={index === currentIndex}>
            {item.children}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabHeader;