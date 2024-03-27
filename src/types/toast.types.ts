export type ToastType = "success" | "warning" | "error" | "info";

export interface Toast {
  type: ToastType | "";
  open: boolean;
  message: string;
}
export type showToastType = (type: ToastType, message: string) => void;

export type ToastContextType = {
  showToast: (type: ToastType, message: string) => void;
};
