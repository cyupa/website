import { BORDER_RADIUS, BOX_SHADOW_BORDER_LIGHTER, BOX_SHADOW_LARGE } from "@heydovetail/website/constants";
import { styled } from "typestyle-react";

export const IntegrationIcon = styled("div", {
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER_LIGHTER}, ${BOX_SHADOW_LARGE}`,
  lineHeight: 0,
  padding: "16px"
});
