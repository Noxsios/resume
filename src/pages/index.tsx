import { Typography } from "@material-ui/core";
import "../gatsby-theme-material-ui-top-layout/theme.css";
import StandardLayout from "../layouts/standard-layout";

const IndexPage = () => {
  return (
    <StandardLayout>
      <Typography variant="h1" color="initial">
        Resume
      </Typography>
    </StandardLayout>
  );
};

export default IndexPage;
