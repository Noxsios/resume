/* eslint-disable @next/next/no-img-element */
import ContactInfo from "../components/ContactAPI";
import ReactRotatingText from "react-rotating-text";
import About from "../components/About";
import Footer from "../components/Footer";
import { Stack, Box, Container, Button, Code, Text, Title, Center } from "@mantine/core";
import Portfolio from "../components/Portfolio";

const randomInterval = () => Math.floor(Math.random() * 100) + 50;

const IndexPage = () => {
  return (
    <Container my="md">
      <Stack spacing="lg">
        <Center>
          <img src="/pfp.png" width="200" height="200" alt="logo" style={{ filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }} />
        </Center>
        <Box>
          <Title order={1} align="center" color="primary">
            Harry <Code sx={{ fontSize: "inherit", borderRadius: "0.75rem" }}>{"'razzle'"}</Code> Randazzo
          </Title>
          <Title my="md" order={4} align="center" color="primary">
            <ReactRotatingText items={["Network Engineer", "Software Developer", "Nerd", "Razzle-Dazzle"]} typingInterval={randomInterval()} />
          </Title>
        </Box>
        <Box>
          <Text my="lg" align="left" component="div" color="green" sx={{ fontFamily: "Fira Code, monospace" }}>
            Hi there, I&apos;m Razzle: a software developer and network engineer currently employed by the U.S. Air Force. I like solving problems and
            building things.
          </Text>
          <Center>
            <Button color="blue" variant="outline" component="a" href="#contact">
              Contact Me
            </Button>
          </Center>
        </Box>
        <Box>
          <About />
        </Box>
        <Box>
          <Title order={4}>{"👉"} Projects</Title>
          <Portfolio />
        </Box>
        <Box id="contact">
          <ContactInfo />
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
};

export default IndexPage;
