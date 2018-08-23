import React from "react";

// Simple component that hides its children in the SSR build
// and then shows them when componentDidMount() is called.
//
// Used to avoid rendering components that rely on JavaScript to work.

interface State {
  mounted: boolean;
}

export class WaitForJs extends React.PureComponent<{}, State> {
  public state: State = {
    mounted: false
  };

  // private span: HTMLSpanElement | null = null;

  public componentDidMount() {
    this.setState({ mounted: true });
    // if (this.span !== null) {
    //   this.span.style.display = "block";
    // }
  }

  public render() {
    return <span style={this.state.mounted ? undefined : { display: "none" }}>{this.props.children}</span>;
  }
}
