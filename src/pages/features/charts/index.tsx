import { Flex, Item } from "@heydovetail/ui-components";
import IllustrationChartsLarge from "@heydovetail/website/components/illustrations/IllustrationChartsLarge";
import { Center } from "@heydovetail/website/components/layout/Center";
import { DarkContainer } from "@heydovetail/website/components/site/DarkContainer";
import { Features } from "@heydovetail/website/components/site/Features";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { HALF_GAP } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>Charts – Dovetail</title>
          <meta property="og:title" content="Charts – Dovetail" />
          <meta
            property="og:description"
            content="Visualize tag usage in a quick snapshot or identify trends over time with our beautiful charts."
          />
          <meta
            name="description"
            content="Visualize tag usage in a quick snapshot or identify trends over time with our beautiful charts."
          />
        </Helmet>
        <DarkContainer>
          <Center>
            <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
              <Item>
                <HeroText
                  title="Visualize your analysis."
                  text="Visualize tag usage in a quick snapshot or identify trends over time with our beautiful charts."
                />
              </Item>
              <Item>
                <IllustrationChartsLarge />
              </Item>
            </Flex>
          </Center>
          <Features
            features={[
              {
                text: "See a snapshot of tags in your project and compare relative usage with a beautiful, stacked bar chart.",
                title: "Bar chart"
              },
              {
                text: "Visualize how your tagging evolves over time and identify changing user feedback trends.",
                title: "Line chart"
              },
              {
                text: "Choose between three unique metrics and get different perspectives on your data.",
                title: "Metrics"
              },
              {
                text: "Categorize your tags with groups to automatically aggregate data and compare categories directly.",
                title: "Roll up"
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
