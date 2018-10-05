import { Flex, Item } from "@heydovetail/ui-components";
import { LightContainer } from "@heydovetail/website/components/layout/LightContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { IntegrationCard } from "@heydovetail/website/components/site/IntegrationCard";
import { HALF_GAP, PADDING, VERTICAL_GAP, WIDTH } from "@heydovetail/website/constants";
import { IntegrationIndexQuery } from "@heydovetail/website/graphql/types";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import { omitNull, sortComparatorAsc } from "@heydovetail/website/util/array";
import { graphql } from "gatsby";
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
      <PageLayout>
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
                  <Hero center title="Integrations" subtitle="Connect thousands of your favorite apps through Zapier." />
                </Item>
                <Item>
                  <Masonry
                    containerWidth={WIDTH - PADDING * 2}
                    gap={32}
                    items={omitNull(edges!)
                      .sort(sortComparatorAsc(edge => edge!.node!.steps![0]!.title!))
                      .map(edge => ({
                        key: edge!.node!.path!,
                        node: (
                          <IntegrationCard
                            app={edge!.node!.steps![0]!.title!}
                            color={edge!.node!.steps![0]!.color!}
                            icon={edge!.node!.steps![0]!.icon!}
                            title={edge!.node!.title!}
                            path={edge!.node!.path!}
                          />
                        )
                      }))}
                    minColumnWidth={256}
                  />
                </Item>
              </Flex>
            </Item>
            <Item>
              <CenteredSignUp />
            </Item>
          </Flex>
        </LightContainer>
      </PageLayout>
    );
  }
}

export const pageQuery = graphql`
  {
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
