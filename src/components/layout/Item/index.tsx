import React from "react";
import { style } from "typestyle";

export class Item extends React.Component<JSX.IntrinsicElements["span"]> {
  static class = "__item_component";

  public render() {
    const { className: innerClassName, ...rest } = this.props;
    return <span className={`${Item.class} ${className} ${innerClassName !== undefined ? innerClassName : ""}`} {...rest} />;
  }
}

const className = style({
  verticalAlign: "middle"
});
