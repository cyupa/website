import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Container } from "../";

storiesOf("Layout/Container", module)
  .add("default", () => (
    <Container>
      <Box>Content</Box>
    </Container>
  ))
  .add("with custom padding", () => (
    <Container styled={{ padding: { x: 64, y: 64 } }}>
      <Box>Content</Box>
    </Container>
  ))
  .add("with custom max width", () => (
    <Container styled={{ maxWidth: 832 }}>
      <Box>Content</Box>
    </Container>
  ));

const Box: React.StatelessComponent = ({ children }) => (
  <span
    style={{
      backgroundColor: "lightgrey",
      display: "inline-block",
      height: 30,
      width: "100%"
    }}
  >
    {children}
  </span>
);
