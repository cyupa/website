import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { LocationDescriptor } from "@heydovetail/website/routing/locations";
import React from "react";
import { style } from "typestyle";
import { styled } from "typestyle-react";

interface LinkListLink {
  label: string;
  location: LocationDescriptor;
  onClick?: () => void;
}

interface Props {
  heading?: string;
  links: LinkListLink[];
}

export class LinkList extends React.PureComponent<Props> {
  public render() {
    const { heading, links } = this.props;
    return (
      <Flex styled={{ gap: 12, layout: "column" }}>
        {heading !== undefined ? (
          <Item>
            <Heading>{heading}</Heading>
          </Item>
        ) : null}
        {links.map((link, i) => (
          <Item key={i}>
            <LocationLink className={linkClassName} location={link.location} onClick={link.onClick} presentation="text">
              {link.label}
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
  margin: "0 0 8px"
});

const linkClassName = style({
  fontSize: "14px",
  fontWeight: 400
});
