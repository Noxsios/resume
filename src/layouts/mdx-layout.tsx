import { MDXProvider } from "@mdx-js/react";
import { Link, useScrollTrigger, Zoom, Fab, Container } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";

import materialMDX from "./material-mdx";
import Nav from "./Nav";
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

const useStyles = makeStyles((theme) => ({
  mdxContainer: {
    overflowX: "hidden",
    paddingBottom: "3rem",
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollToTop}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <Container maxWidth="md" className={classes.mdxContainer}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </Container>
      <ScrollTop />
    </>
  );
}
