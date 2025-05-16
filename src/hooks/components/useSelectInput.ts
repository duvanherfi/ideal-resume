import { useState, useRef, useEffect } from "react";

export interface SelectOption {
    label: string;
    value: string | number;
}

interface UseSelectInputProps {
    options: SelectOption[];
    initialValue?: string | number;
    onChange?: (value: string | number) => void;
}

interface UseSelectInput {
    selectedValue: string | number;
    selectedLabel: string;
    isOpen: boolean;
    selectRef: React.RefObject<HTMLDivElement>;
    setIsOpen: (isOpen: boolean) => void;
    toggleDropdown: () => void;
    handleOptionSelect: (option: SelectOption) => void;
}

const useSelectInput = ({ options, initialValue = "", onChange }: UseSelectInputProps): UseSelectInput => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number>(initialValue);
    const [selectedLabel, setSelectedLabel] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);

    // Update selectedLabel when value or options change
    useEffect(() => {
        const option = options.find(opt => opt.value.toString() === selectedValue.toString());
        setSelectedLabel(option ? option.label : "");
    }, [selectedValue, options]);

    // Handle click outside to close dropdown
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

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionSelect = (option: SelectOption) => {
        setSelectedValue(option.value);

        if (onChange) {
            // Solo pasamos el valor al callback proporcionado
            onChange(option.value);
        }

        setIsOpen(false);
    };

    return {
        selectedValue,
        selectedLabel,
        isOpen,
        selectRef,
        setIsOpen,
        toggleDropdown,
        handleOptionSelect
    };
};

export default useSelectInput;