import { ActionCard } from "@heydovetail/website/components/site/ActionCard";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { LegalIndexQuery } from "@heydovetail/website/graphql/types";
import { locations } from "@heydovetail/website/routing/locations";
import { DocumentIndex } from "@heydovetail/website/sections/DocumentIndex";
import { createPageHierarchy } from "@heydovetail/website/util/createPageHierarchy";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";
import { ButtonLink, COLORS } from "../../../node_modules/@heydovetail/ui-components";

interface Props {
  data: LegalIndexQuery;
}

export default class extends React.PureComponent<Props> {
  public render() {
    const cards = createPageHierarchy(this.props.data.allMarkdownRemark, "src/pages/legal").map(parent => ({
      key: parent.title,
      node: <PageGroup pages={parent.children} title={parent.title} />
    }));

    cards.push({
      key: "contact",
      node: (
        <ActionCard
          actions={[
            <ButtonLink color={COLORS.purple} location={locations.email()}>
              Email us
            </ButtonLink>
          ]}
          title="Contact us"
          text="Get in touch with us if you have questions about our legal documents."
        />
      )
    });

    return (
      <DocumentIndex items={cards} text="One place for our legal documentation and policies." title="Terms and policies" />
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
