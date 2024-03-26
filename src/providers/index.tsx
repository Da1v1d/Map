import { FC, PropsWithChildren } from "react";
import { MuiThemeProvider } from "./MuiThemeProvider";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MuiThemeProvider>
  );
};
