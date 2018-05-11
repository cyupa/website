import { BORDER_RADIUS, COLORS } from "@heydovetail/ui-components";
import { styled } from "typestyle-react";

export const Date = styled("span", {
  backgroundColor: COLORS.i04,
  borderRadius: BORDER_RADIUS,
  color: COLORS.i60,
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "16px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  padding: "8px 12px",
  whiteSpace: "nowrap"
});
