import { BREAKPOINT_PHABLET, Flex, Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { HALF_GAP, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";
import { extend, media } from "typestyle/lib";

interface Props {
  center?: boolean;
  image: React.ReactNode | string;
  text: string;
  title: string;
}

export class FeatureHeroLarge extends React.PureComponent<Props> {
  public render() {
    const { center = true, image, text, title } = this.props;

    const content = (
      <Wrapper styled={{ center }}>
        <Flex styled={{ gap: 24, layout: "column" }}>
          <Item>
            <h2>{title}</h2>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
          </Item>
          <Item>{typeof image === "string" ? <img src={image} width="100%" /> : image}</Item>
        </Flex>
      </Wrapper>
    );

    if (center) {
      return <Center>{content}</Center>;
    } else {
      return content;
    }
  }
}

const Wrapper = styled("div", ({ center }: { center: boolean }) =>
  extend(
    {
      padding: `${HALF_GAP}px 0`,
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
