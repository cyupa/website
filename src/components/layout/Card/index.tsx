import { BORDER_RADIUS, COLORS } from "@heydovetail/ui-components";
import { styled } from "typestyle-react";

export const Card = styled("div", ({ padding }: { padding: number }) => ({
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  padding: padding
}));
