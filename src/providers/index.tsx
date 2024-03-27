import { FC, PropsWithChildren } from "react";
import { MuiThemeProvider } from "./MuiThemeProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ToastProvider } from "./ToastProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider>
      <ReactQueryProvider>
        <ToastProvider> {children}</ToastProvider>
      </ReactQueryProvider>
    </MuiThemeProvider>
  );
};
