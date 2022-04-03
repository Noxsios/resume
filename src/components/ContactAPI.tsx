import { useEffect, useState } from "react";
import { Prism } from "@mantine/prism";
import { Center, Title, Divider } from "@mantine/core";

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
      <Title order={4}>{"👉"} Contact</Title>
      <Divider />
      <Center my="md">
        <Prism.Tabs position="center">
          <Prism.Tab sx={{ width: "16.5rem" }} label="Linux/Mac" language="bash">
            {"curl -sL meta.razzle.cloud"}
          </Prism.Tab>
          <Prism.Tab sx={{ width: "22rem" }} label="Windows" language="bash">
            {"irm meta.razzle.cloud | ConvertTo-Json"}
          </Prism.Tab>
        </Prism.Tabs>
      </Center>
      {meta && !loading && (
        <Prism sx={{ width: "75%", margin: "0 auto" }} language="json" noCopy>
          {meta}
        </Prism>
      )}
    </>
  );
};

export default ContactAPI;

// TODO: style tabs
