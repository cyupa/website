import * as React from "react";
import { media } from "typestyle";
import { BREAKPOINT_TABLET, LIGHT_TEXT_OPACITY } from "../../../constants";
import { styled } from "../../../util/styled";
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
      <Wrapper>
        <Flex gap={8} layout="column">
          <Item>
            <Title>{title}</Title>
          </Item>
          <Item>
            <Text>{text}</Text>
          </Item>
        </Flex>
      </Wrapper>
    );
  }
}

const Wrapper = styled(
  "div",
  {
    textAlign: "center",
    padding: "24px"
  },
  media(
    { maxWidth: BREAKPOINT_TABLET },
    {
      textAlign: "left",
      padding: 0
    }
  )
);

const Title = styled("h4", {
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  margin: 0
});

const Text = styled("p", {
  fontSize: "14px",
  opacity: LIGHT_TEXT_OPACITY
});
