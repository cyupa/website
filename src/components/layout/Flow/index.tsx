import { styled } from "typestyle-react";
import { Item } from "../Item";

interface Props {
  gap?: number;
  rowGap?: number;
}

export const Flow = styled("span", ({ gap = 8, rowGap = 8 }: Props) => {
  const halfRowGap = rowGap / 2;
  return {
    $nest: {
      [`& > .${Item.class}`]: {
        display: "inline-block",
        marginBottom: halfRowGap,
        marginRight: gap,
        marginTop: halfRowGap
      },
      [`& > .${Item.class}:last-of-type`]: {
        display: "inline-block",
        marginBottom: halfRowGap,
        marginRight: "0",
        marginTop: halfRowGap
      }
    },

    display: "inline-block",
    marginBottom: -halfRowGap,
    marginTop: -halfRowGap,
    verticalAlign: "top"
  };
});
