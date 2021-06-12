import { Typography, Grid, Container, Divider, makeStyles } from "@material-ui/core";
import "../gatsby-theme-material-ui-top-layout/theme.css";
import StandardLayout from "../layouts/standard-layout";
import logo from "../images/icon.png";
import ContactInfo from "../components/ContactInfo";
import InlineCode from "../components/InlineCode";
import ReactRotatingText from "react-rotating-text";
import About from "../components/About.mdx";
import Portfolio from "../components/Portfolio";

const randomInterval = () => Math.floor(Math.random() * 100) + 50;

const useStyles = makeStyles((theme) => ({
  siteIcon: {
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
    <StandardLayout>
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column" justify="space-around" alignItems="center" alignContent="center">
          <Grid item className={classes.siteIcon}>
            <img src={logo} width="100" />
          </Grid>
          <Grid item>
            <Typography variant="h2" align="center" color="primary">
              Harry <InlineCode className="language-javascript">{"'Razzle'"}</InlineCode> Randazzo
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center" color="primary">
              <ReactRotatingText items={["Network Engineer", "Software Developer", "Nerd", "Razzle-Dazzle"]} typingInterval={randomInterval()} />
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

          <Grid item xs={12} sm={8}>
            <ContactInfo />
          </Grid>
          <Grid item xs={12} sm={8}>
            <About />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Portfolio />
          </Grid>
        </Grid>
      </Container>
    </StandardLayout>
  );
};

export default IndexPage;
