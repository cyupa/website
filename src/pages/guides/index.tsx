import { ButtonLink, COLORS } from "@heydovetail/ui-components";
import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { GuideIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";

interface Props {
  data: GuideIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/guides").map(parent => ({
      key: parent.title,
      node: <PageGroup pages={parent.children} title={parent.title} />
    }));

    cards.splice(3, 0, {
      key: "slack",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.green} location={locations.slack()}>
              Join our Slack
            </ButtonLink>
          ]}
          title="Join our Slack community"
          text="Join our open Slack community to chat with us and other designers and researchers."
        />
      )
    });

    cards.splice(4, 0, {
      key: "blog",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.purple} location={locations.blog()}>
              Visit blog
            </ButtonLink>
          ]}
          title="Read our blog"
          text="Follow us on Medium for posts about design, research, product development, and more."
        />
      )
    });

    return (
      <DocumentIndex
        items={cards}
        text="Practical articles about design, research and startups."
        title="Design &amp; research guides"
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
