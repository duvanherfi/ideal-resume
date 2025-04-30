import React from "react";
import TabButton from "./TabButton";
import { Tab } from "./TabsContainer";

export interface TabListProps {
  items: Tab[];
  currentIndex: number;
  onChange: (index: number) => void;
  className?: string;
  inline?: boolean;
}

const TabList: React.FC<TabListProps> = (props: TabListProps) => {
  const { items, currentIndex, onChange, className = "", inline } = props;

  return (
    <div className={`flex justify-start md:justify-between ${className} bg-white/50 backdrop-blur-xl dark:bg-black/50 rounded-tr-lg rounded-tl-lg overflow-x-auto scrollbar`}>
      <div className="flex space-x-1 md:space-x-2 w-full justify-stretch">
        {items.map((item, index) => (
          <TabButton inline={inline} onClick={() => onChange(index)} text={item.text} key={item.id} active={index === currentIndex}>
            {item.children}
          </TabButton>
        ))}
      </div>
    </div>
  );
};

export default TabList;