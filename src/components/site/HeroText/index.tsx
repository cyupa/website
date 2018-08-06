import { BREAKPOINT_PHABLET, COLORS, Flex, Item } from "@heydovetail/ui-components";
import React from "react";
import { extend, media } from "typestyle";
import { styled } from "typestyle-react";

interface Props {
  center?: boolean;
  maxWidth?: number;
  text?: string;
  title: React.ReactNode;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { center = true, maxWidth, title, text } = this.props;

    if (text !== undefined) {
      return (
        <Wrapper styled={{ center, maxWidth }}>
          <Flex styled={{ gap: 16, layout: "column" }}>
            <Item>
              <Heading>{title}</Heading>
            </Item>
            <Item>
              <Subheading>{text}</Subheading>
            </Item>
          </Flex>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper styled={{ center, maxWidth }}>
          <Heading>{title}</Heading>
        </Wrapper>
      );
    }
  }
}

const Wrapper = styled("div", ({ center, maxWidth }: { center: boolean; maxWidth?: number }) =>
  extend(
    {
      margin: center ? "0 auto 0" : "0",
      maxWidth: maxWidth,
      textAlign: center ? "center" : "left"
    },
    media(
      { maxWidth: BREAKPOINT_PHABLET },
      {
        textAlign: "left"
      }
    )
  )
);

const Heading = styled("h1", {
  margin: 0
});

const Subheading = styled("h2", {
  color: COLORS.i60,
  fontSize: 24,
  lineHeight: "32px",
  margin: 0
});
