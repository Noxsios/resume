import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby-theme-material-ui";

const shortcodes = { Link };
export default function Layout({ children }) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>;
}
