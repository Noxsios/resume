import { FiGithub as GitHub, FiInstagram as Instagram, FiLinkedin as LinkedIn } from "react-icons/fi";
import StyledAnchor from "./StyledAnchor";
import { ReactElement } from "react";
export interface Folio {
  title: string;
  tldr: string;
  repo: string;
  site?: string;
}

export type Qualifaction = string | ReactElement;

export type Social = {
  url: string;
  icon: ReactElement;
  color: string;
};

export interface Data {
  skills: string[];
  qualifications: Qualifaction[];
  folio: Folio[];
  socials: Social[];
}

const data: Data = {
  skills: [
    "Proficient in building webapps w/ React.js + Typescript",
    "Experienced in consuming RESTful APIs",
    "Strong knowledge of HTML, CSS, and JavaScript",
    "Excellent analytical and debugging skills",
    "3+ years experience designing, documenting, and troubleshooting Cisco enterprise networks for the USAF",
    "Knowledgeable in PowerShell + Python scripting for network / workflow automation",
    "More to come...",
  ],
  qualifications: [
    <>
      {"3+ years working as a"} <StyledAnchor href="https://www.airforce.com/careers/detail/cyber-transport-systems">Cyber Transport</StyledAnchor>
      {` (Computer Networking) Technician for USAF`}
    </>,
    <>
      <StyledAnchor href="https://www.galvanize.com/">Galvanize</StyledAnchor> coding bootcamp graduate through the{" "}
      <StyledAnchor href="https://airmencoders.us/">Airmen Coders</StyledAnchor> program
    </>,
    "COMPTIA Sec+ Certification",
    "(Soon) CCNA",
    "More to come...",
  ],
  folio: [
    {
      title: "Big Bang Docs",
      tldr: "A generator that uses Markdown files dispersed across Platform One's Big Bang package ecosystem to construct a single, cohesive documentation site.",
      repo: "https://repo1.dso.mil/platform-one/big-bang/apps/sandbox/bb-docs-generator",
      site: "https://docs-bigbang.pages.dev/",
    },
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
  ],
  socials: [
    { url: "https://github.com/noxsios", icon: <GitHub size={24} />, color: "gray" },
    { url: "https://instagram.com/randazzoharry", icon: <Instagram size={24} />, color: "grape" },
    { url: "https://www.linkedin.com/in/harry-randazzo/", icon: <LinkedIn size={24} />, color: "blue" },
  ],
};

const { skills, qualifications, folio, socials } = data;
export { skills, qualifications, folio, socials };
export default data;
