import { useEffect, useState } from "react";
import Code from "./Code";

const ContactInfo = () => {
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://meta.noxsios.net/")
      .then((res) => res.json())
      .then((json) => {
        setMeta(json);
        setLoading(false);
      })
      .catch((err) => {
        setMeta(["💀 He's dead Jim.", "Looks like the meta CloudFlare worker is down."]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Code className="language-bash" showLineNumbers={false}>
        {"curl -sL meta.noxsios.net | jq   "}
      </Code>
      {meta && !loading && (
        <Code className="language-json" showLineNumbers={false} copy={false}>
          {JSON.stringify(meta, null, 2)}
        </Code>
      )}
    </>
  );
};

export default ContactInfo;
