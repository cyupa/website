import React from "react";
import ReactDOM from "react-dom";

export class Portal extends React.Component {
  private node: HTMLDivElement | undefined;

  public componentWillUnmount() {
    if (this.node !== undefined) {
      document.body.removeChild(this.node);
    }
  }

  public render() {
    // Portals don't work in react-test-renderer, the process.env.NODE_ENV check
    // skips them in testing. Similar issue:
    // https://github.com/airbnb/enzyme/issues/1150
    if (process.env.NODE_ENV !== "test") {
      // `#render()` is called before `#componentDidMount()`, so we want to
      // create the node at this point so we can return a portal in the initial
      // render.
      if (this.node === undefined) {
        this.node = document.body.appendChild(document.createElement("div"));
      }
      return ReactDOM.createPortal(this.props.children, this.node);
    }
    return null;
  }
}
