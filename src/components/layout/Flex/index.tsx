import { styled } from "typestyle-react";
import { Item } from "../Item";

interface Props {
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between";
  layout?: "row" | "column";
  gap?: number;
}

const ALIGN_ITEMS_DEFAULT = "stretch";
const JUSTIFY_CONTENT_DEFAULT = "flex-start";
const LAYOUT_DEFAULT = "row";
const GAP_DEFAULT = 0;

export const Flex = styled(
  "div",
  ({
    alignItems = ALIGN_ITEMS_DEFAULT,
    justifyContent = JUSTIFY_CONTENT_DEFAULT,
    layout = LAYOUT_DEFAULT,
    gap = GAP_DEFAULT
  }: Props) => {
    const halfGap = gap / 2;
    const leadingPropertyName = layout === "row" ? "marginLeft" : "marginTop";
    const trailingPropertyName = layout === "row" ? "marginRight" : "marginBottom";

    return {
      $nest: {
        [`& > .${Item.class}`]: {
          $nest: {
            "&:first-child": {
              [leadingPropertyName]: 0
            },
            "&:last-child": {
              [trailingPropertyName]: 0
            }
          },

          flexGrow: 1,
          [leadingPropertyName]: halfGap,
          [trailingPropertyName]: halfGap
        }
      },

      alignItems: alignItems,
      display: "flex",
      justifyContent: justifyContent,
      flexDirection: layout
    };
  }
);
