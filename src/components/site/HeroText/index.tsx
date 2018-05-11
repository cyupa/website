import { BREAKPOINT_PHABLET } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";
import { extend, media } from "typestyle/lib";

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
          <Flex styled={{ gap: 24, layout: "column" }}>
            <Item>
              <h1>{title}</h1>
            </Item>
            <Item>
              <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
            </Item>
          </Flex>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper styled={{ center, maxWidth }}>
          <h1>{title}</h1>
        </Wrapper>
      );
    }
  }
}

const Wrapper = styled("div", ({ center, maxWidth }: { center: boolean; maxWidth?: number }) =>
  extend(
    {
      margin: center ? "32px auto 0" : "32px 0 0",
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
