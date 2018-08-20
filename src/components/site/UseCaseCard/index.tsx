import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS, Flex, Item, LocationLink } from "@heydovetail/ui-components";
import { ActionTextWithArrow } from "@heydovetail/website/components/site/ActionTextWithArrow";
import { Image } from "@heydovetail/website/components/util/Image";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";
import { style } from "typestyle";

interface Props {
  image: string;
  location: LocationDescriptor;
  onClick?: () => void;
  text: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    const { image, location, onClick, text } = this.props;
    return (
      <LocationLink className={linkClassName} location={location} onClick={onClick}>
        <Flex styled={{ alignItems: "center", gap: 24 }}>
          <Item style={{ flexGrow: 0 }}>
            <Image src={image} />
          </Item>
          <Item style={{ minWidth: 0 }}>
            <Flex styled={{ gap: 8, layout: "column" }}>
              <Item
                style={{
                  color: COLORS.indigo,
                  lineHeight: "24px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                }}
              >
                {text}
              </Item>
              <Item style={{ color: COLORS.purple, fontSize: "14px" }}>
                <ActionTextWithArrow />
              </Item>
            </Flex>
          </Item>
        </Flex>
      </LocationLink>
    );
  }
}

const linkClassName = style({
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  display: "block",
  fontWeight: 500,
  minWidth: 0,
  padding: "24px",

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.p08
    },
    "&:focus": {
      backgroundColor: COLORS.p08,
      boxShadow: BOX_SHADOW_FOCUS
    }
  }
});
