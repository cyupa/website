import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { SignupWithEmail } from "@heydovetail/website/components/site/SignupWithEmail";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";

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
              image={<IllustrationLineChart size="100%" />}
              imagePosition="right"
              location={locations.customerFeedback()}
              linkText="Learn more"
              text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
              title="Understand your customer feedback."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBoard size="100%" />}
              imagePosition="left"
              location={locations.researchRepository()}
              linkText="Learn more"
              text="Save notes, transcripts, and files in one place. Organize everything with projects & boards, and use simple analysis tools to find insights."
              title="Keep all of your research in one place."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationBarChart size="100%" />}
              imagePosition="right"
              location={locations.qualitativeDataAnalysis()}
              linkText="Learn more"
              text="Use intuitive analysis tools to identify recurring themes and insights across qualitative data like text, audio, and video."
              title="Analyze qualitative data and uncover insights."
            />
          </Item>
          <Item>
            <FeatureHero
              image={<IllustrationTeam size="100%" />}
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
