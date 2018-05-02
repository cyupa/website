import { COLORS } from "@heydovetail/website/constants";
import * as React from "react";
import { styled } from "typestyle-react";

interface Props {
  gap?: number;
  shade?: "light" | "dark" | "darker";
  size?: number;
}

export class SmallText extends React.PureComponent<Props> {
  public render() {
    const { children, gap = 0, shade = "dark", size = 12 } = this.props;
    let color: string;

    switch (shade) {
      case "light":
        color = "rgba(255, 255, 255, .8)";
        break;
      case "dark":
        color = "rgba(36, 18, 77, .6)";
        break;
      case "darker":
        color = COLORS.darkpurple;
        break;
      default:
        color = "rgba(36, 18, 77, .6)";
    }

    return <Text styled={{ gap, shade: color, size }}>{children}</Text>;
  }
}

const Text = styled("span", ({ gap, shade, size }: { gap: number; shade: string; size: number }) => ({
  color: shade,
  fontSize: `${size}px`,
  fontWeight: 500,
  lineHeight: "16px",
  overflow: "hidden",
  padding: `0 ${gap}px`,
  textOverflow: "ellipsis"
}));
