import * as React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../components/layout/Container";
import { Flex } from "../components/layout/Flex";
import { Item } from "../components/layout/Item";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { Date } from "../components/site/Date";
import { HeroText } from "../components/site/HeroText";
import { BORDER_RADIUS, COLORS, TYPICAL_PAGE_WIDTH, TYPICAL_VERTICAL_GAP } from "../constants";
import { locations } from "../routing/locations";
import { styled } from "../util/styled";

export default function DocumentationTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} – Dovetail</title>
      </Helmet>
      <Container maxWidth={TYPICAL_PAGE_WIDTH} verticalPadding={TYPICAL_VERTICAL_GAP / 2}>
        <div style={{ maxWidth: TYPICAL_PAGE_WIDTH * 0.75 }}>
          <Breadcrumbs crumbs={[{ location: locations.help(), text: "All help articles" }, { text: frontmatter.title }]} />
          <Flex gap={24} layout="column">
            <Item>
              <HeroText center={false} text={frontmatter.title} />
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
    }
  }
});

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
