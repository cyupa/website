import { COLORS, Flex, Item } from "@heydovetail/ui-components";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { SignupWithEmail } from "@heydovetail/website/components/site/SignupWithEmail";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import React from "react";

interface Props {
  dark?: boolean;
}

export class CenteredSignUp extends React.PureComponent<Props> {
  public render() {
    const { dark = false } = this.props;

    return (
      <Container styled={{ maxWidth: WIDTH / 2, padding: { x: PADDING, y: HALF_GAP } }}>
        <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
          <Item>
            <Center>
              <h2>Start a free trial</h2>
            </Center>
          </Item>
          <Item>
            <SignupWithEmail buttonColor={dark ? COLORS.p80 : undefined} shade={dark ? "light" : undefined} />
          </Item>
        </Flex>
      </Container>
    );
  }
}
