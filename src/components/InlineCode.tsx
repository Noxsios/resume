import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./InlineCode.css";

const InlineCode = ({ className = "language-js", children }) => {
  const language = className.split("-")[1];
  return (
    <SyntaxHighlighter language={language} style={twilight} className="codeblock-inline">
      {children}
    </SyntaxHighlighter>
  );
};

export default InlineCode;
