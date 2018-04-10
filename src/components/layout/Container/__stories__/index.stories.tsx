import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Container } from "../";

storiesOf("Layout/Container", module)
  .add("default", () => (
    <Container>
      <Box>Content</Box>
    </Container>
  ))
  .add("with custom padding", () => (
    <Container verticalPadding={64} horizontalPadding={64}>
      <Box>Content</Box>
    </Container>
  ))
  .add("with custom max width", () => (
    <Container maxWidth={832}>
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
