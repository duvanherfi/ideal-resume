import Toast from "@components/ui/toast/Toast";
import { FC, ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import ToastContext from "./ToastContext";
import type { ToastMessage, ToastVariant } from "../../components/ui/toast/types/types";

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const showToast = (text: string, variant: ToastVariant = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, variant, text }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const handleClose = (id: number) => setToasts(prev => prev.filter(t => t.id !== id))

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {ReactDOM.createPortal(
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col space-y-2 z-50 pointer-events-none">
                    {toasts.map(({ id, variant, text }) => (
                        <Toast variant={variant} message={text} close={() => handleClose(id)} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};

export default ToastProvider;