import * as React from "react";
import { COLORS } from "../../../constants";
import { styledViaProps } from "../../../util/styled";
import { Container } from "../../layout/Container";

interface Props {
  backgroundColor?: string;
  horizontalPadding?: number;
  maxWidth?: number;
  verticalPadding?: number;
}

export class LightContainer extends React.PureComponent<Props> {
  public render() {
    const { backgroundColor = COLORS.white } = this.props;

    return (
      <Wrapper backgroundColor={backgroundColor}>
        <Container {...this.props} />
      </Wrapper>
    );
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ backgroundColor }: { backgroundColor: string }) => JSON.stringify({ backgroundColor }),
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor,

    $nest: {
      a: {
        color: COLORS.purple
      }
    }
  })
);
