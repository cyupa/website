import { LinkProps } from "@heydovetail/ui-components";
import { Link } from "gatsby";
import React from "react";

declare global {
  interface Window {
    navigatingToLink: boolean;
  }
}

// Workaround for https://github.com/gatsbyjs/gatsby/issues/7454
// tslint:disable-next-line
if (typeof window !== "undefined") {
  window.navigatingToLink = false;
}

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
      <Link
        className={className}
        // Workaround for https://github.com/gatsbyjs/gatsby/issues/7454
        onClick={() => {
          window.navigatingToLink = true;
        }}
        to={url}
        style={style}
      >
        {this.props.children}
      </Link>
    );
  }
}
