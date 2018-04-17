import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";
import { style } from "typestyle";

interface LinkListLink {
  label: string;
  location: LocationDescriptor;
}

interface Props {
  heading?: string;
  links: LinkListLink[];
}

export class LinkList extends React.PureComponent<Props> {
  public render() {
    const { heading, links } = this.props;
    return (
      <Flex gap={16} layout="column">
        {heading !== undefined ? (
          <Item>
            <Heading>{heading}</Heading>
          </Item>
        ) : null}
        {links.map((item, i) => (
          <Item key={i}>
            <LocationLink className={linkClassName} location={item.location} presentation="text">
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
  fontSize: "14px",
  fontWeight: 500
});
