import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { testimonials, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { Customers } from "@heydovetail/website/sections/Customers";
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
        <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={64}>
          <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
            <Item>
              <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
                <Item>
                  <HeroText title="Customer feedback &amp; research platform for teams." />
                </Item>
                <Item>
                  <UseCases />
                </Item>
              </Flex>
            </Item>
            <Item>
              <Customers />
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
              <SocialProof
                testimonials={[
                  testimonials.abhilash,
                  testimonials.aurelia,
                  testimonials.basheera,
                  testimonials.benjamin,
                  testimonials.erik,
                  testimonials.michael,
                  testimonials.pascal,
                  testimonials.sonja,
                  testimonials.tina
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
