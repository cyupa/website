import * as React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { style } from "typestyle";
import { COLORS, PAGE_PADDING_BOTTOM, Z_INDEX_HIGH } from "../../../constants";
import { styled } from "../../../util/styled";
import { SubtleButton } from "../../forms/SubtleButton";
import IconCross from "../../icons/feather/IconCross";
import { BodyOverflow } from "../../util/BodyOverflow";
import { OnEsc } from "../../util/OnEsc";
import { Container } from "../Container";
import { Flex } from "../Flex";
import { Portal } from "../Portal";

interface Props {
  children: React.ReactNode;
  onDismiss?: () => void;
}

export class Modal extends React.PureComponent<Props> {
  public render() {
    const { children, onDismiss } = this.props;
    return (
      <Portal>
        <BodyOverflow>
          <Dialog>
            {onDismiss !== undefined ? (
              <Flex justifyContent="flex-start">
                <div style={{ marginLeft: "-8px" }}>
                  <OnEsc action={onDismiss} />
                  <SubtleButton onClick={onDismiss}>
                    <IconCross color={COLORS.i60} />
                  </SubtleButton>
                </div>
              </Flex>
            ) : null}
            <CSSTransitionGroup
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}
              transitionName={{
                appear: appearClassName,
                appearActive: appearActiveClassName,
                enter: "enter",
                leave: "leave"
              }}
              transitionAppearTimeout={250}
            >
              <Container horizontalPadding={0} verticalPadding={24} maxWidth={768}>
                {children}
              </Container>
            </CSSTransitionGroup>
          </Dialog>
        </BodyOverflow>
      </Portal>
    );
  }
}

const appearClassName = style({
  opacity: 0,
  transform: "translate3d(0, 64px, 0)"
});

const appearActiveClassName = style({
  opacity: 1,
  transform: "translate3d(0, 0, 0)",
  transition: "opacity 250ms ease-in-out, transform 250ms cubic-bezier(.2, .45, 0, 1)"
});

const Dialog = styled("div", {
  background: COLORS.white,
  bottom: 0,
  height: "100vh",
  left: 0,
  overflow: "auto",
  padding: `24px 24px ${PAGE_PADDING_BOTTOM}px`,
  position: "fixed",
  right: 0,
  top: 0,
  width: "100vw",
  zIndex: Z_INDEX_HIGH
});
