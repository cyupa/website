import * as React from "react";
import { LIGHT_TEXT_OPACITY } from "../../../constants";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { FeatureProps } from "../Feature";

export class FeatureLarge extends React.PureComponent<FeatureProps> {
  public render() {
    const { text, title } = this.props;
    return (
      <Flex gap={8} layout="column">
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
