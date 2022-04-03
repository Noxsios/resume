import { ActionIcon, Center, Divider } from "@mantine/core";
import { socials } from "./meta";

const Footer = () => {
  return (
    <>
      <Divider variant="dashed" />
      <Center>
        {socials.map((social, idx) => (
          <ActionIcon
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            // aria-label={social.label}
            size="xl"
            radius={999}
            component="a"
            color={social.color}
            variant="light"
            mx="xs"
          >
            {social.icon}
          </ActionIcon>
        ))}
        © Harry Randazzo
      </Center>
    </>
  );
};

export default Footer;
