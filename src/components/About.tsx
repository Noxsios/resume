import Portfolio from "./Portfolio";
import { Text } from "@mantine/core";
export default function About() {
  return (
    <>
      {`
#### Skills

- Proficient in building webapps w/ React.js + Typescript
- Experienced in consuming RESTful APIs
- Strong knowledge of HTML, CSS, and JavaScript
- Excellent analytical and debugging skills
- 3+ years experience designing, documenting, and troubleshooting Cisco enterprise networks for the USAF
  - Mostly OSI layers 1-4
- Knowledgeable in PowerShell + Python scripting for network / workflow automation
- More to come...

#### Qualifications

- 3+ years working as [Cyber Transport](https://www.airforce.com/careers/detail/cyber-transport-systems) (Computer Networking) Technician for USAF
- [Galvanize](https://www.galvanize.com/) coding bootcamp graduate through the [Airmen Coders](https://airmencoders.us/) program
- COMPTIA Sec+ Certification
- (Soon) CCNA
- More to come...
`
        .split("\n")
        .map((str, idx) => {
          return <Text key={idx}>{str}</Text>;
        })}
    </>
  );
}
