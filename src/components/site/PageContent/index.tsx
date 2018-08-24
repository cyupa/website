import { BORDER_RADIUS, COLORS } from "@heydovetail/ui-components";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  html: string;
}

export class PageContent extends React.PureComponent<Props> {
  public render() {
    return <StyledContent dangerouslySetInnerHTML={{ __html: this.props.html }} />;
  }
}

export const StyledContent = styled("div", {
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
      backgroundColor: COLORS.p08,
      borderRadius: BORDER_RADIUS,
      padding: "0 4px"
    },
    blockquote: {
      color: COLORS.purple,
      fontSize: 24,
      fontStyle: "italic",
      margin: "32px 0",
      lineHeight: "36px"
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
      margin: "16px 0",
      overflow: "hidden"
    },
    table: {
      borderCollapse: "collapse",
      display: "table",
      fontSize: "14px",
      textAlign: "left",
      overflowX: "scroll",
      tableLayout: "fixed",
      width: "100%"
    },
    "th, td": {
      lineHeight: "20px",
      overflow: "hidden",
      outline: `2px solid ${COLORS.white}`,
      padding: "8px 12px",
      textOverflow: "ellipsis",
      verticalAlign: "baseline"
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
