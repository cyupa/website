import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { LegalIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";

interface Props {
  data: LegalIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    return (
      <DocumentIndex
        items={[
          ...createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/legal").map((parent, i) => ({
            id: `${i}`,
            node: <PageGroup pages={parent.children} title={parent.title} key={i} />
          })),
          {
            id: "contact",
            node: (
              <ActionCard
                title="Contact us"
                text="Get in touch with us if you have questions about our legal documents."
                buttonText="Email us"
                buttonLocation={locations.email()}
              />
            )
          }
        ]}
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
      filter: { fileAbsolutePath: { regex: "^src/pages/legal/.+\\.md$/" } }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            breadcrumbOnly
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
