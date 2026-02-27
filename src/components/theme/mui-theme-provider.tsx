"use client";

import { ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { colors } from "./colours";
import { typography } from "./typography";

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: true,
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: colors.buttons.primary,
          },
          secondary: {
            main: colors.buttons.secondary,
          },
          background: {
            default: prefersDarkMode
              ? colors.background.dark
              : colors.background.light,
            dialog: prefersDarkMode
              ? colors.background.dialogDark
              : colors.background.dialogLight,
          },
          text: {
            primary: prefersDarkMode ? colors.text.dark : colors.text.light,
          },
        },

        components: {
          MuiCssBaseline: {
            styleOverrides: {
              // body: {
              //   backgroundColor: colors.background.light,
              //   backgroundImage: prefersDarkMode
              //     ? colors.background.gradient.        ---- this block is needed if I set bg to gradient ----
              //     : "none",
              //   backgroundRepeat: "no-repeat",
              //   backgroundAttachment: "fixed",
              // },
            },
          },
        },
        typography,
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default MuiThemeProvider;
