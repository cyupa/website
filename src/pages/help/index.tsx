import groupBy = require("lodash.groupby");
import * as React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../../components/layout/Container";
import { Flex } from "../../components/layout/Flex";
import { Item } from "../../components/layout/Item";
import { Masonry } from "../../components/layout/Masonry";
import { HeroText } from "../../components/site/HeroText";
import { PageGroup } from "../../components/site/PageGroup";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../../constants";

interface Props {
  data: any;
}

const categoryTitles = {
  start: "Get started",
  import: "Import your data",
  account: "Manage your account",
  team: "Manage your team",
  export: "Export your data",
  billing: "Billing and payments",
  misc: "Miscellaneous"
};

export default class extends React.PureComponent<Props> {
  public render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    const categories = groupBy(edges, edge => edge.node.frontmatter.category);

    return (
      <>
        <Helmet>
          <title>Help and support – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <Flex gap={TYPICAL_VERTICAL_GAP / 2} layout="column">
            <Item>
              <Flex gap={24} layout="column">
                <Item>
                  <HeroText
                    title="Help and support"
                    text="Running into problems? Browse our help articles below or contact us."
                  />
                </Item>
              </Flex>
            </Item>
            <Item>
              <Masonry
                gap={32}
                items={Object.keys(categories).map((category, i) => ({
                  id: `${i}`,
                  node: (
                    <PageGroup
                      pages={categories[category].map(edge => ({
                        title: edge.node.frontmatter.title,
                        path: edge.node.frontmatter.path
                      }))}
                      title={categoryTitles[category]}
                    />
                  )
                }))}
                minColumnWidth={256}
              />
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            category
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
