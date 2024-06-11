// material UI modify theme colors
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // default font family
  typography: {
    fontFamily: "Mulish, sans-serif",
  },

  // modify default color pelletes
  palette: {
    primary: {
      main: "#5ACCCC",
      contrastText: "#FFFFFF",
      steal: "#335C6E",
      yellow: "#FFD33",
    },
    secondary: {
      main: "#CFFAFA",
      orangeRed: "#F76434",
      teal: "#4AA088",
      yellowDark: "#FAAD00",
      mainDark1: "#53C2C2",
      mainDark2: "#28B8B8",
      orangePastel: "#FFE6DC",
    },
  },
});

export default theme;
