import * as React from "react";
import { Center } from "../components/layout/Center";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Item } from "../components/layout/Item";
import { Header } from "../components/site/Header";
import { HeroTextOnly } from "../components/site/HeroTextOnly";
import { SignupWithEmail } from "../components/site/SignupWithEmail";
import { UseCases } from "../components/site/UseCases";
import { TYPICAL_PAGE_WIDTH } from "../constants";
import "../globalstyles";

export default class extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header />
        <Container maxWidth={TYPICAL_PAGE_WIDTH}>
          <Flex gap={128} layout="column">
            <Item>
              <Flex gap={32} layout="column">
                <Item>
                  <HeroTextOnly>Customer feedback &amp; research software for teams.</HeroTextOnly>
                </Item>
                <Item>
                  <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
                    <Center>
                      <SignupWithEmail />
                    </Center>
                  </Container>
                </Item>
              </Flex>
            </Item>
            <Item>
              <UseCases />
            </Item>
          </Flex>
        </Container>
      </div>
    );
  }
}
