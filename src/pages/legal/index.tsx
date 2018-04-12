import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Masonry } from "@heydovetail/website/components/layout/Masonry";
import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { sortComparatorAsc } from "@heydovetail/website/util/array";
import { legalCategories, legalCategoriesOrder } from "@heydovetail/website/util/categories";
import groupBy = require("lodash.groupby");
import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  // tslint:disable-next-line:no-any
  data: any;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    const categories = groupBy(edges, edge => edge.node.frontmatter.category);
    const categoryCards = Object.keys(categories)
      .map((category, i) => ({
        id: `${i}`,
        node: (
          <PageGroup
            pages={categories[category].map(edge => ({
              title: edge.node.frontmatter.title,
              path: edge.node.frontmatter.path
            }))}
            title={legalCategories[category]}
          />
        ),
        sortKey: legalCategoriesOrder.indexOf(category)
      }))
      .sort(sortComparatorAsc(card => card.sortKey));

    categoryCards.splice(2, 0, {
      id: "contact",
      node: (
        <ActionCard
          title="Contact us"
          text="Get in touch with us if you have questions about our legal documents."
          buttonText="Email us"
          buttonLocation={locations.email()}
        />
      ),
      sortKey: 0
    });

    return (
      <>
        <Helmet>
          <title>Terms and Policies – Dovetail</title>
        </Helmet>
        <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
          <Flex gap={48} layout="column">
            <Item>
              <HeroText title="Terms and Policies" text="One place for our legal documentation and policies." />
            </Item>
            <Item>
              <Masonry gap={32} items={categoryCards} minColumnWidth={256} />
            </Item>
          </Flex>
        </Container>
      </>
    );
  }
}

export const pageQuery = graphql`
  query LegalIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(legal)/.*\\.md$/" } }
    ) {
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
