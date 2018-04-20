import { PADDING } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";

interface Props {
  padding?: { x: number; y: number };
  maxWidth?: number;
}

const DEFAULT_PADDING = { x: PADDING, y: 24 };

export const Container = styledViaProps(
  "div",
  ({ maxWidth, padding = DEFAULT_PADDING }) => JSON.stringify({ maxWidth, padding }),
  ({ maxWidth, padding = DEFAULT_PADDING }: Props) => ({
    margin: "0 auto",
    maxWidth: maxWidth !== undefined ? `${maxWidth}px` : "none",
    paddingTop: padding.y,
    paddingBottom: padding.y,
    paddingLeft: padding.x,
    paddingRight: padding.x
  })
);
