import { Container } from "@heydovetail/website/components/layout/Container";
import { COLORS, HALF_GAP, LIGHT_TEXT_OPACITY } from "@heydovetail/website/constants";
import { styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Props {
  maxWidth?: number;
  overflowBottom?: boolean;
  padding?: { x: number; y: number };
}

export class DarkContainer extends React.PureComponent<Props> {
  public render() {
    const { overflowBottom = false } = this.props;
    return (
      <Wrapper overflowBottom={overflowBottom}>
        <Container {...this.props} />
      </Wrapper>
    );
  }
}

const Wrapper = styledViaProps(
  "div",
  ({ overflowBottom }: { overflowBottom: boolean }) => JSON.stringify({ overflowBottom }),
  ({ overflowBottom }) => ({
    backgroundColor: COLORS.indigo,
    background: overflowBottom
      ? `${
          COLORS.indigo
        } url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGP6DwABBQECz6AuzQAAAABJRU5ErkJggg==') no-repeat bottom/100% 360px`
      : COLORS.indigo,
    color: COLORS.white,
    marginBottom: overflowBottom ? "-180px" : undefined,
    paddingBottom: overflowBottom ? undefined : HALF_GAP,

    $nest: {
      a: {
        color: COLORS.p60
      },
      p: {
        opacity: LIGHT_TEXT_OPACITY
      }
    }
  })
);
