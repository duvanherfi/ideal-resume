import { useContext } from "react";
import ToastContext, { ToastContextValue } from "src/context/toast/ToastContext";

const useToast = (): ToastContextValue => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

export default useToast;