import { ToastContext } from "context/ToastContenxt";
import { FC, PropsWithChildren, useContext, useState } from "react";
import { Toast, ToastType } from "types/toast.types";

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState({
    type: "",
    open: false,
    message: "",
  });
  const showToast = (type: ToastType, message: string): void => {
    setToast({ type, open: true, message });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.open && <div>{toast.message}</div>}
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
