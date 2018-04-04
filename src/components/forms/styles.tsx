import {
  BORDER_RADIUS,
  BOX_SHADOW_BORDER,
  BOX_SHADOW_BORDER_DARKER,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS
} from "../../constants";
import { styledViaProps } from "../../util/styled";

const DISABLED_OPACITY = 0.5;

export const ColoredButtonStyle = styledViaProps(
  "button",
  ({ color, disabled, fullWidth = false, height = 40 }) => JSON.stringify({ color, disabled, fullWidth, height }),
  ({
    color,
    disabled,
    fullWidth = false,
    height = 40
  }: {
    color: string;
    disabled: boolean;
    fullWidth?: boolean;
    height?: number;
  }) => ({
    backgroundColor: color,
    boxShadow: BOX_SHADOW_SITTING,
    color: COLORS.white,
    height: `${height}px`,
    lineHeight: `${height}px`,
    padding: "0 12px",
    pointerEvents: disabled ? "none" : undefined,
    opacity: disabled ? DISABLED_OPACITY : undefined,
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        boxShadow: BOX_SHADOW_SITTING,
        opacity: disabled ? DISABLED_OPACITY : 0.95
      },
      "&:active": {
        opacity: disabled ? DISABLED_OPACITY : 1
      },
      "&:focus": {
        boxShadow: BOX_SHADOW_FOCUS
      }
    }
  })
);

export const DefaultButtonStyle = styledViaProps(
  "button",
  ({ disabled, fullWidth = false, height = 40 }) => JSON.stringify({ disabled, fullWidth, height }),
  ({ disabled, fullWidth = false, height = 40 }: { disabled: boolean; fullWidth?: boolean; height?: number }) => ({
    backgroundColor: COLORS.white,
    boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
    color: COLORS.dp60,
    height: `${height}px`,
    lineHeight: `${height}px`,
    padding: "0 12px",
    pointerEvents: disabled ? "none" : undefined,
    opacity: disabled ? DISABLED_OPACITY : undefined,
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        boxShadow: `${BOX_SHADOW_BORDER_DARKER}, ${BOX_SHADOW_SITTING}`,
        color: COLORS.darkpurple
      },
      "&:active": {
        backgroundColor: COLORS.dp02
      },
      "&:focus": {
        boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_FOCUS}`
      }
    }
  })
);

export const SubtleButtonStyle = styledViaProps(
  "button",
  ({ fullWidth, height }) => JSON.stringify({ fullWidth, height }),
  ({ fullWidth = false, height = 32 }: { fullWidth?: boolean; height?: number }) => ({
    backgroundColor: "transparent",
    color: "inherit",
    height: `${height}px`,
    lineHeight: `${height}px`,
    maxWidth: "100%",
    padding: "0 8px",
    width: fullWidth ? "100%" : "auto",

    $nest: {
      "&:hover": {
        backgroundColor: "rgba(36, 18, 77, 0.04)",
        color: COLORS.purple
      },
      "&:active": {
        backgroundColor: "rgba(36, 18, 77, 0.08)",
        color: COLORS.purple
      },
      "&:focus": {
        boxShadow: BOX_SHADOW_FOCUS
      }
    }
  })
);

export const buttonBaseStyles = {
  borderRadius: BORDER_RADIUS,
  border: "none",
  cursor: "pointer",
  display: "inline-block" as "inline-block",
  fontSize: "14px",
  fontWeight: 500 as 500,
  margin: 0,
  outline: "none",
  overflow: "hidden" as "hidden",
  textOverflow: "ellipsis",
  verticalAlign: "middle",
  whiteSpace: "nowrap" as "nowrap"
};

export const formControl = {
  backgroundColor: COLORS.white,
  borderRadius: BORDER_RADIUS,
  border: "none",
  boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_SITTING}`,
  boxSizing: "border-box" as "border-box",
  color: COLORS.darkpurple,
  fontSize: "14px",
  fontWeight: 500,
  height: "40px",
  lineHeight: "20px",
  outline: "none",
  padding: "0 12px",
  whiteSpace: "pre-wrap" as "pre-wrap",
  width: "100%",

  $nest: {
    "&:hover": {
      boxShadow: `${BOX_SHADOW_BORDER_DARKER}, ${BOX_SHADOW_SITTING}`
    },

    "&:focus": {
      boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_FOCUS}`
    },

    "&::placeholder, &::-webkit-input-placeholder": {
      color: COLORS.dp40
    }
  }
};
