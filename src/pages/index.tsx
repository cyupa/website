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
import { HALF_GAP, TESTIMONIALS, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Customer feedback &amp; research platform for teams — Dovetail</title>
          <meta property="og:title" content="Customer feedback &amp; research platform for teams — Dovetail" />
          <meta name="description" content="Dovetail is a SaaS customer feedback and user research platform for teams." />
          <meta
            property="og:description"
            content="Dovetail is a SaaS customer feedback and user research platform for teams."
          />
        </Helmet>
        <LightContainer maxWidth={WIDTH}>
          <Flex gap={VERTICAL_GAP} layout="column">
            <Item>
              <Flex gap={HALF_GAP} layout="column">
                <Item>
                  <HeroText title="Customer feedback &amp; research platform for teams." />
                </Item>
                <Item>
                  <Container maxWidth={WIDTH / 2} padding={{ x: 0, y: 0 }}>
                    <SignupWithEmail />
                  </Container>
                </Item>
                <Item>
                  <UseCases />
                </Item>
              </Flex>
            </Item>
            <Item>
              <CustomerLogos />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationLineChart size="100%" />}
                imagePosition="right"
                location={locations.feedbackManagement()}
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
                text="Save notes and transcripts in one place. Organize everything with projects &amp; boards, and uncover insights through analysis."
                title="Keep all of your research in one place."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationBarChart size="100%" />}
                imagePosition="right"
                location={locations.qualitativeDataAnalysis()}
                linkText="Learn more"
                text="Use intuitive analysis tools to identify recurring themes and insights across qualitative textual data, with audio and video coming soon."
                title="Analyze qualitative data and uncover insights."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationTeam size="100%" />}
                imagePosition="left"
                location={locations.userResearch()}
                linkText="Learn more"
                text="Invite as many people as you like to browse feedback &amp; research, collaborate on analysis, and consume insights."
                title="Get everyone onboard."
              />
            </Item>
            <Item>
              <SocialProof
                testimonials={[
                  TESTIMONIALS.abhilash,
                  TESTIMONIALS.aurelia,
                  TESTIMONIALS.basheera,
                  TESTIMONIALS.benjamin,
                  TESTIMONIALS.erik,
                  TESTIMONIALS.michael,
                  TESTIMONIALS.pascal,
                  TESTIMONIALS.sarah,
                  TESTIMONIALS.sonja,
                  TESTIMONIALS.tina
                ]}
              />
            </Item>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </LightContainer>
      </>
    );
  }
}
