import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Container } from "../../layout/Container";

interface Props {
  horizontalPadding?: number;
  maxWidth?: number;
  verticalPadding?: number;
}

export class LightContainer extends React.PureComponent<Props> {
  public render() {
    return (
      <Wrapper>
        <Container {...this.props} />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  $nest: {
    a: {
      color: COLORS.purple
    }
  }
});
