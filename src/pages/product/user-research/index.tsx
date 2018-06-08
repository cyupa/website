import hero from "!file-loader!./hero.png";
import { COLORS, Flex, Item } from "@heydovetail/ui-components";
import IllustrationAnnotationsResearch from "@heydovetail/website/components/illustrations/IllustrationAnnotationsResearch";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationCollaboration from "@heydovetail/website/components/illustrations/IllustrationCollaboration";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationRealtime from "@heydovetail/website/components/illustrations/IllustrationRealtime";
import IllustrationTeam from "@heydovetail/website/components/illustrations/IllustrationTeam";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { FeatureHero } from "@heydovetail/website/components/site/FeatureHero";
import { FeatureHeroLarge } from "@heydovetail/website/components/site/FeatureHeroLarge";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import Wave from "@heydovetail/website/components/site/Wave/Wave";
import { HALF_GAP, PADDING, testimonials, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
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
        <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
                <Item>
                  <Hero image={<IllustrationCollaboration />} title="Get everyone involved in user research." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationRealtime size="100%" />}
                    imagePosition="right"
                    text="Take notes with your teammates during customer interviews and user testing sessions, and tag sentences as you identify patterns."
                    title="Collaborate on research notes in real time."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge size="100%" />}
                    text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
                    title="Keep everyone in sync with a research board."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsResearch size="100%" />}
                    imagePosition="right"
                    text="Split research into projects with self-contained notes, tags, and insights. Archive projects when they’re completed to let everyone know."
                    title="Learn from other research projects."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Take notes in our collaborative, rich text editor",
                        title: "Notes"
                      },
                      {
                        text: "View feedback as a board with drag & drop like Trello",
                        title: "Boards"
                      },
                      {
                        text: "Learn from other research initiatives across the org",
                        title: "Projects"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer backgroundColor={COLORS.p04} maxWidth={WIDTH} padding={{ x: PADDING, y: VERTICAL_GAP }}>
              <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam size="100%" />}
                    imagePosition="right"
                    text="Invite as many people as you like to join your team, contribute to notes, collaborate on analysis, and consume your insights."
                    title="Invite your whole team."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Collaborate with people across your organization",
                        title: "Teams"
                      },
                      {
                        text: "Invite as many users as you like for no extra cost",
                        title: "Unlimited users"
                      },
                      {
                        text: "Let people join your team with domain-restricted sign up",
                        title: "Single sign-on"
                      }
                    ]}
                  />
                </Item>
              </Flex>
            </LightContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
                <Item>
                  <FeatureHero
                    image={<IllustrationEditor size="100%" />}
                    imagePosition="right"
                    text="Identify patterns across qualitative data with our rich text document editor. Select text and quickly annotate sentences with tags."
                    title="Add inline tags to qualitative data."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationAnnotationsResearch size="100%" />}
                    text="View any tag to see a reverse view showing all the tagged text."
                    title="See all of your annotations in one view."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBarChart size="100%" />}
                    imagePosition="left"
                    text="Tag patterns across your data. Visualize your research with beautiful charts, ready to drop into your presentation."
                    title="Understand your research at a glance."
                  />
                </Item>
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
                        text: "Create visualizations of your research project",
                        title: "Charts"
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
              <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
                <Item>
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
