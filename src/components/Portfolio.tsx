import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider, Accordion, Button, Text, Group, AccordionProps, createStyles } from "@mantine/core";
interface Folio {
  title: string;
  tldr: string;
  repo: string;
  site?: string;
}

const useStyles = createStyles((theme, _params, getRef) => ({
  control: {
    ref: getRef("control"),
    border: 0,
    opacity: 0.6,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor: "transparent",
      opacity: 1,
    },
  },

  item: {
    borderBottom: 0,
    overflow: "hidden",
    transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
    border: `1px solid ${theme.colors.dark[5]}`,
    borderRadius: theme.radius.lg,
  },

  itemOpened: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    borderColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3],

    [`& .${getRef("control")}`]: {
      opacity: 1,
    },

    [`& .${getRef("icon")}`]: {
      transform: "rotate(45deg)",
    },
  },

  content: {
    paddingLeft: 0,
  },
}));

function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} {...props} />;
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
    <StyledAccordion initialItem={0} multiple iconPosition="right">
      {folio.map((entry, idx) => (
        <Accordion.Item
          icon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls={"portfolio-content-" + idx}
          id={entry.title.toLowerCase().replace(/\s/g, "-") + "-accordion"}
          key={idx}
          label={entry.title}
          my="lg"
        >
          <Text mx="sm" color="gray">
            {entry.tldr}
          </Text>
          <Divider my="md" />
          <Group position="right" my="sm">
            {entry.site && (
              <Button uppercase variant="outline" component="a" href={entry.site} target="_blank" color="blue">
                Site
              </Button>
            )}
            <Button uppercase variant="outline" component="a" href={entry.repo} target="_blank" color="teal">
              Repo
            </Button>
          </Group>
        </Accordion.Item>
      ))}
    </StyledAccordion>
  );
};

export default Portfolio;
