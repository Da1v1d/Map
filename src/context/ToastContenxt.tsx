import { createContext } from "react";
import { ToastContextType } from "types/toast.types";

export const ToastContext = createContext<ToastContextType | null>(null);
