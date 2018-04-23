import * as React from "react";
import { SubtleButtonStyle, buttonBaseStyles } from "../styles";

interface Props {
  children?: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export class SubtleButton extends React.PureComponent<Props> {
  public render() {
    const { children, color, fullWidth, height, id, onClick } = this.props;
    const inner = { id: id, onClick: onClick, style: { ...buttonBaseStyles, color: color }, type: "button" };

    return (
      <SubtleButtonStyle fullWidth={fullWidth} height={height} inner={inner}>
        {children}
      </SubtleButtonStyle>
    );
  }
}
