import { Alert, Snackbar } from "@mui/material";
import { FC } from "react";
import { Toast, ToastType } from "types/toast.types";

export const ToastComponent: FC<
  Toast & { setToast: (props: Toast) => void }
> = ({ setToast, open, type, message }) => {
  return (
    <Snackbar open={open}>
      <Alert
        severity={type as ToastType}
        variant="filled"
        onClose={() => setToast({ type: "", open: false, message: "" })}
        sx={{
          width: "100%",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
