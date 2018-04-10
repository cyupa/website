import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Center } from "../../layout/Center";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

export interface FeatureProps {
  text: string;
  title: string;
}

export class Feature extends React.PureComponent<FeatureProps> {
  public render() {
    const { text, title } = this.props;
    return (
      <Center>
        <Flex gap={8} layout="column">
          <Item>
            <Title>{title}</Title>
          </Item>
          <Item>
            <Text>{text}</Text>
          </Item>
        </Flex>
      </Center>
    );
  }
}

const Title = styled("h4", {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  margin: 0
});

const Text = styled("p", {
  color: COLORS.i60,
  fontSize: "14px"
});
