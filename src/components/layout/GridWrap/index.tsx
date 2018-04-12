import { styledViaProps } from "@heydovetail/website/util/styled";
import { Item } from "../Item";

interface Props {
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  childMaxWidth?: number;
  gap: number;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between";
}

export const GridWrap = styledViaProps(
  "div",
  ({ alignItems, childMaxWidth, gap, justifyContent }) =>
    JSON.stringify({
      alignItems,
      childMaxWidth,
      gap,
      justifyContent
    }),
  ({ alignItems, childMaxWidth, gap, justifyContent }: Props) => {
    const halfGap = gap / 2;

    return {
      $nest: {
        [`& > .${Item.class}`]: {
          flex: `1 1 ${childMaxWidth}px`,
          margin: halfGap
        }
      },

      alignItems: alignItems,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justifyContent,
      margin: -halfGap
    };
  }
);
