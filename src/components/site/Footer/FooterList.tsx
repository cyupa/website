import * as React from "react";
import { style } from "typestyle/lib";
import { COLORS } from "../../../constants";
import { LocationLink } from "../../../routing/LocationLink";
import { LocationDescriptor } from "../../../routing/locations";
import { styled } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

interface FooterItem {
  label: string;
  location: LocationDescriptor;
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
            <LocationLink className={linkClassName} location={item.location}>
              {item.label}
            </LocationLink>
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
    "&:focus, &:hover": {
      textDecoration: "underline"
    }
  }
});
