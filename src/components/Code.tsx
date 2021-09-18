import React, { useState } from "react";
import { Snackbar, Alert, Typography } from "@mui/material";
import Clipboard from "react-clipboard.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { styled } from "@mui/system";

const MyCodeBlock = styled("div")({
  position: "relative",
  "& pre": {
    border: "none !important",
    padding: "0.5em !important",
  },
});

const MyRoot = styled("div")({
  "@global": {
    "::-webkit-scrollbar": {
      height: 5,
    },
  },
  "& code": {
    fontFamily: "'Fira Code', monospace !important",
  },
});

const CodeBlock = ({ children, copy = true, showLineNumbers = true, className = "language-text" }) => {
  const [open, setOpen] = useState(false);
  const language = className.split("-")[1];

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <MyRoot>
      <MyCodeBlock>
        <SyntaxHighlighter language={language} style={atomDark} showLineNumbers={showLineNumbers}>
          {children}
        </SyntaxHighlighter>
        {copy && (
          <Clipboard data-clipboard-text={children} className="code-copy">
            <Typography variant="caption" color="GrayText" onClick={handleClick}>
              Click to copy.
            </Typography>
          </Clipboard>
        )}
      </MyCodeBlock>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied to Clipboard!
        </Alert>
      </Snackbar>
    </MyRoot>
  );
};

export default CodeBlock;
