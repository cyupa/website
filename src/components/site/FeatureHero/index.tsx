import * as React from "react";
import { BREAKPOINT_TABLET, COLORS } from "../../../constants";
import { Flex } from "../../layout/Flex";
import { Grid } from "../../layout/Grid";
import { Item } from "../../layout/Item";
import { ActionTextWithArrow } from "../../util/ActionTextWithArrow";
import { MediaToggle } from "../../util/MediaToggle";

interface Props {
  image: React.ReactNode;
  imagePosition?: "left" | "right";
  location?: string;
  text: string;
  title: string;
}

export class FeatureHero extends React.PureComponent<Props> {
  public render() {
    const { image, imagePosition = "right", location, text, title } = this.props;
    return (
      <MediaToggle
        breakpoint={BREAKPOINT_TABLET}
        narrow={<Grid alignItems="center" gap={72} gridTemplateColumns="1fr" justifyItems="center" />}
        wide={<Grid alignItems="center" gap={72} gridTemplateColumns="1fr 1fr" justifyItems="center" />}
      >
        {imagePosition === "left" ? image : null}
        <Flex gap={24} layout="column">
          <Item style={{ flexGrow: 0 }}>
            <h2>{title}</h2>
          </Item>
          <Item style={{ flexGrow: 0 }}>
            <p style={{ color: COLORS.i60 }}>{text}</p>
          </Item>
          <Item style={{ flexGrow: 0 }}>
            {location !== undefined ? (
              <a href={location}>
                <ActionTextWithArrow />
              </a>
            ) : (
              <ActionTextWithArrow />
            )}
          </Item>
        </Flex>
        {imagePosition === "right" ? image : null}
      </MediaToggle>
    );
  }
}
