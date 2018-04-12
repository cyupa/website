import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import * as React from "react";
import { style } from "typestyle";

interface Props {
  image: React.ReactNode;
  location: LocationDescriptor;
  title: string;
}

export class UseCase extends React.PureComponent<Props> {
  public render() {
    const { image, location, title } = this.props;
    return (
      <LocationLink className={linkClassName} location={location}>
        <Flex gap={16} layout="column">
          <Item>{image}</Item>
          <Item>{title}</Item>
        </Flex>
      </LocationLink>
    );
  }
}

const linkClassName = style({
  borderRadius: BORDER_RADIUS,
  color: COLORS.indigo,
  display: "block",
  lineHeight: "20px",
  textAlign: "center",
  padding: "16px",

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.i04
    },
    "&:focus": {
      backgroundColor: COLORS.i04,
      boxShadow: BOX_SHADOW_FOCUS
    }
  }
});
