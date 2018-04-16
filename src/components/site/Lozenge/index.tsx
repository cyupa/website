import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { styled } from "@heydovetail/website/util/styled";

export const Lozenge = styled("div", {
  backgroundColor: COLORS.p08,
  borderRadius: BORDER_RADIUS,
  display: "inline-block",
  color: COLORS.purple,
  fontSize: "12px",
  fontWeight: 500,
  height: "24px",
  lineHeight: "16px",
  padding: "4px 8px"
});
