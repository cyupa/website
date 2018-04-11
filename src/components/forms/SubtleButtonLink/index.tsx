import * as React from "react";
import { LocationLink } from "../../../routing/LocationLink";
import { LocationDescriptor } from "../../../routing/locations";
import { buttonBaseStyles, SubtleButtonStyle } from "../styles";

interface Props {
  children?: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  id?: string;
  height?: number;
  location: LocationDescriptor;
}

export class SubtleButtonLink extends React.PureComponent<Props> {
  public render() {
    const { children, color, fullWidth, height, id, location } = this.props;
    const inner = { id: id, style: { ...buttonBaseStyles, color: color }, type: "button" };

    return (
      <LocationLink location={location} tabIndex={-1}>
        <SubtleButtonStyle fullWidth={fullWidth} height={height} inner={inner}>
          {children}
        </SubtleButtonStyle>
      </LocationLink>
    );
  }
}
