import { CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "./customTheme.js";
import { Router } from "./Router.jsx";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
