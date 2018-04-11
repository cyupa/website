import * as React from "react";

interface Props {
  center?: boolean;
  maxWidth?: number;
  text: string;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { center = true, maxWidth, text } = this.props;
    return <h1 style={{ marginTop: "32px", maxWidth: maxWidth, textAlign: center ? "center" : "left" }}>{text}</h1>;
  }
}
