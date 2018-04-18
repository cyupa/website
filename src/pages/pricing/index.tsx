import * as React from "react";
import { Redirect } from "react-router";

export default class extends React.PureComponent {
  public render() {
    return <Redirect to={"/product/pricing"} />;
  }
}
