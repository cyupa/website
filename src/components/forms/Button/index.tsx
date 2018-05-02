import * as React from "react";
import { ColoredButtonStyle, DefaultButtonStyle, buttonBaseStyles } from "../styles";

interface Props {
  children?: React.ReactChild;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  height?: number;
  id?: string;
  onClick: () => void;
}

export class Button extends React.Component<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, onClick } = this.props;
    const inner = { id: id, onClick: onClick, style: buttonBaseStyles, tabIndex: disabled ? -1 : 0, type: "button" };

    return color !== undefined ? (
      <ColoredButtonStyle styled={{ color, disabled, fullWidth, height }} {...inner}>
        {children}
      </ColoredButtonStyle>
    ) : (
      <DefaultButtonStyle styled={{ disabled, fullWidth, height }} {...inner}>
        {children}
      </DefaultButtonStyle>
    );
  }
}
