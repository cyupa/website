import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { generateDocumentCategoryGroups } from "@heydovetail/website/util/categories";
import * as React from "react";

interface Props {
  // tslint:disable-next-line:no-any
  data: any;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;
    const categoryCards = generateDocumentCategoryGroups(edges, "legal");

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
  query LegalIndexQuery {
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
          }
        }
      }
    }
  }
`;
