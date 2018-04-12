import * as React from "react";
import { Helmet } from "react-helmet";
import IllustrationBarChart from "../../components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "../../components/illustrations/IllustrationBoardLarge";
import IllustrationFiles from "../../components/illustrations/IllustrationFiles";
import IllustrationInsights from "../../components/illustrations/IllustrationInsights";
import IllustrationNotes from "../../components/illustrations/IllustrationNotes";
import IllustrationProjectsResearch from "../../components/illustrations/IllustrationProjectsResearch";
import IllustrationSoftware from "../../components/illustrations/IllustrationSoftware";
import IllustrationTeam from "../../components/illustrations/IllustrationTeam";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { DarkContainer } from "../../components/site/DarkContainer";
import { FeatureHero } from "../../components/site/FeatureHero";
import { FeatureHeroLarge } from "../../components/site/FeatureHeroLarge";
import { Features } from "../../components/site/Features";
import { Hero } from "../../components/site/Hero";
import { LightContainer } from "../../components/site/LightContainer";
import Wave from "../../components/site/Wave/Wave";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";
import { CenteredSignUp } from "../../sections/CenteredSignUp";
import { Integrations } from "../../sections/Integrations";
import { Security } from "../../sections/Security";
import { SocialProof } from "../../sections/SocialProof";
import { UseCases } from "../../sections/UseCases";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Keep all of your user research in one place – Dovetail</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSoftware />} title="Keep all of your user research in one place." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationNotes />}
                    imagePosition="right"
                    text="Take interview notes and testing observations directly in our rich text editor. Keep your notes, tags, and insights together in one place."
                    title="Centralize user research notes."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationFiles />}
                    imagePosition="left"
                    text="Drag &amp; drop photos, screenshots, audio recordings, videos, and more into notes and keep the context around the file."
                    title="Store images, audio, video, and more."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge />}
                    text="Use a drag &amp; drop board to organize your research notes, tags, insights, and files."
                    title="Organize everything on an intuitive board."
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
                        text: "Organize photos, recordings, and screenshots",
                        title: "Files"
                      },
                      {
                        text: "View research as a board with drag & drop like Trello",
                        title: "Boards"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationProjectsResearch />}
                    imagePosition="left"
                    text="Split research into projects with self-contained notes, tags, and insights. Archive projects when they’re completed to let everyone know."
                    title="Use projects for  research initiatives."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBarChart />}
                    imagePosition="right"
                    text="Tag patterns across your data. Visualize your research with beautiful charts, ready to drop into your presentation."
                    title="Understand your project at a glance."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationInsights />}
                    imagePosition="left"
                    text="Create insights during the analysis process and store them with the source material. Learn from other projects and past research."
                    title="Summarize your  research with insights."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Separate research initiatives into collaborative projects",
                        title: "Projects"
                      },
                      {
                        text: "Understand your research projects at a glance",
                        title: "Charts"
                      },
                      {
                        text: "Summarize your findings and learn from past research",
                        title: "Insights"
                      }
                    ]}
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    center={false}
                    image={<Integrations />}
                    text="Import emails, survey results, support tickets, tweets, Facebook posts, and app reviews via Zapier."
                    title="All of your research data in one place."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam />}
                    imagePosition="right"
                    text="Invite as many people as you like to create projects, collaborate on research analysis, and consume your research insights."
                    title="Collaborate in the cloud, not on a network drive."
                  />
                </Item>
                <Item>
                  <Features
                    features={[
                      {
                        text: "Collaborate with researchers across your organization",
                        title: "Teams"
                      },
                      {
                        text: "Invite as many people as you like for no extra cost",
                        title: "Unlimited users"
                      },
                      {
                        text: "Edit and organize research with others in real time",
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
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Security />
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof />
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
