import * as React from "react";
import { style } from "typestyle";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "../../../constants";
import { LocationLink } from "../../../routing/LocationLink";
import { LocationDescriptor } from "../../../routing/locations";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { ActionTextWithArrow } from "../../util/ActionTextWithArrow";

interface Props {
  image: React.ReactNode;
  location: LocationDescriptor;
  text: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    const { image, location, text } = this.props;
    return (
      <LocationLink className={linkClassName} location={location}>
        <Flex alignItems="center" gap={24}>
          <Item style={{ flexGrow: 0 }}>{image}</Item>
          <Item style={{ minWidth: 0 }}>
            <Flex gap={8} layout="column">
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
              <Item style={{ color: COLORS.purple, fontWeight: 500 }}>
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
