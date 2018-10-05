import hero from "!file-loader!./hero.png";
import illustrationSoftware from "@heydovetail/website/components/illustrations/software.svg";
import illustrationBarChart from "@heydovetail/website/components/illustrations/bar-chart.svg";
import illustrationBoardLarge from "@heydovetail/website/components/illustrations/board-large.svg";
import illustrationEditor from "@heydovetail/website/components/illustrations/editor.svg";
import illustrationFiles from "@heydovetail/website/components/illustrations/files.svg";
import illustrationHighlightEdit from "@heydovetail/website/components/illustrations/highlight-edit.svg";
import illustrationHighlightsResearch from "@heydovetail/website/components/illustrations/highlights-research.svg";
import illustrationImport from "@heydovetail/website/components/illustrations/import.svg";
import illustrationInsights from "@heydovetail/website/components/illustrations/insights.svg";
import illustrationProjectsResearch from "@heydovetail/website/components/illustrations/projects-research.svg";
import illustrationSearchLarge from "@heydovetail/website/components/illustrations/search-large.svg";
import { DarkContainer } from "@heydovetail/website/components/layout/DarkContainer";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Hero } from "@heydovetail/website/components/site/Hero";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { HERO_TEXT_WIDTH, testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { Security } from "@heydovetail/website/sections/Security";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout>
        <Helmet>
          <title>Qualitative data analysis – Dovetail</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="Qualitative data analysis – Dovetail" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
          <meta
            property="og:description"
            content="Analyze qualitative data in the cloud with affordable and intuitive software. Add inline tags to qualitative data, summarize research with insights, and collaborate on research analysis with others."
          />
          <meta
            name="description"
            content="Analyze qualitative data in the cloud with affordable and intuitive software. Add inline tags to qualitative data, summarize research with insights, and collaborate on research analysis with others."
          />
        </Helmet>
        <LightContainer>
          <Hero
            image={illustrationSoftware}
            maxTextWidth={HERO_TEXT_WIDTH}
            title="Easily analyze qualitative data in the cloud."
            showSignUp
          />
          <FeatureHero
            image={illustrationEditor}
            imagePosition="right"
            text="Identify patterns across qualitative data with our rich text editor. Select text and quickly highlight sentences with tags."
            title="Tag qualitative data with highlights."
          />
          <FeatureHeroLarge
            image={illustrationHighlightsResearch}
            text="Click on any tag to see all of the tagged text across multiple notes."
            title="See all of your highlights in one view."
          />
          <FeatureHero
            image={illustrationBarChart}
            imagePosition="left"
            text="Visualize and filter your tags with beautiful charts, ready to screenshot and drop into your research presentation."
            title="Understand your research at a glance."
          />
          <FeatureHeroLarge
            image={illustrationSearchLarge}
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results."
            title="Search everywhere. Find anything."
          />
          <FeatureHero
            image={illustrationFiles}
            imagePosition="right"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Import images, audio, and video files."
          />
          <FeatureHero
            image={illustrationInsights}
            imagePosition="left"
            text="Create insights during the analysis process and store them with the source material. Learn from other projects and past research."
            title="Summarize your research with insights."
          />
          <FeatureHeroLarge
            image={illustrationBoardLarge}
            text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
            title="Organize everything on an intuitive board."
          />
          <FeatureHero
            image={illustrationImport}
            imagePosition="right"
            text="Import a spreadsheet of structured data like survey results, app reviews, or support tickets and choose columns to map to Dovetail."
            title="Import data from a spreadsheet."
          />
          <FeatureHero
            image={illustrationHighlightEdit}
            imagePosition="left"
            text="Refactor your taxonomy organically. Select multiple highlights and add, replace, or remove tags and insights in a few clicks."
            title="Manage tags with powerful bulk editing."
          />
          <FeatureHero
            image={illustrationProjectsResearch}
            imagePosition="right"
            text="Split research into projects with notes, tags, insights, and highlights. Let everyone know when your project’s completed by archiving it."
            title="Use projects for research initiatives."
          />
        </LightContainer>
        <Wave size="100%" />
        <DarkContainer>
          <Security />
        </DarkContainer>
        <LightContainer>
          <SocialProof
            testimonials={[testimonials.aurelia, testimonials.erik, testimonials.pascal, testimonials.sonja, testimonials.tina]}
          />
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </PageLayout>
    );
  }
}
