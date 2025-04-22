import { ReactNode, useEffect, useRef, useState } from "react";
import Icons, { ChevronDirection } from "../icons/Icons";

export interface SelectOption<T> {
    value: T;
    label: ReactNode | string;
    icon?: ReactNode;
}

interface SelectorProps<T> extends Readonly<{
    options: SelectOption<T>[];
    value: T;
    onChange: (value: T) => void;
    placeholder?: string;
    className?: string;
    buttonClassName?: string;
    dropdownClassName?: string;
    optionClassName?: string;
    selectedClassName?: string;
    disabled?: boolean;
    renderOption?: (option: SelectOption<T>, isSelected: boolean) => ReactNode;
    renderSelected?: (option: SelectOption<T>) => ReactNode;
}> { }

function Selector<T>(props: SelectorProps<T>) {
    const {
        options,
        value,
        onChange,
        placeholder = "Select an option",
        className = "",
        buttonClassName = "",
        dropdownClassName = "",
        optionClassName = "",
        selectedClassName = "",
        disabled = false,
        renderOption,
        renderSelected,
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((option) => option.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const defaultRenderOption = (option: SelectOption<T>, isSelected: boolean) => (
        <div className="flex items-center justify-between w-full">
            <span className="flex items-center gap-2">
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
            </span>
        </div>
    );

    const defaultRenderSelected = (option: SelectOption<T>) => (
        <span className="flex items-center gap-2">
            {option.icon && <span>{option.icon}</span>}
            <span>{option.label}</span>
        </span>
    );

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`flex items-center justify-between w-full px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                    } ${buttonClassName}`}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {selectedOption ? (
                    renderSelected ? renderSelected(selectedOption) : defaultRenderSelected(selectedOption)
                ) : (
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{placeholder}</span>
                )}
                <Icons.Chevron
                    direction={isOpen ? ChevronDirection.UP : ChevronDirection.DOWN}
                />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className={`absolute z-50 mt-1 w-full min-w-max rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ${dropdownClassName}`}>
                    <select className="py-1 max-h-60 overflow-auto">
                        {options.map((option) => (
                            <option
                                key={String(option.value)}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center w-full px-4 py-2 text-sm ${value === option.value
                                    ? `bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 ${selectedClassName}`
                                    : `text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${optionClassName}`
                                    }`}
                                aria-selected={value === option.value}
                            >
                                {renderOption
                                    ? renderOption(option, value === option.value)
                                    : defaultRenderOption(option, value === option.value)}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default Selector;