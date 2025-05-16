import { X } from "lucide-react";
import { FC, ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import ToastContext, { ToastMessage, ToastType, TYPES } from "./ToastContext";

const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);
    const showToast = (text: string, type: ToastType = 'success') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, type, text }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 3000);
    };

    const toastClassName = (type: ToastType) => `${TYPES[type].bgColor} ${TYPES[type].textColor} border ${TYPES[type].borderColor} rounded-lg shadow-lg flex items-center justify-between px-4 py-3 w-full max-w-md mx-auto transform transition-all duration-300 ease-in-out pointer-events-auto`;

    const handleClose = (id: number) => setToasts(prev => prev.filter(t => t.id !== id))

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {ReactDOM.createPortal(
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-col space-y-2 z-50 pointer-events-none">
                    {toasts.map(({ id, type, text }) => (
                        <div key={id} className={toastClassName(type)}>
                            <div className="flex items-center">
                                {TYPES[type].icon}
                                <p className="ml-3">{text}</p>
                            </div>
                            <button onClick={() => handleClose(id)} className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};

export default ToastProvider;