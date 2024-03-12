import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./styles/Tema";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ProductosCatalogo from "./pages/ProductosCatalogo/ProductosCatalogo";

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
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
