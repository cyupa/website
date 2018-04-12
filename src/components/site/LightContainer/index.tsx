import { Container } from "@heydovetail/website/components/layout/Container";
import { COLORS } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

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
