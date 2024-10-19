import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import customTheme from "./customTheme.js";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={customTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
