/* eslint-disable @next/next/no-img-element */
import ContactInfo from "../components/ContactAPI";
// import InlineCode from "../components/InlineCode";
import ReactRotatingText from "react-rotating-text";
import About from "../components/About";
import { Stack, Box, Container, Button, Divider, Text, Title } from "@mantine/core";

const randomInterval = () => Math.floor(Math.random() * 100) + 50;

const IndexPage = () => {
  const scrollToContactInfo = () => {
    const contactInfo = document.getElementById("contact");
    contactInfo.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container sx={{ mt: 1 }}>
      <Stack>
        <Box>
          <img
            src="/pfp.png"
            width="200"
            height="200"
            alt="logo"
            style={{ marginTop: "1rem", filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}
          />
        </Box>
        <Box style={{ paddingTop: "0" }}>
          <Title order={2} align="center" color="primary">
            Harry <code>{"'Razzle'"}</code> Randazzo
          </Title>
        </Box>
        <Box>
          <Title order={4} align="center" color="primary">
            <ReactRotatingText items={["Network Engineer", "Software Developer", "Nerd", "Razzle-Dazzle"]} typingInterval={randomInterval()} />
          </Title>
          <Divider sx={{ marginTop: 2 }} />
        </Box>
        <Box>
          <Text align="left" component="div" color="textSecondary" sx={{ fontFamily: "Fira Code, monospace" }}>
            Hi there, I&apos;m Razzle: a software developer and network engineer currently employed by the U.S. Air Force. I like solving problems and
            building things.
          </Text>
        </Box>
        <Box>
          <Button sx={{ width: "100%" }} onClick={scrollToContactInfo}>
            Contact Me
          </Button>
        </Box>
        <Box>
          <About />
        </Box>
        <Box id="contact" sx={{ width: "100%" }}>
          <ContactInfo />
        </Box>
      </Stack>
    </Container>
  );
};

export default IndexPage;
