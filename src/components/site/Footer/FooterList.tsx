import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { COLORS } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { style } from "typestyle/lib";

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
      <Flex gap={12} layout="column">
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
