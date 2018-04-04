import { BORDER_RADIUS, COLORS, Z_INDEX_HIGHEST } from "../../../constants";

export const error = {
  background: COLORS.orange,
  borderRadius: BORDER_RADIUS,
  bottom: "-4px",
  boxShadow: "0 3px 6px -2px rgba(0, 0, 0, .1)",
  color: COLORS.white,
  fontSize: ".75em",
  fontWeight: 600,
  height: "20px",
  lineHeight: "20px",
  margin: 0,
  padding: "0 10px",
  position: "absolute" as "absolute",
  right: "-4px",
  zIndex: Z_INDEX_HIGHEST
};

export const container = {
  display: "block" as "block",
  position: "relative" as "relative"
};
