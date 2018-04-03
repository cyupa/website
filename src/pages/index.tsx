import * as React from "react";
import { styled } from "../util/styled";

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

const Blue = styled("span", {
  color: "blue"
});
