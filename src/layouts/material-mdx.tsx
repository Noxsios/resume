import { memo } from "react";
import { Divider, Typography, Paper, Table as MuiTable, TableRow, TableCell, TableBody, TableHead } from "@material-ui/core";

const components = {
  p: () => {
    const P = (props) => <Typography style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} {...props} />;
    return memo(P);
  },
  header: (variant) => {
    const H = (props) => <Typography {...props} color="primary" variant={variant} />;
    return memo(H);
  },
  blockquote: () => {
    const BQ = (props) => <Paper style={{ borderLeft: "4px solid #1976d2", padding: "0.5rem" }} {...props} />;
    return memo(BQ);
  },
  divider: () => {
    const HR = () => <Divider variant="middle" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />;
    return memo(HR);
  },
  ul: () => {
    const Ul = (props) => <Typography {...props} component="ul" />;
    return memo(Ul);
  },
  ol: () => {
    const Ol = (props) => <Typography {...props} component="ol" />;
    return memo(Ol);
  },
  li: () => {
    const LI = (props) => <Typography {...props} component="li" />;
    return memo(LI);
  },
  table: () => {
    const Table = (props) => <MuiTable {...props} />;
    return memo(Table);
  },
  tr: () => {
    const Tr = (props) => <TableRow {...props} />;
    return memo(Tr);
  },
  td: () => {
    const Td = ({ align, ...props }) => <TableCell align={align || undefined} {...props} />;
    return memo(Td);
  },
  tbody: () => {
    const TBody = (props) => <TableBody {...props} />;
    return memo(TBody);
  },
  th: () => {
    const Th = ({ align, ...props }) => <TableCell align={align || undefined} {...props} />;
    return memo(Th);
  },
  thead: () => {
    const THead = (props) => <TableHead {...props} />;
    return memo(THead);
  },
  wrapper: () => {
    const Wrapper = (props) => <div {...props} className="mdx-container" />;
    return memo(Wrapper);
  },
};

export default components;
