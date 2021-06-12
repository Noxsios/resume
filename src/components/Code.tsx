import { useState } from "react";
import { Tooltip, Snackbar } from "@material-ui/core";
import clsx from "clsx";
import Clipboard from "react-clipboard.js";
import CopyIcon from "@material-ui/icons/FileCopyOutlined";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Alert from "@material-ui/lab/Alert";
import "./Code.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "@global": {
      "::-webkit-scrollbar": {
        height: 5,
      },
    },
    fontFamily: "'Fira Code', monospace",
  },
  code: {
    color: theme.palette.primary.light,
    fontFamily: "'Fira Code', monospace",
  },
  copyIcon: {
    opacity: 0,
    transition: "opacity 0.3s",
    border: "none",
    color: theme.palette.grey[400],
    marginTop: 5,
    background: "none",
    cursor: "pointer",
    position: "absolute",
    right: 0,
    marginRight: 0,
    "& svg": {
      "&:hover": {
        color: "#d66b06",
      },
    },
  },
  codeblock: {
    position: "relative",
    "& pre": {
      border: "none !important",
      padding: "0.5em !important",
    },
  },
  showCopyIcon: {
    filter: "alpha(opacity=100)",
    opacity: 1,
  },
  copyIconButton: {
    maxWidth: 5,
  },
}));

const CodeBlock = ({ children, copy = true, showLineNumbers = true, className = "language-text" }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showCopy, setShowCopy] = useState(false);
  const language = className.split("-")[1];

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleShowCopy = () => {
    setShowCopy(true);
  };

  const handleHideCopy = () => {
    setShowCopy(false);
  };

  return (
    <div className={classes.root} onMouseLeave={handleHideCopy} onMouseOver={handleShowCopy}>
      <div className={classes.codeblock}>
        {copy && (
          <Clipboard className={clsx(classes.copyIcon, showCopy && classes.showCopyIcon)} data-clipboard-text={children}>
            <Tooltip
              title="Copy to Clipboard"
              placement="left-end"
              onClick={handleClick}
              PopperProps={{ style: { marginRight: "-0.75rem", paddingBottom: "0.5rem" } }}
            >
              <span className={classes.copyIconButton}>
                <CopyIcon />
              </span>
            </Tooltip>
          </Clipboard>
        )}
        <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={showLineNumbers} codeTagProps={{ className: classes.code }}>
          {children}
        </SyntaxHighlighter>
      </div>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied to Clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CodeBlock;
