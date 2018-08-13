import { BREAKPOINT_PHONE, BREAKPOINT_TABLET, Flex, Item } from "@heydovetail/ui-components";
import React from "react";
import { extend, media } from "typestyle";
import { styled } from "typestyle-react";
import { HeroText } from "./HeroText";
import { SignUpButton } from "./SignUpButton";

interface Props {
  center?: boolean;
  image?: React.ReactNode | string;
  maxTextWidth?: number;
  showSignUp?: boolean;
  text?: React.ReactNode | string;
  subtitle?: string;
  title: string;
}

export class Hero extends React.PureComponent<Props> {
  public render() {
    const { center = false, image, maxTextWidth, showSignUp = false, subtitle, text, title } = this.props;

    return (
      <Wrapper styled={{ center }}>
        <Left styled={{ maxTextWidth }}>
          <Flex styled={{ gap: 32, layout: "column" }}>
            <Item>
              <HeroText subtitle={subtitle} text={text} title={title} />
            </Item>
            {showSignUp ? (
              <Item>
                <SignUpButton />
              </Item>
            ) : null}
          </Flex>
        </Left>
        {image !== undefined ? (
          <Right>
            <Item>
              <Image>{typeof image === "string" ? <img src={image} width="100%" /> : image}</Image>
            </Item>
          </Right>
        ) : null}
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", ({ center }: { center: boolean }) =>
  extend(
    {
      display: "flex",
      flexDirection: "row",
      textAlign: center ? "center" : undefined
    },
    media(
      { maxWidth: BREAKPOINT_PHONE },
      {
        textAlign: "left"
      }
    )
  )
);

const Left = styled("div", ({ maxTextWidth }: { maxTextWidth?: number }) => ({
  flex: maxTextWidth !== undefined ? `0 1 ${maxTextWidth}px` : "1 1 auto"
}));

const Right = styled(
  "div",
  {
    marginLeft: 48
  },
  media(
    { maxWidth: BREAKPOINT_TABLET },
    {
      display: "none"
    }
  )
);

const Image = styled("div", {
  marginRight: "-280px"
});
