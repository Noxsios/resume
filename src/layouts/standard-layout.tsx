import { Helmet } from "react-helmet";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const StandardLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Razzle's Resume</title>
        <link rel="canonical" href="https://noxsios.net" />
        <meta name="description" content="My résumé built w/ Gatsby." />
      </Helmet>
      {children}
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  );
};

export default StandardLayout;
