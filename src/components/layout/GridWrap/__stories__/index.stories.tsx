import * as React from "react";
import { storiesOf } from "src/util/stories";
import { GridWrap } from "../";
import { Item } from "../../Item";

storiesOf("Layout/GridWrap", module).add("default", () => (
  <GridWrap gap={32} childMaxWidth={200}>
    <Item>
      <Slate>First</Slate>
    </Item>
    <Item>
      <Slate>Second</Slate>
    </Item>
  </GridWrap>
));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
