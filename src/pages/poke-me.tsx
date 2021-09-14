import * as React from "react";
import { Button, Container, TextField, makeStyles, Typography } from "@material-ui/core";
import StandardLayout from "../layouts/standard-layout";

const getTimeString = () => new Date().toLocaleTimeString();

const useStyles = makeStyles((theme) => ({
  title: { margin: theme.spacing(2.5) },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: theme.spacing(1),
    width: "90%",
  },
}));

interface ContactForm {
  "first-name": string;
  "last-name": string;
  email: string;
  message: string;
}

const defaultData = { "first-name": "", "last-name": "", email: "", message: "Poke!" };

const PokeMePage = () => {
  const classes = useStyles();
  const [timeNow, setTimeNow] = React.useState<string>(getTimeString());
  const [formData, setFormData] = React.useState<ContactForm>(defaultData);

  React.useEffect(() => {
    setInterval(() => setTimeNow(getTimeString), 1000);
  }, []);

  const handleChange = (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [type]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(formData));
  };

  return (
    <StandardLayout>
      <Container maxWidth={"sm"}>
        <form autoComplete={"false"} className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h5" color="initial" className={classes.title}>
            Thanks for taking the time to poke me!
          </Typography>
          <TextField id="first-name" label="First Name" required className={classes.input} onChange={handleChange("first-name")} />
          <TextField id="last-name" label="Last Name" required className={classes.input} onChange={handleChange("last-name")} />
          <TextField id="email" label="Email" required className={classes.input} onChange={handleChange("email")} />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            className={classes.input}
            onChange={handleChange("message")}
          />
          <Typography variant="overline" color="initial">
            The time is {timeNow}
          </Typography>
          <Button variant="contained" type="submit" className={classes.input}>
            Poke Me!
          </Button>
        </form>
      </Container>
    </StandardLayout>
  );
};

export default PokeMePage;
