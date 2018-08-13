import { Flex, Item } from "@heydovetail/ui-components";
import IllustrationBoardLarge from "@heydovetail/website/components/illustrations/IllustrationBoardLarge";
import { Center } from "@heydovetail/website/components/layout/Center";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { HALF_GAP } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Projects – Dovetail</title>
          <meta property="og:title" content="Projects – Dovetail" />
          <meta
            property="og:description"
            content="Organize feedback and research with a drag and drop board, integrations, charts, insights, and more."
          />
          <meta
            name="description"
            content="Organize feedback and research with a drag and drop board, integrations, charts, insights, and more."
          />
        </Helmet>
        <DarkContainer>
          <Center>
            <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
              <Item>
                <Hero
                  title="Your project’s HQ."
                  text="Organize feedback and research with a drag and drop board, integrations, charts, insights, and more."
                />
              </Item>
              <Item>
                <IllustrationBoardLarge />
              </Item>
            </Flex>
          </Center>
          <Features
            features={[
              {
                text:
                  "Use a drag & drop board to organize notes, tags, and insights. Create colorful groups to represent workflow, themes, or categories.",
                title: "Boards"
              },
              {
                text:
                  "Create workflows to automatically import data into projects from thousands of apps. Choose where content should go and how it should look.",
                title: "Integrations"
              },
              {
                text:
                  "Visualize your tag usage over time with the line chart, or understand your research at a glance with a beautiful bar chart.",
                title: "Charts"
              },
              {
                text:
                  "Summarize your findings and actions as insights. Organize them into categories, add images and files, and link them to your raw data.",
                title: "Insights"
              }
            ]}
            large
          />
          <CenteredSignUp dark />
        </DarkContainer>
      </>
    );
  }
}
