import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { BORDER_RADIUS, COLORS } from "@heydovetail/website/constants";
import { LocationLink } from "@heydovetail/website/routing/LocationLink";
import { internal } from "@heydovetail/website/routing/locations";
import { styled } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Page {
  path: string;
  title: string;
}

interface Props {
  pages: Page[];
  title: string;
}

export class PageGroup extends React.PureComponent<Props> {
  public render() {
    const { pages, title } = this.props;

    return (
      <Wrapper>
        <Flex gap={16} layout="column">
          <Item>
            <h3>{title}</h3>
          </Item>
          {pages.map((page, i) => (
            <Item key={i}>
              <LocationLink location={internal(page.path)} presentation="text" style={{ lineHeight: "24px" }}>
                {page.title}
              </LocationLink>
            </Item>
          ))}
        </Flex>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  backgroundColor: COLORS.p04,
  borderRadius: BORDER_RADIUS,
  padding: "32px"
});
