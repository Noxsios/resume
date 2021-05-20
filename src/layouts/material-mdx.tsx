import Typography from "@material-ui/core/Typography";

export const MaterialH1 = ({ props, children }) => (
  <Typography variant="h1" {...props}>
    {children}
  </Typography>
);

export const typography =
  (variant) =>
  ({ props, children }) =>
    (
      <Typography variant={variant} color="primary" {...props}>
        {children}
      </Typography>
    );
