/* eslint-disable @next/next/no-img-element */
import ContactInfo from "../components/ContactAPI";
import ReactRotatingText from "react-rotating-text";
import About from "../components/About";
import Footer from "../components/Footer";
import { Stack, Box, Container, Button, Code, Text, Title, Center, Divider, MediaQuery } from "@mantine/core";
import Portfolio from "../components/Portfolio";
import { AiFillProject } from "react-icons/ai";

const randomInterval = () => Math.floor(Math.random() * 100) + 50;

const IndexPage = () => {
  return (
    <Container my="md" px="lg" size="md">
      <Stack spacing="lg">
        <MediaQuery smallerThan="sm" styles={{ height: "100vh", "& a": { marginTop: "2rem" }, "& #caption": { marginTop: "3rem" } }}>
          <Box>
            <Center>
              <img
                src="/pfp.png"
                width="200"
                height="200"
                alt="logo"
                style={{ filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))", marginTop: "1rem", marginBottom: "1rem" }}
              />
            </Center>
            <Title order={1} align="center" color="primary">
              Harry{" "}
              <Code
                mx="xs"
                sx={{
                  fontSize: "inherit",
                  borderRadius: "0.75rem",
                  background: "hsl(0,0%,8%)",
                  boxShadow: "1px 1px .5em black inset",
                  color: "hsl(76, 21%, 52%)",
                }}
              >
                {"'razzle'"}
              </Code>{" "}
              Randazzo
            </Title>
            <Title my="md" order={4} align="center" color="primary">
              <ReactRotatingText items={["Network Engineer", "Software Developer", "Nerd", "Razzle-Dazzle"]} typingInterval={randomInterval()} />
            </Title>
            <Text id="caption" my="lg" color="green" sx={{ fontFamily: "Fira Code, monospace" }}>
              Hi there, I&apos;m Razzle: a software developer and network engineer currently employed by Defense Unicorns. I like solving problems
              and building things.
            </Text>
            <Center>
              <Button color="blue" uppercase variant="outline" component="a" href="#contact">
                Contact Me
              </Button>
            </Center>
          </Box>
        </MediaQuery>
        <Box>
          <About />
        </Box>
        <Box>
          <Title id="projects" order={2}>
            <Center inline>
              <AiFillProject style={{ marginRight: "0.5rem" }} /> Projects
            </Center>
          </Title>
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
