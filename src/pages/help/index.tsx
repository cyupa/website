import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { HelpIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { generateDocumentCategoryGroups } from "@heydovetail/website/util/categories";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";

interface Props {
  data: HelpIndexQuery;
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

    const categoryCards = generateDocumentCategoryGroups(articles, "help");

    categoryCards.splice(1, 0, {
      id: "contact",
      node: (
        <ActionCard
          title="Contact support"
          text="Get in touch with us. We’ll respond quickly and help you get everything sorted."
          buttonText="Email support"
          buttonLocation={locations.email()}
        />
      )
    });

    return (
      <DocumentIndex
        items={categoryCards}
        text="Running into problems? Browse our help articles below or contact us."
        title="Help and support"
      />
    );
  }
}

export const pageQuery = graphql`
  query HelpIndex {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(help)/.*\\.md$/" } }
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
