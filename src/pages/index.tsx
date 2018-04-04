import * as React from "react";
import IllustrationBoard from "../components/illustrations/IllustrationBoard";
import IllustrationLineChart from "../components/illustrations/IllustrationLineChart";
import { Center } from "../components/layout/Center";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Item } from "../components/layout/Item";
import { FeatureHero } from "../components/site/FeatureHero";
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
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={48}>
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
            <Item>
              <FeatureHero
                image={<IllustrationLineChart />}
                location="/product/customer-feedback"
                text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
                title="Understand your customer feedback."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationBoard />}
                imagePosition="left"
                location="/product/research-repository"
                text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
                title="Keep all of your research in one place."
              />
            </Item>
          </Flex>
        </Container>
      </div>
    );
  }
}
