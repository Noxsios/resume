import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Footer as MantineFooter, ActionIcon, Center } from "@mantine/core";
import { socials } from "./meta";

const Footer = () => {
  return (
    <MantineFooter height={40}>
      <Center>
        <ActionIcon component="a" href={socials[0].url} target="_blank">
          <GitHub />
        </ActionIcon>
        <ActionIcon component="a" href={socials[1].url} target="_blank">
          <Instagram />
        </ActionIcon>
        <ActionIcon component="a" href={socials[2].url} target="_blank">
          <LinkedIn />
        </ActionIcon>
        © Harry Randazzo
      </Center>
    </MantineFooter>
  );
};

export default Footer;
