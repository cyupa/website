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
    const categoryCards = generateDocumentCategoryGroups(edges, "help");

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
  query HelpIndexQuery {
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
          }
        }
      }
    }
  }
`;
