import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h2: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h3: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h4: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h5: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h6: {
      fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#c2870a",
    },
    secondary: {
      main: "#1976d2",
    },
    text: {
      // primary: "#C0C0C0",
      primary: "#a39e98",
    },
    background: {
      default: "#27282D",
      // paper: "#3d3f47",
    },
  },
});

// console.log(theme.typography.h1);

export default theme;
