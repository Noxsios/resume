import { Container } from "@mantine/core";
import { Document, Page, Link, Text, View, StyleSheet, Font, PDFViewer } from "@react-pdf/renderer";
import { useViewportSize } from "@mantine/hooks";
import dynamic from "next/dynamic";
import React from "react";

Font.register({
  family: "FiraCode",
  src: "/_next/static/media/fira-code-all-400-normal.ff4f17f7.woff",
});

Font.register({
  family: "Crimson",
  src: "/_next/static/media/crimson-text-all-400-normal.6b8582bb.woff",
  fontWeight: 400,
});

Font.register({
  family: "CrimsonItalic",
  src: "/_next/static/media/crimson-text-all-400-italic.a8ec9b42.woff",
  fontWeight: 400,
});

Font.register({
  family: "CrimsonBold",
  src: "/_next/static/media/crimson-text-all-600-normal.2f3e0bf7.woff",
  fontWeight: 600,
});

const ss = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Crimson",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "CrimsonBold",
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
    fontFamily: "Crimson",
    color: "black",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  italic: {
    fontFamily: "CrimsonItalic",
  },
  tree: {
    fontFamily: "FiraCode",
    fontSize: 10,
    color: "darkgray",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    textAlign: "right",
  },
  unstyledlink: {
    textDecoration: "none",
    color: "black",
    fontSize: 12,
    fontFamily: "FiraCode",
  },
  bold: {
    fontFamily: "CrimsonBold",
  },
  header: {
    fontSize: 12,
  },
  sectionTitle: {
    textTransform: "uppercase",
    // borderBottom: "1px solid black",
    width: "100%",
    fontFamily: "CrimsonBold",
    fontSize: 14,
    marginLeft: 8,
  },
});

const bullets = [
  {
    title: "umgc",
    subtitle: "bachelors",
    location: "adelphi",
    timeframe: "now",
  },
];

// <View style={{ display: "flex", flexDirection: "row" }}>
//   <Text style={{ flex: 1 }}>{props.title}</Text>
//   <Text style={{ flex: 1, textAlign: "right" }}>{props.location}</Text>
// </View>
// <View style={{ display: "flex", flexDirection: "row" }}>
//   <Text style={{ flex: 1 }}>{props.subtitle}</Text>
//   <Text style={[ss.timeframe, { flex: 1, textAlign: "right" }]}>{props.timeframe}</Text>
// </View>

const PDFPage = () => {
  const { height, width } = useViewportSize();
  //   console.log(height, width);
  return (
    <Container style={{ width: width * 0.95, height: height * 0.95, marginTop: "2rem", background: "none" }}>
      <PDFViewer showToolbar={true} width={"100%"} height={"100%"}>
        <Document
          title={`harry-randazzo-${new Date().toLocaleDateString().replaceAll("/", "-")}.pdf`}
          author="Harry Randazzo"
          keywords="resume razzle software engineer"
          creator="razzle"
          language="EN-US"
        >
          <Page style={ss.body}>
            <View style={ss.header}>
              <View style={ss.spaceBetween}>
                <Text style={[ss.left, ss.bold, { fontSize: 18, lineHeight: 1.1 }]}>Harry Randazzo</Text>
                <Text style={[ss.right]}>
                  Email:{" "}
                  <Link src="mailto:harry@razzle.cloud" style={ss.unstyledlink}>
                    harry@razzle.cloud
                  </Link>
                </Text>
              </View>
              <View style={ss.spaceBetween}>
                <Link src="https://razzle.cloud" style={[ss.left, ss.unstyledlink]}>
                  https://razzle.cloud
                </Link>
                <Text style={ss.right}>Mobile: +1-213-986-8048</Text>
              </View>
            </View>

            <View style={{ flexDirection: "column", margin: 0, padding: 0, lineHeight: 1 }}>
              <Text style={ss.tree}>.</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={ss.tree}>├──</Text>
                <Text style={ss.sectionTitle}>education</Text>
              </View>

              <Text style={ss.tree}>
                │{"   "}├──<Text style={ss.text}>Bachelor of Science in Computer Networks & Cybersecurity</Text>
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Container>
  );
};

// /run/media/razzle/Windows/bin/resume-1/resume.pdf

// tee, floor, box,

//react-pdf.org/fonts

// <Text>&rarr; hihihihhihhihihhihi</Text>
// <Text>&rsaquo; 111111111111111 </Text>
// <Text>&middot; 222222222222222 </Text>
// <Text>&middot; 222222222222222 </Text>
// <Text>&bull; 222222222222222 </Text>

export default dynamic(() => Promise.resolve(PDFPage), {
  ssr: false,
});
