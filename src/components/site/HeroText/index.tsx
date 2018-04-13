import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { BREAKPOINT_PHABLET, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";
import { extend, media } from "typestyle/lib";

interface Props {
  center?: boolean;
  maxWidth?: number;
  text?: string;
  title: string;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { center = true, maxWidth, title, text } = this.props;

    if (text !== undefined) {
      return (
        <Wrapper center={center} maxWidth={maxWidth}>
          <Flex gap={24} layout="column">
            <Item>
              <h1>{title}</h1>
            </Item>
            <Item>
              <p style={{ opacity: LIGHT_TEXT_OPACITY, maxWidth: maxWidth, textAlign: center ? "center" : "left" }}>{text}</p>
            </Item>
          </Flex>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper center={center} maxWidth={maxWidth}>
          <h1>{title}</h1>
        </Wrapper>
      );
    }
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ center, maxWidth }: { center: boolean; maxWidth?: number }) => JSON.stringify({ center, maxWidth }),
  ({ center, maxWidth }) =>
    extend(
      {
        marginTop: "32px",
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
