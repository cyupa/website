import * as React from "react";
import { styled } from "../../../util/styled";
import { Center } from "../../layout/Center";

interface Props {
  text: string;
}

export class HeroText extends React.PureComponent<Props> {
  public render() {
    const { text } = this.props;
    return (
      <Center>
        <Heading>
          <h1>{text}</h1>
        </Heading>
      </Center>
    );
  }
}

const Heading = styled("div", {
  marginTop: "32px"
});
