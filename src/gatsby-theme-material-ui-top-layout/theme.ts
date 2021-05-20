import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    type: "dark",
    primary: {
      main: "#5bc77f",
    },
    secondary: {
      main: "#c2870a",
    },
    text: {
      primary: "#C0C0C0",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar": {
          width: "12px",
        },
        "::-webkit-scrollbar-track": {
          background: "#a09f9f",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#5bc77f",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      },
    },
  },
});

export default theme;
