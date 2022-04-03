import { Divider, Accordion, Button, Text, Group, AccordionProps, createStyles } from "@mantine/core";
import { folio } from "./meta";
import { HiChevronDown as ChevronDown } from "react-icons/hi";

const useStyles = createStyles((theme, _params, getRef) => ({
  control: {
    ref: getRef("control"),
    border: 0,
    padding: "0.75rem",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : "transparent",

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : "transparent",
    },
  },

  item: {
    borderBottom: 0,
    overflow: "hidden",
    transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
    border: `1px dashed ${theme.colors.dark[7]}`,
    borderRadius: theme.radius.md,
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

const Portfolio = () => {
  return (
    <StyledAccordion initialItem={0} multiple iconPosition="right">
      {folio.map((entry, idx) => (
        <Accordion.Item
          icon={<ChevronDown size={24} />}
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
