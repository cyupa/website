import * as React from "react";

export class BodyOverflow extends React.Component {
  public componentDidMount() {
    window.document.body.style.overflow = "hidden";
  }

  public componentWillUnmount() {
    window.document.body.style.overflow = "auto";
  }

  public render() {
    return this.props.children;
  }
}
