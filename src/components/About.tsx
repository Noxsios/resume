import Portfolio from "./Portfolio";
import { TypographyStylesProvider } from "@mantine/core";
import Link from "next/link";

const skills = [
  "Proficient in building webapps w/ React.js + Typescript",
  "Experienced in consuming RESTful APIs",
  "Strong knowledge of HTML, CSS, and JavaScript",
  "Excellent analytical and debugging skills",
  "3+ years experience designing, documenting, and troubleshooting Cisco enterprise networks for the USAF",
  "Knowledgeable in PowerShell + Python scripting for network / workflow automation",
  "More to come...",
];
const qualifications = [
  <>
    {"3+ years working as "} <Link href="https://www.airforce.com/careers/detail/cyber-transport-systems">Cyber Transport</Link>
    {` (Computer Networking) Technician for USAF`}
  </>,
  <>
    <Link href="https://www.galvanize.com/">Galvanice</Link> coding bootcamp graduate through the{" "}
    <Link href="https://airmencoders.us/">Airmen Coders</Link> program
  </>,
  "COMPTIA Sec+ Certification",
  "(Soon) CCNA",
  "More to come...",
];
export default function About() {
  return (
    <TypographyStylesProvider>
      <h2>👉 Skills</h2>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
      <h2>👉 Qualifications</h2>
      <ul>
        {qualifications.map((qual, idx) => (
          <li key={idx}>{qual}</li>
        ))}
      </ul>
    </TypographyStylesProvider>
  );
}
