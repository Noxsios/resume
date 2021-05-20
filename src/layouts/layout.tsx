import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby-theme-material-ui";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import * as materialMDX from "./material-mdx";
import Nav from "../components/Nav";

const MDXComponents = {
  h1: materialMDX.typography("h1"),
  h2: materialMDX.typography("h2"),
  h3: materialMDX.typography("h3"),
  h4: materialMDX.typography("h4"),
  h5: materialMDX.typography("h5"),
  h6: materialMDX.typography("h6"),
  a: Link,
};

const useStyles = makeStyles((theme) => ({
  mdxContainer: {
    overflowX: "hidden",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <Container maxWidth="md" className={classes.mdxContainer}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </Container>
    </>
  );
}
