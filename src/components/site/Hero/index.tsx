import { Button } from "@heydovetail/website/components/forms/Button";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Flow } from "@heydovetail/website/components/layout/Flow";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SmallText } from "@heydovetail/website/components/util/SmallText";
import { BREAKPOINT_TABLET, COLORS } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { media } from "typestyle/lib";

interface Props {
  children?: React.ReactNode;
  image: React.ReactNode;
  showSignUp?: boolean;
  title: string;
}

export class Hero extends React.PureComponent<Props> {
  public render() {
    const { children, image, showSignUp = true, title } = this.props;
    return (
      <Flex gap={32}>
        <Item style={{ flex: "0 1 464px" }}>
          <Flex gap={40} layout="column">
            <Item>
              <Heading>
                <h1>{title}</h1>
              </Heading>
            </Item>
            {children !== undefined ? <Item>{children}</Item> : null}
            {showSignUp ? (
              <Item>
                <Flow gap={24} rowGap={24}>
                  <Item>
                    <Button color={COLORS.purple} onClick={() => {}}>
                      Try now for free
                    </Button>
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
            <Image>{image}</Image>
          </Item>
        </HeroImage>
      </Flex>
    );
  }
}

const Heading = styled("div", {
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
