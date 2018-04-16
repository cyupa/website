import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Breadcrumbs } from "@heydovetail/website/components/site/Breadcrumbs";
import { Date } from "@heydovetail/website/components/site/Date";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { PageContent } from "@heydovetail/website/components/site/PageContent";
import { TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { DocumentByPathQuery } from "@heydovetail/website/graphql/types";
import { internal } from "@heydovetail/website/routing/locations";
import { graphql } from "@heydovetail/website/util/graphql";
import * as React from "react";
import { Helmet } from "react-helmet";

interface Props {
  data: DocumentByPathQuery;
  pathContext: { breadcrumb: Array<{ path: string | null; title: string | null }> };
}

export default function DocumentTemplate({ data, pathContext }: Props) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark!;

  return (
    <>
      <Helmet>
        <title>{frontmatter!.title} – Dovetail</title>
      </Helmet>
      <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
        <div style={{ maxWidth: TYPICAL_PAGE_WIDTH * 0.75 }}>
          <Breadcrumbs
            crumbs={pathContext.breadcrumb.map(breadcrumb => ({
              location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
              text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
            }))}
          />
          <Flex gap={24} layout="column">
            <Item>
              <HeroText center={false} title={frontmatter!.title!} />
            </Item>
            <Item>
              <Date>Last updated {frontmatter!.date}</Date>
            </Item>
          </Flex>
          <PageContent html={html!} />
        </div>
      </Container>
    </>
  );
}

export const pageQuery = graphql`
  query DocumentByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
