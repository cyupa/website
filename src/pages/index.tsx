import hero from "!file-loader!./hero.png";
import * as customers from "@heydovetail/website/components/icons/customers";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationHero from "@heydovetail/website/components/illustrations/IllustrationHero";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { Center } from "@heydovetail/website/components/layout/Center";
import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { Testimonials } from "@heydovetail/website/components/site/Testimonials";
import { COLORS, HALF_GAP, PADDING, VERTICAL_GAP, WIDTH, testimonials } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
                <Item>
                  <Hero
                    image={<IllustrationHero />}
                    text="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
                    title="Understand your customers."
                  />
                </Item>
              </Flex>
            </Item>
          </Flex>
        </Container>
        <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <CustomerLogos customers={[customers.atlassian, customers.deloitte, customers.nike, customers.uniqa]} />
        </LightContainer>
        <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <FeatureHero
                image={<IllustrationLineChart size="100%" />}
                imagePosition="right"
                location={locations.feedbackManagement()}
                linkText="Feedback management"
                text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
                title="Understand your customer feedback."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationBoard size="100%" />}
                imagePosition="left"
                location={locations.researchRepository()}
                linkText="User research repository"
                text="Save notes and transcripts in one place. Organize everything with projects &amp; boards, and discover insights through simple analysis."
                title="Keep all of your user research in one place."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationBarChart size="100%" />}
                imagePosition="right"
                location={locations.qualitativeDataAnalysis()}
                linkText="Qualitative data analysis"
                text="Use intuitive analysis tools to identify recurring themes and insights across qualitative textual data, with audio and video coming soon."
                title="Analyze qualitative data and discover insights."
              />
            </Item>
            <Item>
              <FeatureHero
                image={<IllustrationTeam size="100%" />}
                imagePosition="left"
                location={locations.userResearch()}
                linkText="Collaborative user research"
                text="Invite as many people as you like to browse feedback &amp; research, collaborate on analysis, and consume insights."
                title="Invite your whole team."
              />
            </Item>
            <Item>
              <Flex styled={{ gap: HALF_GAP, layout: "column" }}>
                <Item>
                  <Container styled={{ maxWidth: WIDTH * 0.75, padding: { x: 0, y: 0 } }}>
                    <Center>
                      <h2>Loved by product managers, designers, and researchers worldwide.</h2>
                    </Center>
                  </Container>
                </Item>
                <Item>
                  <Testimonials
                    testimonials={[
                      testimonials.abhilash,
                      testimonials.aurelia,
                      testimonials.basheera,
                      testimonials.benjamin,
                      testimonials.erik,
                      testimonials.michael,
                      testimonials.pascal,
                      testimonials.sarah,
                      testimonials.sonja,
                      testimonials.sophie,
                      testimonials.tina
                    ]}
                  />
                </Item>
              </Flex>
            </Item>
            <Item>
              <UseCases showTitle />
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
