import Nav from "./Nav";

const StandardLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default StandardLayout;
