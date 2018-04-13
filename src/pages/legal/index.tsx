import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { LegalIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { generateDocumentCategoryGroups } from "@heydovetail/website/util/categories";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";

interface Props {
  data: LegalIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const articles = this.props.data
      .allMarkdownRemark!.edges!.filter(edge => edge!.node!.frontmatter!.category !== null)
      .map(edge => {
        const frontmatter = edge!.node!.frontmatter!;

        return {
          category: frontmatter.category!,
          path: frontmatter.path!,
          title: frontmatter.title!,
          weight: frontmatter.weight!
        };
      });
    const categoryCards = generateDocumentCategoryGroups(articles, "legal");

    categoryCards.splice(2, 0, {
      id: "contact",
      node: (
        <ActionCard
          title="Contact us"
          text="Get in touch with us if you have questions about our legal documents."
          buttonText="Email us"
          buttonLocation={locations.email()}
        />
      )
    });

    return (
      <DocumentIndex
        items={categoryCards}
        text="One place for our legal documentation and policies."
        title="Terms and policies"
      />
    );
  }
}

export const pageQuery = graphql`
  query LegalIndex {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(legal)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            date(formatString: "MMMM DD, YYYY")
            path
            title
            weight
          }
        }
      }
    }
  }
`;
