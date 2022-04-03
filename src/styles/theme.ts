import { MantineThemeOverride } from "@mantine/core";

let theme: MantineThemeOverride = {
  fontFamily: '"Montserrat", sans-serif',
  fontFamilyMonospace: '"Fira Code", monospace',
  fontSizes: {
    xs: 12,
    sm: 15,
    md: 16,
    lg: 18,
    xl: 20,
  },
  headings: {
    fontFamily: '"Recursive", "Segoe UI", "Helvetica Neue", Helvetica, Roboto, \'Open Sans\', FreeSans, sans-serif',
  },
  colorScheme: "dark",
  colors: {
    dark: ["#c2870a", "#a39e98", "#8c8fa3", "#666980", "#4d4f66", "#34354a", "#1e1e1e", "#27282d", "#01010a", "#01010a"],
  },
};

export default theme;

// palette: {
//   primary: {
//     main: "#c2870a",
//   },
//   secondary: {
//     main: "#1976d2",
//   },
//   text: {
//     // primary: "#C0C0C0",
//     primary: "#a39e98",
//   },
//   background: {
//     default: "#27282D",
//     // paper: "#3d3f47",
//   },
