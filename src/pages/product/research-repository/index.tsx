import * as hero from "!file-loader!./hero.png";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationFiles from "@heydovetail/website/components/illustrations/IllustrationFiles";
import IllustrationInsights from "@heydovetail/website/components/illustrations/IllustrationInsights";
import IllustrationNotes from "@heydovetail/website/components/illustrations/IllustrationNotes";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationSoftware from "@heydovetail/website/components/illustrations/IllustrationSoftware";
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
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH, testimonials } from "@heydovetail/website/constants";
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
          <title>User research repository – Dovetail</title>
          <meta property="og:title" content="User research repository – Dovetail" />
          <meta property="og:image" content={hero} />
          <meta
            property="og:description"
            content="Dovetail keeps all of your user research data in one place, making it easy to see patterns, discover insights, and decide what to do next. Our customers include Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
          />
          <meta
            name="description"
            content="Dovetail keeps all of your user research data in one place, making it easy to see patterns, discover insights, and decide what to do next. Our customers include Atlassian, Deloitte, Engima, HotelsCombined, Westpac, and more."
          />
        </Helmet>
        <Flex gap={VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationSoftware />} title="Keep all of your user research in one place." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationNotes size="100%" />}
                    imagePosition="right"
                    text="Take interview notes and testing observations directly in our rich text editor. Keep your notes, tags, and insights together in one place."
                    title="Centralize user research notes."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationFiles size="100%" />}
                    imagePosition="left"
                    launched={false}
                    text="Drag &amp; drop photos, screenshots, audio recordings, videos, and more into notes and keep the context around the file."
                    title="Store images, audio, video, and more."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge size="100%" />}
                    text="Use a drag &amp; drop board to organize your research notes, tags, and insights."
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
                        launched: false,
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
                    image={<IllustrationProjectsResearch size="100%" />}
                    imagePosition="left"
                    text="Split research into projects with self-contained notes, tags, and insights. Archive projects when they’re completed to let everyone know."
                    title="Use projects for  research initiatives."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationBarChart size="100%" />}
                    imagePosition="right"
                    text="Tag patterns across your data. Visualize your research with beautiful charts, ready to drop into your presentation."
                    title="Understand your project at a glance."
                  />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationInsights size="100%" />}
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
                    image={<IllustrationTeam size="100%" />}
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
            <DarkContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Security />
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
              <Flex gap={VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof
                    testimonials={[testimonials.basheera, testimonials.benjamin, testimonials.michael, testimonials.sarah]}
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
