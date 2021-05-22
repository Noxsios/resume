import { Typography, Grid, Container, Divider } from "@material-ui/core";
import "../gatsby-theme-material-ui-top-layout/theme.css";
import StandardLayout from "../layouts/standard-layout";
import logo from "../images/icon.png";
import Code from "../components/Code";
import InlineCode from "../components/InlineCode";

const IndexPage = () => {
  return (
    <StandardLayout>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column" justify="space-around" alignItems="center" alignContent="center">
          <Grid item style={{ marginTop: "2rem" }}>
            <img src={logo} width="100" />
          </Grid>
          <Grid item>
            <Typography variant="h2" align="center" color="primary">
              Harry <InlineCode>{"'Razzle'"}</InlineCode> Randazzo
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" color="primary">
              Network Engineer | Software Developer
            </Typography>
            <Divider variant="middle" style={{ marginTop: "0.75rem" }} />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" align="center" component="div" color="textSecondary">
              <em>"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better."</em>
            </Typography>
            <Typography variant="subtitle2" align="center" component="div" color="textSecondary">
              ~ Samuel Beckett
            </Typography>
            <Divider variant="middle" style={{ marginTop: "0.75rem" }} />
          </Grid>
          <Grid item>
            <Code className="language-bash" showLineNumbers={false}>
              {" curl -s meta.razzle.workers.dev | jq     "}
            </Code>
          </Grid>
        </Grid>
      </Container>
    </StandardLayout>
  );
};

export default IndexPage;
