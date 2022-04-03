import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Footer as MantineFooter, ActionIcon, Center } from "@mantine/core";

const Footer = () => {
  return (
    <MantineFooter height={40}>
      <Center>
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
      </Center>
    </MantineFooter>
  );
};

export default Footer;
