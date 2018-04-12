import * as React from "react";
import { BORDER_RADIUS, COLORS } from "../../../constants";
import { LocationLink } from "../../../routing/LocationLink";
import { internal } from "../../../routing/locations";
import { styled } from "../../../util/styled";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";

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
          {pages.map(page => (
            <Item>
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
