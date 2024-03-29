import "@fontsource/fira-code";
import "@fontsource/montserrat";
import "@fontsource/recursive";
import "../styles/theme.css";
import theme from "../styles/theme";
import "../styles/prism-atom-dark.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/pfp.png" />
        <title>Razzle</title>
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
