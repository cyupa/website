import * as React from "react";
import { Blue } from "../components/Blue";

export default class extends React.Component {
  public render() {
    return (
      <div>
        <h1>Hello Typescript world!</h1>
        <p>
          This site is named{" "}
          <Blue>
            <strong>Dovetail</strong>
          </Blue>
        </p>
      </div>
    );
  }
}
