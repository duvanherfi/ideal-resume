import { createContext } from 'react';
import { ToastVariant } from './types/types';

export interface ToastContextValue {
    showToast: (message: string, type?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export default ToastContext;