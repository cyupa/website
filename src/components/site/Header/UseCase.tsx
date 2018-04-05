import * as React from "react";
import { BORDER_RADIUS, BOX_SHADOW_FOCUS, COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

interface Props {
  image: React.ReactNode;
  location: string;
  title: string;
}

export class UseCase extends React.PureComponent<Props> {
  public render() {
    const { image, location, title } = this.props;
    return (
      <Link href={location}>
        <Flex gap={16} layout="column">
          <Item>{image}</Item>
          <Item>{title}</Item>
        </Flex>
      </Link>
    );
  }
}

const Link = styled("a", {
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
