import * as React from "react";
import { BORDER_RADIUS, COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import IconArrowRightMini from "../../icons/feather/IconArrowRightMini";
import { Flex } from "../../layout/Flex";
import { Flow } from "../../layout/Flow";
import { Item } from "../../layout/Item";

interface Props {
  image: React.ReactNode;
  location: string;
  text: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    const { image, location, text } = this.props;
    return (
      <Link href={location}>
        <Flex gap={24}>
          <Item style={{ flexGrow: 0 }}>{image}</Item>
          <Item style={{ minWidth: 0 }}>
            <Flex gap={8} layout="column">
              <Item style={{ lineHeight: "24px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {text}
              </Item>
              <Item style={{ color: COLORS.purple, fontWeight: 500, lineHeight: "24px" }}>
                <Flow gap={4}>
                  <Item>Learn more</Item>
                  <Item>
                    <IconArrowRightMini />
                  </Item>
                </Flow>
              </Item>
            </Flex>
          </Item>
        </Flex>
      </Link>
    );
  }
}

const Link = styled("a", {
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  color: COLORS.indigo,
  display: "block",
  minWidth: 0,
  padding: "24px",

  $nest: {
    "&:hover": {
      backgroundColor: COLORS.p08
    }
  }
});
