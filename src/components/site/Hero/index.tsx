import { BREAKPOINT_TABLET, ButtonLink, COLORS, SmallText } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import React from "react";
import { styled } from "typestyle-react";
import { media } from "typestyle/lib";

interface Props {
  children?: React.ReactNode;
  // tslint:disable-next-line:no-any
  image: React.ReactElement<any> | string;
  showSignUp?: boolean;
  text?: string;
  title: string;
}

export class Hero extends React.PureComponent<Props> {
  public render() {
    const { children, image, showSignUp = true, text, title } = this.props;
    return (
      <Flex styled={{ gap: 32 }}>
        <Item style={{ flex: "0 1 464px" }}>
          <Flex styled={{ gap: 40, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: 24, layout: "column" }}>
                <Item>
                  <Heading>{title}</Heading>
                </Item>
                {text !== undefined ? (
                  <Item>
                    <p style={{ opacity: LIGHT_TEXT_OPACITY }}>{text}</p>
                  </Item>
                ) : null}
              </Flex>
            </Item>
            {children !== undefined ? <Item>{children}</Item> : null}
            {showSignUp ? (
              <Item>
                <Flow styled={{ gap: 24, rowGap: 24 }}>
                  <Item>
                    <ButtonLink color={COLORS.purple} location={locations.signUp()}>
                      Try now for free
                    </ButtonLink>
                  </Item>
                  <Item>
                    <SmallText>14 day free trial, no credit card required.</SmallText>
                  </Item>
                </Flow>
              </Item>
            ) : null}
          </Flex>
        </Item>
        <HeroImage>
          <Item>
            <Image>{typeof image === "string" ? <img src={image} width="100%" /> : image}</Image>
          </Item>
        </HeroImage>
      </Flex>
    );
  }
}

const Heading = styled("h1", {
  marginTop: "32px"
});

const Image = styled("div", {
  marginRight: "-280px"
});

const HeroImage = styled(
  "div",
  {},
  media(
    { maxWidth: BREAKPOINT_TABLET },
    {
      display: "none"
    }
  )
);
