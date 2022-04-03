import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Footer as MantineFooter, Divider, ActionIcon } from "@mantine/core";

const Footer = () => {
  return (
    <MantineFooter height={40}>
      <Divider mx="md" />
      <ActionIcon component="a" href="https://github.com/noxsios" target="_blank">
        <GitHub />
      </ActionIcon>
      <ActionIcon component="a" href="https://instagram.com/randazzoharry" target="_blank">
        <Instagram />
      </ActionIcon>
      <ActionIcon component="a" href="https://www.linkedin.com/in/harry-randazzo/" target="_blank">
        <LinkedIn />
      </ActionIcon>
      © Harry Randazzo
    </MantineFooter>
  );
};

export default Footer;
