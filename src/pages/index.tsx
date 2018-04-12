import * as React from "react";
import IllustrationBarChart from "../components/illustrations/IllustrationBarChart";
import IllustrationBoard from "../components/illustrations/IllustrationBoard";
import IllustrationLineChart from "../components/illustrations/IllustrationLineChart";
import IllustrationTeam from "../components/illustrations/IllustrationTeam";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Item } from "../components/layout/Item";
import { FeatureHero } from "../components/site/FeatureHero";
import { HeroText } from "../components/site/HeroText";
import { LightContainer } from "../components/site/LightContainer";
import { SignupWithEmail } from "../components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../constants";
import { locations } from "../routing/locations";
import { CenteredSignUp } from "../sections/CenteredSignUp";
import { SocialProof } from "../sections/SocialProof";
import { UseCases } from "../sections/UseCases";

export default class extends React.PureComponent {
  public render() {
    return (
      <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <Flex gap={32} layout="column">
              <Item>
                <HeroText title="Customer feedback &amp; research software for teams." />
              </Item>
              <Item>
                <Container maxWidth={TYPICAL_PAGE_WIDTH / 2}>
                  <SignupWithEmail />
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
              location={locations.customerFeedback()}
              linkText="Learn more"
              text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
              title="Understand your customer feedback."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBoard />}
              imagePosition="left"
              location={locations.researchRepository()}
              linkText="Learn more"
              text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
              title="Keep all of your research in one place."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBarChart />}
              imagePosition="right"
              location={locations.qualitativeDataAnalysis()}
              linkText="Learn more"
              text="Use intuitive analysis tools to identify recurring themes and insights across qualitative data like text, audio, and video."
              title="Analyze qualitative data and uncover insights."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationTeam />}
              imagePosition="left"
              location={locations.userResearch()}
              linkText="Learn more"
              text="Invite as many people as you like to join projects, browse feedback, collaborate on analysis, and consume insights."
              title="Get everyone onboard."
            />
          </Item>
          <Item>
            <SocialProof />
          </Item>
          <Item>
            <CenteredSignUp />
          </Item>
        </Flex>
      </LightContainer>
    );
  }
}
