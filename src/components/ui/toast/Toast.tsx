import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';

const TYPES = {
    success: {
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        borderColor: 'border-green-400',
        icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    error: {
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        borderColor: 'border-red-400',
        icon: <AlertCircle className="w-5 h-5 text-red-500" />
    },
    info: {
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
        borderColor: 'border-blue-400',
        icon: <Info className="w-5 h-5 text-blue-500" />
    }
};

interface ToastProps {
    setShow: (show: boolean) => void;
    type?: keyof typeof TYPES;
    message: string;
}

const Toast: React.FC<ToastProps> = ({ setShow, type = 'success', message }) => {
    const toastStyle = TYPES[type] || TYPES.success;

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center p-4 z-50 pointer-events-none">
            <div className={`
                ${toastStyle.bgColor} ${toastStyle.textColor} 
                border ${toastStyle.borderColor} rounded-lg shadow-lg
                flex items-center justify-between px-4 py-3
                w-full max-w-md mx-auto
                transform transition-all duration-300 ease-in-out
                pointer-events-auto
            `}>
                <div className="flex items-center">
                    {toastStyle.icon}
                    <p className="ml-3">{message}</p>
                </div>
                <button
                    onClick={() => setShow(false)}
                    className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default Toast;