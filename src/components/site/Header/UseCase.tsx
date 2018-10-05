import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "@heydovetail/ui-components";
import { Flex } from "@heydovetail/ui-components";
import { Item } from "@heydovetail/ui-components";
import { LocationLink } from "@heydovetail/ui-components";
import { Image } from "@heydovetail/website/components/util/Image";
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
        <Flex styled={{ alignItems: "center", justifyContent: "flex-start", gap: 16 }}>
          <Item style={{ flexGrow: 0, lineHeight: 0 }}>
            <Image height={24} src={image} width={24} />
          </Item>
          <Item style={{ flexGrow: 0 }}>{title}</Item>
        </Flex>
      </LocationLink>
    );
  }
}

const linkClassName = style({
  borderRadius: BORDER_RADIUS,
  color: COLORS.i60,
  display: "block",
  fontWeight: 500,
  lineHeight: "20px",
  textAlign: "center",
  padding: "8px 12px",

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.i04,
      color: COLORS.purple
    },
    "&:focus": {
      backgroundColor: COLORS.i04,
      boxShadow: BOX_SHADOW_FOCUS,
      color: COLORS.purple
    }
  }
});
