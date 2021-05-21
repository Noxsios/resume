import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
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

export default theme;
