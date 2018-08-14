import * as React from "react";

interface Props {
  children: () => React.ReactNode;
}

export default class extends React.PureComponent<Props> {
  public render() {
    return this.props.children();
  }
}
