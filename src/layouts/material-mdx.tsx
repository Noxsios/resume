import { memo } from "react";
import { Divider, Typography } from "@material-ui/core";

export const header = (variant) => {
  const H = (props) => <Typography {...props} color="primary" variant={variant} />;
  return memo(H);
};

export const divider = () => {
  const HR = () => <Divider variant="middle" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />;
  return memo(HR);
};
