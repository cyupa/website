import IllustrationAnalysis from "@heydovetail/website/components/illustrations/IllustrationAnalysis";
import IllustrationAnnotationEdit from "@heydovetail/website/components/illustrations/IllustrationAnnotationEdit";
import IllustrationAnnotationsResearch from "@heydovetail/website/components/illustrations/IllustrationAnnotationsResearch";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationImport from "@heydovetail/website/components/illustrations/IllustrationImport";
import IllustrationInsights from "@heydovetail/website/components/illustrations/IllustrationInsights";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { COLORS, HALF_GAP, PADDING, TESTIMONIALS, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
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
          <title>Qualitative data analysis – Dovetail</title>
          <meta name="description" content="Easily analyze qualitative data in the cloud." />
          <meta property="og:description" content="Easily analyze qualitative data in the cloud." />
          <meta property="og:title" content="Qualitative data analysis – Dovetail" />
        </Helmet>
        <Flex gap={VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationAnalysis />} title="Easily analyze qualitative data in the cloud." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationEditor size="100%" />}
                    imagePosition="right"
                    text="Identify patterns across qualitative data with our rich text document editor. Select text and quickly annotate sentences with tags."
                    title="Add inline tags to qualitative data."
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationAnnotationsResearch size="100%" />}
                    text="View any tag to see a reverse view showing all the tagged text."
                    title="See all of your annotations in one view."
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationAnnotationEdit size="100%" />}
                    imagePosition="left"
                    text="Refactor your tag system as you go. Select multiple annotations and add, replace, or remove tags in a few clicks."
                    title="Manage tags with powerful bulk editing."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Analyze research in our purpose-built editor",
                        title: "Editor"
                      },
                      {
                        text: "Quickly tag feedback using inline annotations",
                        title: "Annotations"
                      },
                      {
                        text: "Easily add, replace, and remove tags from sentences",
                        title: "Bulk tag management"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationFiles size="100%" />}
                    imagePosition="right"
                    launched={false}
                    text="Drag &amp; drop photos, screenshots, audio recordings, videos, and more into notes and keep the context around the file."
                    title="Import images, audio, and video files."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge size="100%" />}
                    text="Use a drag & drop board to organize your research notes, tags, and insights."
                    title="Organize everything on an intuitive board."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsResearch size="100%" />}
                    imagePosition="left"
                    text="Split research into projects with self-contained notes, tags, and insights. Archive projects when they’re completed to let everyone know."
                    title="Use projects for  research initiatives."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        launched: false,
                        text: "Organize photos, recordings, and screenshots",
                        title: "Files"
                      },
                      {
                        text: "View feedback as a board with drag & drop like Trello",
                        title: "Boards"
                      },
                      {
                        text: "Separate research initiatives into collaborative projects",
                        title: "Projects"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationImport size="100%" />}
                    imagePosition="right"
                    text="Upload a spreadsheet to quickly create notes, tags, or insights. Import images, audio, and video with our bulk file uploader."
                    title="Upload a spreadsheet of data to analyze."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBarChart size="100%" />}
                    imagePosition="left"
                    text="Visualize and filter your tags with beautiful charts, ready to screenshot and drop into your research presentation."
                    title="Understand your research at a glance."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationInsights size="100%" />}
                    imagePosition="right"
                    text="Create insights during the analysis process and store them with the source material. Learn from other projects and past research."
                    title="Summarize your  research with insights."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Upload a spreadsheet of data and import files in bulk",
                        title: "Data import"
                      },
                      {
                        text: "Create visualizations of your research project",
                        title: "Charts"
                      },
                      {
                        text: "Summarize your findings and learn from past research",
                        title: "Insights"
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
                  <SocialProof
                    testimonials={[
                      TESTIMONIALS.aurelia,
                      TESTIMONIALS.erik,
                      TESTIMONIALS.pascal,
                      TESTIMONIALS.sonja,
                      TESTIMONIALS.tina
                    ]}
                  />
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
