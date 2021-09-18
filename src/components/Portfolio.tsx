import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid, AccordionActions, Button, Divider, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const TLDR = styled(Typography)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.secondary.main}`,
  padding: "0.5rem",
  marginBottom: "0.35em",
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  flexDirection: "column",
}));

interface Folio {
  title: string;
  tldr: string;
  repo: string;
  site?: string;
}

const folio: Array<Folio> = [
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
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
        {folio.map((entry, idx) => (
          <Grid item style={{ width: "100%" }} key={idx}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-label="Expand"
                aria-controls={"portfolio-content-" + idx}
                id={entry.title.toLowerCase().replace(/\s/g, "-") + "-accordion"}
              >
                <Typography color="primary">{entry.title}</Typography>
              </AccordionSummary>
              <AccordionDetailsStyled>
                <TLDR>{entry.tldr}</TLDR>
              </AccordionDetailsStyled>
              <Divider variant="middle" />
              <AccordionActions>
                {entry.site && (
                  <Button href={entry.site} target="_blank" variant="outlined">
                    Site
                  </Button>
                )}
                <Button href={entry.repo} target="_blank" color="primary" variant="outlined">
                  Repo
                </Button>
              </AccordionActions>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
