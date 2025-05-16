import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import useModal from "@hooks/components/useModal";
import Button from "../buttons/Button";
import Icons from "@icons/Icons";

interface ModalButtonProps {
    button?: {
        text: ReactNode;
        variant?: "primary" | "secondary" | "outline";
        className?: string;
    };
    customTrigger?: ReactNode;
    children: ReactNode;
    modalTitle?: string;
    modalClassName?: string;
    closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalButtonProps> = ({
    button,
    customTrigger,
    children,
    modalTitle,
    modalClassName = "",
    closeOnOutsideClick = true,
}) => {
    const [isOpen, openModal, closeModal, handleOutsideClick] = useModal(closeOnOutsideClick);

    const modalContent = isOpen ? (
        <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={handleOutsideClick}
        >
            <div
                className={`absolute top-16 dark:border-primary-500/20 border-primary-500/30 bg-white/90 dark:bg-black/80 backdrop-blur-xl rounded-lg shadow-xl p-6 w-full max-w-3xl transform transition-all duration-300 ${modalClassName}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    {modalTitle && (
                        <h3 className="text-lg font-medium text-secondary-900 dark:text-secondary-100">
                            {modalTitle}
                        </h3>
                    )}
                    <button
                        className="text-red-400 hover:text-red-500 dark:text-secondary-100 dark:hover:text-accent-500 focus:outline-none"
                        onClick={closeModal}
                    >
                        <Icons.Cross />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    ) : null;

    return (
        <>
            {button && (
                <Button variant={button.variant} onClick={openModal} className={button.className}>
                    {button.text}
                </Button>
            )}
            {customTrigger && <button onClick={openModal}>{customTrigger}</button>}
            {ReactDOM.createPortal(modalContent, document.body)}
        </>
    );
};

export default Modal;