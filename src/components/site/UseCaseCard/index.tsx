import Link from "gatsby-link";
import * as React from "react";
import { style } from "typestyle";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "../../../constants";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { ActionTextWithArrow } from "../../util/ActionTextWithArrow";

interface Props {
  image: React.ReactNode;
  location: string;
  text: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    const { image, location, text } = this.props;
    return (
      <Link className={linkClassName} to={location}>
        <Flex gap={24}>
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
              <Item style={{ color: COLORS.purple }}>
                <ActionTextWithArrow />
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Link>
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
