import * as React from "react";
import { extend, media } from "typestyle";
import { BOX_SHADOW_BORDER_LIGHTER, BOX_SHADOW_STICKY, BREAKPOINT_PHONE, Z_INDEX_LOW } from "../../../constants";
import { findDomNode } from "../../../util/dom";
import { styledViaProps } from "../../../util/styled";

interface Props {
  stickOnMobile?: boolean;
  offset?: number;
  shadow?: boolean;
  zIndex?: number;
}

interface State {
  shadow: boolean;
}

export class Sticky extends React.PureComponent<Props, State> {
  public state: Readonly<State> = {
    shadow: false
  };

  public componentDidMount() {
    if (this.props.shadow != false) {
      this.addShadow();
      window.addEventListener("scroll", this.addShadow);
    }
  }

  public componentWillUnmount() {
    if (this.props.shadow != false) {
      window.removeEventListener("scroll", this.addShadow);
    }
  }

  private readonly addShadow = () => {
    const element = findDomNode(this);
    if (element instanceof Element) {
      const rect = element.getBoundingClientRect();
      this.setState({ shadow: window.scrollY > rect.bottom });
    }
  };

  public render() {
    const { children, offset = 0, stickOnMobile = false, zIndex = Z_INDEX_LOW } = this.props;
    const { shadow } = this.state;

    return (
      <Container offset={offset} shadow={shadow} stickOnMobile={stickOnMobile} zIndex={zIndex}>
        {children}
      </Container>
    );
  }
}

const Container = styledViaProps(
  "div",
  ({ offset, shadow, stickOnMobile, zIndex }) => `${offset}, ${shadow}, ${stickOnMobile}, ${zIndex}`,
  ({ offset, shadow, stickOnMobile, zIndex }: { offset: number; shadow: boolean; stickOnMobile: boolean; zIndex: number }) =>
    extend(
      {
        boxShadow: shadow ? `${BOX_SHADOW_BORDER_LIGHTER}, ${BOX_SHADOW_STICKY}` : undefined,
        position: ["-webkit-sticky", "sticky"],
        top: `${offset}px`,
        zIndex: zIndex
      },
      media(
        { maxWidth: BREAKPOINT_PHONE },
        {
          boxShadow: stickOnMobile ? undefined : "none",
          position: stickOnMobile ? undefined : "relative",
          top: stickOnMobile ? undefined : "initial"
        }
      )
    )
);
