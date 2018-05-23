import { BREAKPOINT_TABLET } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { media } from "typestyle";
import { styled } from "typestyle-react";

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
        <Flex styled={{ gap: 8, layout: "column" }}>
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
