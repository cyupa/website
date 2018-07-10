import { COLORS } from "@heydovetail/ui-components";
import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { HelpIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";

interface Props {
  data: HelpIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/help").map(parent => ({
      key: parent.title,
      node: <PageGroup pages={parent.children} title={parent.title} />
    }));

    cards.splice(1, 0, {
      key: "email",
      node: (
        <ActionCard
          buttonLocation={locations.email()}
          buttonText="Email support"
          showPeople
          text="Say hi! We’re based in Sydney and usually respond within a couple of hours."
          title="Contact us"
        />
      )
    });

    cards.splice(2, 0, {
      key: "slack",
      node: (
        <ActionCard
          buttonColor={COLORS.green}
          buttonLocation={locations.slack()}
          buttonText="Join our Slack"
          text="Join our open Slack community to chat with us and other Dovetail users."
          title="Chat with us on Slack"
        />
      )
    });

    cards.splice(4, 0, {
      key: "twitter",
      node: (
        <ActionCard
          buttonColor={COLORS.blue}
          buttonLocation={locations.twitter()}
          buttonText="Follow us on Twitter"
          text="Follow @hidovetail for product updates, news, and answers to your questions."
          title="Find us on Twitter"
        />
      )
    });

    cards.splice(9, 0, {
      key: "blog",
      node: (
        <ActionCard
          buttonLocation={locations.blog()}
          buttonText="Visit blog"
          text="Check out our Medium blog for product updates, company news, and tips &amp; tricks."
          title="Learn more"
        />
      )
    });

    return (
      <DocumentIndex
        items={cards}
        text="Browse our help documentation and find ways to get in touch with us."
        title="Help Center"
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
