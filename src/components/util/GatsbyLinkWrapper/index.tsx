import { Link } from "gatsby";
import React from "react";
import { LinkProps } from "react-router-dom";

export class GatsbyLinkWrapper extends React.PureComponent<LinkProps> {
  public render() {
    const { to } = this.props;

    let url = "";

    if (to.pathname !== undefined) {
      url = to.pathname;
    }

    if (to.search !== undefined) {
      url = `${url}?${to.search}`;
    }

    if (to.hash !== undefined) {
      url = `${url}#${to.hash}`;
    }

    return <Link to={url}>{this.props.children}</Link>;
  }
}
