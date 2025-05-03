import { ReactNode, useState } from "react";
import Icons, { ChevronDirection } from "./icons/Icons";

interface AccordionProps {
    children: ReactNode;
}

const Accordion = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const togglerClasses = `cursor-pointer`;
    const containerClasses = `shadow-xl rounded-md fixed z-50 overflow-hidden transition-all duration-500 transform ${
        isOpen ? "max-h-full scale-y-100 visible" : "max-h-0 scale-y-0 hidden"
    } origin-top`;

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
