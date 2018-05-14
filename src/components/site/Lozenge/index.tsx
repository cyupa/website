import { BORDER_RADIUS, COLORS } from "@heydovetail/ui-components";
import { styled } from "typestyle-react";

export const Lozenge = styled("div", {
  backgroundColor: COLORS.i04,
  borderRadius: BORDER_RADIUS,
  display: "inline-block",
  color: COLORS.i60,
  fontSize: "12px",
  fontWeight: 500,
  height: "24px",
  lineHeight: "16px",
  padding: "4px 8px"
});
