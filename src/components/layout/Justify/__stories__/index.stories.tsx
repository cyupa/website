import { Item } from "dovetail/ui/layout/Item";
import { storiesOf } from "dovetail/util/stories";
import * as React from "react";
import { Justify } from "../";

storiesOf("Layout/Justify", module)
  .add("row", () => (
    <Justify layout="row">
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Justify>
  ))
  .add("column", () => (
    <Justify layout="column">
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
