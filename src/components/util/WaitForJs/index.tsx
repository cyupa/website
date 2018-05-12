import React from "react";

// Simple component that hides its children in the SSR build
// and then shows them when componentDidMount() is called.
//
// Used to avoid rendering components that rely on JavaScript to work.

export class WaitForJs extends React.PureComponent {
  private span: HTMLSpanElement | null = null;

  public componentDidMount() {
    if (this.span !== null) {
      this.span.style.display = "block";
    }
  }

  public render() {
    return (
      <span
        ref={span => {
          this.span = span;
        }}
        style={{ display: "none" }}
      >
        {this.props.children}
      </span>
    );
  }
}
