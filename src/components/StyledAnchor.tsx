import Link from "next/link";
import { Anchor } from "@mantine/core";

const StyledAnchor = (props) => (
  <Link passHref href={props.href}>
    <Anchor
      sx={(theme) => ({
        borderRadius: "0.2rem",
        padding: "2px",
        backgroundImage: "linear-gradient(135deg, #232526, #414345, #232526)",
        "&:hover": {
          animation: "bg-pan-left 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;",
          backgroundSize: "600% 100%",
        },
        color: theme.colors.blue[3],
      })}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  </Link>
);

export default StyledAnchor;
