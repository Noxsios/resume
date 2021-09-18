import Link from "next/Link";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => {
  return (
    <main>
      <title>404</title>
      <Typography variant="h1" color="error">
        Page not found
      </Typography>
      <p>
        <Typography variant="body1" color="primary">
          <span role="img">🔴</span>I'm Sorry Dave, I'm afrid I can't do that.
        </Typography>
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link href="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
