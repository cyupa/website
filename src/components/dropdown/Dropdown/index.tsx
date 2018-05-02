import { BORDER_RADIUS, BOX_SHADOW_BORDER, BOX_SHADOW_LIFTED, COLORS } from "@heydovetail/website/constants";
import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { classes, style } from "typestyle";

interface Props {
  autofocus?: boolean;
  maxHeight?: number;
  maxWidth?: number;
}

export class Dropdown extends React.PureComponent<Props> {
  // ¯\_(ツ)_/¯
  // Focus messes with the Portal / Layer align="right" positioning
  // Timeout seems to fix it
  public focus(node: Node) {
    setTimeout(function() {
      if (node.firstChild instanceof HTMLElement) {
        node.firstChild.focus();
      }
    }, 100);
  }

  public render() {
    const { autofocus = false, maxHeight, maxWidth } = this.props;
    const overflow = maxHeight !== undefined;

    return (
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
        <div
          className={classes(className, overflow ? overflowClassName : null)}
          ref={e => {
            if (e !== null && autofocus) {
              this.focus(e);
            }
          }}
          style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
        >
          {this.props.children}
        </div>
      </CSSTransitionGroup>
    );
  }
}

const appearClassName = style({
  transform: "translate3d(0, -8px, 0)"
});

const appearActiveClassName = style({
  transform: "translate3d(0, 0, 0)",
  transition: "transform 250ms cubic-bezier(.2, .45, 0, 1)"
});

const className = style({
  backgroundColor: COLORS.white,
  border: "none",
  borderRadius: BORDER_RADIUS,
  boxShadow: `${BOX_SHADOW_BORDER}, ${BOX_SHADOW_LIFTED}`,
  display: "block",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
  outline: "none",
  textOverflow: "ellipsis",
  padding: "8px 0"
});

const overflowClassName = style({
  overflow: "hidden",
  overflowY: "scroll"
});
