import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import React, { createContext } from "react";

const TemplateContext = createContext(null);

export const TemplatesProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-chiled": {
            paddingTop: 0,
          },
        },
      },
    },
  });
  return (
    <>
      <TemplateContext.Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </TemplateContext.Provider>
    </>
  );
};
