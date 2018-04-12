import { styledViaProps } from "@heydovetail/website/util/styled";

interface Props {
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  gridTemplateColumns?: string;
  gap?: number;
  justifyItems?: "flex-start" | "flex-end" | "center";
}

const ALIGN_ITEMS_DEFAULT = "stretch";
const JUSTIFY_ITEMS_DEFAULT = "stretch";
const DEFAULT_GRID_TEMPLATE_COLUMNS = "1fr 1fr";
const DEFAULT_GAP = 24;

export const Grid = styledViaProps(
  "div",
  ({
    alignItems = ALIGN_ITEMS_DEFAULT,
    gridTemplateColumns = DEFAULT_GRID_TEMPLATE_COLUMNS,
    gap = DEFAULT_GAP,
    justifyItems = JUSTIFY_ITEMS_DEFAULT
  }) => JSON.stringify({ alignItems, gridTemplateColumns, gap, justifyItems }),
  ({
    alignItems = ALIGN_ITEMS_DEFAULT,
    gridTemplateColumns = DEFAULT_GRID_TEMPLATE_COLUMNS,
    gap = DEFAULT_GAP,
    justifyItems = JUSTIFY_ITEMS_DEFAULT
  }: Props) => ({
    alignItems: alignItems,
    display: "grid",
    gridGap: `${gap}px`,
    gridTemplateColumns: `${gridTemplateColumns}`,
    justifyItems: justifyItems
  })
);
