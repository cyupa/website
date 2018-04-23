import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { ColoredButtonStyle, DefaultButtonStyle, buttonBaseStyles } from "../styles";

interface Props {
  children?: React.ReactChild;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  height?: number;
  id?: string;
  location: LocationDescriptor;
  onClick?: () => void;
}

export class ButtonLink extends React.Component<Props> {
  public render() {
    const { children, color, disabled = false, fullWidth, height, id, location, onClick } = this.props;
    const inner = { id: id, style: buttonBaseStyles, tabIndex: disabled ? -1 : 0, type: "button" };

    return (
      <LocationLink location={location} onClick={onClick} tabIndex={-1}>
        {color !== undefined ? (
          <ColoredButtonStyle color={color} disabled={disabled} inner={inner} fullWidth={fullWidth} height={height}>
            {children}
          </ColoredButtonStyle>
        ) : (
          <DefaultButtonStyle disabled={disabled} inner={inner} fullWidth={fullWidth} height={height}>
            {children}
          </DefaultButtonStyle>
        )}
      </LocationLink>
    );
  }
}
