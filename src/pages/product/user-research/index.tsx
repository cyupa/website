import hero from "!file-loader!./hero.png";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationCollaboration from "@heydovetail/website/components/illustrations/IllustrationCollaboration";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationHighlightEdit from "@heydovetail/website/components/illustrations/IllustrationHighlightEdit";
import IllustrationHighlightsResearch from "@heydovetail/website/components/illustrations/IllustrationHighlightsResearch";
import IllustrationInsights from "@heydovetail/website/components/illustrations/IllustrationInsights";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationRealtime from "@heydovetail/website/components/illustrations/IllustrationRealtime";
import IllustrationSearch from "@heydovetail/website/components/illustrations/IllustrationSearch";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
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
          <title>Collaborative user research – Dovetail</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="Collaborative user research – Dovetail" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
          <meta
            property="og:description"
            content="Get everyone involved in user research with a tool purpose-built for teams. Dovetail is easy, affordable cloud-based software to help your team store, organize, analyze, and share user research data and research insights."
          />
          <meta
            name="description"
            content="Get everyone involved in user research with a tool purpose-built for teams. Dovetail is easy, affordable cloud-based software to help your team store, organize, analyze, and share user research data and research insights."
          />
        </Helmet>
        <LightContainer>
          <Hero image={<IllustrationCollaboration />} title="Get everyone involved in user research." />
          <FeatureHero
            image={<IllustrationRealtime size="100%" />}
            imagePosition="right"
            text="Take notes with your teammates during customer interviews and user testing sessions in real time, like Google Docs."
            title="Collaborate on research notes in real time."
          />
          <FeatureHeroLarge
            image={<IllustrationBoardLarge />}
            text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
            title="Keep everyone in sync with a research board."
          />
          <FeatureHero
            image={<IllustrationSearch size="100%" />}
            imagePosition="left"
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results and find what you’re looking for."
            title="Search everywhere. Find anything."
          />
          <FeatureHero
            image={<IllustrationEditor size="100%" />}
            imagePosition="right"
            text="Identify patterns across qualitative data with our rich text document editor. Select text and quickly highlight sentences with tags."
            title="Tag qualitative data with highlights."
          />
          <FeatureHeroLarge
            image={<IllustrationHighlightsResearch size="100%" />}
            text="Click on any tag to see all of the tagged text across multiple notes."
            title="See all of your highlights in one view."
          />
          <FeatureHero
            image={<IllustrationFiles size="100%" />}
            imagePosition="right"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Import images, audio, and video files."
          />
          <FeatureHero
            image={<IllustrationTeam size="100%" />}
            imagePosition="left"
            text="Invite stakeholders from your entire organization to collaborate on research analysis and consume your research insights."
            title="Get your research in front of stakeholders."
          />
          <FeatureHero
            image={<IllustrationInsights size="100%" />}
            imagePosition="right"
            text="Create insights during the analysis process and store them with the source material. Learn from other projects and past research."
            title="Summarize your research with insights."
          />
          <FeatureHero
            image={<IllustrationProjectsResearch size="100%" />}
            imagePosition="left"
            text="Split research into projects with notes, tags, insights, and highlights. Let everyone know when your project’s completed by archiving it."
            title="Use projects for research initiatives."
          />
          <FeatureHero
            image={<IllustrationHighlightEdit size="100%" />}
            imagePosition="right"
            text="Refactor your taxonomy organically. Select multiple highlights and add, replace, or remove tags and insights in a few clicks."
            title="Manage tags with powerful bulk editing."
          />
          <FeatureHero
            image={<IllustrationBarChart size="100%" />}
            imagePosition="left"
            text="Simply highlight text and tag it, then visualize your research with beautiful charts, ready to drop into a presentation or Slack."
            title="Understand your research at a glance."
          />
        </LightContainer>
        <Wave size="100%" />
        <DarkContainer>
          <Security />
        </DarkContainer>
        <LightContainer>
          <SocialProof
            testimonials={[
              testimonials.basheera,
              testimonials.benjamin,
              testimonials.michael,
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
