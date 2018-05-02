import { Item } from "@heydovetail/website/components/layout/Item";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { Justify } from "../";

storiesOf("Layout/Justify", module)
  .add("row", () => (
    <Justify styled={{ layout: "row" }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Justify>
  ))
  .add("column", () => (
    <Justify styled={{ layout: "column" }}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Justify>
  ));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
