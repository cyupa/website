import * as React from "react";
import { COLORS } from "../../../constants";
import { Center } from "../../layout/Center";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

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
          <p style={{ color: COLORS.i60 }}>{text}</p>
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
