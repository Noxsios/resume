import Portfolio from "./Portfolio";
import { TypographyStylesProvider } from "@mantine/core";
import { skills, qualifications } from "./meta";

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
