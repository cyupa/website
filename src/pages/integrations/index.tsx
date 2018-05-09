import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { IntegrationCard } from "@heydovetail/website/components/site/IntegrationCard";
import { LightContainer } from "@heydovetail/website/components/site/LightContainer";
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { IntegrationIndexQuery } from "@heydovetail/website/graphql/types";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
// import { sortComparatorAsc } from "@heydovetail/website/util/array";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";
import Helmet from "react-helmet";
import { Masonry } from "react-masonry-responsive";

interface Props {
  data: IntegrationIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const { edges = [] } = this.props.data!.allIntegrationsJson!;

    return (
      <>
        <Helmet>
          <title>Integrations – Dovetail</title>
          <meta
            property="og:description"
            content="Connect thousands of your favorite apps to Dovetail through our Zapier integration and templates."
          />
          <meta
            name="description"
            content="Connect thousands of your favorite apps to Dovetail through our Zapier integration and templates."
          />
        </Helmet>
        <LightContainer maxWidth={WIDTH} padding={{ x: PADDING, y: HALF_GAP }}>
          <Flex styled={{ gap: VERTICAL_GAP, layout: "column" }}>
            <Item>
              <Flex styled={{ gap: 48, layout: "column" }}>
                <Item>
                  <HeroText
                    title="Integrations"
                    text="Connect thousands of your favorite apps through our Zapier integration and templates."
                  />
                </Item>
                <Item>
                  <Masonry
                    containerWidth={WIDTH - PADDING * 2}
                    gap={32}
                    items={edges!
                      // TypeScript hates me
                      // .sort(sortComparatorAsc(edge => edge!.node!.steps![0]!.title!))
                      .map(edge => (
                        <IntegrationCard
                          app={edge!.node!.steps![0]!.title!}
                          color={edge!.node!.steps![0]!.color!}
                          icon={edge!.node!.steps![0]!.icon!}
                          title={edge!.node!.title!}
                          path={edge!.node!.path!}
                        />
                      ))}
                    minColumnWidth={220}
                  />
                </Item>
              </Flex>
            </Item>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </LightContainer>
      </>
    );
  }
}

export const pageQuery = graphql`
  query IntegrationIndex {
    allIntegrationsJson {
      edges {
        node {
          title
          path
          steps {
            color
            icon
            title
          }
        }
      }
    }
  }
`;
