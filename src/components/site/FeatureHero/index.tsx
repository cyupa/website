import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { ActionTextWithArrow } from "@heydovetail/website/components/util/ActionTextWithArrow";
import { BREAKPOINT_TABLET, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { LocationDescriptor, locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { extend, media } from "typestyle";
import { styled } from "typestyle-react";

const BREAKPOINT = BREAKPOINT_TABLET;
const GAP = "72px";

interface Props {
  // tslint:disable-next-line:no-any
  image: React.ReactElement<any> | string;
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
              <ActionTextWithArrow location={location !== undefined ? location : locations.signUp()} text={linkText} />
            </Item>
          </Flex>
        </Text>
        <Image>{typeof image === "string" ? <img src={image} width="100%" /> : image}</Image>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", ({ imagePosition }: { imagePosition: "left" | "right" }) =>
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
