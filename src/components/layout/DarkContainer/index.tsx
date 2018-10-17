import { COLORS } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  backgroundColor?: string;
  maxWidth?: number;
  overflowBottom?: boolean;
  padding?: { x: number; y: number };
}

export class DarkContainer extends React.PureComponent<Props> {
  public render() {
    const {
      backgroundColor = COLORS.indigo,
      overflowBottom = false,
      maxWidth = WIDTH,
      padding = { x: PADDING, y: HALF_GAP },
      children
    } = this.props;
    return (
      <Wrapper styled={{ backgroundColor, overflowBottom }}>
        <Container styled={{ maxWidth, padding }} children={children} />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", ({ backgroundColor, overflowBottom }: { backgroundColor: string; overflowBottom: boolean }) => ({
  backgroundColor,
  background: overflowBottom
    ? `${
        COLORS.indigo
      } url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVR4nGP6DwABBQECz6AuzQAAAABJRU5ErkJggg==') no-repeat bottom/100% 400px`
    : COLORS.indigo,
  color: COLORS.white,
  marginBottom: overflowBottom ? "-200px" : undefined,
  paddingBottom: overflowBottom ? undefined : HALF_GAP,

  $nest: {
    a: {
      color: COLORS.p40,

      "&:hover": {
        color: `${COLORS.p40} !important`
      }
    }
  }
}));
