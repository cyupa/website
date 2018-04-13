import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { HelpIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";

interface Props {
  data: HelpIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const categoryCards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/help").map((parent, i) => ({
      id: `${i}`,
      node: <PageGroup pages={parent.children} title={parent.title} key={i} />
    }));

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
      filter: { fileAbsolutePath: { regex: "^/src/pages/help/.*\\.md$/" } }
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
