import React from "react";
import { theme } from "./styles/Tema";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ProductosCatalogo from "./pages/ProductosCatalogo/ProductosCatalogo";
import "./index.css";

const App = () => {
  return (
    <div>
      <div className="gradient"></div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductosCatalogo />
      </ThemeProvider>
    </div>
  );
};

export default App;
