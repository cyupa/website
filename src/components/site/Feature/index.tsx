import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { BREAKPOINT_TABLET, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { media } from "typestyle";

export interface FeatureProps {
  launched?: boolean;
  text: string;
  title: string;
}

export class Feature extends React.PureComponent<FeatureProps> {
  public render() {
    const { launched = true, text, title } = this.props;
    return (
      <Wrapper>
        <Flex gap={8} layout="column">
          <Item>
            <Title>{title}</Title>
          </Item>
          <Item>
            <Text>{text}</Text>
          </Item>
          {launched === false ? (
            <Item>
              <Lozenge>Coming soon</Lozenge>
            </Item>
          ) : null}
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
