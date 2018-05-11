import { COLORS } from "@heydovetail/ui-components";
import { Container } from "@heydovetail/website/components/layout/Container";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  backgroundColor?: string;
  maxWidth?: number;
  padding?: { x: number; y: number };
}

export class LightContainer extends React.PureComponent<Props> {
  public render() {
    const { backgroundColor = COLORS.white, maxWidth, padding, children } = this.props;

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
