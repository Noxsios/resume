import Nav from "./Nav";
import { Helmet } from "react-helmet";

const StandardLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Razzle's Resume</title>
        <link rel="canonical" href="https://noxsios.net" />
        <meta name="description" content="My résumé built w/ Gatsby." />
      </Helmet>
      <Nav />
      {children}
    </>
  );
};

export default StandardLayout;
