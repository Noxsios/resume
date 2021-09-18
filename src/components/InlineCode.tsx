import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const InlineCode = ({ className = "language-text", children }) => {
  const language = className.split("-")[1];
  return (
    <SyntaxHighlighter language={language} style={twilight} className="codeblock-inline">
      {children}
    </SyntaxHighlighter>
  );
};

export default InlineCode;
