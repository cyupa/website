import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { SubtleButtonStyle, buttonBaseStyles } from "../styles";

interface Props {
  children?: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  location: LocationDescriptor;
  onClick?: () => void;
}

export class SubtleButtonLink extends React.PureComponent<Props> {
  public render() {
    const { children, color, fullWidth, height, id, location, onClick } = this.props;
    const inner = { id: id, style: { ...buttonBaseStyles, color: color }, type: "button" };

    return (
      <LocationLink location={location} onClick={onClick} tabIndex={-1}>
        <SubtleButtonStyle styled={{ fullWidth, height }} {...inner}>
          {children}
        </SubtleButtonStyle>
      </LocationLink>
    );
  }
}
