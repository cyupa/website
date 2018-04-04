import * as React from "react";
import * as MediaQuery from "react-responsive";
import { BREAKPOINT_PHABLET, BREAKPOINT_PHONE, BREAKPOINT_TABLET } from "../../../constants";

interface Props {
  children: React.ReactNode;
  device: "phone" | "phablet" | "tablet";
}

export class Hide extends React.PureComponent<Props> {
  public render() {
    return <MediaQuery query={`(min-width: ${this.width()}px)`}>{this.props.children}</MediaQuery>;
  }

  private width(): number {
    switch (this.props.device) {
      case "phone":
        return BREAKPOINT_PHONE;
      case "phablet":
        return BREAKPOINT_PHABLET;
      case "tablet":
        return BREAKPOINT_TABLET;
    }
  }
}
