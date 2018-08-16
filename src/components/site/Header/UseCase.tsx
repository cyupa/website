import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS, Flex, Item } from "@heydovetail/ui-components";
import { Image } from "@heydovetail/website/components/util/Image";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";
import { style } from "typestyle";

interface Props {
  image: string;
  location: LocationDescriptor;
  onClick: () => void;
  title: string;
}

export class UseCase extends React.PureComponent<Props> {
  public render() {
    const { image, location, onClick, title } = this.props;
    return (
      <LocationLink className={linkClassName} location={location} onClick={onClick}>
        <Flex styled={{ gap: 16, layout: "column" }}>
          <Item>
            <Image height={48} src={image} width={48} />
          </Item>
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
