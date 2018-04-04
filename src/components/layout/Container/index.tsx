import { styledViaProps } from "../../../util/styled";

interface Props {
  horizontalPadding?: number;
  maxWidth?: number;
  verticalPadding?: number;
}

const DEFAULT_HORIZONTAL_PADDING = 16;
const DEFAULT_VERTICAL_PADDING = 8;

export const Container = styledViaProps(
  "div",
  ({ maxWidth, horizontalPadding = DEFAULT_HORIZONTAL_PADDING, verticalPadding = DEFAULT_VERTICAL_PADDING }) =>
    JSON.stringify({ maxWidth, horizontalPadding, verticalPadding }),
  ({ maxWidth, horizontalPadding = DEFAULT_HORIZONTAL_PADDING, verticalPadding = DEFAULT_VERTICAL_PADDING }: Props) => ({
    margin: "0 auto",
    maxWidth: maxWidth !== undefined ? `${maxWidth}px` : "none",
    paddingTop: `${verticalPadding}px`,
    paddingBottom: `${verticalPadding}px`,
    paddingLeft: `${horizontalPadding}px`,
    paddingRight: `${horizontalPadding}px`
  })
);
