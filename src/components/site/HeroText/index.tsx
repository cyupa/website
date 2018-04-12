import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import * as React from "react";

interface Props {
  center?: boolean;
  maxWidth?: number;
  text?: string;
  title: string;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { center = true, maxWidth, title, text } = this.props;
    const h1 = <h1 style={{ marginTop: "32px", maxWidth: maxWidth, textAlign: center ? "center" : "left" }}>{title}</h1>;

    if (text !== undefined) {
      return (
        <Flex gap={24} layout="column">
          <Item>{h1}</Item>
          <Item>
            <p style={{ opacity: LIGHT_TEXT_OPACITY, maxWidth: maxWidth, textAlign: center ? "center" : "left" }}>{text}</p>
          </Item>
        </Flex>
      );
    } else {
      return h1;
    }
  }
}
