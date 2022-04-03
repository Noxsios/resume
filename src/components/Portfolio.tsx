import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Divider, Accordion, Box, Button, Text } from "@mantine/core";
interface Folio {
  title: string;
  tldr: string;
  repo: string;
  site?: string;
}

const folio: Array<Folio> = [
  {
    title: "Big Bang Docs",
    tldr: "A generator that uses Markdown files dispersed across Platform One's Big Bang package ecosystem to construct a single, cohesive documentation site.",
    repo: "https://repo1.dso.mil/platform-one/big-bang/apps/sandbox/bb-docs-generator",
    site: "https://docs-bigbang.pages.dev/",
  },
  ,
  {
    title: "palx-pwa",
    tldr: "Automatic UI Color Palette Generator PWA.  Uses the palx API to generate a palette, then render all the shades, as well as provide download buttons for a variety of formats.",
    repo: "https://github.com/Noxsios/palx-pwa",
    site: "https://palx-pwa.pages.dev/",
  },
  {
    title: "DSN Converter",
    tldr: "Just another DSN converter. What sets this apart is that it is a PWA, and has full offline capabilties with a native mobile app feel.",
    repo: "https://github.com/Noxsios/dsn-converter",
    site: "https://dsn-converter.pages.dev/",
  },
  {
    title: "Cisco EEM Tunnel Reset",
    tldr: "Script to auto reset or 'bump' a GRE tunnel on a Cisco router using IP SLA and EEM.  Manually checking / bumping tunnels on Cisco IOS is a pain, this configuration fixes that.",
    repo: "https://github.com/Noxsios/Cisco-EEM-Tunnel-Reset",
  },
  {
    title: "Config Composer",
    tldr: "PWA that ingests a Markdown template file formatted with Mustache, and a YAML cutsheet file which are rendered into a clean HTML representation of the Markdown template with the YAML values.",
    repo: "https://github.com/Noxsios/config-composer",
    site: "https://noxsios.github.io/config-composer/",
  },
  {
    title: "PowerShell IP Address Editor",
    tldr: "PowerShell GUI for rapidly / easily changing Windows 10 IPv4 address. Contains some bugs, gotta go back and fix.",
    repo: "https://gist.github.com/Noxsios/b97bfb9ad1fefff63247434aeb53a8a6",
  },
  {
    title: "Powershell Simple Network Config Templating",
    tldr: "PowerShell script w/ GUI to quickly and easily generate multiple config files from a single template.",
    repo: "https://github.com/Noxsios/Simple-Network-Template",
  },
  {
    title: "Grogu Ascii Animation",
    tldr: "Inspired by parrot.live, this is a simple ASCII animation using Cloudflare Workers.",
    repo: "https://gist.github.com/Noxsios/487672f6b37582f5d440d8fe8c1d1191",
    site: "https://grogu.razzle.workers.dev/",
  },
];

const Portfolio = () => {
  return (
    <Container>
      <Accordion multiple>
        {folio.map((entry, idx) => (
          <Accordion.Item
            icon={<ExpandMoreIcon color="primary" />}
            aria-label="Expand"
            aria-controls={"portfolio-content-" + idx}
            id={entry.title.toLowerCase().replace(/\s/g, "-") + "-accordion"}
            key={idx}
            label={entry.title}
          >
            <Text>{entry.tldr}</Text>
            <Divider />
            <Box>
              {entry.site && (
                <Button component="a" href={entry.site} target="_blank">
                  Site
                </Button>
              )}
              <Button component="a" href={entry.repo} target="_blank">
                Repo
              </Button>
            </Box>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Portfolio;
