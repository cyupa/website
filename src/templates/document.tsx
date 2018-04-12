import { Container } from "@heydovetail/website/components/layout/Container";
import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Breadcrumbs } from "@heydovetail/website/components/site/Breadcrumbs";
import { Date } from "@heydovetail/website/components/site/Date";
import { HeroText } from "@heydovetail/website/components/site/HeroText";
import { BORDER_RADIUS, COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "@heydovetail/website/constants";
import { locations } from "@heydovetail/website/routing/locations";
import { helpCategories } from "@heydovetail/website/util/categories";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { Helmet } from "react-helmet";

export default function DocumentTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} – Dovetail</title>
      </Helmet>
      <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
        <div style={{ maxWidth: TYPICAL_PAGE_WIDTH * 0.75 }}>
          <Breadcrumbs
            crumbs={[{ location: locations.help(), text: "All help articles" }, { text: helpCategories[frontmatter.category] }]}
          />
          <Flex gap={24} layout="column">
            <Item>
              <HeroText center={false} title={frontmatter.title} />
            </Item>
            <Item>
              <Date>Last updated {frontmatter.date}</Date>
            </Item>
          </Flex>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
    </>
  );
}

const Content = styled("div", {
  overflow: "hidden",

  $nest: {
    p: {
      margin: "16px 0"
    },
    a: {
      color: COLORS.purple,

      $nest: {
        "&:hover": {
          textDecoration: "underline"
        }
      }
    },
    h2: {
      marginTop: "64px"
    },
    h3: {
      marginTop: "48px"
    },
    code: {
      backgroundColor: COLORS.i04,
      borderRadius: BORDER_RADIUS,
      padding: "0 4px"
    },
    blockquote: {
      borderLeft: `2px solid ${COLORS.indigo}`,
      padding: "0 32px",
      margin: "32px",
      fontStyle: "italic"
    },
    hr: {
      backgroundColor: COLORS.i04,
      border: 0,
      margin: "32px 0",
      height: "2px"
    },
    ".gatsby-resp-image-wrapper": {
      borderRadius: BORDER_RADIUS,
      margin: "32px 0",
      overflow: "hidden"
    },
    table: {
      borderRadius: BORDER_RADIUS,
      borderSpacing: "4px",
      fontSize: "14px",
      textAlign: "left",
      overflowX: "scroll"
    },
    "th, td": {
      lineHeight: "20px",
      padding: "8px 12px",
      verticalAlign: "top"
    },
    td: {
      backgroundColor: COLORS.i04
    },
    th: {
      backgroundColor: COLORS.i08,
      fontWeight: 500
    }
  }
});

export const pageQuery = graphql`
  query DocumentByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
