import { FC } from "react";

import { Toast, ToastType } from "types/toast.types";

import { Alert, Snackbar } from "@mui/material";

export const ToastComponent: FC<
  Toast & {
    clearToast: () => void;
  }
> = ({ clearToast, open, type, message }) => {
  return (
    <Snackbar open={open}>
      <Alert
        severity={type as ToastType}
        variant="filled"
        onClose={clearToast}
        sx={{
          width: "100%",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
