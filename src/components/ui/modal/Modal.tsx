import React, { ReactNode } from "react";
import useModal from "@hooks/useModal";
import Button from "../buttons/Button";
import Icons from "@icons/Icons";

interface ModalButtonProps {
    buttonText: ReactNode;
    buttonVariant?: "primary" | "secondary" | "outline";
    buttonClassName?: string;
    children: ReactNode;
    modalTitle?: string;
    modalClassName?: string;
    closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalButtonProps> = ({
    buttonText,
    buttonVariant = "primary",
    buttonClassName = "",
    children,
    modalTitle,
    modalClassName = "",
    closeOnOutsideClick = true,
}) => {
    const [isOpen, openModal, closeModal, handleOutsideClick] = useModal(closeOnOutsideClick);

    return (
        <>
            <Button variant={buttonVariant} onClick={openModal} className={buttonClassName}>
                {buttonText}
            </Button>

            {isOpen && (
                <div className="transition-all duration-500 inset-0 backdrop-blur-sm flex items-center justify-center z-50 w-auto absolute" onClick={handleOutsideClick}>
                    <div className={`dark:border-primary-500/20 border-primary-500/30 bg-white dark:bg-black/ backdrop-blur-xl rounded-lg shadow-xl p-6 w-full max-w-6xl mx-4 transform transition-all duration-300 ${modalClassName} z-50`}>
                        <div className="flex justify-end items-center">
                            {modalTitle && (
                                <h3 className="text-lg font-medium text-secondary-900 dark:text-secondary-100">
                                    {modalTitle}
                                </h3>
                            )}
                            <button className="text-red-400 hover:text-red-500 dark:text-secondary-100 dark:hover:text-accent-500 cursor-pointer focus:outline-none absolute right-6 top-4" onClick={closeModal}>
                                <Icons.Cross />
                            </button>
                        </div>
                        <div className="">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;