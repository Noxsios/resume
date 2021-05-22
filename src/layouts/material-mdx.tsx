import Typography from "@material-ui/core/Typography";

export const typography =
  (variant) =>
  ({ props, children }) =>
    (
      <Typography variant={variant} color="primary" {...props}>
        {children}
      </Typography>
    );
