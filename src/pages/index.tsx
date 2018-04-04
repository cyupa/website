import * as React from "react";
import IllustrationBarChart from "../components/illustrations/IllustrationBarChart";
import IllustrationBoard from "../components/illustrations/IllustrationBoard";
import IllustrationLineChart from "../components/illustrations/IllustrationLineChart";
import IllustrationTeam from "../components/illustrations/IllustrationTeam";
import { Center } from "../components/layout/Center";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Item } from "../components/layout/Item";
import { FeatureHero } from "../components/site/FeatureHero";
import { Header } from "../components/site/Header";
import { SignupWithEmail } from "../components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../constants";
import "../globalstyles";
import { SocialProof } from "../sections/SocialProof";
import { UseCases } from "../sections/UseCases";

export default class extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header />
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={48}>
          <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
            <Item>
              <Flex gap={32} layout="column">
                <Item>
                  <Center>
                    <h1>Customer feedback &amp; research software for teams.</h1>
                  </Center>
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
                imagePosition="right"
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
            <Item>
              <FeatureHero
                image={<IllustrationBarChart />}
                imagePosition="right"
                location="/product/qda"
                text="Use intuitive analysis tools to identify recurring themes and insights across qualitative data like text, audio, and video."
                title="Analyze qualitative data and uncover insights."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationTeam />}
                imagePosition="left"
                location="/product/user-research"
                text="Invite as many people as you like to join projects, browse feedback, collaborate on analysis, and consume insights."
                title="Get everyone onboard."
              />
            </Item>
            <Item>
              <SocialProof />
            </Item>
          </Flex>
        </Container>
      </div>
    );
  }
}
