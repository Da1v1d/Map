import { ToastComponent } from "components/Toast/Toast";
import { ToastContext } from "context/ToastContenxt";
import { FC, PropsWithChildren, useContext, useState } from "react";
import {
  Toast,
  ToastType,
  showToastType,
} from "types/toast.types";

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<Toast>({
    type: "",
    open: false,
    message: "",
  });
  
  const showToast: showToastType = (type: ToastType, message: string) => {
    setToast({ type, open: true, message });
    return 1;
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastComponent setToast={setToast} {...toast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
