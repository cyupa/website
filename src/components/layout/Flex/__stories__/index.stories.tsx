import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { Flex } from "../";
import { Item } from "../../Item";

storiesOf("Layout/Flex", module)
  .add("row", () => (
    <Flex layout="row">
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("row gap=10", () => (
    <Flex layout="row" gap={10}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("column", () => (
    <Flex layout="column">
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ))
  .add("column gap=10", () => (
    <Flex layout="column" gap={10}>
      <Item>
        <Slate>First</Slate>
      </Item>
      <Item>
        <Slate>Second</Slate>
      </Item>
    </Flex>
  ));

const Slate: React.StatelessComponent = ({ children }) => {
  return <div style={{ backgroundColor: "lightgrey" }}>{children}</div>;
};
