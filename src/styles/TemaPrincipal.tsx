import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const coloresGlobales = {
  background: "#000000",
  colorTextoDefault: "#ffffff",
};
export const colorPrimaryMain = "#FFBA0A";
const colorSecondaryMain = "#1784CC";

const temaPrincipal = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: coloresGlobales.colorTextoDefault,
    },
    primary: {
      main: colorPrimaryMain,
    },
    secondary: {
      main: colorSecondaryMain,
    },
    background: {
      default: coloresGlobales.background,
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontFamily: "League Spartan,sans-serif",
      fontWeight: 700,
      fontSize: "60px",
    },
    h2: {
      fontFamily: "League Spartan,sans-serif",
      fontWeight: 700,
      fontSize: "50px",
    },
    h3: {
      fontFamily: "League Spartan,sans-serif",
      fontWeight: 700,
      fontSize: "40px",
    },
    h4: {
      fontFamily: "League Spartan,sans-serif",
      fontWeight: 800,
      fontSize: "30px",
    },
    h5: {
      fontFamily: "League Spartan,sans-serif",
      fontWeight: 800,
      fontSize: "20px",
    },
    body1: {
      fontWeight: 500,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingTop: "10px",
          paddingBottom: "10px",
          background: coloresGlobales.background,
          // background: 'red',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "medium",
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          height: "35px",
          borderRadius: "0px 10px 0px 0px",
          fontFamily: "League Spartan,sans-serif",
          textTransform: "none",
          fontSize: "20px",
          ...(ownerState.variant === "text" && {
            background: "none",
            color: coloresGlobales.colorTextoDefault,
            "&:hover": {
              background: "none",
              textDecoration: "underline",
              color: colorPrimaryMain,
            },
          }),
          ...(ownerState.variant === "contained" && {
            background: colorPrimaryMain,
            color: coloresGlobales.background,
            "&:hover": {
              background: colorPrimaryMain,
              filter: "brightness(90%)  saturate(140%) grayscale(0.1)",
            },
          }),
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          backgroundColor: "#ffffff16",
        },
      },
      styleOverrides: {
        root: {
          ".MuiInputBase-root": {
            borderRadius: 0,
            height: "45px",
          },
        },
      },
    },
  },
});

const TemaPrincipal = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={temaPrincipal}>{children}</ThemeProvider>;
};

export default TemaPrincipal;
