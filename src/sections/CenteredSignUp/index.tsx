import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { SignupWithEmail } from "@heydovetail/website/components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import * as React from "react";

export class CenteredSignUp extends React.PureComponent {
  public render() {
    return (
      <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
        <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
          <Item>
            <Center>
              <h2>Start a free trial</h2>
            </Center>
          </Item>
          <Item>
            <SignupWithEmail />
          </Item>
        </Flex>
      </Container>
    );
  }
}
