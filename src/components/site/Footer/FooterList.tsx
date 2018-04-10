import Link from "gatsby-link";
import * as React from "react";
import { style } from "typestyle/lib";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

interface FooterItem {
  label: string;
  location: string;
}

interface Props {
  heading: string;
  items: FooterItem[];
}

export class FooterList extends React.PureComponent<Props> {
  public render() {
    const { heading, items } = this.props;
    return (
      <Flex gap={16} layout="column">
        <Item>
          <Heading>{heading}</Heading>
        </Item>
        {items.map((item, i) => (
          <Item key={i}>
            <Link className={linkClassName} to={item.location}>
              {item.label}
            </Link>
          </Item>
        ))}
      </Flex>
    );
  }
}

const Heading = styled("h5", {
  color: COLORS.indigo,
  fontSize: "14px",
  fontWeight: 500,
  margin: 0
});

const linkClassName = style({
  color: COLORS.purple,
  fontSize: "14px",

  $nest: {
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
