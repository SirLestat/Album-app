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
      border: "#2C5454",
      itemBackground: "#1E3A3A",
      button: "#2A9D8F",
      buttonHover: "#21867A",
    },
  },
});

export default customTheme;
