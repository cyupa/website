import { BREAKPOINT_PHABLET, BREAKPOINT_PHONE, BREAKPOINT_TABLET } from "@heydovetail/website/constants";
import * as React from "react";
import * as MediaQuery from "react-responsive";

interface Props {
  children: React.ReactNode;
  device: "phone" | "phablet" | "tablet";
}

export class Show extends React.PureComponent<Props> {
  public render() {
    return <MediaQuery query={`(max-width: ${this.getWidth()}px)`}>{this.props.children}</MediaQuery>;
  }

  private getWidth(): number {
    switch (this.props.device) {
      case "phone":
        return BREAKPOINT_PHONE - 1;
      case "phablet":
        return BREAKPOINT_PHABLET - 1;
      case "tablet":
        return BREAKPOINT_TABLET - 1;
    }
  }
}
