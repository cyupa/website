import { LinkProps } from "@heydovetail/ui-components";
import { Link } from "gatsby";
import React from "react";

interface Props extends LinkProps {
  className: string;
}

export class GatsbyLinkWrapper extends React.PureComponent<Props> {
  public render() {
    const { className, to } = this.props;

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

    return (
      <Link className={className} to={url}>
        {this.props.children}
      </Link>
    );
  }
}
