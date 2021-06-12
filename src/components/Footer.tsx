import { Divider, IconButton, makeStyles } from "@material-ui/core";
import { GitHub, Instagram, Phone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    marginTop: "1rem",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Divider variant="middle" />
      <IconButton color="primary" href="https://github.com/noxsios" target="_blank">
        <GitHub />
      </IconButton>
      <IconButton color="primary" href="https://instagram.com/randazzoharry" target="_blank">
        <Instagram />
      </IconButton>
      <IconButton color="primary" href="tel:+19087216743" target="_blank">
        <Phone />
      </IconButton>
      © Harry Randazzo
    </footer>
  );
};

export default Footer;
