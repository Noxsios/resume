import { memo } from "react";
import Typography from "@material-ui/core/Typography";

export const header = (variant) => {
  const H = (props) => <Typography {...props} color="primary" variant={variant} />;
  return memo(H);
};
