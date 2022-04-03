import { Center, List, Title } from "@mantine/core";
import { skills, qualifications } from "./meta";
import { FaAward, FaToolbox } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Title order={2} id="skills">
        <Center inline>
          <FaToolbox style={{ marginRight: "0.5rem" }} /> Skills
        </Center>
      </Title>
      <List
        my="md"
        sx={(theme) => ({
          color: theme.colors.dark[1],
        })}
      >
        {skills.map((skill, idx) => (
          <List.Item key={idx}>{skill}</List.Item>
        ))}
      </List>
      <Title order={2} id="qulifications">
        <Center inline>
          <FaAward style={{ marginRight: "0.5rem" }} /> Qualifications
        </Center>
      </Title>
      <List
        my="md"
        sx={(theme) => ({
          color: theme.colors.dark[1],
        })}
      >
        {qualifications.map((qual, idx) => (
          <List.Item key={idx}>{qual}</List.Item>
        ))}
      </List>
    </>
  );
}
