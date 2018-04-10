import * as React from "react";
import { extend, media } from "typestyle";
import { BREAKPOINT_TABLET, COLORS } from "../../../constants";
import { styledViaProps } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { ActionTextWithArrow } from "../../util/ActionTextWithArrow";

const BREAKPOINT = BREAKPOINT_TABLET;
const GAP = "72px";

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
      <Wrapper imagePosition={imagePosition}>
        <Text imagePosition={imagePosition}>
          <Flex gap={24} layout="column">
            <Item>
              <h2>{title}</h2>
            </Item>
            <Item>
              <p style={{ color: COLORS.i60 }}>{text}</p>
            </Item>
            <Item>
              {location !== undefined ? (
                <a href={location}>
                  <ActionTextWithArrow />
                </a>
              ) : (
                <ActionTextWithArrow />
              )}
            </Item>
          </Flex>
        </Text>
        {image}
      </Wrapper>
    );
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ imagePosition }: { imagePosition: "left" | "right" }) => JSON.stringify({ imagePosition }),
  ({ imagePosition }) =>
    extend(
      {
        alignItems: "center",
        display: "flex",
        flexDirection: imagePosition === "right" ? "row" : "row-reverse"
      },
      media(
        { maxWidth: BREAKPOINT },
        {
          flexDirection: "column-reverse"
        }
      )
    )
);

const Text = styledViaProps(
  "div",
  ({ imagePosition }: { imagePosition: "left" | "right" }) => JSON.stringify({ imagePosition }),
  ({ imagePosition }) =>
    extend(
      {
        marginLeft: imagePosition === "left" ? GAP : undefined,
        marginRight: imagePosition === "right" ? GAP : undefined
      },
      media({ maxWidth: BREAKPOINT }, { margin: `${GAP} 0 0 0` })
    )
);
