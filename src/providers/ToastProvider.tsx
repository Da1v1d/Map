import { FC, PropsWithChildren, useContext, useState } from "react";

import { ToastComponent } from "components/Toast/Toast";

import { Toast, ToastType } from "types/toast.types";

import { ToastContext } from "context/ToastContenxt";

const INITIAL_TOAST_STATE: Toast = {
  type: "",
  open: false,
  message: "",
};

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState<Toast>(INITIAL_TOAST_STATE);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, open: true, message });
  };

  const clearToast = () => {
    setToast(INITIAL_TOAST_STATE);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastComponent clearToast={clearToast} {...toast} />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};
