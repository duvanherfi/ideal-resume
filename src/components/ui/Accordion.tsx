import { ReactNode, useState } from "react";
import Icons, { ChevronDirection } from "./icons/Icons";

interface AccordionProps {
    label: string;
    children?: ReactNode;
}

const Accordion = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const togglerClasses = `cursor-pointer flex items-center transition-all duration-500 justify-between w-full px-3 py-2 font-medium text-secondary-500 border-b bg-primary-100 border-primary-200 hover:bg-primary-100`;
    const containerClasses = `shadow-xl rounded-md fixed z-50 bg-white/90 backdrop-blur-xl overflow-y-auto transition-all duration-500 ${isOpen ? "pt-4 max-h-96" : "max-h-0"}`;

    return (
        <div className="border rounded-md">
            <button onClick={toggleIsOpen} className={togglerClasses}>
                {props.label}
                <Icons.Chevron direction={isOpen ? ChevronDirection.UP : ChevronDirection.DOWN}
                />
            </button>
            <div className={containerClasses}>
                {props.children}
            </div>
        </div>
    );
};

export default Accordion;
