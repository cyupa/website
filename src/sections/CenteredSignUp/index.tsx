import * as React from "react";
import { Center } from "../../components/layout/Center";
import { Container } from "../../components/layout/Container";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { SignupWithEmail } from "../../components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";

export class CenteredSignUp extends React.PureComponent {
  public render() {
    return (
      <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
        <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
          <Item>
            <Center>
              <h2>Start a 14 day free trial</h2>
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
