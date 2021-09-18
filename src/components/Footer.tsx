import { Divider, IconButton } from "@mui/material";
import { GitHub, Instagram, Phone, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";

const CustomFooter = styled("footer")(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Footer = () => {
  return (
    <CustomFooter>
      <Divider variant="middle" />
      <IconButton color="primary" href="https://github.com/noxsios" target="_blank" size="large">
        <GitHub />
      </IconButton>
      <IconButton color="primary" href="https://instagram.com/randazzoharry" target="_blank" size="large">
        <Instagram />
      </IconButton>
      <IconButton color="primary" href="tel:+19087216743" target="_blank" size="large">
        <Phone />
      </IconButton>
      <IconButton color="primary" href="https://www.linkedin.com/in/harry-randazzo/" target="_blank" size="large">
        <LinkedIn />
      </IconButton>
      © Harry Randazzo
    </CustomFooter>
  );
};

export default Footer;
