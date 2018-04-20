import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { COLORS } from "@heydovetail/website/constants";
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
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/help").map((parent, i) => ({
      id: `${i}`,
      node: <PageGroup pages={parent.children} title={parent.title} key={i} />
    }));

    cards.splice(1, 0, {
      id: "contact",
      node: (
        <ActionCard
          title="Contact us"
          text="Say hi! We’re based in Sydney and usually respond within a couple of hours."
          buttonText="Email support"
          buttonLocation={locations.email()}
        />
      )
    });

    cards.splice(2, 0, {
      id: "slack",
      node: (
        <ActionCard
          title="Chat with us on Slack"
          text="Join our open Slack community to chat with us and other Dovetail users."
          buttonColor={COLORS.green}
          buttonText="Join our Slack"
          buttonLocation={locations.slack()}
        />
      )
    });

    cards.splice(4, 0, {
      id: "twitter",
      node: (
        <ActionCard
          title="Find us on Twitter"
          text="Follow @hidovetail for product updates, news, and answers to your questions."
          buttonColor={COLORS.blue}
          buttonText="Find us on Twitter"
          buttonLocation={locations.twitter()}
        />
      )
    });

    cards.splice(9, 0, {
      id: "learn-more",
      node: (
        <ActionCard
          title="Learn more"
          text="Check out our Medium blog for product updates, company news, and tips &amp; tricks."
          buttonText="Visit blog"
          buttonLocation={locations.blog()}
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
