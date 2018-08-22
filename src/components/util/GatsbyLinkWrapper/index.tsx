import { Link } from "gatsby";
import React from "react";

// HACK: This should really come from react-router-dom
// via @heydovetail/ui-components
interface LocationDescriptorObject {
  hash?: string;
  key?: string;
  pathname?: string;
  search?: string;
  // tslint:disable-next-line:no-any
  state?: any;
}

interface Props {
  className: string;
  to: LocationDescriptorObject;
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
