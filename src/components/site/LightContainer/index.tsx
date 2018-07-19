import { COLORS } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import { HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  backgroundColor?: string;
  maxWidth?: number;
  padding?: { x: number; y: number };
}

export class LightContainer extends React.PureComponent<Props> {
  public render() {
    const { backgroundColor = COLORS.white, maxWidth = WIDTH, padding = { x: PADDING, y: HALF_GAP }, children } = this.props;

    return (
      <Wrapper styled={{ backgroundColor }}>
        <Container styled={{ maxWidth, padding }} children={children} />
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", ({ backgroundColor }: { backgroundColor: string }) => ({
  backgroundColor: backgroundColor,

  $nest: {
    a: {
      color: COLORS.purple
    }
  }
}));
