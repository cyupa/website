import hero from "!file-loader!./hero.png";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationHighlightsResearch from "@heydovetail/website/components/illustrations/IllustrationHighlightsResearch";
import IllustrationImport from "@heydovetail/website/components/illustrations/IllustrationImport";
import IllustrationInsights from "@heydovetail/website/components/illustrations/IllustrationInsights";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationSearchLarge from "@heydovetail/website/components/illustrations/IllustrationSearchLarge";
import IllustrationSoftware from "@heydovetail/website/components/illustrations/IllustrationSoftware";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { Integrations } from "@heydovetail/website/sections/Integrations";
import { Security } from "@heydovetail/website/sections/Security";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>User research repository – Dovetail</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="User research repository – Dovetail" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
          <meta
            property="og:description"
            content="Keep all of your user research data in one place. Organize and analyze raw research in projects, and summarize your research with insights. Learn from other researchers across your organization."
          />
          <meta
            name="description"
            content="Keep all of your user research data in one place. Organize and analyze raw research in projects, and summarize your research with insights. Learn from other researchers across your organization."
          />
        </Helmet>
        <LightContainer>
          <Hero image={<IllustrationSoftware />} title="Keep all of your user research in one place." />
          <FeatureHero
            image={<IllustrationEditor size="100%" />}
            imagePosition="right"
            text="Take interview notes and user testing observations in our easy-to-use, collaborative rich text editor or import entire transcripts."
            title="Centralize user research notes."
          />
          <FeatureHero
            image={<IllustrationFiles size="100%" />}
            imagePosition="left"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Store images, audio, video, and more."
          />
          <FeatureHeroLarge
            image={<IllustrationSearchLarge />}
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results."
            title="Search everywhere. Find anything."
          />
          <FeatureHero
            image={<IllustrationBarChart size="100%" />}
            imagePosition="right"
            text="Simply highlight text and tag it, then visualize your research with beautiful charts, ready to drop into a presentation or Slack."
            title="Understand your project at a glance."
          />
          <FeatureHeroLarge
            image={<IllustrationHighlightsResearch />}
            text="Click on any tag to see all of the tagged text across multiple notes."
            title="See all of your highlights in one view."
          />
          <FeatureHero
            image={<IllustrationProjectsResearch size="100%" />}
            imagePosition="right"
            text="Split research into projects with notes, tags, insights, and highlights. Let everyone know when your project’s completed by archiving it."
            title="Use projects for research initiatives."
          />
          <FeatureHero
            image={<IllustrationTeam size="100%" />}
            imagePosition="left"
            text="Invite stakeholders from your entire organization to collaborate on research analysis and consume your research insights."
            title="Get your research in front of stakeholders."
          />
          <FeatureHeroLarge
            image={<IllustrationBoardLarge />}
            text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
            title="Keep everyone in sync with a research board."
          />
          <FeatureHero
            image={<IllustrationInsights size="100%" />}
            imagePosition="left"
            text="Create insights during the analysis process and store them alongside the source material. Learn from other projects and past research."
            title="Summarize your research with insights."
          />
          <FeatureHeroLarge
            center={false}
            image={<Integrations />}
            text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
            title="All of your research data in one place."
          />
          <FeatureHero
            image={<IllustrationImport size="100%" />}
            imagePosition="left"
            text="Import a spreadsheet of structured data like survey results, app reviews, or support tickets and choose columns to map to Dovetail."
            title="Import data from a spreadsheet."
          />
        </LightContainer>
        <Wave size="100%" />
        <DarkContainer>
          <Security />
        </DarkContainer>
        <LightContainer>
          <SocialProof
            testimonials={[testimonials.basheera, testimonials.benjamin, testimonials.michael, testimonials.sarah]}
          />
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </>
    );
  }
}
