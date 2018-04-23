import IllustrationAnnotationsFeedback from "@heydovetail/website/components/illustrations/IllustrationAnnotationsFeedback";
import IllustrationBoard from "@heydovetail/website/components/illustrations/IllustrationBoard";
import IllustrationProjectsFeedback from "@heydovetail/website/components/illustrations/IllustrationProjectsFeedback";
import IllustrationSentimentChart from "@heydovetail/website/components/illustrations/IllustrationSentimentChart";
import IllustrationSentimentText from "@heydovetail/website/components/illustrations/IllustrationSentimentText";
import IllustrationSpace from "@heydovetail/website/components/illustrations/IllustrationSpace";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { ColorWheel } from "@heydovetail/website/components/util/ColorWheel";
import IllustrationFormColor from "@heydovetail/website/components/util/ColorWheel/IllustrationFormColor";
import { COLORS, HALF_GAP, PADDING, VERTICAL_GAP, WIDTH, testimonials } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { Integrations } from "@heydovetail/website/sections/Integrations";
import { Security } from "@heydovetail/website/sections/Security";
import { SocialProof } from "@heydovetail/website/sections/SocialProof";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Feedback management – Dovetail</title>
          <meta name="description" content="Keep all of your customer feedback in one place." />
          <meta property="og:description" content="Keep all of your customer feedback in one place." />
          <meta property="og:title" content="Feedback management – Dovetail" />
        </Helmet>
        <Flex gap={VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSpace />} title="Keep all of your customer feedback in one place." />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    center={false}
                    image={<Integrations />}
                    text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
                    title="Centralize feedback from thousands of apps."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={
                      <ColorWheel colors={[COLORS.magenta, COLORS.purple, COLORS.blue, COLORS.teal, COLORS.green, COLORS.lime]}>
                        <IllustrationFormColor size="100%" />
                      </ColorWheel>
                    }
                    imagePosition="left"
                    text="Create a feedback form and get feedback directly from users. Theme it to match your brand without needing a developer."
                    title="Customize your own feedback form."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Import customer feedback from thousands of apps",
                        title: "Zapier integration"
                      },
                      {
                        text: "Add simple feedback forms to your website or product",
                        title: "Embeddable form"
                      },
                      {
                        text: "Bulk import customer feedback from a spreadsheet",
                        title: "Spreadsheet upload"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <Wave size="100%" />
            <DarkContainer maxWidth={WIDTH} overflowBottom padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationSentimentText size="100%" />}
                    imagePosition="right"
                    text="Dovetail automatically analyzes the sentiment of incoming customer feedback and applies the relevant tags for you at the sentence level."
                    title="Automatically analyze feedback sentiment."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationSentimentChart size="100%" />}
                    imagePosition="left"
                    text="Keep track of changes in customer satisfaction and anticipate popular feature requests with powerful historical charts."
                    title="Measure changes in feedback over time."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Automatically analyze the sentiment of feedback",
                        title: "Sentiment analysis"
                      },
                      {
                        text: "Track changes over time with a powerful line chart",
                        title: "Line chart"
                      },
                      {
                        text: "Understand your customer feedback at a glance",
                        title: "Bar chart"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationAnnotationsFeedback />}
                    text="Tag sentences in feedback to categorize pain points, feature requests, research insights, and more."
                    title="Categorize feedback with annotations."
                  />
                </Item>
              </Flex>
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <Features
                    features={[
                      {
                        text: "Analyze feedback in our purpose-built editor",
                        title: "Editor"
                      },
                      {
                        text: "Quickly tag feedback using inline annotations",
                        title: "Annotations"
                      },
                      {
                        launched: false,
                        text: "Import images and files to organize and analyze",
                        title: "Images and files"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBoard size="100%" />}
                    imagePosition="right"
                    text="Use a Trello-style Kanban board to organize your customer feedback. Drag &amp; drop to reorder or automatically sort lists in a single click."
                    title="Organize everything on an intuitive board."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "View feedback as a board with drag & drop like Trello",
                        title: "Boards"
                      },
                      {
                        text: "Categorize your feedback into color-coded, named groups",
                        title: "Groups"
                      },
                      {
                        text: "Quickly sort by title, modified, created date, or a custom rank",
                        title: "Sorting"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsFeedback size="100%" />}
                    imagePosition="left"
                    text="Split feedback into projects and share them with the rest of the organization. Archive old projects when they’re no longer relevant."
                    title="Create projects to organize feedback."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam size="100%" />}
                    imagePosition="right"
                    text="Invite as many people as you like to browse feedback, collaborate on analysis, and consume insights with the original context."
                    title="Get customer feedback in front of your team."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Split feedback as necessary and archive when finished",
                        title: "Projects"
                      },
                      {
                        text: "Invite as many people as you like for no extra cost",
                        title: "Unlimited users"
                      },
                      {
                        text: "Edit and organize feedback with others in real time",
                        title: "Real time collaboration"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <Wave size="100%" />
            <DarkContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Security />
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof testimonials={[testimonials.abhilash, testimonials.benjamin, testimonials.erik]} />
                </Item>
                <Item>
                  <UseCases showTitle />
                </Item>
                <Item>
                  <CenteredSignUp />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
        </Flex>
      </>
    );
  }
}
