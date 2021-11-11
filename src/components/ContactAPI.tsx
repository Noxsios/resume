import { useEffect, useState } from "react";
import Code from "./Code";
import { Tab, Box, Typography, Divider } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";

const ContactAPI = () => {
  const [meta, setMeta] = useState<string>("");
  const [value, setValue] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://meta.razzle.cloud/")
      .then((res) => res.json())
      .then((json) => {
        setMeta(JSON.stringify(json, null, 2));
        setLoading(false);
      })
      .catch((err) => {
        setMeta(JSON.stringify(["💀 He's dead Jim.", "Looks like the meta CloudFlare worker is down."], null, 2));
        setLoading(false);
      });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h4" color="primary">
        {"<"}Contact {"/>"}
      </Typography>
      <Divider sx={{ mb: "0.35em" }} />
      <Box sx={{ typography: "body1", display: "flex", alignItems: "center", flexDirection: "column", p: 0 }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="meta CLI query command" sx={{ justifyContent: "space-evenly" }}>
            <Tab label="Linux/Mac" value="1" />
            <Tab label="Windows" value="2" />
          </TabList>
          <TabPanel value="1" sx={{ p: 0 }}>
            <Code className="language-bash" showLineNumbers={false}>
              {"curl -sL meta.razzle.cloud"}
            </Code>
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <Code className="language-powershell" showLineNumbers={false}>
              {"irm meta.razzle.cloud | ConvertTo-Json"}
            </Code>
          </TabPanel>
        </TabContext>
      </Box>
      {meta && !loading && (
        <Code className="language-json" showLineNumbers={false} copy={false}>
          {meta}
        </Code>
      )}
    </>
  );
};

export default ContactAPI;
