import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";

export const Card = styledViaProps(
  "div",
  ({ padding }: { padding: number }) => JSON.stringify({ padding }),
  ({ padding }) => ({
    backgroundColor: COLORS.p04,
    borderRadius: BORDER_RADIUS,
    padding: padding
  })
);
