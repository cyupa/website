import { LinkProps } from "@heydovetail/ui-components";
import { Link } from "gatsby";
import React from "react";

export class GatsbyLinkWrapper extends React.PureComponent<LinkProps> {
  public render() {
    const { className, to, style } = this.props;

    let url = "";

    if (typeof to === "string") {
      url = to;
    } else {
      if (to.pathname !== undefined) {
        url = to.pathname;
      }

      if (to.search !== undefined) {
        url = `${to}?${to.search}`;
      }

      if (to.hash !== undefined) {
        url = `${to}#${to.hash}`;
      }
    }

    return (
      <Link className={className} to={url} style={style}>
        {this.props.children}
      </Link>
    );
  }
}
