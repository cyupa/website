import * as React from "react";
import { COLORS } from "../../../constants";
import { styledViaProps } from "../../../util/styled";

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

    return (
      <Text gap={gap} shade={color} size={size}>
        {children}
      </Text>
    );
  }
}

const Text = styledViaProps(
  "span",
  ({ gap, shade, size }) => `${gap}, ${shade}, ${size}`,
  (props: { gap: number; shade: string; size: number }) => ({
    color: props.shade,
    fontSize: `${props.size}px`,
    fontWeight: 500,
    lineHeight: "16px",
    overflow: "hidden",
    padding: `0 ${props.gap}px`,
    textOverflow: "ellipsis"
  })
);
