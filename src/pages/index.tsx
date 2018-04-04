import * as React from "react";
import { Center } from "../components/layout/Center";
import { Container } from "../components/layout/Container";
import { Header } from "../components/site/Header";
import { HeroTextOnly } from "../components/site/HeroTextOnly";
import { SignupWithEmail } from "../components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH } from "../constants";
import "../globalstyles";

export default class extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header />
        <Container maxWidth={TYPICAL_PAGE_WIDTH}>
          <HeroTextOnly>Customer feedback &amp; research software for teams.</HeroTextOnly>
          <Container maxWidth={TYPICAL_PAGE_WIDTH / 3}>
            <Center>
              <SignupWithEmail />
            </Center>
          </Container>
        </Container>
      </div>
    );
  }
}
