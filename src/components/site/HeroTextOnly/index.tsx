import * as React from "react";
import { Center } from "../../layout/Center";

export class HeroTextOnly extends React.PureComponent {
  public render() {
    return (
      <Center>
        <h1>{this.props.children}</h1>
      </Center>
    );
  }
}
