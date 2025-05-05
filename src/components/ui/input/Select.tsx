import React, { useState, useRef, useEffect } from "react";

export interface SelectOption {
    label: string;
    value: string | number;
}

interface SelectProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ label, name, value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const option = options.find(opt => opt.value.toString() === value);
        setSelectedLabel(option ? option.label : "");
    }, [value, options]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleOptionSelect = (option: SelectOption) => {
        const syntheticEvent = {
            target: {
                name,
                value: option.value.toString()
            },
            currentTarget: {
                name,
                value: option.value.toString()
            }
        } as React.ChangeEvent<HTMLSelectElement>;

        onChange(syntheticEvent);
        setIsOpen(false);
    };

    const labelClassName = "block text-sm font-medium text-secondary-700 dark:text-white mb-1";
    const selectTriggerClassName = "transition-all duration-200 w-full px-3 py-2 dark:text-white bg-white/50 dark:bg-black/50 border dark:border-secondary-700 border-secondary-300 rounded-lg shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 flex justify-between items-center cursor-pointer";
    const listClassName = "flex flex-col absolute z-10 w-full bg-white/80 dark:bg-secondary-900/80 backdrop-blur-2xl border border-accent-500/50 dark:border-accent-500/50 rounded-md shadow-lg overflow-y-auto scrollbar transition-all duration-300";
    const listStatusClassName = isOpen ? "max-h-60 opacity-100 scale-y-100 origin-top" : "max-h-0 opacity-0 scale-y-0 origin-top";

    return (
        <div className="relative" ref={selectRef}>
            <label htmlFor={name} className={labelClassName}>
                {label}
            </label>

            <div
                className={`${selectTriggerClassName} ${isOpen ? 'ring-2 ring-accent-500 border-accent-500' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex={0}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-labelledby={name}
            >
                <span>{selectedLabel}</span>
                <svg
                    className={`w-5 h-5 text-secondary-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            <ul
                className={`${listClassName} ${listStatusClassName}`}
                role="listbox"
                aria-labelledby={name}
            >
                {options.map((option) => (
                    <button
                        key={option.value}
                        className="w-full text-left px-3 py-2 text-sm cursor-pointer hover:bg-accent-200/80 dark:hover:bg-accent-900/80 dark:text-secondary-100 transition-colors duration-150"
                        onClick={() => handleOptionSelect(option)}
                        role="option"
                        aria-selected={value === option.value.toString()}
                    >
                        {option.label}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default Select;