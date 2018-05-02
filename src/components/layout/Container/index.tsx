import { PADDING } from "@heydovetail/website/constants";
import { styled } from "typestyle-react";

interface Props {
  padding?: { x: number; y: number };
  maxWidth?: number;
}

const DEFAULT_PADDING = { x: PADDING, y: 24 };

export const Container = styled("div", ({ maxWidth, padding = DEFAULT_PADDING }: Props) => ({
  margin: "0 auto",
  maxWidth: maxWidth !== undefined ? `${maxWidth}px` : "none",
  paddingTop: padding.y,
  paddingBottom: padding.y,
  paddingLeft: padding.x,
  paddingRight: padding.x
}));
