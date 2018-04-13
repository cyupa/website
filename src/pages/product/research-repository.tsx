import * as basheera from "@heydovetail/website/avatars/basheera.jpg";
import * as ben from "@heydovetail/website/avatars/ben.jpg";
import * as michael from "@heydovetail/website/avatars/michael.jpg";
import * as tina from "@heydovetail/website/avatars/tina.jpg";
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
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
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
                    text="Drag &amp; drop photos, screenshots, audio recordings, videos, and more into notes and keep the context around the file."
                    title="Store images, audio, video, and more."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge size="100%" />}
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
            <DarkContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Security />
            </DarkContainer>
          </Item>
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <SocialProof
                    testimonials={[
                      {
                        company: "DemandLogic",
                        image: basheera,
                        name: "Basheera",
                        quote:
                          "I've got to say, playing around with Dovetail I felt a deep unwinding of tension - it seems like the answer to the need I had for a lightweight but powerful and affordable insights repository that makes the value of qualitative research plain as day.",
                        role: "Design Lead"
                      },
                      {
                        company: "Onist",
                        image: michael,
                        name: "Michael",
                        quote:
                          "I’m just loving Dovetail for qualitative user feedback documentation and analysis. It’s just a lovely experience. I don’t know what impresses me more… the app or the team and how they are building it 👏👏👏",
                        role: "VP of Product"
                      },
                      {
                        company: "For The Win",
                        image: ben,
                        name: "Benjamin Jackson",
                        quote:
                          "I love how easy Dovetail makes tagging and analyzing lots of interview transcripts. The interface is fast and responsive, and I’m able to get more data and insights because of how well the tool fits into my workflow.",
                        role: "Founder"
                      },
                      {
                        company: "MacMillan Learning",
                        image: tina,
                        name: "Tina",
                        quote:
                          "I have to say I am really loving Dovetail and the potential it has in gathering and sharing qualitative data and insights!",
                        role: "UX Designer"
                      }
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
