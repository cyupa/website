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
    h5: {
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
      backgroundColor: COLORS.i04
    }
  }
});
