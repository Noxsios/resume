import { useEffect, useState } from "react";
import { Prism } from "@mantine/prism";
import { Center, MediaQuery, Title } from "@mantine/core";
import { AiFillContacts } from "react-icons/ai";

const ContactAPI = () => {
  const [meta, setMeta] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://meta.razzle.cloud/")
      .then((res) => res.json())
      .then((json) => {
        setMeta(JSON.stringify(json, null, 2));
        setLoading(false);
      })
      .catch(() => {
        setMeta(JSON.stringify(["💀 He's dead Jim.", "Looks like the meta CloudFlare worker is down."], null, 2));
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Title order={2}>
        <Center inline>
          <AiFillContacts style={{ marginRight: "0.5rem" }} /> Contact
        </Center>
      </Title>
      <Center my="md">
        <Prism.Tabs position="center">
          <Prism.Tab
            sx={(theme) => ({
              // backgroundColor: theme.colors.gray[0],
              width: "16rem",
              // "&:active": {
              //   backgroundColor: theme.colors.gray[1],
              // },
            })}
            label="Linux/Mac"
            language="bash"
          >
            {"curl -sL meta.razzle.cloud"}
          </Prism.Tab>
          <Prism.Tab sx={{ width: "21rem" }} label="Windows" language="bash">
            {"irm meta.razzle.cloud | ConvertTo-Json"}
          </Prism.Tab>
        </Prism.Tabs>
      </Center>
      {meta && !loading && (
        <>
          <MediaQuery largerThan="md" styles={{ width: "50%", margin: "0 auto" }}>
            <Prism language="json" noCopy>
              {meta}
            </Prism>
          </MediaQuery>
        </>
      )}
    </>
  );
};

export default ContactAPI;

// TODO: style tabs
