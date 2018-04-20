import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Props {
  html: string;
}

export class PageContent extends React.PureComponent<Props> {
  public render() {
    return <Content dangerouslySetInnerHTML={{ __html: this.props.html }} />;
  }
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
    h4: {
      marginTop: "32px"
    },
    h5: {
      marginTop: "24px",
      fontWeight: 500
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
      boxShadow: `0 0 0 1px ${COLORS.i08}`,
      margin: "32px 0",
      overflow: "hidden"
    },
    table: {
      borderSpacing: "4px",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      margin: "-4px",
      overflowX: "scroll",
      width: "100%"
    },
    "th, td": {
      lineHeight: "20px",
      padding: "8px 12px",
      verticalAlign: "top"
    },
    td: {
      backgroundColor: COLORS.p04
    },
    th: {
      backgroundColor: COLORS.p08,
      fontWeight: 500
    }
  }
});
