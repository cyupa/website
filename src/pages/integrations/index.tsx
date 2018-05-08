import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { IntegrationCard } from "@heydovetail/website/components/site/IntegrationCard";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { IntegrationIndexQuery } from "@heydovetail/website/graphql/types";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";
import Helmet from "react-helmet";
import { Masonry } from "react-masonry-responsive";

interface Props {
  data: IntegrationIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const { edges } = this.props.data!.allIntegrationsJson!;

    return (
      <>
        <Helmet>
          <title>Integrations – Dovetail</title>
        </Helmet>
        <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
          <Flex styled={{ gap: 48, layout: "column" }}>
            <Item>
              <HeroText
                title="Integrations"
                text="Connect thousands of your favorite apps through our partnership with Zapier."
              />
            </Item>
            <Item>
              <Masonry
                containerWidth={WIDTH}
                gap={32}
                items={edges!.map(edge => (
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
        </Container>
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
