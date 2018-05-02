import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { FeatureProps } from "../Feature";

export class FeatureLarge extends React.PureComponent<FeatureProps> {
  public render() {
    const { text, title } = this.props;
    return (
      <Flex styled={{ gap: 8, layout: "column" }}>
        <Item>
          <h3>{title}</h3>
        </Item>
        <Item>
          <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
        </Item>
      </Flex>
    );
  }
}
