import hero from "!file-loader!./hero.png";
import { COLORS } from "@heydovetail/ui-components";
import illustrationBoardLarge from "@heydovetail/website/components/illustrations/board-large.svg";
import illustrationHighlightsFeedback from "@heydovetail/website/components/illustrations/highlights-feedback.svg";
import illustrationImport from "@heydovetail/website/components/illustrations/import.svg";
import illustrationProjectsFeedback from "@heydovetail/website/components/illustrations/projects-feedback.svg";
import illustrationSearch from "@heydovetail/website/components/illustrations/search.svg";
import illustrationSentimentChart from "@heydovetail/website/components/illustrations/sentiment-chart.svg";
import illustrationSentimentText from "@heydovetail/website/components/illustrations/sentiment-text.svg";
import illustrationSpace from "@heydovetail/website/components/illustrations/space.svg";
import illustrationTeam from "@heydovetail/website/components/illustrations/team.svg";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { ColorWheel } from "@heydovetail/website/components/util/ColorWheel";
import IllustrationFormColor from "@heydovetail/website/components/util/ColorWheel/IllustrationFormColor";
import { HERO_TEXT_WIDTH, testimonials } from "@heydovetail/website/constants";
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
      <PageLayout>
        <Helmet>
          <title>Feedback management – Dovetail</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="Feedback management – Dovetail" />
          <meta property="og:image" content={process.env.GATSBY_BASE_URL + hero} />
          <meta
            property="og:description"
            content="Centralize all of your customer feedback in one place, from thousands of apps like Intercom, SurveyMonkey, and Twitter. Measure changes over time, tag patterns, discover insights, and decide what to do next."
          />
          <meta
            name="description"
            content="Centralize all of your customer feedback in one place, from thousands of apps like Intercom, SurveyMonkey, and Twitter. Measure changes over time, tag patterns, discover insights, and decide what to do next."
          />
        </Helmet>
        <LightContainer>
          <Hero
            image={illustrationSpace}
            maxTextWidth={HERO_TEXT_WIDTH}
            title="Keep all of your customer feedback in one place."
            showSignUp
          />
          <FeatureHeroLarge
            center={false}
            image={<Integrations />}
            text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
            title="Centralize feedback from thousands of apps."
          />
        </LightContainer>
        <Wave size="100%" />
        <DarkContainer overflowBottom>
          <FeatureHero
            color={COLORS.p40}
            image={illustrationSentimentText}
            imagePosition="right"
            text="Dovetail automatically analyzes the sentiment of incoming feedback and adds sentence-level tags for you, even in a variety of languages."
            title="Automatically analyze feedback sentiment."
          />
          <FeatureHero
            color={COLORS.p40}
            image={illustrationSentimentChart}
            imagePosition="left"
            text="Keep track of changes in feedback sentiment and quantify feature requests with beautiful, easy-to-use charts."
            title="Measure changes in feedback over time."
          />
          <FeatureHeroLarge
            image={illustrationHighlightsFeedback}
            text="Highlight sentences in feedback to tag pain points, feature requests, research insights, and more."
            title="Categorize feedback with highlights."
          />
        </DarkContainer>
        <LightContainer>
          <FeatureHero
            image={illustrationSearch}
            imagePosition="left"
            text="Search within notes, tags, insights, and highlights. Discover quotes, segment your data, and quantify mentions of specific words."
            title="Search everywhere. Find anything."
          />
          <FeatureHeroLarge
            image={illustrationBoardLarge}
            text="Use a Trello-style drag &amp; drop board to categorize feedback by source, type, or feature."
            title="Organize everything on an intuitive board."
          />
          <FeatureHero
            image={illustrationProjectsFeedback}
            imagePosition="right"
            text="Split feedback into projects and share them with the rest of the organization. Archive old projects when they’re no longer relevant."
            title="Use projects to segment feedback."
          />
          <FeatureHero
            image={
              <ColorWheel colors={[COLORS.magenta, COLORS.purple, COLORS.blue, COLORS.teal, COLORS.green, COLORS.lime]}>
                <IllustrationFormColor size="100%" />
              </ColorWheel>
            }
            imagePosition="left"
            text="Embed a customizable user feedback form on your website. Theme it to match your brand, without needing a developer."
            title="Create your own feedback form."
          />
          <FeatureHero
            image={illustrationTeam}
            imagePosition="right"
            text="Invite as many people as you like to browse feedback, collaborate on analysis, and consume insights along with the original context."
            title="Get customer feedback in front of your team."
          />
          <FeatureHero
            image={illustrationImport}
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
          <SocialProof testimonials={[testimonials.abhilash, testimonials.benjamin, testimonials.erik, testimonials.michael]} />
          <UseCases showTitle />
          <CenteredSignUp />
        </LightContainer>
      </PageLayout>
    );
  }
}
