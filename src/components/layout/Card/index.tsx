import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { styled } from "typestyle-react";

export const Card = styled("div", ({ padding }: { padding: number }) => ({
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  padding: padding
}));
