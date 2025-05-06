import Icons, { ChevronDirection } from "@icons/Icons";
import { ReactNode, useState } from "react";

interface AccordionProps {
    togglerClassName?: string;
    children: ReactNode;
}

const Accordion = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const togglerClasses = `cursor-pointer flex justify-between items-center ${props.togglerClassName}`;
    const containerClasses = `shadow-xl rounded-md overflow-hidden transition-[max-height] duration-500 ease-in-out origin-top ${isOpen ? "max-h-[1000px] visible" : "max-h-0"}`;

    return (
        <div>
            <button onClick={toggleIsOpen} className={togglerClasses}>
                {Array.isArray(props.children) ? props.children[0] : props.children}
                <Icons.Chevron direction={isOpen ? ChevronDirection.UP : ChevronDirection.DOWN} />
            </button>
            <div className={containerClasses}>
                {Array.isArray(props.children) ? props.children.slice(1) : null}
            </div>
        </div>
    );
};

export default Accordion;
