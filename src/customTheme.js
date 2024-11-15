// customTheme.js
import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#212121",
    },
    customColors: {
      border: "rgba(42, 157, 143, 0.4)",
      itemBackground: "rgba(0, 0, 0, 0.4)",
      button: "#258277",
      buttonHover: "#21867A",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
          backgroundRepeat: "no-repeat",
          margin: 0,
          padding: 0,
          height: "100%",
          minHeight: "100vh ",
        },
      },
    },
  },
});

export default customTheme;
