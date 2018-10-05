import hero from "!file-loader!./hero.png";
import { COLORS } from "@heydovetail/ui-components";
import * as customers from "@heydovetail/website/components/icons/customers";
import illustrationBarChart from "@heydovetail/website/components/illustrations/bar-chart.svg";
import illustrationFiles from "@heydovetail/website/components/illustrations/files.svg";
import illustrationHero from "@heydovetail/website/components/illustrations/hero.svg";
import illustrationRealtime from "@heydovetail/website/components/illustrations/realtime.svg";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HERO_TEXT_WIDTH, testimonials } from "@heydovetail/website/constants";
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
      <PageLayout>
        <Helmet>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
        </Helmet>
        <LightContainer>
          <Hero
            image={illustrationHero}
            maxTextWidth={HERO_TEXT_WIDTH}
            text="Dovetail helps you store, analyze, and collaborate on user research in one place, making it easy to see patterns, discover insights, and decide what to do next."
            showSignUp
            title="The research platform for teams."
          />
        </LightContainer>
        <LightContainer backgroundColor={COLORS.p04}>
          <CustomerLogos customers={[customers.atlassian, customers.shopify, customers.nike, customers.wework]} />
        </LightContainer>
        <LightContainer>
          <FeatureHero
            image={illustrationBarChart}
            imagePosition="right"
            location={locations.qualitativeDataAnalysis()}
            linkText="Learn more"
            text="Use intuitive analysis tools to tag themes across data. Visualize your findings with beautiful charts and summarize them as insights."
            title="Analyze qualitative data and discover insights."
          />
          <FeatureHero
            image={illustrationRealtime}
            imagePosition="left"
            location={locations.userResearch()}
            linkText="Learn more"
            text="Invite your whole organization to browse user research data, collaborate on analysis, search raw data, and consume insights."
            title="Share research insights with your team."
          />
          <FeatureHero
            image={illustrationFiles}
            imagePosition="right"
            location={locations.researchRepository()}
            linkText="Learn more"
            text="Save notes, images, audio, and video in one place. Organize, search, and analyze all of your research data, past and present."
            title="Keep all of your user research in one place."
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
      </PageLayout>
    );
  }
}
