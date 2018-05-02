import React from "react";

interface Props {
  colors: string[];
}

interface State {
  color: number;
}

export class ColorWheel extends React.PureComponent<Props> {
  public state: State = {
    color: 0
  };

  private id = 0;

  public componentDidMount() {
    this.id = window.setInterval(this.timer, 2000);
  }

  public componentWillUnMount() {
    window.clearInterval(this.id);
  }

  private readonly timer = () => {
    this.setState({ color: this.state.color < this.props.colors.length - 1 ? this.state.color + 1 : 0 });
  };

  public render() {
    return (
      <span style={{ color: this.props.colors[this.state.color], transition: "color 500ms ease-in-out" }}>
        {this.props.children}
      </span>
    );
  }
}
