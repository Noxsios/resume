import * as React from "react";
import { Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

const styles = {
  root: {
    marginTop: "10%",
  },
  title: { margin: 2.5 },
  input: {
    margin: 1,
    width: "90%",
  },
};

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

interface ContactForm {
  "first-name": string;
  "last-name": string;
  email: string;
  message: string;
}

const defaultData = { "first-name": "", "last-name": "", email: "", message: "Poke!" };

const PokeMePage = () => {
  const now = new Date();
  const timeNow = now.toLocaleTimeString();
  const [formData, setFormData] = React.useState<ContactForm>(defaultData);

  const handleChange = (type: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [type]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify({ ...formData, time: now }));
  };

  return (
    <Container maxWidth={"sm"} sx={styles.root}>
      <Form autoComplete={"false"} onSubmit={handleSubmit}>
        <Typography variant="h5" color="primary" sx={styles.title}>
          Thanks for taking the time to poke me!
        </Typography>
        <TextField id="first-name" label="First Name" sx={styles.input} required onChange={handleChange("first-name")} />
        <TextField id="last-name" label="Last Name" sx={styles.input} required onChange={handleChange("last-name")} />
        <TextField id="email" label="Email" sx={styles.input} required onChange={handleChange("email")} />
        <TextField id="message" label="Message" sx={styles.input} variant="outlined" multiline rows={4} onChange={handleChange("message")} />
        <Typography variant="overline">The time is {timeNow}</Typography>
        <Button variant="contained" type="submit">
          Poke Me!
        </Button>
      </Form>
    </Container>
  );
};

export default PokeMePage;
