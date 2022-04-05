import meta, { Folio } from "../components/meta";
import { Prism } from "@mantine/prism";
import { ReactElement } from "react";
import { Anchor, Center, Container, Group, Switch } from "@mantine/core";
import { useState } from "react";
import { IoReturnUpBackOutline as BackIcon } from "react-icons/io5";

const json = {
  ...meta,
  qualifications: meta.qualifications.map((q) => {
    if (typeof q === "string") {
      return q;
    } else if (Object.hasOwnProperty.call(q, "props")) {
      const children = q.props.children;
      return children.reduce((acc: string, child: string | ReactElement) => {
        if (typeof child === "string") {
          return acc + child;
        } else if (Object.hasOwnProperty.call(child, "props")) {
          return acc + `[${child.props.children}](${child.props.href})`;
        }
      }, "");
    }
  }),
  socials: meta.socials.map((s) => s.url),
  title: "Harry Randazzo's JSON Resume",
};

const sorted = Object.keys(json)
  .sort((a, b) => {
    if (a === "title") {
      return -1;
    } else if (b === "title") {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  })
  .reduce((acc: Object, key: string) => {
    //   @ts-ignore
    acc[key] = json[key];
    return acc;
  }, {});

const md = Object.entries(sorted)
  .map(([key, value]) => {
    const header = "\n## " + key.slice(0, 1).toUpperCase() + key.slice(1) + "\n";
    let md;
    switch (key) {
      case "title":
        return `\n# ${value}\n`;
      case "folio":
        md = value.map((f: Folio) => `- ${f.title}:\n    - ${f.tldr}\n    - ${f.repo} ${f.site ? `\n    - ${f.site}` : ""}`).join("\n") + "\n";
        break;
      case "qualifications":
        md = value.map((q: string) => `- ${q}`).join("\n") + "\n";
        break;
      case "skills":
        md = value.map((s: string) => `- ${s}`).join("\n") + "\n";
        break;
      case "socials":
        md = meta.socials
          .map((s) => {
            const { url } = s;
            const label = new URL(url).hostname.replace("www.", "").replace(".com", "");
            return `- [${label}](${url})`;
          })
          .join("\n");
        break;
    }

    return header + "\n" + md;
  })
  .join("");

const JSONPage = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isJSON, setIsJSON] = useState(true);

  return (
    <Container size="xl">
      <Group position="right" my="lg">
        <Anchor href="/">
          <Center>
            <BackIcon size={24} style={{ marginRight: "0.5rem" }} /> Back Home
          </Center>
        </Anchor>
        <Switch size="lg" checked={isJSON} onChange={(event) => setIsJSON(event.currentTarget.checked)} label={isJSON ? "JSON" : "MD"} />
        <Switch
          size="lg"
          checked={isScrolled}
          onChange={(event) => setIsScrolled(event.currentTarget.checked)}
          label={isScrolled ? "Scroll" : "Wrap"}
        />
      </Group>
      <Prism
        noCopy
        sx={(theme) => ({
          "& .mantine-Prism-line": { whiteSpace: `${isScrolled ? "pre" : "pre-wrap"}` },
          "& .token": { fontSize: theme.fontSizes.md },
        })}
        my="lg"
        language={isJSON ? "json" : "markdown"}
        scrollAreaComponent="div"
      >
        {isJSON ? JSON.stringify(sorted, null, 2) : md}
      </Prism>
    </Container>
  );
};

export default JSONPage;
