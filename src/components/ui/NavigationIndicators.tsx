import React from "react";

interface NavigationIndicatorsProps {
  items: Array<{ id: string; name?: string }>;
  currentIndex: number;
  onChange: (index: number) => void;
}

const NavigationIndicators: React.FC<NavigationIndicatorsProps> = ({
  items,
  currentIndex,
  onChange,
}) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onChange(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentIndex === index ? "bg-primary-600 w-6" : "bg-primary-300"
          }`}
          aria-label={`Go to item ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationIndicators;
