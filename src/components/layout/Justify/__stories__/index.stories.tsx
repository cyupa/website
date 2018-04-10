import * as React from "react";
import { storiesOf } from "src/util/stories";
import { Justify } from "../";
import { Item } from "../../Item";

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
