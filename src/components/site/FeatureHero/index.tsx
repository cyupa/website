import * as React from "react";
import { extend, media } from "typestyle";
import { BREAKPOINT_TABLET, LIGHT_TEXT_OPACITY } from "../../../constants";
import { LocationDescriptor, locations } from "../../../routing/locations";
import { styled, styledViaProps } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { ActionTextWithArrow } from "../../util/ActionTextWithArrow";

const BREAKPOINT = BREAKPOINT_TABLET;
const GAP = "72px";

interface Props {
  image: React.ReactNode;
  imagePosition?: "left" | "right";
  location?: LocationDescriptor;
  linkText?: string;
  text: string;
  title: string;
}

export class FeatureHero extends React.PureComponent<Props> {
  public render() {
    const { image, imagePosition = "right", location, linkText = "Try free for 14 days", text, title } = this.props;
    return (
      <Wrapper imagePosition={imagePosition}>
        <Text imagePosition={imagePosition}>
          <Flex gap={24} layout="column">
            <Item>
              <h2>{title}</h2>
            </Item>
            <Item>
              <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
            </Item>
            <Item style={{ marginLeft: "-8px" }}>
              <ActionTextWithArrow location={location !== undefined ? location : locations.signUp()} text={linkText} />
            </Item>
          </Flex>
        </Text>
        <Image>{image}</Image>
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
        maxWidth: "360px",
        marginLeft: imagePosition === "left" ? GAP : undefined,
        marginRight: imagePosition === "right" ? GAP : undefined
      },
      media({ maxWidth: BREAKPOINT }, { margin: `${GAP} 0 0 0`, maxWidth: "100%" })
    )
);

const Image = styled(
  "div",
  {
    minWidth: "400px"
  },
  media(
    { maxWidth: BREAKPOINT },
    {
      minWidth: "100%"
    }
  )
);
