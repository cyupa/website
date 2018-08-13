import hero from "!file-loader!./hero.png";
import IllustrationAnalysis from "@heydovetail/website/components/illustrations/IllustrationAnalysis";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationHighlightEdit from "@heydovetail/website/components/illustrations/IllustrationHighlightEdit";
import IllustrationHighlightsResearch from "@heydovetail/website/components/illustrations/IllustrationHighlightsResearch";
import IllustrationImport from "@heydovetail/website/components/illustrations/IllustrationImport";
import IllustrationInsights from "@heydovetail/website/components/illustrations/IllustrationInsights";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationSearchLarge from "@heydovetail/website/components/illustrations/IllustrationSearchLarge";
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
          <Hero image={<IllustrationAnalysis />} title="Easily analyze qualitative data in the cloud." showSignUp />
          <FeatureHero
            image={<IllustrationEditor size="100%" />}
            imagePosition="right"
            text="Identify patterns across qualitative data with our rich text editor. Select text and quickly highlight sentences with tags."
            title="Tag qualitative data with highlights."
          />
          <FeatureHeroLarge
            image={<IllustrationHighlightsResearch />}
            text="Click on any tag to see all of the tagged text across multiple notes."
            title="See all of your highlights in one view."
          />
          <FeatureHero
            image={<IllustrationBarChart size="100%" />}
            imagePosition="left"
            text="Visualize and filter your tags with beautiful charts, ready to screenshot and drop into your research presentation."
            title="Understand your research at a glance."
          />
          <FeatureHeroLarge
            image={<IllustrationSearchLarge />}
            text="Search within notes, tags, insights, and highlights. Use advanced querying to filter results."
            title="Search everywhere. Find anything."
          />
          <FeatureHero
            image={<IllustrationFiles size="100%" />}
            imagePosition="right"
            text="Drag and drop images, recordings, videos, presentations, and more into notes. Store files in-context. No more linking to Dropbox!"
            title="Import images, audio, and video files."
          />
          <FeatureHero
            image={<IllustrationInsights size="100%" />}
            imagePosition="left"
            text="Create insights during the analysis process and store them with the source material. Learn from other projects and past research."
            title="Summarize your research with insights."
          />
          <FeatureHeroLarge
            image={<IllustrationBoardLarge />}
            text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
            title="Organize everything on an intuitive board."
          />
          <FeatureHero
            image={<IllustrationImport size="100%" />}
            imagePosition="right"
            text="Import a spreadsheet of structured data like survey results, app reviews, or support tickets and choose columns to map to Dovetail."
            title="Import data from a spreadsheet."
          />
          <FeatureHero
            image={<IllustrationHighlightEdit size="100%" />}
            imagePosition="left"
            text="Refactor your taxonomy organically. Select multiple highlights and add, replace, or remove tags and insights in a few clicks."
            title="Manage tags with powerful bulk editing."
          />
          <FeatureHero
            image={<IllustrationProjectsResearch size="100%" />}
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
      </>
    );
  }
}
