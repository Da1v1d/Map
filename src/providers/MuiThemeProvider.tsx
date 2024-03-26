import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
  },
});

export const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
