import { Item } from "@heydovetail/website/components/layout/Item";
import { storiesOf } from "@heydovetail/website/util/stories";
import * as React from "react";
import { FlexWrap } from "../";

storiesOf("Layout/FlexWrap", module).add("default", () => (
  <FlexWrap styled={{ gap: 32, maxChildWidth: 200 }}>
    <Item>
      <Slate>First</Slate>
    </Item>
    <Item>
      <Slate>Second</Slate>
    </Item>
  </FlexWrap>
));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
