import { Center } from "@heydovetail/website/components/layout/Center";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import * as React from "react";

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
      <Flex gap={24} layout="column">
        <Item>
          <h2>{title}</h2>
        </Item>
        <Item>
          <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
        </Item>
        <Item>{image}</Item>
      </Flex>
    );

    if (center) {
      return <Center>{content}</Center>;
    } else {
      return content;
    }
  }
}
