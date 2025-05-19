import Icons, { ChevronDirection } from "@icons/Icons";
import { ReactNode, useState } from "react";

interface AccordionProps {
    togglerClassName?: string;
    children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ togglerClassName, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const togglerClasses = `cursor-pointer flex justify-between items-center ${togglerClassName}`;
    const containerClasses = `shadow-xl rounded-md overflow-hidden transition-[max-height] duration-500 ease-in-out origin-top ${isOpen ? "max-h-[2000px] visible" : "max-h-0"}`;

    return (
        <div>
            <button onClick={toggleIsOpen} className={togglerClasses}>
                {Array.isArray(children) ? children[0] : children}
                <Icons.Chevron direction={isOpen ? ChevronDirection.UP : ChevronDirection.DOWN} />
            </button>
            <div className={containerClasses}>
                {Array.isArray(children) ? children.slice(1) : null}
            </div>
        </div>
    );
};

export default Accordion;
