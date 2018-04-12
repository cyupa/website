import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
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
