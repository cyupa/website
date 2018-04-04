import { styledViaProps } from "../../../util/styled";
import { Item } from "../Item";

interface Props {
  gap?: number;
  rowGap?: number;
}

export const Flow = styledViaProps(
  "span",
  ({ gap, rowGap }) => JSON.stringify({ gap, rowGap }),
  ({ gap = 8, rowGap = 8 }: Props) => {
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
  }
);
