import { COLORS, Flex, Item } from "@heydovetail/ui-components";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  text?: React.ReactNode | string;
  subtitle?: string;
  title: string;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { subtitle, title, text } = this.props;

    return (
      <>
        <Flex styled={{ gap: 16, layout: "column" }}>
          <Item>
            <Title>{title}</Title>
          </Item>
          {subtitle !== undefined ? (
            <Item>
              <Subtitle>{subtitle}</Subtitle>
            </Item>
          ) : null}
          {text !== undefined ? (
            <Item>
              <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
            </Item>
          ) : null}
        </Flex>
      </>
    );
  }
}

const Title = styled("h1", {
  margin: 0
});

const Subtitle = styled("h2", {
  color: COLORS.i60,
  fontSize: 24,
  lineHeight: "32px",
  margin: 0
});
