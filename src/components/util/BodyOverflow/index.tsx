import React from "react";

interface Props {
  children?: React.ReactNode;
}

export class BodyOverflow extends React.Component<Props> {
  public componentDidMount() {
    window.document.body.style.overflow = "hidden";
  }

  public componentWillUnmount() {
    window.document.body.style.overflow = "auto";
  }

  public render() {
    return this.props.children !== undefined ? this.props.children : null;
  }
}
