import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h2: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h3: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h4: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h5: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
    h6: {
      fontFamily: 'Recursive, "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#c2870a",
    },
    secondary: {
      main: "#1c2659",
    },
    text: {
      // primary: "#C0C0C0",
      primary: "#a39e98",
    },
    background: {
      default: "#27282D",
      paper: "#3d3f47",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar": {
          width: "12px",
        },
        "::-webkit-scrollbar-track": {
          background: "#27282D",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#c2870a",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      },
    },
  },
});

// console.log(theme.palette);

export default theme;
