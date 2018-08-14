import { BREAKPOINT_TABLET, Flex, Item } from "@heydovetail/ui-components";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { ActionTextWithArrow } from "@heydovetail/website/components/util/ActionTextWithArrow";
import { Image } from "@heydovetail/website/components/util/Image";
import { HALF_GAP, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { LocationDescriptor, locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { extend, media } from "typestyle";
import { styled } from "typestyle-react";

const BREAKPOINT = BREAKPOINT_TABLET;
const GAP = "72px";

interface Props {
  color?: string;
  image: React.ReactNode | string;
  imagePosition?: "left" | "right";
  launched?: boolean;
  location?: LocationDescriptor;
  linkText?: string;
  text: string;
  title: string;
}

export class FeatureHero extends React.PureComponent<Props> {
  public render() {
    const {
      color,
      image,
      imagePosition = "right",
      launched = true,
      location,
      linkText = "Try free for 14 days",
      text,
      title
    } = this.props;
    return (
      <Wrapper styled={{ imagePosition }}>
        <Text styled={{ imagePosition }}>
          <Flex styled={{ gap: 24, layout: "column" }}>
            {launched === false ? (
              <Item>
                <Lozenge>Coming soon</Lozenge>
              </Item>
            ) : null}
            <Item>
              <h2>{title}</h2>
            </Item>
            <Item>
              <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
            </Item>
            <Item style={{ marginLeft: "-8px" }}>
              <ActionTextWithArrow
                color={color}
                location={location !== undefined ? location : locations.signUp()}
                text={linkText}
              />
            </Item>
          </Flex>
        </Text>
        <ImageWrapper>{typeof image === "string" ? <Image src={image} text={title} width="100%" /> : image}</ImageWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", ({ imagePosition }: { imagePosition: "left" | "right" }) =>
  extend(
    {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: imagePosition === "right" ? "row" : "row-reverse",
      padding: `${HALF_GAP}px 0`
    },
    media(
      { maxWidth: BREAKPOINT },
      {
        flexDirection: "column-reverse"
      }
    )
  )
);

const Text = styled("div", ({ imagePosition }: { imagePosition: "left" | "right" }) =>
  extend(
    {
      maxWidth: "360px",
      marginLeft: imagePosition === "left" ? GAP : undefined,
      marginRight: imagePosition === "right" ? GAP : undefined
    },
    media({ maxWidth: BREAKPOINT }, { margin: `${GAP} 0 0 0`, maxWidth: "100%" })
  )
);

const ImageWrapper = styled(
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
