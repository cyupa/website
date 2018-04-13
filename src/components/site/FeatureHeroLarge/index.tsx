import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { BREAKPOINT_PHABLET, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";
import { extend, media } from "typestyle/lib";

interface Props {
  center?: boolean;
  image: React.ReactNode;
  text: string;
  title: string;
}

export class FeatureHeroLarge extends React.PureComponent<Props> {
  public render() {
    const { center = true, image, text, title } = this.props;

    const content = (
      <Wrapper center={center}>
        <Flex gap={24} layout="column">
          <Item>
            <h2>{title}</h2>
          </Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
          </Item>
          <Item>{image}</Item>
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

const Wrapper = styledViaProps(
  "div",
  ({ center }: { center: boolean }) => JSON.stringify({ center }),
  ({ center }) =>
    extend(
      {
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
