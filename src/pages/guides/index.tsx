import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { GuideIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";

interface Props {
  data: GuideIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/guides").map((parent, i) => ({
      id: `${i}`,
      node: <PageGroup pages={parent.children} title={parent.title} key={i} />
    }));

    cards.splice(3, 0, {
      id: "contact",
      node: (
        <ActionCard
          title="Read more"
          text="Check out our blog for more articles about research and startup life."
          buttonText="Visit blog"
          buttonLocation={locations.blog()}
        />
      )
    });

    return (
      <DocumentIndex
        items={cards}
        text="We’ve compiled a few guides to help you master customer feedback and user research.."
        title="Research guides"
      />
    );
  }
}

export const pageQuery = graphql`
  query GuideIndex {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "^/src/pages/guides/.*\\.md$/" } }
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
