import React, { ReactNode } from "react";
import TabButton from "./TabButton";

export interface TabListProps {
  items: Array<{ id: string; name: string, children?: ReactNode }>;
  currentIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

const TabList: React.FC<TabListProps> = (props: TabListProps) => {
  const { items, currentIndex, onChange, className = "" } = props;

  return (
    <div className={`w-full flex justify-start md:justify-between ${className} bg-white/50 backdrop-blur-xl dark:bg-black rounded-tr-lg rounded-tl-lg  p-1 overflow-x-auto scrollbar`}>
      <div className="flex space-x-1 md:space-x-2 w-full justify-stretch">
        {items.map((item, index) => (
          <TabButton onClick={() => onChange(index)} text={item.name} key={item.id} active={index === currentIndex}>
            {item.children}
          </TabButton>
        ))}
      </div>
    </div>
  );
};

export default TabList;