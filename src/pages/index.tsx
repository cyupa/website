import hero from "!file-loader!./hero.png";
import { COLORS } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationHero from "@heydovetail/website/components/illustrations/IllustrationHero";
import IllustrationLineChart from "@heydovetail/website/components/illustrations/IllustrationLineChart";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { testimonials } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { CustomerLogos } from "@heydovetail/website/sections/CustomerLogos";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
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
        <LightContainer>
          <Hero
            image={<IllustrationHero />}
            text="Dovetail combines customer feedback and user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
            title="Understand your customers."
          />
        </LightContainer>
        <LightContainer backgroundColor={COLORS.p04}>
          <CustomerLogos customers={[customers.atlassian, customers.deloitte, customers.nike, customers.uniqa]} />
        </LightContainer>
        <LightContainer>
          <FeatureHero
            image={<IllustrationLineChart size="100%" />}
            imagePosition="right"
            location={locations.feedbackManagement()}
            linkText="Learn more"
            text="Import feedback from hundreds of apps, automatically analyze sentiment, tag feature requests, and measure changes over time."
            title="Understand your customer feedback."
          />
          <FeatureHero
            image={<IllustrationFiles size="100%" />}
            imagePosition="left"
            location={locations.researchRepository()}
            linkText="Learn more"
            text="Save notes, images, audio, and video in one place. Organize, search, and analyze all of your research data, past and present."
            title="Keep all of your user research in one place."
          />
          <FeatureHero
            image={<IllustrationBarChart size="100%" />}
            imagePosition="right"
            location={locations.qualitativeDataAnalysis()}
            linkText="Learn more"
            text="Use intuitive analysis tools to tag themes across data. Visualize your findings with beautiful charts and summarize them as insights."
            title="Analyze qualitative data and discover insights."
          />
          <FeatureHero
            image={<IllustrationTeam size="100%" />}
            imagePosition="left"
            location={locations.userResearch()}
            linkText="Learn more"
            text="Invite your whole organization to browse user feedback and research, collaborate on analysis, search raw data, and consume insights."
            title="Invite your whole team."
          />
          <SocialProof
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
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </>
    );
  }
}
