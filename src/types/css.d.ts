import * as types from "typestyle/lib/types";

declare module "typestyle/lib/types" {
  interface CSSProperties {
    "-moz-osx-font-smoothing"?: string;
    "-webkit-font-smoothing"?: string;
  }
}
