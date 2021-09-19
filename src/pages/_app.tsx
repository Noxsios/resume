import * as React from "react";
import "@fontsource/fira-code";
import "@fontsource/montserrat";
import "@fontsource/recursive";
import "../styles/theme.css";
import theme from "../styles/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Link, Container } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../components/Footer";

import materialMDX from "../components/material-mdx";
import Code from "../components/Code";
import InlineCode from "../components/InlineCode";

const MDXComponents = {
  p: materialMDX.p(),
  h1: materialMDX.header("h1"),
  h2: materialMDX.header("h2"),
  h3: materialMDX.header("h3"),
  h4: materialMDX.header("h4"),
  h5: materialMDX.header("h5"),
  h6: materialMDX.header("h6"),
  blockquote: materialMDX.blockquote(),
  ul: materialMDX.ul(),
  ol: materialMDX.ol(),
  li: materialMDX.li(),
  table: materialMDX.table(),
  tr: materialMDX.tr(),
  td: materialMDX.td(),
  tbody: materialMDX.tbody(),
  th: materialMDX.th(),
  thead: materialMDX.thead(),
  a: Link,
  code: Code,
  hr: materialMDX.divider(),
  inlineCode: InlineCode,
  wrapper: materialMDX.wrapper(),
};

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" href="/icon.png" />
        <title>Razzle's Résumé</title>
      </Head>
      <MDXProvider components={MDXComponents}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xl">
              <Component {...pageProps} />
            </Container>
            <Footer />
          </ThemeProvider>
        </StyledEngineProvider>
      </MDXProvider>
    </>
  );
}
