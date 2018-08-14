import { Breadcrumbs, COLORS, Flex, Flow, Item } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Lozenge } from "@heydovetail/website/components/site/Lozenge";
import { PageContent } from "@heydovetail/website/components/site/PageContent";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import { DocumentByPathQuery } from "@heydovetail/website/graphql/types";
import { internal } from "@heydovetail/website/routing/locations";
import { graphql } from "@heydovetail/website/util/graphql";
import React from "react";
import { Helmet } from "react-helmet";
import { styled } from "typestyle-react";

interface Props {
  data: DocumentByPathQuery;
  pathContext: { breadcrumb: Array<{ path: string | null; title: string | null }> };
}

export default function DocumentTemplate({ data, pathContext }: Props) {
  const { markdownRemark } = data;
  const { excerpt, frontmatter, html, timeToRead } = markdownRemark!;

  const schema = {
    "@context": "http://schema.org",
    "@type": "Article",
    headline: frontmatter!.title
  };

  return (
    <PageLayout>
      <Helmet>
        <title>{frontmatter!.title} – Dovetail</title>
        <meta name="description" content={excerpt !== null ? excerpt : undefined} />
        <meta property="og:description" content={excerpt !== null ? excerpt : undefined} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter!.title!} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
        <div style={{ maxWidth: WIDTH * 0.75 }}>
          <Flex styled={{ gap: 16, layout: "column" }}>
            <Item>
              <div style={{ color: COLORS.i60, fontWeight: 500 }}>
                <Breadcrumbs
                  crumbs={pathContext.breadcrumb.map(breadcrumb => ({
                    location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
                    text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
                  }))}
                />
              </div>
            </Item>
            <Item>
              <Hero title={frontmatter!.title!} />
            </Item>
            {frontmatter!.date !== null && timeToRead !== null ? (
              <Item>
                <Flow>
                  <Item>
                    <Lozenge>{timeToRead} minute read</Lozenge>
                  </Item>
                  <Item>
                    <Lozenge>Last updated {frontmatter!.date}</Lozenge>
                  </Item>
                </Flow>
              </Item>
            ) : null}
            <Item>
              <PageContent html={html!} />
            </Item>
            <HorizontalRule />
            <Item>
              <div style={{ color: COLORS.i60, fontWeight: 500 }}>
                <Breadcrumbs
                  crumbs={pathContext.breadcrumb.map(breadcrumb => ({
                    location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
                    text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
                  }))}
                />
              </div>
            </Item>
          </Flex>
        </div>
      </Container>
    </PageLayout>
  );
}

const HorizontalRule = styled("hr", {
  backgroundColor: COLORS.i04,
  border: 0,
  margin: "32px 0",
  height: "2px"
});

export const pageQuery = graphql`
  query DocumentByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      html
      timeToRead
    }
  }
`;
