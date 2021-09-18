import { Typography, Grid, Container, Divider, Button } from "@mui/material";
import logo from "../images/icon.png";
import ContactInfo from "../components/ContactAPI";
import InlineCode from "../components/InlineCode";
import ReactRotatingText from "react-rotating-text";
import About from "../components/About.mdx";
import Image from "next/image";

const randomInterval = () => Math.floor(Math.random() * 100) + 50;

const styles = {
  siteIcon: {
    marginTop: 2,
    alignItems: "center",
  },
};

const IndexPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Grid container spacing={3} direction="column" justifyContent="space-around" alignItems="center" alignContent="center">
        <Grid item sx={styles.siteIcon}>
          <Image src={logo} width="100" height="100" />
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
          <Divider variant="middle" sx={{ marginTop: 2 }} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" align="left" component="div" color="textSecondary" sx={{ fontFamily: "Fira Code, monospace" }}>
            Hi there, I'm Razzle: a software developer and network engineer currently employed by the U.S. Air Force. I like solving problems and
            building things.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Button href="#contact" variant="contained" sx={{ width: "100%" }}>
            Contact Me
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <About />
        </Grid>
        <Grid item xs={12} sm={8} id="contact" sx={{ width: 100 }}>
          <ContactInfo />
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexPage;
