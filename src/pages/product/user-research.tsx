import * as basheera from "@heydovetail/website/avatars/basheera.jpg";
import * as ben from "@heydovetail/website/avatars/ben.jpg";
import * as michael from "@heydovetail/website/avatars/michael.jpg";
import * as tina from "@heydovetail/website/avatars/tina.jpg";
import IllustrationAnnotationsResearch from "@heydovetail/website/components/illustrations/IllustrationAnnotationsResearch";
import IllustrationBarChart from "@heydovetail/website/components/illustrations/IllustrationBarChart";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import IllustrationCollaboration from "@heydovetail/website/components/illustrations/IllustrationCollaboration";
import IllustrationEditor from "@heydovetail/website/components/illustrations/IllustrationEditor";
import IllustrationProjectsResearch from "@heydovetail/website/components/illustrations/IllustrationProjectsResearch";
import IllustrationRealtime from "@heydovetail/website/components/illustrations/IllustrationRealtime";
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
import { COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
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
          <title>Collaborative user research – Dovetail</title>
        </Helmet>
        <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
          <Item>
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <Hero image={<IllustrationCollaboration />} title="Get everyone involved in user research." />
                </Item>
                <Item>
                  <FeatureHero
                    image={<IllustrationRealtime size="100%" />}
                    imagePosition="right"
                    text="Take notes with your teammates during customer interviews &amp; user testing sessions and tag sentences as you go."
                    title="Collaborate on research notes in real time."
                  />
                </Item>
                <Item>
                  <FeatureHeroLarge
                    image={<IllustrationBoardLarge size="100%" />}
                    text="Use a drag &amp; drop board to organize your research notes, tags, insights, and files."
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
            <LightContainer backgroundColor={COLORS.p04} maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
                <Item>
                  <FeatureHero
                    image={<IllustrationTeam size="100%" />}
                    imagePosition="right"
                    text="Invite as many people as you like to join your team, contribute to notes, collaborate on analysis, and consume your insights."
                    title="Get everyone onboard."
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
            <LightContainer maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
              <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
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
                        company: "MacMillan Learning",
                        image: tina,
                        name: "Tina",
                        quote:
                          "I have to say I am really loving Dovetail and the potential it has in gathering and sharing qualitative data and insights!",
                        role: "UX Designer"
                      },
                      {
                        company: "For The Win",
                        image: ben,
                        name: "Benjamin",
                        quote:
                          "I love how easy Dovetail makes tagging and analyzing lots of interview transcripts. The interface is fast and responsive, and I’m able to get more data and insights because of how well the tool fits into my workflow.",
                        role: "Founder"
                      },
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
